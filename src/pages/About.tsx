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
              The Football Federation Eswatini (FFE) is NOT a traditional federation of individuals or regional associations. It is an exclusive federation of football clubs. Our members are strictly the clubs themselves—no individuals, no regional associations, and no other federations hold membership.
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

            <h2 className="text-3xl font-bold mb-8">Core Principles & Ecosystem Pillars</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Professionalism</h3>
                <p className="text-sm text-gray-600">Every member must operate as a registered company with professional standards across all operations.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border-secondary/50 hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Exclusive Business Centres</h3>
                <p className="text-sm text-gray-600">Clubs must own their home grounds, transforming them into revenue-generating hubs functioning 365 days a year.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Financial Transparency</h3>
                <p className="text-sm text-gray-600">Strict adherence to Financial Fair Play (FFP) regulations, salary caps, and public audited accounts ensuring sustainability.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Elite Youth Academies</h3>
                <p className="text-sm text-gray-600">Mandatory homegrown player quotas, world-class training facilities, and integration of football with formal education.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Data & Sports Science</h3>
                <p className="text-sm text-gray-600">Investment in performance tracking, medical departments, and tactical analytics for continuous competitive advantage.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Fan Engagement</h3>
                <p className="text-sm text-gray-600">Digital ecosystems offering interactive apps, membership loyalty tiers, and comprehensive broadcasting reach.</p>
              </div>
            </div>

            <div className="mt-16 bg-blue-600 text-white rounded-2xl p-8 border-4 border-white ring-4 ring-blue-50 shadow-2xl">
              <h2 className="text-3xl font-black mb-6 uppercase tracking-widest text-center text-white">The Stadium as a Business Centre</h2>
              <div className="space-y-6 text-xl">
                <p className="leading-relaxed font-medium">
                  We are introducing a revolutionary concept in black Africa, led by Eswatini: <strong className="text-white bg-black/20 px-2 py-0.5 rounded">Exclusive Club Home Grounds</strong>.
                </p>
                <p className="leading-relaxed text-blue-50">
                  Unlike traditional models where clubs "book" community venues or share public stadiums, FFE Major League stadiums are <strong>strictly business centres for the exclusive use of the owning club</strong>. Just as Old Trafford is for Manchester United and Anfield is for Liverpool, a club's stadium belongs solely to that club.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-white mb-2 flex flex-col uppercase tracking-widest text-sm mb-4"><span className="text-blue-200">Revenue Engine</span></h4>
                    <p className="text-base text-blue-50 font-medium">
                      The stadium operates 365 days a year. On match days, it hosts fans. On non-match days, it acts as a commercial hub for stadium tours, sightseeing, and merchandise shopping.
                    </p>
                  </div>
                  <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-white mb-2 flex flex-col uppercase tracking-widest text-sm mb-4"><span className="text-blue-200">The Synergy</span></h4>
                    <p className="text-base text-blue-50 font-medium">
                      Attractive, professional football draws fans (customers). The proceeds from this business venture directly fund the club's ability to buy and maintain elite players, coaches, and staff.
                    </p>
                  </div>
                </div>
              </div>
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
