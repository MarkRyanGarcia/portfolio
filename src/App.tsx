import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TooltipProvider } from './components/ui/TooltipContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function App() {
    return (
        <TooltipProvider>
            <Router>
                <div className='flex flex-col justify-center min-h-screen mx-auto'>
                    <Navbar />
                    <div className="flex flex-col justify-between grow max-w-7xl w-full mx-auto">
                        <main className='mx-auto max-w-5xl w-full px-5 md:px-0 pt-5 md:pt-15'>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/resume" Component={Resume} />
                            </Routes>
                        </main>

                        <Footer />
                    </div>
                </div>
            </Router>
        </TooltipProvider>
    );
}