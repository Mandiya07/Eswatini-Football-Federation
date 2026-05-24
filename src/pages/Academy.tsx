import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, FileDown, PlayCircle, Briefcase, TrendingUp, Presentation, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
            FFE Education Hub
          </span>
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Football Development Academy</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            A world-class education pipeline standardizing the training, certification, and continuous development of Eswatini's coaching staff, match officials, and club administrators.
          </p>
        </div>
      </section>

      <section className="py-20 flex-grow bg-zinc-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <Tabs defaultValue="coaches" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border rounded-xl p-1 h-auto shadow-sm">
                <TabsTrigger value="coaches" className="px-8 py-3 text-base data-[state=active]:bg-zinc-100 data-[state=active]:text-black rounded-lg">Coaching Licences</TabsTrigger>
                <TabsTrigger value="referees" className="px-8 py-3 text-base data-[state=active]:bg-zinc-100 data-[state=active]:text-black rounded-lg">Referee Certification</TabsTrigger>
                <TabsTrigger value="administrators" className="px-8 py-3 text-base data-[state=active]:bg-zinc-100 data-[state=active]:text-black rounded-lg">Club Administration</TabsTrigger>
              </TabsList>
            </div>

            {/* Coaching Education */}
            <TabsContent value="coaches" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Coaching Pathway</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Structured along CAF & FIFA guidelines, ensuring all clubs have highly qualified technical staff.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* D License */}
                <Card className="hover:border-black transition-colors relative overflow-hidden flex flex-col h-full">
                  <div className="h-2 w-full bg-blue-500 absolute top-0 left-0"></div>
                  <CardContent className="pt-8 flex flex-col flex-grow">
                    <Badge variant="outline" className="w-max mb-4 bg-blue-50 text-blue-700 hover:bg-blue-50">Grassroots</Badge>
                    <h3 className="font-bold text-2xl mb-2">FFE D-License</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      Entry-level qualification focusing on coaching children (U6-U12), basics of session planning, and safeguarding.
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <p className="font-medium text-sm mb-4">Requirements: <span className="text-gray-500 font-normal">None</span></p>
                      <Button className="w-full" variant="outline">View Syllabus</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* C License */}
                <Card className="hover:border-black transition-colors relative overflow-hidden flex flex-col h-full">
                  <div className="h-2 w-full bg-emerald-500 absolute top-0 left-0"></div>
                  <CardContent className="pt-8 flex flex-col flex-grow">
                    <Badge variant="outline" className="w-max mb-4 bg-emerald-50 text-emerald-700 hover:bg-emerald-50">Youth Development</Badge>
                    <h3 className="font-bold text-2xl mb-2">CAF C-License</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      Prepares coaches for youth development (U13-U19). Focuses on tactical principles, physical preparation, and young player psychology.
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <p className="font-medium text-sm mb-4">Requirements: <span className="text-gray-500 font-normal">D-License + 1 Year Exp.</span></p>
                      <Button className="w-full" variant="outline">View Syllabus</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* B License */}
                <Card className="hover:border-black transition-colors relative overflow-hidden flex flex-col h-full">
                  <div className="h-2 w-full bg-orange-500 absolute top-0 left-0"></div>
                  <CardContent className="pt-8 flex flex-col flex-grow">
                    <Badge variant="outline" className="w-max mb-4 bg-orange-50 text-orange-700 hover:bg-orange-50">Amateur Senior / Elite Youth</Badge>
                    <h3 className="font-bold text-2xl mb-2">CAF B-License</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      Focus on team tactics, advanced periodization, integrating sports science, and performance analysis.
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <p className="font-medium text-sm mb-4">Requirements: <span className="text-gray-500 font-normal">C-License + 2 Years Exp.</span></p>
                      <Button className="w-full" variant="outline">View Syllabus</Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* A License */}
                <Card className="hover:border-black transition-colors relative overflow-hidden flex flex-col h-full">
                  <div className="h-2 w-full bg-red-500 absolute top-0 left-0"></div>
                  <CardContent className="pt-8 flex flex-col flex-grow">
                    <Badge variant="outline" className="w-max mb-4 bg-red-50 text-red-700 hover:bg-red-50">Professional</Badge>
                    <h3 className="font-bold text-2xl mb-2">CAF A-License</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      MANDATORY for Major League Head Coaches. Highest standard covering pro club management, media relations, and advanced tactical systems.
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <p className="font-medium text-sm mb-4">Requirements: <span className="text-gray-500 font-normal">B-License + 2 Years Exp.</span></p>
                      <Button className="w-full bg-black text-white hover:bg-black/80">Apply for Selection</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Referee Certification */}
            <TabsContent value="referees" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Match Official Certification</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Rigorous pathway guaranteeing high-integrity, perfectly conditioned officials implementing the FIFA Laws of the Game.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                 <div className="bg-white p-8 rounded-2xl border flex flex-col h-full">
                    <h3 className="font-bold text-2xl mb-4 text-black border-b pb-4">Level 3: Regional Official</h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      Initial training over a 6-week intensive course. Covers the fundamental Laws of the Game, basic fitness assessments, and conflict resolution scenarios. Qualifies officials for amateur and grassroots regional matches.
                    </p>
                    <Button variant="outline" className="w-full">Register for Next Cohort</Button>
                 </div>
                 
                 <div className="bg-white p-8 rounded-2xl border flex flex-col h-full">
                    <h3 className="font-bold text-2xl mb-4 text-black border-b pb-4">Level 2: National Official</h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      Advanced physiological tracking, psychology of elite competition, and complex offside/foul interpretations. Candidates must pass quarterly strict fitness tests (yo-yo test). Qualifies officials for National First Division matches.
                    </p>
                    <Button variant="outline" className="w-full">View Promotion Criteria</Button>
                 </div>
              </div>

               <Card className="bg-black text-white p-6 border-none">
                 <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                       <div>
                          <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black mb-4">Elite Panel</Badge>
                          <h3 className="text-3xl font-bold mb-4">Level 1 & FIFA Badges</h3>
                          <p className="text-gray-300 mb-6 font-medium">
                            The pinnacle of officiating in Eswatini. These officials command Major League matches, undergo monthly physiological and psychological assessments, and utilize VAR (Video Assistant Referee) simulator environments.
                          </p>
                          <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Full-time professional contracts</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> High-performance lifestyle monitoring</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Eligible for FIFA International Nomination</li>
                          </ul>
                       </div>
                       <div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-800">
                         <img src="https://images.unsplash.com/photo-1543326727-b530c1be7b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Referee" className="w-full h-full object-cover opacity-80" />
                       </div>
                    </div>
                 </CardContent>
               </Card>
            </TabsContent>

            {/* Club Administration */}
            <TabsContent value="administrators" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Professional Masterclasses</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Expert-led video courses and certifications designed specifically for modern football club owners, CEOs, and administrative staff.
                </p>
               </div>
               
               <div className="grid md:grid-cols-3 gap-8">
                {/* Course 1 */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border-gray-200 flex flex-col">
                  <div className="aspect-video relative bg-zinc-800">
                    <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Club Management" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white opacity-80" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-primary text-white">6 Modules</Badge>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 font-medium">
                      <Briefcase className="w-4 h-4" /> Club Operations
                    </div>
                    <h3 className="font-bold text-xl mb-2">Modern Football Club Management</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-1">
                      Learn how to structure your club's organizational chart, manage matchday operations, and hire effective technical staff.
                    </p>
                    <Button className="w-full bg-black text-white hover:bg-black/80 mt-auto">Start Course</Button>
                  </CardContent>
                </Card>

                {/* Course 2 */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border-gray-200 flex flex-col">
                  <div className="aspect-video relative bg-zinc-800">
                    <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Finance" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white opacity-80" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-primary text-white">4 Modules</Badge>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 font-medium">
                      <TrendingUp className="w-4 h-4" /> Finance
                    </div>
                    <h3 className="font-bold text-xl mb-2">Sustainable Football Finance</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-1">
                      Master budgeting, Financial Fair Play compliance, player wage structuring, and revenue diversification strategies.
                    </p>
                    <Button className="w-full bg-black text-white hover:bg-black/80 mt-auto">Start Course</Button>
                  </CardContent>
                </Card>

                {/* Course 3 */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border-gray-200 flex flex-col">
                  <div className="aspect-video relative bg-zinc-800">
                    <img src="https://images.unsplash.com/photo-1553152531-7aecda7c046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Marketing" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white opacity-80" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-primary text-white">5 Modules</Badge>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 font-medium">
                      <Presentation className="w-4 h-4" /> Branding
                    </div>
                    <h3 className="font-bold text-xl mb-2">Sports Marketing & Sponsorships</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-1">
                      Discover how to value your commercial assets, pitch to corporate sponsors, and build a digital fanbase.
                    </p>
                    <Button className="w-full bg-black text-white hover:bg-black/80 mt-auto">Start Course</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

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
            <div className="flex gap-2 flex-wrap">
               <Badge variant="outline" className="text-sm py-1 cursor-pointer hover:bg-gray-100">All</Badge>
               <Badge variant="outline" className="text-sm py-1 cursor-pointer hover:bg-gray-100">Finance</Badge>
               <Badge variant="outline" className="text-sm py-1 cursor-pointer hover:bg-gray-100">Legal</Badge>
               <Badge variant="outline" className="text-sm py-1 cursor-pointer hover:bg-gray-100">Marketing</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Template Items */}
            {[
              { 
                title: "CAF Club Licensing Regulations 2022", 
                cat: "Governance", 
                icon: FileDown, 
                size: "External PDF",
                link: "https://www.cafonline.com/media/x2sbps4z/caf-club-licensing-regulations-2022-en.pdf"
              },
              { 
                title: "FIFA Laws of the Game", 
                cat: "Rules", 
                icon: BookOpen, 
                size: "External PDF",
                link: "https://downloads.theifab.com/downloads/laws-of-the-game-2023-24?l=en"
              },
              { 
                title: "Standard Professional Player Contract", 
                cat: "Legal", 
                icon: FileDown, 
                size: "1.2 KB TXT",
                link: "data:text/plain;charset=utf-8," + encodeURIComponent(`# Standard Professional Player Contract\n\nENTERED INTO BY AND BETWEEN:\n[Club Name] (Hereinafter referred to as "The Club")\nAND\n[Player Name] (Hereinafter referred to as "The Player")\n\n1. TERM OF EMPLOYMENT\nThe Club employs the Player as a professional football player starting on [Start Date] and ending on [End Date].\n\n2. REMUNERATION\nThe Club shall pay the Player a monthly basic salary of [Amount] SZL, payable on the last day of each month.\n\n3. PLAYER OBLIGATIONS\nThe Player agrees to:\n- Attend all training sessions and matches.\n- Maintain a high level of physical fitness.\n- Comply with Club disciplinary rules and FFE regulations.\n\n4. COMMERCIAL RIGHTS\nThe Player grants the Club the right to use their image for Club promotional activities.`),
                downloadName: "Player_Contract_Template.txt"
              },
              { 
                title: "Annual Budget Estimator Spreadsheet", 
                cat: "Finance", 
                icon: TrendingUp, 
                size: "1 KB CSV",
                link: "data:text/csv;charset=utf-8," + encodeURIComponent(`Category,Item,Estimated Cost (SZL),Notes\nRevenue,Matchday Tickets,150000,Based on 5000 average attendance\nRevenue,Sponsorships,300000,Main shirt sponsor and partners\nRevenue,Merchandise,50000,Kit sales and accessories\nExpenditure,Player Wages,250000,Senior team only\nExpenditure,Staff Wages,100000,Coaching and admin\nExpenditure,Travel,50000,Away matches transport\nExpenditure,Facilities,80000,Stadium and training pitch maintenance`),
                downloadName: "Annual_Budget_Estimator.csv"
              },
              { 
                title: "Standard Club Business Plan Outline", 
                cat: "Finance/Ops", 
                icon: Presentation, 
                size: "1 KB TXT",
                link: "data:text/plain;charset=utf-8," + encodeURIComponent(`# Football Club Business Plan Template\n\n1. Executive Summary\n   - Club Vision and Mission\n   - Core Objectives\n2. Organizational Structure\n   - Board of Directors\n   - Technical Staff\n3. Infrastructure\n   - Stadium Details\n   - Training Facilities\n4. Financial Plan\n   - Revenue Streams (Matchday, Sponsorship, Broadcast)\n   - Expenditure (Wages, Travel, Operations)\n5. Marketing and Communications\n   - Fan Engagement Strategy\n   - Social Media Guidelines`),
                downloadName: "Club_Business_Plan_Outline.txt"
              },
              { 
                title: "Matchday Operations Checklist", 
                cat: "Operations", 
                icon: CheckCircle2, 
                size: "1 KB TXT",
                link: "data:text/plain;charset=utf-8," + encodeURIComponent(`# Matchday Operations Checklist\n\n[ ] Pre-Match (T-4 Hours)\n  - Stadium inspection (pitch, goals, nets)\n  - Locker rooms cleaned and stocked\n  - Medical equipment and ambulance on standby\n[ ] Security (T-2 Hours)\n  - Briefing with security personnel\n  - Gate checks setup\n[ ] Team Arrival (T-1.5 Hours)\n  - Escort teams to locker rooms\n  - Submit official team sheets to referees\n[ ] Kickoff (T-0)\n  - Verify ball boys/girls positioned\n  - Confirm broadcast/media readiness`),
                downloadName: "Matchday_Operations_Checklist.txt"
              },
            ].map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" download={item.downloadName} className="flex items-center justify-between p-6 rounded-2xl border border-gray-200 hover:border-black transition-colors group">
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
                <div className="text-gray-400 group-hover:text-black">
                  <FileDown className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Certifications (Admin) */}
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
