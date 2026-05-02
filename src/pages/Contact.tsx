import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-black text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Contact & Application</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Ready to secure your club's future? Submit your application or contact our compliance team.
          </p>
        </div>
      </section>

      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Federation Headquarters</h3>
                <div className="space-y-6 text-gray-600">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-black flex-shrink-0" />
                    <p>IFF Tower, Mbabane<br/>Kingdom of Eswatini</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-black flex-shrink-0" />
                    <p>membership@iff.org.sz</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-black flex-shrink-0" />
                    <p>+268 2404 0000</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-100 p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-2 text-black">Member Support</h4>
                <p className="text-gray-600 text-sm mb-4">Current members requiring administrative assistance or legal guidance can contact the oversight desk directly.</p>
                <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-200">Access Support Desk</Button>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-center h-full items-center text-center">
                <Building className="w-16 h-16 text-gray-300 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Official Club Registration</h2>
                <p className="text-gray-500 mb-8 max-w-md text-lg">
                  To ensure maximum professionalism and compliance, all prospective clubs must apply through our dedicated compliance engine. 
                </p>
                <div className="flex gap-4">
                  <Button className="bg-primary text-white hover:bg-primary/90 text-lg h-14 px-8" asChild>
                    <Link to="/apply">Start Application</Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>

          <hr className="my-20 border-gray-100" />

          {/* Club Builder Toolkit */}
          <div className="bg-zinc-900 text-white p-10 rounded-3xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
               <Building className="w-48 h-48" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white font-semibold text-xs mb-4 border border-white/20 tracking-wider uppercase">
                New Entrants
              </span>
              <h2 className="text-3xl font-bold mb-4">Digital Club Builder Toolkit</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Starting from scratch? We provide the exact blueprints required to build a compliant, professional football club. Don't guess what the compliance officers want—use our templates.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="font-bold mb-2">Corporate & Finance</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Business Plan Template</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Minimum Budget Estimator</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Investor Pitch Deck</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="font-bold mb-2">Infrastructure & Operations</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Stadium Compliance Checklist</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Land Acquisition Guide</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Standard Player Contracts</li>
                  </ul>
                </div>
              </div>

              <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                Access the Free Toolkit
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
