import { Navbar } from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { ShieldAlert, Eye, Search, Scale, FileText, Download, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Governance() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-black text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-1efdb08e7cf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Governance & Integrity</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Zero tolerance for corruption. A transparent system where clubs police themselves.
          </p>
        </div>
      </section>

      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Clubs as Watchdogs</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In traditional federations, power is centralized, leading to opacity and corruption. In the FFE, power is distributed among the member clubs. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Because clubs are the sole shareholders of the league and the sole members of the federation, they have a direct financial incentive to ensure absolute integrity. If the product is tainted, their investment loses value. Therefore, the clubs serve as the ultimate watchdogs.
              </p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl border border-gray-200 shadow-inner">
              <Eye className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Transparency Mandate</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="bg-black w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"></div>
                  Open-book financial reporting for all Major League clubs.
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-black w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"></div>
                  Independent, third-party audits published annually.
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-black w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"></div>
                  Whistleblower protection programs.
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* Constitution & Governance Library */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Constitution & Policy Library</h2>
            <div className="border rounded-xl bg-white overflow-hidden shadow-sm">
              <Table>
                <TableHeader className="bg-zinc-100">
                  <TableRow>
                    <TableHead className="w-[400px]">Document</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { doc: "FFE Official Constitution 2026", cat: "Core Governance", date: "Jan 15, 2026" },
                    { doc: "Financial Fair Play Regulations", cat: "Finance", date: "Feb 02, 2026" },
                    { doc: "Anti-Corruption & Betting Code", cat: "Integrity", date: "Mar 10, 2026" },
                    { doc: "Club Licensing Requirements v2", cat: "Membership", date: "Apr 01, 2026" },
                  ].map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400" /> {item.doc}
                      </TableCell>
                      <TableCell>{item.cat}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          <Download className="w-4 h-4 mr-1"/> PDF
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="bg-black text-white p-10 rounded-2xl mb-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-20 hidden md:block">
               <Scale className="w-48 h-48" />
             </div>
             <div className="relative z-10 max-w-3xl">
               <h3 className="text-3xl font-bold mb-4">Independence vs Oversight</h3>
               <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  The Major League operates as an independent commercial company to maximize agility and profit. However, it cannot govern football law. The FFE acts as the regulatory body that oversees compliance with the absolute Laws of the Game, issuing licenses and enforcing sporting integrity.
               </p>
               <p className="text-gray-400 text-lg leading-relaxed">
                  This separation of commercial operation and regulatory oversight ensures no conflicts of interest.
               </p>
             </div>
          </div>

          {/* Anonymous Reporting */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-10 text-center max-w-3xl mx-auto">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-red-900 mb-2">Report Misconduct</h3>
            <p className="text-red-700 mb-6">
              If you have witnessed corruption, match-fixing, or a breach of the integrity code, you can submit an anonymous report directly to the Independent Judiciary Panel.
            </p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8">Submit Secure Report</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-red-600 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Secure Anonymous Report</DialogTitle>
                  <DialogDescription>
                    This channel is encrypted and strictly confidential. It goes directly to the independent legal panel.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Incident Type</Label>
                    <select id="type" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Match-Fixing / Illegal Betting</option>
                      <option>Financial Fraud / Embezzlement</option>
                      <option>Officiating Misconduct</option>
                      <option>Other Integrity Breach</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="details">Details</Label>
                    <Textarea id="details" placeholder="Describe what happened. Include dates, times, and involved parties if known." className="min-h-[150px]" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Submit to Independent Panel</Button>
                </div>
              </DialogContent>
            </Dialog>

          </div>

        </div>
      </section>

      <footer className="bg-black py-12 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p>© {new Date().getFullYear()} Football Federation Eswatini. All rights reserved.</p>
      </footer>
    </div>
  );
}
