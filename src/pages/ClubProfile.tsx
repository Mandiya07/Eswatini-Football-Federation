import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CLUBS } from '@/data/clubs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  MapPin, 
  ShieldCheck, 
  Camera, 
  Globe, 
  Twitter, 
  Instagram, 
  Users, 
  Trophy, 
  History, 
  ArrowLeft,
  Calendar,
  CheckCircle2,
  FileText,
  TrendingUp,
  UserCheck,
  Target,
  Heart,
  BarChart3,
  Activity,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const customIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3" fill="white"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function ClubProfile() {
  const { id } = useParams<{ id: string }>();
  const club = CLUBS.find(c => c.id === Number(id));

  if (!club) {
    return (
      <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Club not found</h1>
        <Button asChild><Link to="/clubs">Return to Clubs</Link></Button>
      </div>
    );
  }

  // Mock data for the specific club
  const roster = [
    { name: "Sibusiso Dlamini", position: "Goalkeeper", number: 1, apps: 24, goals: 0, assists: 0, yellow: 1, red: 0 },
    { name: "Mlungisi Ndlovu", position: "Defender", number: 4, apps: 22, goals: 1, assists: 1, yellow: 4, red: 0 },
    { name: "Vusi Mabuza", position: "Midfielder", number: 8, apps: 25, goals: 3, assists: 6, yellow: 3, red: 0 },
    { name: "Sifiso Zwane", position: "Forward", number: 9, apps: 20, goals: 12, assists: 2, yellow: 1, red: 0 },
    { name: "Bongani Nxumalo", position: "Forward", number: 11, apps: 18, goals: 7, assists: 3, yellow: 0, red: 0 },
    { name: "Thabo Kunene", position: "Midfielder", number: 10, apps: 21, goals: 5, assists: 8, yellow: 2, red: 0 },
    { name: "Zinhle Magagula", position: "Defender", number: 13, apps: 15, goals: 0, assists: 0, yellow: 5, red: 1 },
    { name: "Mandla Gwebu", position: "Defender", number: 20, apps: 12, goals: 2, assists: 1, yellow: 2, red: 0 },
  ];

  const recentMatches = [
    { 
      opponent: "Royal Leopards", 
      result: "W", 
      score: "2-0", 
      date: "April 24, 2026", 
      type: "League",
      stats: {
        possession: "54%",
        shotsOnTarget: "8/14",
        fouls: "12",
        corners: "6",
        performers: [
          { name: "Sifiso Zwane", rating: 8.7, contribution: "2 goals, 1 assist" },
          { name: "Vusi Mabuza", rating: 7.9, contribution: "92% pass accuracy" },
          { name: "Sibusiso Dlamini", rating: 7.5, contribution: "3 clean saves" }
        ]
      }
    },
    { 
      opponent: "Mbabane Highlanders", 
      result: "D", 
      score: "1-1", 
      date: "April 18, 2026", 
      type: "League",
      stats: {
        possession: "48%",
        shotsOnTarget: "4/9",
        fouls: "16",
        corners: "4",
        performers: [
          { name: "Bongani Nxumalo", rating: 7.6, contribution: "1 goal" },
          { name: "Mlungisi Ndlovu", rating: 7.2, contribution: "5 interceptions" }
        ]
      }
    },
    { 
      opponent: "Green Mamba", 
      result: "L", 
      score: "0-1", 
      date: "April 10, 2026", 
      type: "Cup",
      stats: {
        possession: "56%",
        shotsOnTarget: "3/18",
        fouls: "10",
        corners: "9",
        performers: [
          { name: "Thabo Kunene", rating: 7.1, contribution: "6 chances created" },
          { name: "Vusi Mabuza", rating: 6.9, contribution: "8 ball recoveries" }
        ]
      }
    },
    { 
      opponent: "Young Buffaloes", 
      result: "W", 
      score: "3-1", 
      date: "April 2, 2026", 
      type: "League",
      stats: {
        possession: "51%",
        shotsOnTarget: "9/12",
        fouls: "14",
        corners: "5",
        performers: [
          { name: "Sifiso Zwane", rating: 9.1, contribution: "Hat-trick" },
          { name: "Thabo Kunene", rating: 8.4, contribution: "2 assists" }
        ]
      }
    },
  ];

  const [expandedMatch, setExpandedMatch] = React.useState<number | null>(null);

  const photos = [
    club.image,
    "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518605368461-1e1e11415082?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: `url('${club.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10 text-white">
          <Link to="/clubs" className="inline-flex items-center text-sm font-medium hover:text-blue-400 transition-colors mb-6 text-gray-300">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Clubs
          </Link>
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline" className="text-blue-400 border-blue-400 uppercase tracking-widest">{club.category} Division</Badge>
                {club.category === 'Elite' && (
                  <Badge variant="secondary" className="bg-blue-600 text-white border-none flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Elite Certified
                  </Badge>
                )}
                {club.funding && (
                  <Badge className="bg-yellow-500 text-black border-none flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Investment Ready
                  </Badge>
                )}
                <Badge variant="outline" className="text-green-400 border-green-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Infrastructure Verified
                </Badge>
              </div>
              <h1 className="text-5xl font-bold tracking-tighter mb-2">{club.name}</h1>
              <p className="text-xl text-gray-300 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" /> {club.city}, Eswatini
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button asChild size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white transition-all hover:scale-110">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white transition-all hover:scale-110">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white transition-all hover:scale-110">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview & Key Goals */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Target className="w-5 h-5 text-red-600" /> Season Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5" />
                      <span>Top 3 Finish in Elite Division</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5" />
                      <span>Qualify for CAF Confederation Cup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5" />
                      <span>Launch U-17 Youth Academy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Heart className="w-5 h-5 text-pink-600" /> Community Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-1.5" />
                      <span>Weekly Free Schools Clinic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-1.5" />
                      <span>Sustainable Stadium Recycling Initiative</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-1.5" />
                      <span>Local Business Partnership Network</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* History & Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <History className="w-6 h-6 text-blue-600" /> Club Overview & History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {club.description} Founded in the early days of professional football in Eswatini, the club has grown to become one of the most recognized institutions in the region.
                </p>
                <p>
                  The club has always stood for technical excellence and community engagement. Over the decades, they have produced numerous national team players and won several domestic cups. Their commitment to the new FFE professional standards aligns perfectly with their modern vision for a sustainable football enterprise.
                </p>
              </CardContent>
            </Card>

            {/* Investment Pitch & Funding Needs (Dynamic) */}
            {club.funding && (
              <Card className="border-t-4 border-t-yellow-500 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-2 text-yellow-600">
                         Investment Pitch & Funding Needs
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        Active equity offering on the FFE Investment Marketplace.
                      </CardDescription>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 px-3 py-1 text-sm">
                      {club.funding.stage} Round
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-zinc-50 border rounded-lg">
                       <p className="text-sm text-gray-500 mb-1">Target Capital</p>
                       <p className="font-bold text-3xl text-blue-600">{club.funding.seeking}</p>
                    </div>
                    <div className="p-4 bg-zinc-50 border rounded-lg">
                       <p className="text-sm text-gray-500 mb-1">Equity Offered</p>
                       <p className="font-bold text-3xl text-gray-900">{club.funding.equity}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Use of Funds</h4>
                    <p className="text-gray-700 p-4 bg-blue-50/50 border border-blue-100 rounded-lg">{club.funding.purpose}</p>
                  </div>

                  <div className="mb-6">
                     <div className="flex justify-between text-sm text-gray-500 mb-2">
                       <span>Funding Progress</span>
                       <span className="font-bold text-gray-900">{club.funding.progress}%</span>
                     </div>
                     <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-blue-600 rounded-full h-3" style={{ width: `${club.funding.progress}%` }}></div>
                     </div>
                  </div>
                  
                  <div className="flex gap-4">
                     <Button className="flex-1 bg-black text-white hover:bg-black/80">Request Pitch Deck</Button>
                     <Button variant="outline" className="flex-1 border-gray-300 text-black">Contact Club Board</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Infrastructure Verification Section */}
            <Card className="border-t-4 border-t-red-600 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Building className="w-6 h-6 text-red-600" /> Infrastructure Verification
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      Official FFE compliance record for facilities and infrastructure.
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-3 py-1">
                    <CheckCircle2 className="w-4 h-4 mr-1" /> Approved
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Map */}
                  <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 h-64 relative z-0">
                    <MapContainer 
                      center={club.location as [number, number]} 
                      zoom={13} 
                      scrollWheelZoom={false} 
                      style={{ height: '100%', width: '100%' }}
                      className="z-0"
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                      />
                      <Marker position={club.location as [number, number]} icon={customIcon}>
                        <Popup>{club.stadium}</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                  
                  {/* Facility Details */}
                  <div className="space-y-4">
                    <div className="p-4 bg-zinc-50 border rounded-lg">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Primary Stadium</h4>
                      <p className="text-lg font-bold text-gray-900">{club.stadium}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-sm text-gray-600">Capacity</span>
                        <span className="font-bold">{club.capacity.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-600">Turf Type</span>
                        <span className="font-medium text-gray-900">Natural Grass</span>
                      </div>
                    </div>

                    <div className="p-4 bg-zinc-50 border rounded-lg flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Facility Development Plan</p>
                        <p className="text-xs text-gray-500">2026-2030 Roadmap</p>
                        <a href="#" className="text-blue-600 text-xs font-medium hover:underline mt-1 inline-block">Download PDF</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verified Photos */}
                <div>
                  <h4 className="text-sm font-bold flex items-center gap-2 mb-3">
                    <Camera className="w-4 h-4 text-gray-500" /> Verified Assessment Photos
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {photos.map((src, i) => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                        <img src={src} alt={`Stadium verify ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Performance Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" /> Recent Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentMatches.map((match, i) => (
                    <div key={i} className="border-b last:border-0 overflow-hidden">
                      <div 
                        className={`flex items-center justify-between py-3 px-2 rounded-lg cursor-pointer transition-colors ${
                          expandedMatch === i ? 'bg-zinc-50' : 'hover:bg-zinc-50/50'
                        }`}
                        onClick={() => setExpandedMatch(expandedMatch === i ? null : i)}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 flex items-center justify-center rounded text-[10px] font-bold text-white shadow-sm ${
                            match.result === 'W' ? 'bg-green-500' : match.result === 'L' ? 'bg-red-500' : 'bg-zinc-400'
                          }`}>
                            {match.result}
                          </span>
                          <div>
                            <p className="text-sm font-bold leading-tight">{match.opponent}</p>
                            <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                              <Calendar className="w-2.5 h-2.5" /> {match.date} • {match.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-black text-sm text-gray-900 tracking-tight">{match.score}</span>
                          {expandedMatch === i ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedMatch === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-3 pb-4 pt-1 space-y-4">
                              {/* Quick Stats Grid */}
                              <div className="grid grid-cols-2 gap-2">
                                <div className="p-2 bg-white border border-zinc-100 rounded-md">
                                  <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                                    <BarChart3 className="w-3 h-3" />
                                    <span className="text-[9px] font-bold uppercase tracking-wider">Possession</span>
                                  </div>
                                  <p className="text-sm font-black text-blue-600">{match.stats.possession}</p>
                                </div>
                                <div className="p-2 bg-white border border-zinc-100 rounded-md">
                                  <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                                    <Target className="w-3 h-3" />
                                    <span className="text-[9px] font-bold uppercase tracking-wider">Shots (On)</span>
                                  </div>
                                  <p className="text-sm font-black text-zinc-900">{match.stats.shotsOnTarget}</p>
                                </div>
                                <div className="p-2 bg-white border border-zinc-100 rounded-md">
                                  <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                                    <Activity className="w-3 h-3" />
                                    <span className="text-[9px] font-bold uppercase tracking-wider">Fouls</span>
                                  </div>
                                  <p className="text-sm font-black text-zinc-900">{match.stats.fouls}</p>
                                </div>
                                <div className="p-2 bg-white border border-zinc-100 rounded-md">
                                  <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                                    <Trophy className="w-3 h-3 text-yellow-500" />
                                    <span className="text-[9px] font-bold uppercase tracking-wider">Corners</span>
                                  </div>
                                  <p className="text-sm font-black text-zinc-900">{match.stats.corners}</p>
                                </div>
                              </div>

                              {/* Performer Ratings */}
                              <div>
                                <h4 className="text-[9px] font-black uppercase text-gray-400 tracking-widest mb-2 flex items-center gap-1.5">
                                  <Users className="w-3 h-3" /> Technical Performance
                                </h4>
                                <div className="space-y-1.5">
                                  {match.stats.performers.map((p, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-2 bg-zinc-50/50 rounded border border-zinc-100">
                                      <div className="min-w-0">
                                        <p className="text-[11px] font-bold text-gray-900 truncate">{p.name}</p>
                                        <p className="text-[9px] text-gray-500 truncate">{p.contribution}</p>
                                      </div>
                                      <span className={`text-[11px] font-black px-1.5 py-0.5 rounded ${
                                        p.rating >= 8.5 ? 'bg-green-100 text-green-700' : 
                                        p.rating >= 7.5 ? 'bg-blue-100 text-blue-700' : 
                                        'bg-zinc-100 text-zinc-700'
                                      }`}>
                                        {p.rating.toFixed(1)}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <Button className="w-full text-[9px] h-7 uppercase font-bold tracking-tighter" variant="secondary">
                                Full Match Analysis
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Roster */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" /> First Team Roster
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex text-[9px] uppercase font-bold text-gray-400 mb-2 px-2 border-b pb-1">
                    <span className="w-6">#</span>
                    <span className="flex-grow">Player</span>
                    <div className="flex gap-1.5 w-40 justify-end">
                      <span className="w-7 text-center" title="Appearances">APP</span>
                      <span className="w-5 text-center" title="Goals">G</span>
                      <span className="w-5 text-center" title="Assists">A</span>
                      <span className="w-5 text-center" title="Yellow Cards">Y</span>
                      <span className="w-5 text-center" title="Red Cards">R</span>
                    </div>
                  </div>
                  {roster.map((player, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-zinc-50 transition-all border-b border-zinc-100 last:border-none group">
                      <span className="w-6 flex justify-center text-xs font-black text-blue-600 group-hover:scale-110 transition-transform">
                        {player.number}
                      </span>
                      <div className="flex-grow min-w-0">
                        <p className="font-bold text-gray-900 leading-none mb-1 truncate">{player.name}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-tight">{player.position}</p>
                      </div>
                      <div className="flex gap-1.5 w-40 justify-end items-center">
                        <span className="w-7 text-center font-medium text-gray-400 text-[11px]">{player.apps}</span>
                        <span className="w-5 text-center font-black text-zinc-900 text-[11px]">{player.goals}</span>
                        <span className="w-5 text-center font-bold text-blue-600 text-[11px]">{player.assists}</span>
                        <span className="w-5 text-center font-bold text-yellow-600 text-[11px]">{player.yellow}</span>
                        <span className="w-5 text-center font-bold text-red-600 text-[11px]">{player.red}</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4 text-[10px] h-8 uppercase tracking-widest font-bold">View Full Technical Report</Button>
                </div>
              </CardContent>
            </Card>

            {/* Management & Governance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-green-600" /> Club Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold">Thulani Sibiya</p>
                      <p className="text-xs text-gray-500">Chief Executive Officer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold">Lindiwe Mdluli</p>
                      <p className="text-xs text-gray-500">Compliance Director</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t text-[10px] text-gray-400">
                    Compliant with FFE Governance Code 2026. Board structure verified.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-black py-8 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p className="text-sm">FFE Football Federation &copy; 2026</p>
      </footer>
    </div>
  );
}
