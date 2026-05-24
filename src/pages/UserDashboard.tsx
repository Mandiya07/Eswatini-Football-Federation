import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ticket, Star, ShoppingBag } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export function UserDashboard() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Navbar />
      <div className="bg-black text-white py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl font-bold">Welcome, {user?.displayName || 'Supporter'}!</h1>
            <p className="text-gray-400">Fan Portal</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-grow space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
           <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2"><Ticket className="w-5 h-5 text-primary" /> Tickets</CardTitle>
                <CardDescription>Manage your matchday tickets.</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="text-center py-4 text-gray-500 text-sm border-2 border-dashed rounded-lg">
                   No upcoming tickets
                </div>
                <Button className="w-full mt-4">Browse Matches</Button>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500" /> Memberships</CardTitle>
                <CardDescription>Manage your club affiliations.</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="text-center py-4 text-gray-500 text-sm border-2 border-dashed rounded-lg">
                   You are not a member of any club
                </div>
                <Button variant="outline" className="w-full mt-4">Join a Club</Button>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShoppingBag className="w-5 h-5 text-blue-500" /> Store</CardTitle>
                <CardDescription>Your recent merchandise orders.</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="text-center py-4 text-gray-500 text-sm border-2 border-dashed rounded-lg">
                   No orders yet
                </div>
                <Button variant="outline" className="w-full mt-4">Shop Now</Button>
             </CardContent>
           </Card>
        </div>
        
        <Card className="bg-zinc-100 border-none">
          <CardContent className="p-6 md:p-8 text-center text-gray-600">
             <h3 className="text-lg font-bold mb-2">Want to manage a club?</h3>
             <p className="text-sm mb-4">Are you a club official or administrator? Request your account to be upgraded to a Club Admin.</p>
             <Button variant="outline">Request Upgrade</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-black py-8 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p className="text-sm">FFE Fan Portal</p>
      </footer>
    </div>
  );
}
