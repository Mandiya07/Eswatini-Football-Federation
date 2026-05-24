/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Leagues from './pages/Leagues';
import Membership from './pages/Membership';
import Governance from './pages/Governance';
import Investment from './pages/Investment';
import News from './pages/News';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Academy from './pages/Academy';
import Apply from './pages/Apply';
import Clubs from './pages/Clubs';
import ClubProfile from './pages/ClubProfile';
import Structure from './pages/Structure';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/structure" element={<Structure/>} />
          <Route path="/leagues" element={<Leagues/>} />
          <Route path="/membership" element={<Membership/>} />
          <Route path="/governance" element={<Governance/>} />
          <Route path="/investment" element={<Investment/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/academy" element={<Academy/>} />
          <Route path="/apply" element={<Apply/>} />
          <Route path="/clubs" element={<Clubs/>} />
          <Route path="/clubs/:id" element={<ClubProfile/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
