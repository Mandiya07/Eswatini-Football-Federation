import { Navbar } from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, TrendingUp, TrendingDown, Layers } from 'lucide-react';

export default function Leagues() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-black text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1431324155629-1a6fc1ac5eab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">League Structure</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            A sustainable, two-tier ecosystem designed to foster elite competition and commercial growth.
          </p>
        </div>
      </section>

      <section className="py-20 flex-grow bg-zinc-50">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Pyramid Visual */}
          <div className="mb-24 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-12 text-center">The IFF Pyramid</h2>
            <div className="w-full max-w-2xl flex flex-col items-center gap-4">
              <div className="w-[60%] bg-secondary text-black p-6 flex flex-col items-center justify-center rounded-t-xl shadow-xl relative border-2 border-secondary z-20">
                <Trophy className="w-8 h-8 mb-2 opacity-80" />
                <span className="font-bold text-xl uppercase tracking-widest text-center">Major League</span>
                <span className="text-sm font-medium mt-1">Tier 1 • 16 Clubs</span>
                <div className="absolute -bottom-8 bg-zinc-200 border-2 border-white rounded-full p-2 z-30 shadow-md">
                   <TrendingUp className="w-5 h-5 text-green-600 inline mr-1"/><TrendingDown className="w-5 h-5 text-red-600 inline"/>
                </div>
              </div>
              <div className="w-[80%] bg-black text-white p-6 flex flex-col items-center justify-center shadow-lg relative z-10 pt-10">
                <span className="font-bold text-lg uppercase tracking-widest">Federation League - Div 1</span>
                <span className="text-sm text-gray-400 mt-1">Tier 2</span>
                <div className="absolute -bottom-8 bg-zinc-200 border-2 border-white rounded-full p-2 z-30 shadow-md">
                   <TrendingUp className="w-5 h-5 text-green-600 inline mr-1"/><TrendingDown className="w-5 h-5 text-red-600 inline"/>
                </div>
              </div>
              <div className="w-[100%] bg-zinc-800 text-white p-6 flex flex-col items-center justify-center rounded-b-xl shadow-md pt-10 relative">
                <span className="font-bold text-lg uppercase tracking-widest">Federation League - Div 2+</span>
                <span className="text-sm text-gray-400 mt-1">Regional Divisions</span>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-8 italic">Direct promotion and relegation between all tiers.</p>
          </div>

          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center border border-secondary/50">
                  <Trophy className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">Indvundvundvwane Major League</h2>
              </div>
              <Card className="border-secondary/50 shadow-md">
                <CardContent className="p-8 prose prose-lg max-w-none prose-p:text-gray-700">
                  <p>
                    The Major League is the flagship tier of Eswatini football. It is not just a competition; it is a standalone commercial entity owned equally by its participating clubs.
                  </p>
                  <ul>
                    <li><strong>Shareholder Clubs:</strong> The league is limited to exactly 16 clubs. These clubs act as equal shareholders in the Major League company.</li>
                    <li><strong>Independence:</strong> The league operates independently to maximize commercial revenue and broadcast rights, ensuring profitability for its shareholders.</li>
                    <li><strong>Federation Oversight:</strong> While commercially independent, it operates under the strict governance rules of the IFF and the universal Laws of the Game.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Federation League</h2>
              </div>
              <Card className="border-gray-200 shadow-md">
                <CardContent className="p-8 prose prose-lg max-w-none prose-p:text-gray-700">
                  <p>
                    The Federation League houses all professional clubs outside the top 16. It operates as a multi-division system designed to groom clubs for the ultimate stage.
                  </p>
                  <ul>
                    <li><strong>Professional Standards:</strong> Clubs in the Federation League are held to the exact same standards of professionalism, infrastructure ownership, and financial transparency as Major League clubs.</li>
                    <li><strong>Multi-Division Structure:</strong> Depending on the volume of qualifying clubs, the Federation League is divided into hierarchical divisions featuring a strictly merit-based promotion and relegation system.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Promotion & Relegation</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Sporting merit is the only currency. Poor-performing Major League teams are relegated to the Federation League at the end of the season. 
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                When a club is promoted from the Federation League to the Major League, <strong>they inherit the relegated club's shares</strong> in the Major League company. There is no external buying of positions allowed—you must earn your place on the pitch.
              </p>
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
