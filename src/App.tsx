import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import DiabetesModels from './pages/DiabetesModels';
import StandardDiabetesModel from './pages/StandardDiabetesModel';
import CumulativeDiabetesModel from './pages/CumulativeDiabetesModel';
import BoneFractureDetection from './pages/BoneFractureDetection';
import Documentation from './pages/Documentation';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diabetes-models" element={<DiabetesModels />} />
          <Route path="/diabetes/standard" element={<StandardDiabetesModel />} />
          <Route path="/diabetes/cumulative" element={<CumulativeDiabetesModel />} />
          <Route path="/bone-fracture" element={<BoneFractureDetection />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
