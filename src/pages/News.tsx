import { Navbar } from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function News() {
  const newsItems = [
    {
      id: 1,
      category: "Announcement",
      title: "FFE Officially Opens Window for Major League Membership Applications",
      date: "May 1, 2026",
      excerpt: "The first 16 compliant clubs to pass the infrastructure audit will form the inaugural Major League. Ensure your documents are ready.",
      image: "https://images.unsplash.com/photo-1574629810360-1efdb08e7cf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      category: "League Development",
      title: "Independent Judiciary Panel Appointed for Inaugural Season",
      date: "April 28, 2026",
      excerpt: "To ensure absolute separation of powers, the FFE has appointed a five-member independent legal panel to handle all disciplinary and integrity matters.",
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      category: "Club Notice",
      title: "Minimum Stadium Requirements Updated",
      date: "April 15, 2026",
      excerpt: "Please review the updated PDF guidelines regarding secure player tunnels, media broadcasting gantries, and minimum seating capacities and VIP areas.",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-black text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1431324155629-1a6fc1ac5eab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h1 className="text-5xl font-bold tracking-tighter mb-6 text-center">News & Updates</h1>
        </div>
      </section>

      <section className="py-20 flex-grow bg-zinc-50">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all border-gray-200">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 bg-zinc-100 text-black border-none">{item.category}</Badge>
                  <h3 className="font-bold text-xl mb-2 line-clamp-3 leading-tight">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{item.date}</p>
                  <p className="text-gray-600 line-clamp-3 mb-4">{item.excerpt}</p>
                  <a href="#" className="font-bold text-primary hover:underline group inline-flex items-center">
                    Read Article <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      <footer className="bg-black py-12 border-t border-white/10 text-center text-gray-500 mt-auto">
        <p>© {new Date().getFullYear()} Football Federation Eswatini. All rights reserved.</p>
      </footer>
    </div>
  );
}
