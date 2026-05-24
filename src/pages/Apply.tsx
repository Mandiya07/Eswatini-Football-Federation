import * as React from 'react';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, CheckCircle2, Building, FileText, ArrowRight, ArrowLeft, Landmark, MapPin, Search } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function Apply() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("apply");
  const [statusAppId, setStatusAppId] = useState("");
  const [appStatus, setAppStatus] = useState<null | 'Pending' | 'Under Review' | 'Approved' | 'Not Found' | 'Rejected'>(null);
  const [clubName, setClubName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, loading } = useAuth();

  const totalSteps = 5;
  
  // Represents form progress
  const progress = ((step - 1) / totalSteps) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to apply.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'applications'), {
        clubName: clubName,
        status: 'Pending',
        userId: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting application", error);
      alert("Failed to submit application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!statusAppId.trim() || !user) return;
    
    try {
      // For real implementation, usually we query by the document ID.
      // But standard firestore rules might block getting a doc by arbitrary ID if you don't own it.
      // Assuming they enter the exact document ID or something. 
      // If the user is checking their own application:
      const q = query(collection(db, 'applications'), where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);
      
      let found = false;
      querySnapshot.forEach((doc) => {
        if (doc.id === statusAppId || doc.data().clubName.toLowerCase().includes(statusAppId.toLowerCase())) {
          setAppStatus(doc.data().status);
          found = true;
        }
      });
      
      if (!found) {
        setAppStatus('Not Found');
      }
    } catch (error) {
      console.error("Error checking status", error);
      setAppStatus('Not Found');
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-zinc-50 font-sans flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
        <Navbar />
        <main className="container mx-auto px-4 py-20 flex-grow flex items-center justify-center">
          <Card className="max-w-2xl w-full text-center border-none shadow-xl bg-white p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Login Required</h2>
            <p className="text-gray-600 mb-8 text-lg">
              You must be logged in to access the Digital Licensing Engine and submit a club application.
            </p>
          </Card>
        </main>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
        <Navbar />
        <main className="container mx-auto px-4 py-20 flex-grow flex items-center justify-center">
          <Card className="max-w-2xl w-full text-center border-none shadow-xl bg-white p-8 md:p-12">
            <CheckCircle2 className="w-20 h-20 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Application Submitted</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Your licensing package has been successfully submitted to the FFE Digital Licensing Engine. 
              Our compliance officers will review your corporate and infrastructure documents within 48 hours.
            </p>
            <div className="bg-zinc-50 border rounded-xl p-6 mb-8 text-left">
               <h3 className="font-bold mb-4 border-b pb-2">Next Steps & Approval Workflow</h3>
               <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                     <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Pending</span>
                     <span className="text-sm text-gray-700">Initial document screening (Current Status)</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">Under Review</span>
                     <span className="text-sm text-gray-700">Detailed compliance & finance audit by FFE</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Approved</span>
                     <span className="text-sm text-gray-700">Official licensing granted & equity secured</span>
                  </li>
               </ul>
            </div>
            <Button size="lg" className="bg-black text-white px-8" asChild>
              <Link to="/dashboard">Go to Club Dashboard</Link>
            </Button>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Navbar />
      
      <div className="bg-black text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <h1 className="text-4xl font-bold mb-4">Digital Licensing Engine</h1>
            <p className="text-gray-400 text-lg">Elite Club Compliance Portal: Submit your documentation to begin the corporate and infrastructure vetting process.</p>
         </div>
      </div>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white border p-1 rounded-xl shadow-sm">
                <TabsTrigger value="apply" className="px-6 py-2 rounded-lg data-[state=active]:bg-black data-[state=active]:text-white">New Application</TabsTrigger>
                <TabsTrigger value="status" className="px-6 py-2 rounded-lg data-[state=active]:bg-black data-[state=active]:text-white">Check Status</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="apply" className="mt-0">
               {/* Progress Tracker */}
               <div className="mb-12">
                 <div className="flex justify-between text-sm font-medium text-gray-500 mb-4 px-2">
                   <div className={`flex flex-col items-center gap-2 ${step >= 1 ? 'text-black' : ''}`}>
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-black text-white' : 'bg-gray-200'}`}>1</div>
                     <span className="hidden sm:block">Identity</span>
                   </div>
                   <div className={`flex flex-col items-center gap-2 ${step >= 2 ? 'text-black' : ''}`}>
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-black text-white' : 'bg-gray-200'}`}>2</div>
                     <span className="hidden sm:block">Officials</span>
                   </div>
                   <div className={`flex flex-col items-center gap-2 ${step >= 3 ? 'text-black' : ''}`}>
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-black text-white' : 'bg-gray-200'}`}>3</div>
                     <span className="hidden sm:block">Corporate</span>
                   </div>
                   <div className={`flex flex-col items-center gap-2 ${step >= 4 ? 'text-black' : ''}`}>
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 4 ? 'bg-black text-white' : 'bg-gray-200'}`}>4</div>
                     <span className="hidden sm:block">Infrastructure</span>
                   </div>
                   <div className={`flex flex-col items-center gap-2 ${step >= 5 ? 'text-black' : ''}`}>
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 5 ? 'bg-black text-white' : 'bg-gray-200'}`}>5</div>
                     <span className="hidden sm:block">Review</span>
                   </div>
                 </div>
                 <Progress value={step === 1 ? 20 : step === 2 ? 40 : step === 3 ? 60 : step === 4 ? 80 : 100} className="h-2 bg-gray-200 [&>div]:bg-black" />
                 <div className="text-center mt-4 text-sm text-gray-500 font-medium">Compliance Checklist: {step === 1 ? 20 : step === 2 ? 40 : step === 3 ? 60 : step === 4 ? 80 : 100}% Complete</div>
               </div>

               <Card className="border-none shadow-xl bg-white overflow-hidden">
                 <CardContent className="p-0">
                   <form onSubmit={handleSubmit}>
                 <div className="p-8 md:p-12">
                   
                   {/* STEP 1: Identity */}
                   {step === 1 && (
                     <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                       <div className="flex items-center gap-3 mb-8 pb-4 border-b">
                         <Building className="w-6 h-6 text-primary" />
                         <h2 className="text-2xl font-bold">1. Club Identity</h2>
                       </div>
                       
                       <div className="grid sm:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <Label htmlFor="clubName">Registered Club Name</Label>
                           <Input id="clubName" placeholder="e.g. Royal Lobamba FC" value={clubName} onChange={(e) => setClubName(e.target.value)} required />
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="yearFounded">Year Founded (if applicable)</Label>
                           <Input id="yearFounded" type="number" placeholder="2026" />
                         </div>
                       </div>
                       
                       <div className="space-y-2">
                          <Label htmlFor="region">Operating Region</Label>
                          <select id="region" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="">Select Region</option>
                            <option value="Hhohho">Hhohho</option>
                            <option value="Manzini">Manzini</option>
                            <option value="Shiselweni">Shiselweni</option>
                            <option value="Lubombo">Lubombo</option>
                          </select>
                       </div>

                       <div className="grid sm:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <Label htmlFor="contactName">Contact Person</Label>
                           <Input id="contactName" required placeholder="John Doe" />
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="contactEmail">Official Email Address</Label>
                           <Input id="contactEmail" type="email" required placeholder="admin@club.com" />
                         </div>
                       </div>
                     </div>
                   )}

                   {/* STEP 2: Officials */}
                   {step === 2 && (
                     <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                       <div className="flex items-center gap-3 mb-8 pb-4 border-b">
                         <MapPin className="w-6 h-6 text-primary" />
                         <h2 className="text-2xl font-bold">2. Key Officials</h2>
                       </div>
                       
                       <div className="grid sm:grid-cols-2 gap-6">
                         <div className="space-y-4 border p-4 rounded-xl">
                           <h3 className="font-bold border-b pb-2">President</h3>
                           <div className="space-y-2">
                             <Label htmlFor="presidentName">Name</Label>
                             <Input id="presidentName" required />
                           </div>
                           <div className="space-y-2">
                             <Label htmlFor="presidentContact">Contact Details</Label>
                             <Input id="presidentContact" required />
                           </div>
                         </div>
                         <div className="space-y-4 border p-4 rounded-xl">
                           <h3 className="font-bold border-b pb-2">CEO</h3>
                           <div className="space-y-2">
                             <Label htmlFor="ceoName">Name</Label>
                             <Input id="ceoName" required />
                           </div>
                           <div className="space-y-2">
                             <Label htmlFor="ceoContact">Contact Details</Label>
                             <Input id="ceoContact" required />
                           </div>
                         </div>
                         <div className="space-y-4 border p-4 rounded-xl">
                           <h3 className="font-bold border-b pb-2">Head Coach</h3>
                           <div className="space-y-2">
                             <Label htmlFor="coachName">Name</Label>
                             <Input id="coachName" required />
                           </div>
                           <div className="space-y-2">
                             <Label htmlFor="coachContact">Contact Details</Label>
                             <Input id="coachContact" required />
                           </div>
                         </div>
                         <div className="space-y-4 border p-4 rounded-xl">
                           <h3 className="font-bold border-b pb-2">Compliance Officer</h3>
                           <div className="space-y-2">
                             <Label htmlFor="complianceName">Name</Label>
                             <Input id="complianceName" required />
                           </div>
                           <div className="space-y-2">
                             <Label htmlFor="complianceContact">Contact Details</Label>
                             <Input id="complianceContact" />
                           </div>
                         </div>
                       </div>
                     </div>
                   )}

                   {/* STEP 3: Corporate */}
                   {step === 3 && (
                     <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                       <div className="flex items-center gap-3 mb-8 pb-4 border-b">
                         <Landmark className="w-6 h-6 text-primary" />
                         <h2 className="text-2xl font-bold">3. Corporate & Finance</h2>
                       </div>
                       
                       <div className="space-y-2 mb-6">
                         <Label htmlFor="companyReg">Company Registration Number</Label>
                         <Input id="companyReg" placeholder="e.g. 2026/12345/07" required />
                         <p className="text-xs text-gray-500 mt-1">Clubs must be registered commercial entities, not societies.</p>
                       </div>

                       <div className="space-y-4">
                          <Label>Upload Official Documents</Label>
                          
                          <div className="border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between hover:bg-zinc-50 cursor-pointer transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                   <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                   <p className="font-bold text-sm">Certificate of Incorporation</p>
                                   <p className="text-xs text-gray-500">PDF, up to 5MB</p>
                                </div>
                             </div>
                             <Button type="button" variant="outline" size="sm"><Upload className="w-4 h-4 mr-2" /> Upload</Button>
                          </div>

                          <div className="border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between hover:bg-zinc-50 cursor-pointer transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                   <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                   <p className="font-bold text-sm">Proof of Capital / Bank Letter</p>
                                   <p className="text-xs text-gray-500">Must show minimum E 1.5M operational capacity</p>
                                </div>
                             </div>
                             <Button type="button" variant="outline" size="sm"><Upload className="w-4 h-4 mr-2" /> Upload</Button>
                          </div>

                          <div className="border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between hover:bg-zinc-50 cursor-pointer transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                   <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                   <p className="font-bold text-sm">Independent Financial Audit</p>
                                   <p className="text-xs text-gray-500">Required for Financial Fair Play (FFP) Compliance</p>
                                </div>
                             </div>
                             <Button type="button" variant="outline" size="sm"><Upload className="w-4 h-4 mr-2" /> Upload</Button>
                          </div>
                          
                          <div className="border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between hover:bg-zinc-50 cursor-pointer transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                   <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                   <p className="font-bold text-sm">Directors ID / Passport Copies</p>
                                   <p className="text-xs text-gray-500">For background vetting</p>
                                </div>
                             </div>
                             <Button type="button" variant="outline" size="sm"><Upload className="w-4 h-4 mr-2" /> Upload</Button>
                          </div>
                       </div>
                     </div>
                   )}

                   {/* STEP 4: Infrastructure */}
                   {step === 4 && (
                     <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                       <div className="flex items-center gap-3 mb-8 pb-4 border-b">
                         <MapPin className="w-6 h-6 text-primary" />
                         <h2 className="text-2xl font-bold">4. Land, Infrastructure & Academy</h2>
                       </div>
                       
                       <div className="bg-black text-white p-6 rounded-xl mb-6">
                          <p className="text-sm font-medium mb-2 uppercase tracking-wide text-gray-400">Core Requirement</p>
                          <p className="text-sm leading-relaxed">To be eligible for the Major League, clubs must own at least 3 hectares of land designated for a training facility/stadium, AND demonstrate a commitment to Elite Youth Academies.</p>
                       </div>

                       <div className="space-y-4">
                          <Label>Upload Facilities & Academy Proof</Label>
                          
                          <div className="border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between hover:bg-zinc-50 cursor-pointer transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-secondary/20 rounded-full text-black">
                                   <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                   <p className="font-bold text-sm">Title Deed / Land Ownership Proof</p>
                                   <p className="text-xs text-gray-500">PDF Document</p>
                                </div>
                             </div>
                             <Button type="button" variant="outline" size="sm"><Upload className="w-4 h-4 mr-2" /> Upload</Button>
                          </div>

                          <div className="border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between hover:bg-zinc-50 cursor-pointer transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-secondary/20 rounded-full text-black">
                                   <Building className="w-5 h-5" />
                                </div>
                                <div>
                                   <p className="font-bold text-sm">Facility Development Plans</p>
                                   <p className="text-xs text-gray-500">Architectural drawings or blueprints for Stadium & Clinic</p>
                                </div>
                             </div>
                             <Button type="button" variant="outline" size="sm"><Upload className="w-4 h-4 mr-2" /> Upload</Button>
                          </div>

                          <div className="border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between hover:bg-zinc-50 cursor-pointer transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-secondary/20 rounded-full text-black">
                                   <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                   <p className="font-bold text-sm">Youth Academy Development Plan</p>
                                   <p className="text-xs text-gray-500">Outlining U19, U15, and U11 structure and educational integration.</p>
                                </div>
                             </div>
                             <Button type="button" variant="outline" size="sm"><Upload className="w-4 h-4 mr-2" /> Upload</Button>
                          </div>
                          
                          <div className="space-y-2 mt-4">
                            <Label htmlFor="facilityDetails">Facility Details & GPS Coordinates (Optional)</Label>
                            <Textarea id="facilityDetails" placeholder="Provide link to Google Maps coordinates or describe current infrastructure status..." />
                          </div>
                       </div>
                     </div>
                   )}

                   {/* STEP 5: Review */}
                   {step === 5 && (
                     <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                       <div className="flex items-center gap-3 mb-8 pb-4 border-b">
                         <CheckCircle2 className="w-6 h-6 text-primary" />
                         <h2 className="text-2xl font-bold">5. Review & Declarations</h2>
                       </div>
                       
                       <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 mb-6">
                         <h3 className="font-bold mb-4">Declarations</h3>
                         
                         <div className="space-y-4">
                           <div className="flex gap-3">
                             <input type="checkbox" id="dec1" className="mt-1 w-4 h-4 accent-primary" required />
                             <label htmlFor="dec1" className="text-sm text-gray-700 leading-relaxed">
                               I declare that all information provided is accurate and true. I understand that falsifying documents will lead to immediate lifetime ban from the Football Federation Eswatini.
                             </label>
                           </div>
                           <div className="flex gap-3">
                             <input type="checkbox" id="dec2" className="mt-1 w-4 h-4 accent-primary" required />
                             <label htmlFor="dec2" className="text-sm text-gray-700 leading-relaxed">
                               The club agrees to abide by the FFE Constitution, Financial Fair Play Regulations, and the Anti-Corruption Code.
                             </label>
                           </div>
                           <div className="flex gap-3">
                             <input type="checkbox" id="dec3" className="mt-1 w-4 h-4 accent-primary" required />
                             <label htmlFor="dec3" className="text-sm text-gray-700 leading-relaxed">
                               I authorize the FFE to conduct independent verification of company registration and land deeds with relevant national authorities.
                             </label>
                           </div>
                         </div>
                       </div>
                     </div>
                   )}

                 </div>

                 {/* Navigation Footer */}
                 <div className="bg-gray-50 p-6 border-t flex justify-between items-center rounded-b-xl">
                   {step > 1 ? (
                     <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                       <ArrowLeft className="w-4 h-4 mr-2" /> Back
                     </Button>
                   ) : (
                     <div></div> // Spacer
                   )}
                   
                   {step < 5 ? (
                     <Button type="button" onClick={() => setStep(step + 1)} className="bg-black text-white px-8 hover:bg-black/80">
                       Next Step <ArrowRight className="w-4 h-4 ml-2" />
                     </Button>
                   ) : (
                     <Button type="submit" className="bg-primary text-white px-8 hover:bg-primary/90 text-lg h-12">
                       Submit to Licensing Engine
                     </Button>
                   )}
                 </div>
               </form>
             </CardContent>
           </Card>
           </TabsContent>

           <TabsContent value="status" className="mt-0">
              <Card className="border-none shadow-xl bg-white overflow-hidden p-8 md:p-12 text-center max-w-2xl mx-auto">
                 <Search className="w-16 h-16 text-primary mx-auto mb-6" />
                 <h2 className="text-3xl font-bold mb-4">Application Status Tracker</h2>
                 <p className="text-gray-600 mb-8">Enter your secure Application ID (ex: ends with 1, 2, or 3 for mock results) to check the real-time progress of your licensing review.</p>
                 <form onSubmit={handleCheckStatus} className="flex gap-2 max-w-md mx-auto mb-8">
                     <Input 
                       placeholder="e.g. FFE-26-XXXX-1" 
                       value={statusAppId} 
                       onChange={(e) => setStatusAppId(e.target.value)}
                       required
                       className="text-center bg-zinc-50 font-mono"
                     />
                     <Button type="submit" className="bg-black text-white hover:bg-black/80">Check Status</Button>
                 </form>

                 {appStatus && (
                   <div className="bg-zinc-50 border rounded-xl p-6 text-left animate-in fade-in slide-in-from-bottom-2">
                      <h3 className="font-bold text-lg mb-4 text-center border-b pb-4">Status Result</h3>
                      {appStatus === 'Pending' && (
                        <div className="flex flex-col items-center gap-4">
                           <div className="p-4 bg-yellow-100 rounded-full">
                              <FileText className="text-yellow-600 w-8 h-8" />
                           </div>
                           <div className="text-center">
                             <h4 className="text-xl font-bold text-yellow-600 mb-2">Pending Initial Review</h4>
                             <p className="text-gray-600 text-sm">Your application has been received and is awaiting initial document screening by the compliance team. Please allow 48-72 hours.</p>
                           </div>
                        </div>
                      )}
                      {appStatus === 'Under Review' && (
                        <div className="flex flex-col items-center gap-4">
                           <div className="p-4 bg-blue-100 rounded-full">
                              <Search className="text-blue-600 w-8 h-8" />
                           </div>
                           <div className="text-center">
                             <h4 className="text-xl font-bold text-blue-600 mb-2">Under Review</h4>
                             <p className="text-gray-600 text-sm">Your application is currently undergoing detailed commercial and infrastructure audits by the FFE compliance committee.</p>
                           </div>
                        </div>
                      )}
                      {appStatus === 'Approved' && (
                        <div className="flex flex-col items-center gap-4">
                           <div className="p-4 bg-green-100 rounded-full">
                              <CheckCircle2 className="text-green-600 w-8 h-8" />
                           </div>
                           <div className="text-center">
                             <h4 className="text-xl font-bold text-green-600 mb-2">Approved</h4>
                             <p className="text-gray-600 text-sm">Congratulations! Your licensing package has been approved. You are now officially cleared for next steps in the FFE Major League.</p>
                           </div>
                        </div>
                      )}
                      {appStatus === 'Not Found' && (
                        <div className="flex flex-col items-center gap-4">
                           <div className="p-4 bg-red-100 rounded-full">
                              <CheckCircle2 className="text-red-500 w-8 h-8 hidden" />
                              <span className="font-bold text-red-600 text-2xl">X</span>
                           </div>
                           <div className="text-center">
                             <h4 className="text-xl font-bold text-red-600 mb-2">Application Not Found</h4>
                             <p className="text-gray-600 text-sm">We could not find an application with this ID. Please check your ID and try again, or contact compliance via email.</p>
                           </div>
                        </div>
                      )}
                   </div>
                 )}
              </Card>
           </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
