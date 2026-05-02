import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, FileDown, PlayCircle, Briefcase, TrendingUp, Presentation, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Academy() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1431324155629-1a6fc1ac5eab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 border border-primary/50 tracking-wider uppercase">
            Education Hub
          </span>
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Club Development Academy</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Knowledge is the foundation of professional football. Empower your club administrators with world-class education, resources, and templates to build a sustainable football brand.
          </p>
        </div>
      </section>

      <section className="py-20 flex-grow bg-zinc-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Masterclasses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert-led video courses designed specifically for football club owners, CEOs, and administrative staff.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-gray-200">
              <div className="aspect-video relative bg-zinc-800">
                <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Club Management" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-80" />
                </div>
                <Badge className="absolute top-4 right-4 bg-primary text-white">6 Modules</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 font-medium">
                  <Briefcase className="w-4 h-4" /> Club Operations
                </div>
                <h3 className="font-bold text-xl mb-2">Modern Football Club Management</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Learn how to structure your club's organizational chart, manage matchday operations, and hire effective technical staff.
                </p>
                <Button className="w-full bg-black text-white hover:bg-black/80">Start Course</Button>
              </CardContent>
            </Card>

            {/* Course 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-gray-200">
              <div className="aspect-video relative bg-zinc-800">
                <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Finance" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-80" />
                </div>
                <Badge className="absolute top-4 right-4 bg-primary text-white">4 Modules</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 font-medium">
                  <TrendingUp className="w-4 h-4" /> Finance
                </div>
                <h3 className="font-bold text-xl mb-2">Sustainable Football Finance</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Master budgeting, Financial Fair Play compliance, player wage structuring, and revenue diversification strategies.
                </p>
                <Button className="w-full bg-black text-white hover:bg-black/80">Start Course</Button>
              </CardContent>
            </Card>

            {/* Course 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-gray-200">
              <div className="aspect-video relative bg-zinc-800">
                <img src="https://images.unsplash.com/photo-1553152531-7aecda7c046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Marketing" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-80" />
                </div>
                <Badge className="absolute top-4 right-4 bg-primary text-white">5 Modules</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 font-medium">
                  <Presentation className="w-4 h-4" /> Branding
                </div>
                <h3 className="font-bold text-xl mb-2">Sports Marketing & Sponsorships</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Discover how to value your commercial assets, pitch to corporate sponsors, and build a digital fanbase.
                </p>
                <Button className="w-full bg-black text-white hover:bg-black/80">Start Course</Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Resource & Template Library</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Ready-to-use templates to standardize your club's administrative and commercial output.
              </p>
            </div>
            <div className="flex gap-2">
               <Badge variant="outline" className="text-sm py-1 cursor-pointer hover:bg-gray-100">All</Badge>
               <Badge variant="outline" className="text-sm py-1 cursor-pointer hover:bg-gray-100">Finance</Badge>
               <Badge variant="outline" className="text-sm py-1 cursor-pointer hover:bg-gray-100">Legal</Badge>
               <Badge variant="outline" className="text-sm py-1 cursor-pointer hover:bg-gray-100">Marketing</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Template Items */}
            {[
              { title: "Standard Club Business Plan (5-Year)", cat: "Finance/Ops", icon: FileDown, size: "2.4 MB PDF & Word" },
              { title: "Sponsorship Pitch Deck Template", cat: "Marketing", icon: Presentation, size: "15 MB PowerPoint" },
              { title: "Annual Budget Estimator Spreadsheet", cat: "Finance", icon: TrendingUp, size: "1.1 MB Excel" },
              { title: "Standard Professional Player Contract", cat: "Legal", icon: FileDown, size: "1.8 MB PDF & Word" },
              { title: "Matchday Operations Checklist", cat: "Operations", icon: CheckCircle2, size: "0.5 MB PDF" },
              { title: "Social Media Strategy Guide", cat: "Branding", icon: BookOpen, size: "4.2 MB PDF" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 rounded-2xl border border-gray-200 hover:border-black transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-gray-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <div className="flex gap-3 text-xs text-gray-500">
                      <span className="uppercase font-medium text-black px-2 py-0.5 bg-gray-100 rounded">{item.cat}</span>
                      <span className="flex items-center">{item.size}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 group-hover:text-black">
                  <FileDown className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <GraduationCap className="w-16 h-16 mx-auto text-primary mb-6" />
          <h2 className="text-3xl font-bold mb-4">Earn Your Club Management Diploma</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Complete the core curriculum to receive the official FFE Club Management Diploma, a requirement for all Major League club General Managers by 2028.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
            View Certification Pathway
          </Button>
        </div>
      </section>

      <footer className="bg-black py-12 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p>© {new Date().getFullYear()} Football Federation Eswatini. All rights reserved.</p>
      </footer>
    </div>
  );
}
