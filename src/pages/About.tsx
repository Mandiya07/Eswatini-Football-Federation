import { Navbar } from '@/components/Navbar';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-black text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">About the Federation</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            A radical departure from traditional models. We are an exclusive federation of professional football clubs.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-600">
            <h2 className="text-3xl font-bold mb-6">A Federation of Clubs</h2>
            <p className="text-lg leading-relaxed mb-8">
              The Indvundvundvwane Football Federation (IFF) is NOT a traditional federation of individuals or regional associations. It is an exclusive federation of football clubs. Our members are strictly the clubs themselves—no individuals, no regional associations, and no other federations hold membership.
            </p>
            
            <p className="text-lg leading-relaxed mb-12">
              While regional structures may exist, they serve only as administrative branches. The clubs remain the direct, sole members and ultimate authorities of the federation.
            </p>

            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 mb-16">
              <h2 className="text-2xl font-bold mb-6 border-b border-zinc-200 pb-4">Vision & Mission</h2>
              <h3 className="text-xl font-bold text-black mb-3">Our Vision</h3>
              <p className="text-gray-700 mb-8">
                To transform football in the Kingdom of Eswatini into a fully professional, economically viable, and club-driven ecosystem that competes on the ultimate continental stage.
              </p>
              
              <h3 className="text-xl font-bold text-black mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To introduce and sustain professional football by building club-owned infrastructures, enforcing zero tolerance for corruption, and empowering clubs to govern and protect the integrity of the sport.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8">Core Principles</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Professionalism</h3>
                <p className="text-sm text-gray-600">Every member must operate as a registered company with professional standards across all operations.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border-secondary/50 hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Ownership</h3>
                <p className="text-sm text-gray-600">Clubs must own or be acquiring their own land, stadiums, training facilities, and offices.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-10 h-10 text-black mb-4" />
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-sm text-gray-600">Transparent governance structures where clubs serve as watchdogs to ensure a corruption-free environment.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <footer className="bg-black py-12 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p>© {new Date().getFullYear()} Indvundvundvwane Football Federation. All rights reserved.</p>
      </footer>
    </div>
  );
}
