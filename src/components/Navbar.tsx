import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, LogOut, User as UserIcon } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/components/ui/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { signInWithGoogle, signOut } from '@/lib/firebase';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full bg-black text-white border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className="text-white hidden sm:inline-block">Football Federation</span>
        </Link>
        <div className="hidden lg:flex gap-6">
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/leagues" className="text-sm font-medium hover:text-primary transition-colors">Leagues</Link>
          <Link to="/membership" className="text-sm font-medium hover:text-primary transition-colors">Membership</Link>
          <Link to="/governance" className="text-sm font-medium hover:text-primary transition-colors">Governance</Link>
          <Link to="/investment" className="text-sm font-medium hover:text-primary transition-colors">Investment</Link>
          <Link to="/academy" className="text-sm font-medium hover:text-primary transition-colors">Academy</Link>
          <Link to="/clubs" className="text-sm font-medium hover:text-primary transition-colors">Clubs Map</Link>
        </div>
        <div className="hidden lg:flex gap-3 items-center">
          {!loading && user ? (
            <>
               <span className="text-sm text-gray-400 mr-2">{user.email}</span>
               <Button variant="outline" className="text-black bg-white hover:bg-gray-200 border-none" asChild>
                 <Link to="/dashboard">Dashboard</Link>
               </Button>
               <Button variant="ghost" size="icon" onClick={() => signOut()} aria-label="Log out" className="hover:text-primary hover:bg-white/10">
                 <LogOut className="w-5 h-5" />
               </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="text-black bg-white hover:bg-gray-200 border-none" onClick={() => signInWithGoogle()}>
                Login
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90" asChild>
                <Link to="/apply">Join Now</Link>
              </Button>
            </>
          )}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black border-b border-white/10 flex flex-col p-4 gap-4 shadow-lg">
          <Link to="/about" className="text-base font-medium hover:text-primary" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/leagues" className="text-base font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Leagues</Link>
          <Link to="/membership" className="text-base font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Membership</Link>
          <Link to="/governance" className="text-base font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Governance</Link>
          <Link to="/investment" className="text-base font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Investment</Link>
          <Link to="/academy" className="text-base font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Academy</Link>
          <Link to="/clubs" className="text-base font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Clubs Map</Link>
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
            {!loading && user ? (
               <>
                 <Button variant="outline" className="w-full text-black bg-white" onClick={() => setIsOpen(false)} asChild>
                   <Link to="/dashboard">Dashboard</Link>
                 </Button>
                 <Button variant="destructive" className="w-full" onClick={() => { signOut(); setIsOpen(false); }}>
                   <LogOut className="w-4 h-4 mr-2" /> Log out
                 </Button>
               </>
            ) : (
              <>
                <Button variant="outline" className="w-full text-black bg-white" onClick={() => { signInWithGoogle(); setIsOpen(false); }}>
                  Login
                </Button>
                <Button className="w-full bg-primary text-white" onClick={() => setIsOpen(false)} asChild>
                  <Link to="/apply">Join Now</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
