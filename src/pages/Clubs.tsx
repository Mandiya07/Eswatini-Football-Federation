import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, ShieldCheck, Building, CheckCircle2, TrendingUp, Search as SearchIcon } from 'lucide-react';
import L from 'leaflet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { CLUBS } from '@/data/clubs';

// Custom marker icon using an SVG string for clean look
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

export default function Clubs() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClubs = CLUBS.filter(club => 
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.stadium.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-8 bg-black text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1431324155629-1a6fc1ac5eab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">Member Clubs & Infrastructure</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
            Explore our verified professional clubs. The FFE mandates strict infrastructure guidelines to guarantee modern, safe facilities for players and fans.
          </p>
          
          <div className="max-w-xl mx-auto relative group">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
            <Input 
              placeholder="Search clubs, cities or stadiums..." 
              className="bg-white/10 border-white/20 text-white pl-12 h-14 rounded-full backdrop-blur-md focus:ring-primary/50 transition-all text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid lg:grid-cols-3 gap-8 h-[700px]">
          {/* Map Column */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden border border-gray-200 shadow-sm relative z-0">
            <MapContainer 
              center={[-26.4, 31.4]} 
              zoom={9} 
              scrollWheelZoom={true} 
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              {filteredClubs.map(club => (
                <Marker key={club.id} position={club.location as [number, number]} icon={customIcon}>
                  <Popup className="rounded-lg">
                    <div className="w-64 -m-3">
                      <img src={club.image} alt={club.stadium} className="w-full h-32 object-cover rounded-t-lg" />
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg leading-tight">{club.name}</h3>
                          {club.category === 'Elite' && (
                            <ShieldCheck className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                           <Badge variant="secondary" className="text-[10px] h-4 px-1 bg-blue-100 text-blue-700 border-none">
                             {club.category}
                           </Badge>
                           <Badge variant="outline" className="text-[10px] h-4 px-1 border-green-200 text-green-700 bg-green-50">
                             <CheckCircle2 className="w-2.5 h-2.5 mr-0.5" /> Facilities Verified
                           </Badge>
                           {club.funding && (
                             <Badge variant="default" className="text-[10px] h-4 px-1 bg-yellow-500 text-black border-none">
                               <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> Investment Ready
                             </Badge>
                           )}
                        </div>
                        <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                           <MapPin className="w-3 h-3"/> {club.city}
                        </p>
                        <div className="space-y-1 mb-3">
                           <div className="flex justify-between text-sm">
                             <span className="text-gray-500">Stadium:</span>
                             <span className="font-medium">{club.stadium}</span>
                           </div>
                           <div className="flex justify-between text-sm">
                             <span className="text-gray-500">Capacity:</span>
                             <span className="font-medium">{club.capacity.toLocaleString()}</span>
                           </div>
                        </div>
                        <Button className="w-full text-xs h-8" asChild><Link to={`/clubs/${club.id}`}>View Compliance Profile</Link></Button>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* List Column */}
          <div className="space-y-4 overflow-y-auto pr-2">
             <div className="bg-white p-4 rounded-xl border border-gray-200 sticky top-0 z-10 mb-4 shadow-sm">
                <h2 className="font-bold flex items-center gap-2 text-lg">
                   <Building className="w-5 h-5 text-primary" /> Verified Facilities
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                   All clubs listed have successfully completed Phase 1 of the FFE Infrastructure Verification process.
                </p>
             </div>

             {filteredClubs.length > 0 ? filteredClubs.map(club => (
               <Link key={club.id} to={`/clubs/${club.id}`} className="block">
                 <Card className="overflow-hidden hover:border-primary/50 transition-colors cursor-pointer group">
                 <div className="flex h-28">
                    <div className="w-1/3 relative">
                       <img src={club.image} alt={club.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="w-2/3 p-4 flex flex-col justify-center">
                       <div className="flex justify-between items-start mb-0.5">
                         <h3 className="font-bold text-sm leading-tight text-gray-900">{club.name}</h3>
                       </div>
                       <div className="flex flex-wrap gap-1 mb-1.5">
                          <Badge className="text-[8px] h-3.5 px-1 bg-zinc-100 text-zinc-600 border-none">
                            {club.category} Division
                          </Badge>
                          <Badge className="text-[8px] h-3.5 px-1 bg-green-500/10 text-green-700 border-none flex items-center gap-0.5">
                            <CheckCircle2 className="w-2 h-2" /> Infrastructure Verified
                          </Badge>
                          {club.funding && (
                            <Badge className="text-[8px] h-3.5 px-1 bg-yellow-500/20 text-yellow-800 border-none flex items-center gap-0.5">
                              <TrendingUp className="w-2 h-2" /> Investment Ready
                            </Badge>
                          )}
                       </div>
                       <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-2">
                         <MapPin className="w-2.5 h-2.5"/> {club.city}
                       </p>
                       <div className="flex gap-2 mt-auto">
                          <span className="text-[10px] bg-zinc-100 px-2 py-0.5 rounded font-medium text-zinc-600">
                            CAP: {(club.capacity / 1000).toFixed(0)}k
                          </span>
                       </div>
                    </CardContent>
                 </div>
               </Card>
               </Link>
             )) : (
               <div className="text-center py-12 px-4 bg-white rounded-xl border border-dashed border-gray-300">
                 <SearchIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                 <p className="text-gray-500 font-medium">No clubs found matching "{searchQuery}"</p>
                 <Button 
                   variant="link" 
                   className="mt-2 text-primary text-sm"
                   onClick={() => setSearchQuery('')}
                 >
                   Clear Search
                 </Button>
               </div>
             )}
          </div>
        </div>
      </main>

      <footer className="bg-black py-8 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p className="text-sm">Football Federation Eswatini &copy; 2026</p>
      </footer>
    </div>
  );
}
