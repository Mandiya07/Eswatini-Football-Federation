import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { FileCheck, Upload, Building, Info, Landmark, CheckCircle2, ShieldCheck, Mail, MapPin, Camera, Map, Menu, X, ChevronDown, Users, TrendingUp, BarChart, AlertCircle, Activity, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function ClubDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  
  const [application, setApplication] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    
    // Listen to user's club applications
    const q = query(collection(db, 'applications'), where('userId', '==', user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        // Just take the first one for the prototype
        const doc = snapshot.docs[0];
        setApplication({ id: doc.id, ...doc.data() });
      } else {
        setApplication(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [user]);

  const tabs = [
    { id: "overview", label: "Overview", icon: <BarChart className="w-4 h-4 mr-2" /> },
    { id: "compliance", label: "Licensing & Compliance", icon: <ShieldCheck className="w-4 h-4 mr-2" /> },
    { id: "infrastructure", label: "Infrastructure", icon: <Building className="w-4 h-4 mr-2" /> },
    { id: "financials", label: "Financials", icon: <Landmark className="w-4 h-4 mr-2" /> },
    { id: "documents", label: "Governance Docs", icon: <FileCheck className="w-4 h-4 mr-2" /> },
    { id: "investment", label: "Funding Profile", icon: <TrendingUp className="w-4 h-4 mr-2" /> },
    { id: "activity", label: "Activity Logs", icon: <Activity className="w-4 h-4 mr-2" /> }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Navbar />
      
      <div className="bg-black text-white h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-1efdb08e7cf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
            <div className="flex items-center gap-6">
               <div className="w-24 h-24 bg-white text-black rounded-lg flex items-center justify-center border-4 border-zinc-50 shadow-lg">
                  <ShieldCheck className="w-12 h-12" />
               </div>
               <div>
                  <h1 className="text-3xl font-bold">{application?.clubName || 'Unknown Club FC'}</h1>
                  <p className="text-gray-400">Club Dashboard & Licensing Portal | ID: {application?.id || 'N/A'}</p>
               </div>
            </div>
         </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <Tabs value={activeTab} onValueChange={(val) => { setActiveTab(val); setIsMobileMenuOpen(false); }} className="w-full flex flex-col md:flex-row gap-8">
          
                  <div className="md:hidden relative mb-6">
             <Button 
                variant="outline" 
                className="w-full flex justify-between items-center text-left font-bold bg-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
                <div className="flex items-center">
                  {tabs.find(t => t.id === activeTab)?.icon}
                  {tabs.find(t => t.id === activeTab)?.label}
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
             </Button>
             
             {isMobileMenuOpen && (
               <div className="absolute top-full left-0 w-full mt-2 bg-white border border-zinc-200 rounded-lg shadow-xl z-20 flex flex-col overflow-hidden">
                 {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => { setActiveTab(tab.id); setIsMobileMenuOpen(false); }}
                      className={`text-left px-4 py-3 text-sm font-medium transition-colors flex items-center ${activeTab === tab.id ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-zinc-50'}`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                 ))}
               </div>
             )}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
             <TabsList className="flex flex-col w-full h-auto bg-transparent p-0 space-y-2">
               {tabs.map(tab => (
                 <TabsTrigger 
                   key={tab.id} 
                   value={tab.id} 
                   className="w-full justify-start px-4 py-3 text-left data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-zinc-200 data-[state=active]:text-primary border border-transparent rounded-lg transition-all"
                 >
                   <div className="flex items-center">
                     {tab.icon}
                     {tab.label}
                   </div>
                 </TabsTrigger>
               ))}
             </TabsList>
          </div>

          <div className="flex-1 min-w-0">
            <TabsContent value="overview" className="mt-0 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Registered Players</p>
                      <h4 className="text-2xl font-bold">28</h4>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-green-600 font-medium">
                    <TrendingUp className="w-3 h-3 mr-1" /> +3 this month
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Youth Teams</p>
                      <h4 className="text-2xl font-bold">3</h4>
                    </div>
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-gray-500 font-medium">
                    U13, U15, U17 active
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-yellow-500 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Licensing Stage</p>
                      <h4 className="text-2xl font-bold text-yellow-600">{application?.status || 'Not Started'}</h4>
                    </div>
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <FileCheck className="w-5 h-5 text-yellow-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-yellow-700 font-medium">
                    <AlertCircle className="w-3 h-3 mr-1" /> Action required
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-green-500 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Capital Raised</p>
                      <h4 className="text-2xl font-bold text-gray-900">30%</h4>
                    </div>
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BarChart className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-gray-500 font-medium">
                    E 2,400,000 / E 8,000,000
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>League Updates & Communications</CardTitle>
                    <CardDescription>Official announcements from the Football Federation Eswatini.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-l-4 border-primary pl-4 py-1">
                      <div className="flex justify-between items-start mb-1">
                         <h4 className="font-bold text-lg">2026/2027 Pre-season Registration Deadline Extended</h4>
                         <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">Today, 09:00</span>
                      </div>
                      <p className="text-gray-600 text-sm">Please be advised that the deadline for pre-season squad registration has been extended to August 15th due to ongoing integration with the new FIFA TMS.</p>
                      <Button variant="link" className="p-0 h-auto text-primary mt-2">Read full circular &rarr;</Button>
                    </div>
                    
                    <div className="border-l-4 border-gray-300 pl-4 py-1">
                      <div className="flex justify-between items-start mb-1">
                         <h4 className="font-bold text-lg">New Commercial Sponsorship Guidelines</h4>
                         <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">May 12, 2026</span>
                      </div>
                      <p className="text-gray-600 text-sm">The new guidelines regarding front-of-shirt sponsors and betting company restrictions have been published in the Document Hub.</p>
                      <Button variant="link" className="p-0 h-auto text-primary mt-2">View guidelines &rarr;</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                 <Card>
                    <CardHeader>
                       <CardTitle className="text-lg">Quick Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Licensing Progress</span>
                          <span className="font-bold">70%</span>
                       </div>
                       <Progress value={70} className="h-2" />
                       <div className="flex justify-between items-center text-sm pt-2">
                          <span className="text-gray-500">Financial Audit</span>
                          <span className="text-yellow-600 font-bold bg-yellow-100 px-2 rounded">Due in 14 days</span>
                       </div>
                       <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Player Contracts</span>
                          <span className="text-blue-600 font-bold bg-blue-100 px-2 rounded">Up to date</span>
                       </div>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compliance">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Major League License Status</CardTitle>
                    <CardDescription>Track your compliance progress to secure one of the 16 spots.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold text-2xl text-black">70% Complete</span>
                       <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">Under Review</span>
                    </div>
                    <Progress value={70} className="h-3 mb-8" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50/50">
                        <div className="flex items-center gap-3">
                           <CheckCircle2 className="w-6 h-6 text-blue-600" />
                           <div>
                             <p className="font-bold">Corporate Entity Registration</p>
                             <p className="text-sm text-gray-500">Approved by FFE Legal</p>
                           </div>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50/50">
                        <div className="flex items-center gap-3">
                           <CheckCircle2 className="w-6 h-6 text-blue-600" />
                           <div>
                             <p className="font-bold">Financial Audits (Last 2 Years)</p>
                             <p className="text-sm text-gray-500">Approved by FFE Finance</p>
                           </div>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg border-primary/50 bg-primary/5">
                        <div className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin-slow"></div>
                           <div>
                             <p className="font-bold">Land & Stadium Ownership Proof</p>
                             <p className="text-sm text-gray-500">Awaiting deed verification from deeds registry.</p>
                           </div>
                        </div>
                        <Button size="sm">Upload Addendums</Button>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                        <div className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                           <div>
                             <p className="font-bold text-gray-500">Training Facility Verification</p>
                             <p className="text-sm text-gray-500">Not started.</p>
                           </div>
                        </div>
                        <Button variant="outline" size="sm">Start</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                 <Card className="bg-black text-white">
                    <CardHeader>
                       <CardTitle className="text-xl">Upload Documents</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                          <p className="font-bold mb-1">Drag and drop</p>
                          <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB</p>
                       </div>
                    </CardContent>
                 </Card>

                 <Card>
                    <CardHeader>
                       <CardTitle className="text-lg">Compliance Officer</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
                          <div>
                             <p className="font-bold text-sm">Sipho Dlamini</p>
                             <p className="text-xs text-gray-500">FFE Compliance Desk</p>
                          </div>
                       </div>
                       <Button variant="outline" className="w-full flex gap-2"><Mail className="w-4 h-4"/> Message Officer</Button>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="infrastructure">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                 <Card>
                   <CardHeader>
                     <CardTitle>Infrastructure Verification</CardTitle>
                     <CardDescription>Upload facility proofs to verify your club's infrastructure compliance.</CardDescription>
                   </CardHeader>
                   <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                          <div className="flex items-center gap-4">
                             <div className="p-3 bg-zinc-100 text-zinc-900 rounded-lg">
                                <Building className="w-5 h-5" />
                             </div>
                             <div>
                               <p className="font-bold">Facility Development Plans</p>
                               <p className="text-sm text-gray-500">Provide blueprints or architectural drawings.</p>
                             </div>
                          </div>
                          <Button size="sm" variant="outline"><Upload className="w-4 h-4 mr-2"/> Upload</Button>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50">
                          <div className="flex items-center gap-4">
                             <div className="p-3 bg-zinc-100 text-zinc-900 rounded-lg">
                                <Camera className="w-5 h-5" />
                             </div>
                             <div>
                               <p className="font-bold">Stadium / Training Ground Photos</p>
                               <p className="text-sm text-gray-500">Current state. Minimum 4 clear angles.</p>
                             </div>
                          </div>
                          <Button size="sm" variant="outline"><Upload className="w-4 h-4 mr-2"/> Upload</Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-primary/5 border-primary/20">
                          <div className="flex items-center gap-4">
                             <div className="p-3 bg-primary/10 text-primary rounded-lg">
                                <MapPin className="w-5 h-5" />
                             </div>
                             <div>
                               <p className="font-bold text-gray-900">GPS Coordinates & Location</p>
                               <p className="text-sm text-gray-500 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-500"/> Verified: <span>-26.3167, 31.1333</span></p>
                             </div>
                          </div>
                          <Button variant="outline" size="sm">Update</Button>
                        </div>
                      </div>
                   </CardContent>
                 </Card>
              </div>
              <div className="space-y-6">
                 <Card className="bg-black text-white">
                    <CardHeader>
                       <CardTitle className="text-xl">Infrastructure Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex items-center justify-between">
                         <span className="text-gray-400">Stadium Rating</span>
                         <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded text-xs font-bold">CATEGORY 2</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <span className="text-gray-400">Training Facility</span>
                         <span className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded text-xs font-bold">APPROVED</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <span className="text-gray-400">Public Profile</span>
                         <span className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded text-xs font-bold">ON MAP</span>
                       </div>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="financials">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                 <Card>
                   <CardHeader>
                     <CardTitle>Financials & Reports</CardTitle>
                     <CardDescription>Securely submit and track your club's financial obligations.</CardDescription>
                   </CardHeader>
                   <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-red-100 text-red-600 rounded">
                                <Landmark className="w-6 h-6" />
                             </div>
                             <div>
                               <p className="font-bold">2026 Q1 Financial Report</p>
                               <p className="text-sm text-red-500 font-medium">Overdue by 5 days</p>
                             </div>
                          </div>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white"><Upload className="w-4 h-4 mr-2"/> Submit Now</Button>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 border-gray-200">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-gray-200 text-gray-600 rounded">
                                <Landmark className="w-6 h-6" />
                             </div>
                             <div>
                               <p className="font-bold text-gray-700">2025 Annual Audit Report</p>
                               <p className="text-sm text-blue-600 font-medium flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Approved & Verified</p>
                             </div>
                          </div>
                          <Button variant="outline" size="sm">Download</Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 border-gray-200">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-gray-200 text-gray-600 rounded">
                                <Landmark className="w-6 h-6" />
                             </div>
                             <div>
                               <p className="font-bold text-gray-700">Proof of Academy Funding (Minimum 5%)</p>
                               <p className="text-sm text-blue-600 font-medium flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Met Requirement (8.2%)</p>
                             </div>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                   </CardContent>
                 </Card>
              </div>
              <div className="space-y-6">
                 <Card className="bg-black text-white">
                    <CardHeader>
                       <CardTitle className="text-xl">Secure Upload</CardTitle>
                       <CardDescription className="text-gray-400">All submissions are encrypted and available only to the FFE Finance Committee.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto mb-3 text-primary" />
                          <p className="font-bold mb-1">Upload Financial Docs</p>
                          <p className="text-xs text-gray-400">Excel, PDF, CSV up to 25MB</p>
                       </div>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents">
             <Card>
               <CardHeader>
                 <CardTitle>Governance Documents</CardTitle>
                 <CardDescription>Private documents issued by the Federation to your club.</CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="p-3 bg-white border rounded-lg shadow-sm">
                            <FileCheck className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <p className="font-bold">FFE Official Constitution 2026</p>
                            <p className="text-sm text-gray-500">Updated: May 1, 2026</p>
                         </div>
                      </div>
                      <a href="/docs/ffe_official_constitution_2026.pdf" download>
                         <Button variant="outline" size="sm">Download PDF</Button>
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="p-3 bg-white border rounded-lg shadow-sm">
                            <FileCheck className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <p className="font-bold">Financial Fair Play Regulations</p>
                            <p className="text-sm text-gray-500">Updated: Apr 15, 2026</p>
                         </div>
                      </div>
                      <a href="/docs/financial_fair_play_regulations.pdf" download>
                         <Button variant="outline" size="sm">Download PDF</Button>
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="p-3 bg-white border rounded-lg shadow-sm">
                            <FileCheck className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <p className="font-bold">Anti-Corruption & Betting Code</p>
                            <p className="text-sm text-gray-500">Updated: Jan 10, 2026</p>
                         </div>
                      </div>
                      <a href="/docs/anti_corruption_betting_code.pdf" download>
                         <Button variant="outline" size="sm">Download PDF</Button>
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="p-3 bg-white border rounded-lg shadow-sm">
                            <FileCheck className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <p className="font-bold">Club Licensing Requirements v2</p>
                            <p className="text-sm text-gray-500">Updated: Mar 20, 2026</p>
                         </div>
                      </div>
                      <a href="/docs/club_licensing_requirements_v2.pdf" download>
                         <Button variant="outline" size="sm">Download PDF</Button>
                      </a>
                    </div>
                 </div>
               </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="investment">
             <Card className="border-t-4 border-t-yellow-500 shadow-md">
               <CardHeader className="pb-4">
                 <div className="flex items-center justify-between">
                   <div>
                     <CardTitle className="text-2xl flex items-center gap-2 text-yellow-600">
                        Investment Pitch & Funding Needs
                     </CardTitle>
                     <CardDescription className="text-base mt-2">
                       Manage your active equity offering on the FFE Investment Marketplace.
                     </CardDescription>
                   </div>
                   <div className="flex items-center gap-2">
                     <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 px-3 py-1 text-sm mr-2">
                       Seed Round
                     </Badge>
                     <span className="font-bold text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">Profile Live</span>
                     <Button variant="outline" size="sm">Edit Profile</Button>
                   </div>
                 </div>
               </CardHeader>
               <CardContent>
                 <div className="grid md:grid-cols-2 gap-6 mb-6">
                   <div className="p-4 bg-zinc-50 border rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Target Capital</p>
                      <p className="font-bold text-3xl text-blue-600">E 8,000,000</p>
                   </div>
                   <div className="p-4 bg-zinc-50 border rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Equity Offered</p>
                      <p className="font-bold text-3xl text-gray-900">15%</p>
                   </div>
                 </div>
                 
                 <div className="mb-6">
                   <h4 className="font-bold mb-2">Use of Funds</h4>
                   <p className="text-gray-700 p-4 bg-blue-50/50 border border-blue-100 rounded-lg">Stadium grandstand expansion & VIP suites.</p>
                 </div>

                 <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>Funding Progress</span>
                      <span className="font-bold text-gray-900">30%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                       <div className="bg-blue-600 rounded-full h-3" style={{ width: `30%` }}></div>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <Button className="flex-1 bg-black text-white hover:bg-black/80">Manage Pitch Deck</Button>
                    <Button variant="outline" className="flex-1 border-gray-300 text-black">View Messages (3)</Button>
                 </div>
               </CardContent>
             </Card>
          </TabsContent>
          <TabsContent value="activity">
             <Card>
               <CardHeader>
                 <CardTitle>Activity Logs</CardTitle>
                 <CardDescription>Chronological list of actions taken by team members on the platform.</CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-gray-200 space-y-6">
                      <div className="relative">
                         <div className="absolute -left-[31px] top-1 bg-white border-2 border-primary w-4 h-4 rounded-full"></div>
                         <div className="flex justify-between items-start mb-1">
                            <p className="font-bold text-sm text-gray-900">Application status changed to Under Review</p>
                            <span className="text-xs text-gray-500 font-mono flex items-center"><Clock className="w-3 h-3 mr-1" /> Today, 14:32</span>
                         </div>
                         <p className="text-sm text-gray-600">Action performed by <span className="font-semibold text-gray-800">System Admin</span>.</p>
                      </div>

                      <div className="relative">
                         <div className="absolute -left-[31px] top-1 bg-white border-2 border-primary w-4 h-4 rounded-full"></div>
                         <div className="flex justify-between items-start mb-1">
                            <p className="font-bold text-sm text-gray-900">Uploaded Financial Audit Report</p>
                            <span className="text-xs text-gray-500 font-mono flex items-center"><Clock className="w-3 h-3 mr-1" /> Yesterday, 09:15</span>
                         </div>
                         <p className="text-sm text-gray-600">Action performed by <span className="font-semibold text-gray-800">Sipho Dlamini (Club Admin)</span>. File: 2025_audit.pdf (2.4MB)</p>
                      </div>

                      <div className="relative">
                         <div className="absolute -left-[31px] top-1 bg-white border-2 border-gray-300 w-4 h-4 rounded-full"></div>
                         <div className="flex justify-between items-start mb-1">
                            <p className="font-bold text-sm text-gray-900">Updated GPS Coordinates</p>
                            <span className="text-xs text-gray-500 font-mono flex items-center"><Clock className="w-3 h-3 mr-1" /> May 20, 2026, 11:20</span>
                         </div>
                         <p className="text-sm text-gray-600">Action performed by <span className="font-semibold text-gray-800">Sipho Dlamini (Club Admin)</span>. Updated location to: -26.3167, 31.1333.</p>
                      </div>
                      
                      <div className="relative">
                         <div className="absolute -left-[31px] top-1 bg-white border-2 border-gray-300 w-4 h-4 rounded-full"></div>
                         <div className="flex justify-between items-start mb-1">
                            <p className="font-bold text-sm text-gray-900">Club Application Submitted</p>
                            <span className="text-xs text-gray-500 font-mono flex items-center"><Clock className="w-3 h-3 mr-1" /> May 18, 2026, 16:45</span>
                         </div>
                         <p className="text-sm text-gray-600">Action performed by <span className="font-semibold text-gray-800">Sipho Dlamini (Club Admin)</span>.</p>
                      </div>
                    </div>
                 </div>
               </CardContent>
             </Card>
          </TabsContent>
          </div>
        </Tabs>
      </main>
      
      <footer className="bg-black py-8 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p className="text-sm">FFE Member Portal v1.0</p>
      </footer>
    </div>
  );
}
