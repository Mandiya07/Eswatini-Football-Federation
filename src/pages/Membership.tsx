import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare, AlertCircle, ArrowRight, Building, MapPin, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Membership() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-black text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Membership Requirements</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Joining the IFF means committing to the highest standards of professional football infrastructure and business operations.
          </p>
        </div>
      </section>

      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mb-16 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Founding 16 Rule</h3>
                <p className="text-gray-700 text-lg">
                  The first 16 qualifying clubs to successfully complete the membership process will strictly form the Indvundvundvwane Major League on a <strong>first-come, first-served basis</strong>. All subsequent qualifying clubs will enter the Federation League.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Mandatory Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Landmark className="w-8 h-8 text-black" />
                <CardTitle>Corporate Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The club MUST be a fully registered company under Eswatini law, complete with a board of directors and clear accounting practices.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <MapPin className="w-8 h-8 text-secondary" />
                <CardTitle>Land Ownership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The club must own, or clearly be in the legal process of acquiring, land designated for club infrastructure development.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin-slow"></div>
                <CardTitle>Stadium / Playing Field</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ownership or exclusive long-term lease of a compliant stadium or private playing field capable of hosting professional matches securely.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Building className="w-8 h-8 text-black" />
                <CardTitle>Business Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dedicated training facilities for squad development and permanent administrative offices for club staff and matchday operations.</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-8">Step-by-Step Joining Process</h2>
          <div className="space-y-6 mb-16">
            {[
              { step: 1, title: "Initial Application", desc: "Submit the online club application form along with a non-refundable expression of interest fee." },
              { step: 2, title: "Corporate Verification", desc: "Submit proof of company registration, ownership details, and financial standing for audit by IFF compliance officers." },
              { step: 3, title: "Infrastructure Audit", desc: "IFF inspectors will evaluate land deeds, stadium compliance, and training facilities to ensure they meet minimum professional standards." },
              { step: 4, title: "Provisional Acceptance", desc: "Upon passing audits, the club receives provisional acceptance and begins integration into the league scheduling system." },
              { step: 5, title: "Final Ratification", desc: "Full membership is granted. If among the first 16, the club executes shareholder agreements for the Major League company." }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-zinc-50 p-6 rounded-xl border border-gray-100 items-start">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-12 bg-black text-white rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to elevate your club?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              The window to become a founding member of the Major League is open. Gather your documentation and begin the process.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg h-14 px-8" asChild>
                <Link to="/contact">Start Application</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-black bg-white hover:bg-gray-100 border-none text-lg h-14 px-8">
                Download PDF Guide
              </Button>
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
