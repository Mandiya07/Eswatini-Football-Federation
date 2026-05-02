import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { FileCheck, Upload, Building, Info, Landmark, CheckCircle2, ShieldCheck, Mail, MapPin, Camera, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  // Mock login essentially 
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Navbar />
      
      <div className="bg-black text-white h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-1efdb08e7cf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
            <div className="flex items-center gap-6">
               <div className="w-24 h-24 bg-white text-black rounded-lg flex items-center justify-center border-4 border-zinc-50 shadow-lg">
                  <ShieldCheck className="w-12 h-12" />
               </div>
               <div>
                  <h1 className="text-3xl font-bold">Mbabane United FC</h1>
                  <p className="text-gray-400">Club Dashboard & Licensing Portal</p>
               </div>
            </div>
         </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8 bg-zinc-200/50 p-1 flex-wrap h-auto">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white">Overview</TabsTrigger>
            <TabsTrigger value="compliance" className="data-[state=active]:bg-white">Licensing & Compliance</TabsTrigger>
            <TabsTrigger value="infrastructure" className="data-[state=active]:bg-white">Infrastructure</TabsTrigger>
            <TabsTrigger value="financials" className="data-[state=active]:bg-white">Financials</TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-white">Governance Docs</TabsTrigger>
            <TabsTrigger value="investment" className="data-[state=active]:bg-white">Funding Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>League Updates & Communications</CardTitle>
                    <CardDescription>Official announcements from the Indvundvundvwane Football Federation.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-l-4 border-primary pl-4 py-1">
                      <div className="flex justify-between items-start mb-1">
                         <h4 className="font-bold text-lg">2026/2027 Pre-season Registration Deadline Extended</h4>
                         <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">Today, 09:00</span>
                      </div>
                      <p className="text-gray-600 text-sm">Please be advised that the deadline for pre-season squad registration has been extended to August 15th due to ongoing integration with the new FIFA TMS.</p>
                      <Button variant="link" className="p-0 h-auto text-primary mt-2">Read full circular &rarr;</Button>
                    </div>
                    
                    <div className="border-l-4 border-gray-300 pl-4 py-1">
                      <div className="flex justify-between items-start mb-1">
                         <h4 className="font-bold text-lg">New Commercial Sponsorship Guidelines</h4>
                         <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">May 12, 2026</span>
                      </div>
                      <p className="text-gray-600 text-sm">The new guidelines regarding front-of-shirt sponsors and betting company restrictions have been published in the Document Hub.</p>
                      <Button variant="link" className="p-0 h-auto text-primary mt-2">View guidelines &rarr;</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                 <Card>
                    <CardHeader>
                       <CardTitle className="text-lg">Quick Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Licensing Progress</span>
                          <span className="font-bold">70%</span>
                       </div>
                       <Progress value={70} className="h-2" />
                       <div className="flex justify-between items-center text-sm pt-2">
                          <span className="text-gray-500">Financial Audit</span>
                          <span className="text-yellow-600 font-bold bg-yellow-100 px-2 rounded">Due in 14 days</span>
                       </div>
                       <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Player Contracts</span>
                          <span className="text-blue-600 font-bold bg-blue-100 px-2 rounded">Up to date</span>
                       </div>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compliance">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Major League License Status</CardTitle>
                    <CardDescription>Track your compliance progress to secure one of the 16 spots.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold text-2xl text-black">70% Complete</span>
                       <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">Under Review</span>
                    </div>
                    <Progress value={70} className="h-3 mb-8" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50/50">
                        <div className="flex items-center gap-3">
                           <CheckCircle2 className="w-6 h-6 text-blue-600" />
                           <div>
                             <p className="font-bold">Corporate Entity Registration</p>
                             <p className="text-sm text-gray-500">Approved by IFF Legal</p>
                           </div>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50/50">
                        <div className="flex items-center gap-3">
                           <CheckCircle2 className="w-6 h-6 text-blue-600" />
                           <div>
                             <p className="font-bold">Financial Audits (Last 2 Years)</p>
                             <p className="text-sm text-gray-500">Approved by IFF Finance</p>
                           </div>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg border-primary/50 bg-primary/5">
                        <div className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin-slow"></div>
                           <div>
                             <p className="font-bold">Land & Stadium Ownership Proof</p>
                             <p className="text-sm text-gray-500">Awaiting deed verification from deeds registry.</p>
                           </div>
                        </div>
                        <Button size="sm">Upload Addendums</Button>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                        <div className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                           <div>
                             <p className="font-bold text-gray-500">Training Facility Verification</p>
                             <p className="text-sm text-gray-500">Not started.</p>
                           </div>
                        </div>
                        <Button variant="outline" size="sm">Start</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                 <Card className="bg-black text-white">
                    <CardHeader>
                       <CardTitle className="text-xl">Upload Documents</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                          <p className="font-bold mb-1">Drag and drop</p>
                          <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB</p>
                       </div>
                    </CardContent>
                 </Card>

                 <Card>
                    <CardHeader>
                       <CardTitle className="text-lg">Compliance Officer</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
                          <div>
                             <p className="font-bold text-sm">Sipho Dlamini</p>
                             <p className="text-xs text-gray-500">IFF Compliance Desk</p>
                          </div>
                       </div>
                       <Button variant="outline" className="w-full flex gap-2"><Mail className="w-4 h-4"/> Message Officer</Button>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="infrastructure">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                 <Card>
                   <CardHeader>
                     <CardTitle>Infrastructure Verification</CardTitle>
                     <CardDescription>Upload facility proofs to verify your club's infrastructure compliance.</CardDescription>
                   </CardHeader>
                   <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                          <div className="flex items-center gap-4">
                             <div className="p-3 bg-zinc-100 text-zinc-900 rounded-lg">
                                <Building className="w-5 h-5" />
                             </div>
                             <div>
                               <p className="font-bold">Facility Development Plans</p>
                               <p className="text-sm text-gray-500">Provide blueprints or architectural drawings.</p>
                             </div>
                          </div>
                          <Button size="sm" variant="outline"><Upload className="w-4 h-4 mr-2"/> Upload</Button>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50">
                          <div className="flex items-center gap-4">
                             <div className="p-3 bg-zinc-100 text-zinc-900 rounded-lg">
                                <Camera className="w-5 h-5" />
                             </div>
                             <div>
                               <p className="font-bold">Stadium / Training Ground Photos</p>
                               <p className="text-sm text-gray-500">Current state. Minimum 4 clear angles.</p>
                             </div>
                          </div>
                          <Button size="sm" variant="outline"><Upload className="w-4 h-4 mr-2"/> Upload</Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-primary/5 border-primary/20">
                          <div className="flex items-center gap-4">
                             <div className="p-3 bg-primary/10 text-primary rounded-lg">
                                <MapPin className="w-5 h-5" />
                             </div>
                             <div>
                               <p className="font-bold text-gray-900">GPS Coordinates & Location</p>
                               <p className="text-sm text-gray-500 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-500"/> Verified: <span>-26.3167, 31.1333</span></p>
                             </div>
                          </div>
                          <Button variant="outline" size="sm">Update</Button>
                        </div>
                      </div>
                   </CardContent>
                 </Card>
              </div>
              <div className="space-y-6">
                 <Card className="bg-black text-white">
                    <CardHeader>
                       <CardTitle className="text-xl">Infrastructure Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex items-center justify-between">
                         <span className="text-gray-400">Stadium Rating</span>
                         <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded text-xs font-bold">CATEGORY 2</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <span className="text-gray-400">Training Facility</span>
                         <span className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded text-xs font-bold">APPROVED</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <span className="text-gray-400">Public Profile</span>
                         <span className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded text-xs font-bold">ON MAP</span>
                       </div>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="financials">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                 <Card>
                   <CardHeader>
                     <CardTitle>Financials & Reports</CardTitle>
                     <CardDescription>Securely submit and track your club's financial obligations.</CardDescription>
                   </CardHeader>
                   <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-red-100 text-red-600 rounded">
                                <Landmark className="w-6 h-6" />
                             </div>
                             <div>
                               <p className="font-bold">2026 Q1 Financial Report</p>
                               <p className="text-sm text-red-500 font-medium">Overdue by 5 days</p>
                             </div>
                          </div>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white"><Upload className="w-4 h-4 mr-2"/> Submit Now</Button>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 border-gray-200">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-gray-200 text-gray-600 rounded">
                                <Landmark className="w-6 h-6" />
                             </div>
                             <div>
                               <p className="font-bold text-gray-700">2025 Annual Audit Report</p>
                               <p className="text-sm text-blue-600 font-medium flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Approved & Verified</p>
                             </div>
                          </div>
                          <Button variant="outline" size="sm">Download</Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 border-gray-200">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-gray-200 text-gray-600 rounded">
                                <Landmark className="w-6 h-6" />
                             </div>
                             <div>
                               <p className="font-bold text-gray-700">Proof of Academy Funding (Minimum 5%)</p>
                               <p className="text-sm text-blue-600 font-medium flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Met Requirement (8.2%)</p>
                             </div>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                   </CardContent>
                 </Card>
              </div>
              <div className="space-y-6">
                 <Card className="bg-black text-white">
                    <CardHeader>
                       <CardTitle className="text-xl">Secure Upload</CardTitle>
                       <CardDescription className="text-gray-400">All submissions are encrypted and available only to the IFF Finance Committee.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto mb-3 text-primary" />
                          <p className="font-bold mb-1">Upload Financial Docs</p>
                          <p className="text-xs text-gray-400">Excel, PDF, CSV up to 25MB</p>
                       </div>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents">
             <Card>
               <CardHeader>
                 <CardTitle>Governance Documents</CardTitle>
                 <CardDescription>Private documents issued by the Federation to your club.</CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="p-3 bg-white border rounded-lg shadow-sm">
                            <FileCheck className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <p className="font-bold">2026/2027 Major League Rulebook</p>
                            <p className="text-sm text-gray-500">Updated: May 1, 2026</p>
                         </div>
                      </div>
                      <Button variant="outline" size="sm">Download PDF</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="p-3 bg-white border rounded-lg shadow-sm">
                            <FileCheck className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <p className="font-bold">National Disciplinary Code v4</p>
                            <p className="text-sm text-gray-500">Updated: Dec 15, 2025</p>
                         </div>
                      </div>
                      <Button variant="outline" size="sm">Download PDF</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="p-3 bg-white border rounded-lg shadow-sm">
                            <FileCheck className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <p className="font-bold">Commercial Guidelines & Standards</p>
                            <p className="text-sm text-gray-500">Includes sponsorship restrictions</p>
                         </div>
                      </div>
                      <Button variant="outline" size="sm">Download PDF</Button>
                    </div>
                 </div>
               </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="investment">
             <Card>
               <CardHeader>
                 <CardTitle>Marketplace Pitch</CardTitle>
                 <CardDescription>Manage your public funding profile visible to investors.</CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="bg-zinc-50 border rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                       <span className="font-bold text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Profile Live</span>
                       <Button variant="outline" size="sm">Edit Profile</Button>
                    </div>
                    <div className="space-y-4">
                       <div>
                          <p className="text-sm font-bold text-gray-500">Seeking</p>
                          <p className="text-xl font-bold">E 2,500,000</p>
                       </div>
                       <div>
                          <p className="text-sm font-bold text-gray-500">For</p>
                          <p className="font-medium">Land acquisition for permanent training facility</p>
                       </div>
                       <div>
                          <p className="text-sm font-bold text-gray-500">Equity Offered</p>
                          <p className="font-medium">15%</p>
                       </div>
                    </div>
                 </div>
               </CardContent>
             </Card>
          </TabsContent>

        </Tabs>
      </main>
      
      <footer className="bg-black py-8 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p className="text-sm">IFF Member Portal v1.0</p>
      </footer>
    </div>
  );
}
