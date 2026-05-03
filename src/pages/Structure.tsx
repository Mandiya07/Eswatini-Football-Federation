import React from 'react';
import { Navbar } from '@/components/Navbar';
import { motion } from 'motion/react';
import { 
  Building2, 
  Users, 
  Trophy, 
  Shield, 
  Scale, 
  Settings, 
  ChevronRight, 
  UserCircle,
  Building,
  Target,
  ArrowDown,
  Search
} from 'lucide-react';

// Simplified Vertical Tree Component
const TreeLine = () => <div className="w-0.5 h-6 bg-zinc-200 mx-auto"></div>;

const StructureCard = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden mb-12">
    <div className="bg-zinc-900 px-8 py-6 text-white">
      <h3 className="text-2xl font-bold tracking-tighter uppercase">{title}</h3>
      <p className="text-zinc-400 text-sm mt-1 font-medium">{description}</p>
    </div>
    <div className="p-8 overflow-x-auto">
      <div className="min-w-[800px] flex flex-col items-center py-8">
        {children}
      </div>
    </div>
  </div>
);

export default function Structure() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col font-sans">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-black text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510051644265-934cb9904605?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Organizational Structure</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
            A visual roadmap of the Football Federation Eswatini ecosystem and the internal architecture of a modern professional member club.
          </p>
        </div>
      </section>

      <section className="py-20 flex-grow px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* FFE Structure */}
          <StructureCard 
            title="Football Federation Eswatini (FFE)" 
            description="The governing body overseeing professional football standards and national representation."
          >
            {/* Root */}
            <div className="flex flex-col items-center">
              <div className="bg-primary text-white p-6 rounded-2xl shadow-2xl border-4 border-white ring-4 ring-primary/20 min-w-[300px] text-center z-20">
                <Shield className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <h2 className="text-xl font-black uppercase tracking-widest leading-none">Football Federation</h2>
                <h3 className="text-xs font-bold text-gray-300 mt-1 uppercase tracking-tighter">Kingdom of Eswatini</h3>
              </div>

              {/* National Teams Branch */}
              <div className="mt-8 flex gap-32">
                 <div className="flex flex-col items-center">
                    <div className="h-6 w-0.5 bg-zinc-200"></div>
                    <div className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest min-w-[140px] text-center">Female Select Teams</div>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="h-6 w-0.5 bg-zinc-200"></div>
                    <div className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest min-w-[140px] text-center">Male Select Teams</div>
                 </div>
              </div>

              {/* Main Branches Connector */}
              <div className="w-[80%] h-0.5 bg-zinc-200 mt-8 relative">
                 <div className="absolute top-0 left-0 w-0.5 h-8 bg-zinc-200 -mt-0"></div>
                 <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-zinc-200 -mt-0"></div>
                 <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-zinc-200 -mt-0"></div>
                 <div className="absolute top-0 left-3/4 w-0.5 h-8 bg-zinc-200 -mt-0"></div>
                 <div className="absolute top-0 left-full w-0.5 h-8 bg-zinc-200 -mt-0"></div>
              </div>

              <div className="flex justify-between items-start w-full mt-8 gap-4 px-4">
                {/* Branch 1: Leagues */}
                <div className="flex flex-col items-center flex-1">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-center min-h-[40px] flex items-center">Federation Major League</div>
                  <TreeLine />
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-center min-h-[40px] flex items-center">Federation Football League</div>
                  <TreeLine />
                  <div className="bg-blue-400 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-center min-h-[40px] flex items-center">Regional Football Leagues</div>
                </div>

                {/* Branch 2: Ad-hoc */}
                <div className="flex flex-col items-center flex-1">
                  <div className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-center min-h-[40px] flex items-center">Ad-hoc Committees</div>
                </div>

                {/* Branch 3: Secretariat & Clubs */}
                <div className="flex flex-col items-center flex-1">
                  <div className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-center min-h-[40px] flex items-center shadow-xl shadow-zinc-100">Secretariat</div>
                  <TreeLine />
                  <div className="bg-primary text-white px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest text-center shadow-xl shadow-blue-100 border-2 border-white ring-2 ring-blue-50">CLUBS (The Shareholders)</div>
                  <TreeLine />
                  <div className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-center min-h-[40px] flex items-center">Regional Select Teams</div>
                </div>

                {/* Branch 4: Standing Committees */}
                <div className="flex flex-col items-center flex-1">
                  <div className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-center min-h-[40px] flex items-center">Standing Committees</div>
                </div>

                {/* Branch 5: Technical */}
                <div className="flex flex-col items-center flex-1">
                  <div className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-center min-h-[40px] flex items-center">Technical Director</div>
                  <TreeLine />
                  <div className="bg-zinc-700 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-center min-h-[40px] flex items-center">Refereeing Association</div>
                </div>
              </div>
            </div>
          </StructureCard>

          {/* Member Club Structure */}
          <StructureCard 
            title="Member Club Organization" 
            description="The internal architectural breakdown of an FFE-licensed professional football club."
          >
            <div className="flex flex-col items-center">
              <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-2xl border-4 border-white ring-4 ring-zinc-100 min-w-[280px] text-center z-20">
                <Building2 className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                <h2 className="text-xl font-black uppercase tracking-widest leading-none">MEMBER CLUB</h2>
                <h3 className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-tighter">Corporate Entity</h3>
              </div>

              <TreeLine />

              <div className="bg-blue-600 text-white px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest shadow-xl shadow-blue-100 border-2 border-white group transition-all hover:scale-105">
                Board / Executive
              </div>

              <div className="w-[70%] h-0.5 bg-zinc-200 mt-10 relative">
                 <div className="absolute top-0 left-0 w-0.5 h-12 bg-zinc-200 -mt-0"></div>
                 <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-zinc-200 -mt-0"></div>
                 <div className="absolute top-0 left-full w-0.5 h-12 bg-zinc-200 -mt-0"></div>
              </div>

              <div className="flex justify-between w-full mt-12 px-4">
                {/* Female Branch */}
                <div className="flex flex-col items-center flex-1">
                  <div className="bg-secondary text-white px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest shadow-lg min-w-[120px] text-center">Female Team</div>
                  <TreeLine />
                  <div className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest min-w-[100px] text-center">U-19</div>
                  <TreeLine />
                  <div className="bg-zinc-100 border border-zinc-200 text-zinc-600 px-4 py-4 rounded-xl text-center space-y-2 min-w-[140px]">
                     <div className="text-[10px] font-black uppercase tracking-tighter text-zinc-400">Youth Teams</div>
                     <div className="text-xs font-bold">U-17</div>
                     <div className="text-xs font-bold">U-15</div>
                     <div className="text-xs font-bold">U-13</div>
                  </div>
                  <TreeLine />
                  <div className="bg-primary text-white px-4 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-100 ring-4 ring-blue-50">
                    Mixed Nursery U-11
                  </div>
                </div>

                {/* Male Branch */}
                <div className="flex flex-col items-center flex-1">
                  <div className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest shadow-lg min-w-[120px] text-center">Male Team</div>
                  <TreeLine />
                  <div className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest min-w-[100px] text-center">U-19</div>
                  <TreeLine />
                  <div className="bg-zinc-100 border border-zinc-200 text-zinc-600 px-4 py-4 rounded-xl text-center space-y-2 min-w-[140px]">
                     <div className="text-[10px] font-black uppercase tracking-tighter text-zinc-400">Youth Teams</div>
                     <div className="text-xs font-bold">U-17</div>
                     <div className="text-xs font-bold">U-15</div>
                     <div className="text-xs font-bold">U-13</div>
                  </div>
                  <TreeLine />
                  <div className="bg-primary text-white px-4 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-100 ring-4 ring-blue-50">
                    Mixed Nursery U-11
                  </div>
                </div>

                {/* Supporters Branch */}
                <div className="flex flex-col items-center flex-1">
                  <div className="bg-zinc-300 text-zinc-800 px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest min-w-[120px] text-center">Supporters</div>
                  <TreeLine />
                  <div className="bg-zinc-800 text-white px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest shadow-lg shadow-zinc-200 flex items-center gap-2">
                    <Search className="w-4 h-4 text-blue-400" /> scouts
                  </div>
                </div>
              </div>
            </div>
          </StructureCard>

          {/* Key Insights */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-zinc-900 p-10 rounded-2xl text-white">
              <Scale className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Checks & Balances</h3>
              <p className="text-zinc-400 leading-relaxed font-medium">
                The FFE structure is designed to separate commercial operation (The Major League) from administrative governance (Secretariat) and technical development. This ensures that no single entity has unchecked power.
              </p>
            </div>
            <div className="bg-blue-600 p-10 rounded-2xl text-white">
              <Users className="w-12 h-12 text-zinc-900 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Player Pathway</h3>
              <p className="text-white/80 leading-relaxed font-medium">
                Every member club is mandated to maintain a complete vertical pathway from the Mixed Nursery (U-11) through youth ranks up to the senior professional squads. This ensures long-term sustainability for Eswatini football.
              </p>
            </div>
          </div>

        </div>
      </section>
      
      <footer className="bg-black py-12 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p>© {new Date().getFullYear()} Football Federation Eswatini. All rights reserved.</p>
      </footer>
    </div>
  );
}
