import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Users, Building, ShieldCheck, Activity, CheckCircle2, XCircle } from 'lucide-react';
import { collection, query, getDocs, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';

export function AdminDashboard() {
  const [applications, setApplications] = useState<any[]>([]);
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<string | null>(null);
  const { user } = useAuth();
  
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const q = query(collection(db, 'applications'));
        const querySnapshot = await getDocs(q);
        const apps = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setApplications(apps);
      } catch (err) {
        console.error("Error fetching applications", err);
      } finally {
        setLoading(false);
      }
    };
    
    if (user) {
      fetchApplications();
    }
  }, [user]);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'applications', id), {
        status: newStatus,
        updatedAt: serverTimestamp()
      });
      setApplications(prev => prev.map(app => app.id === id ? { ...app, status: newStatus } : app));
    } catch (err) {
      console.error("Error updating status", err);
      alert("Failed to update status");
    }
  };

  const toggleSelection = (id: string) => {
    setSelectedApps(prev => 
      prev.includes(id) ? prev.filter(appId => appId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedApps(applications.map(app => app.id));
    } else {
      setSelectedApps([]);
    }
  };

  const handleBulkAction = (newStatus: string) => {
    if (selectedApps.length === 0) return;
    setPendingAction(newStatus);
    setIsDialogOpen(true);
  };

  const confirmBulkAction = async () => {
    if (selectedApps.length === 0 || !pendingAction) return;
    
    try {
      await Promise.all(selectedApps.map(id => 
        updateDoc(doc(db, 'applications', id), {
          status: pendingAction,
          updatedAt: serverTimestamp()
        })
      ));
      
      setApplications(prev => prev.map(app => 
        selectedApps.includes(app.id) ? { ...app, status: pendingAction } : app
      ));
      setSelectedApps([]);
      setIsDialogOpen(false);
      setPendingAction(null);
    } catch (err) {
      console.error("Error with bulk update", err);
      alert("Failed to perform bulk update");
    }
  };

  const pendingCount = applications.filter(a => a.status === 'Pending' || a.status === 'Under Review').length;
  const approvedCount = applications.filter(a => a.status === 'Approved').length;

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Navbar />
      <div className="bg-black text-white py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl font-bold">System Administration</h1>
            <p className="text-gray-400">Federation Management Portal</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-grow space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-t-4 border-t-primary">
            <CardContent className="p-4 md:p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Total Users</p>
                  <h4 className="text-2xl font-bold">--</h4>
                </div>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-blue-500">
            <CardContent className="p-4 md:p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Clubs Registered</p>
                  <h4 className="text-2xl font-bold">{approvedCount}</h4>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Building className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-yellow-500">
            <CardContent className="p-4 md:p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Pending Licensing</p>
                  <h4 className="text-2xl font-bold">{pendingCount}</h4>
                </div>
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-green-500">
            <CardContent className="p-4 md:p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">System Status</p>
                  <h4 className="text-xl font-bold text-green-600">All Ops Normal</h4>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <Activity className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Licensing Applications</CardTitle>
                <CardDescription>Manage and review club applications.</CardDescription>
              </div>
              {selectedApps.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm" variant="outline" onClick={() => handleBulkAction('Under Review')}>
                    Review Selected
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => handleBulkAction('Approved')}>
                    Approve Selected
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleBulkAction('Rejected')}>
                    Reject Selected
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
             {loading ? <p>Loading applications...</p> : (
               applications.length === 0 ? <p className="text-gray-500 text-sm">No applications found.</p> :
               <div className="space-y-4">
                 <div className="flex items-center gap-2 px-4 pb-2 border-b">
                   <input 
                     type="checkbox" 
                     className="w-4 h-4 rounded border-gray-300"
                     checked={applications.length > 0 && selectedApps.length === applications.length}
                     onChange={handleSelectAll}
                   />
                   <span className="text-sm font-medium text-gray-700">Select All</span>
                 </div>
                 {applications.map(app => (
                   <div key={app.id} className="border rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                     <div className="flex gap-4 items-center">
                       <input 
                         type="checkbox" 
                         className="w-4 h-4 rounded border-gray-300 shrink-0"
                         checked={selectedApps.includes(app.id)}
                         onChange={() => toggleSelection(app.id)}
                       />
                       <div>
                         <h4 className="font-bold">{app.clubName}</h4>
                         <p className="text-sm text-gray-500">ID: {app.id} • User: {app.userId}</p>
                         <span className={`inline-block mt-2 px-2 py-1 text-xs font-bold rounded ${app.status === 'Approved' ? 'bg-green-100 text-green-800' : app.status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                           {app.status}
                         </span>
                       </div>
                     </div>
                     <div className="flex gap-2">
                       {app.status !== 'Under Review' && app.status !== 'Approved' && app.status !== 'Rejected' && (
                         <Button size="sm" onClick={() => updateStatus(app.id, 'Under Review')}>Review</Button>
                       )}
                       {app.status === 'Under Review' && (
                         <>
                           <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => updateStatus(app.id, 'Approved')}>Approve</Button>
                           <Button size="sm" variant="destructive" onClick={() => updateStatus(app.id, 'Rejected')}>Reject</Button>
                         </>
                       )}
                     </div>
                   </div>
                 ))}
               </div>
             )}
          </CardContent>
        </Card>
      </main>

      <footer className="bg-black py-8 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p className="text-sm">FFE Admin Portal</p>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Bulk Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to change the status of {selectedApps.length} application{selectedApps.length !== 1 ? 's' : ''} to <strong>"{pendingAction}"</strong>?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={confirmBulkAction}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
