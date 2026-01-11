import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TooltipProvider } from './components/ui/TooltipContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';

export default function App() {
    return (
        <TooltipProvider>
            <Router>
                {/* 1. This wrapper ensures the content always fills at least the full screen */}
                <div className="flex flex-col min-h-screen max-w-4xl mx-auto">

                    <Navbar />

                    {/* 2. This container grows to fill all space between Navbar and Footer */}
                    <main className='grow max-w-4xl mx-auto w-full px-5 md:px-0 pt-5 md:pt-15'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="resume" Component={() => {
                                window.location.href = 'https://docs.google.com/viewerng/viewer?url=https://raw.githubusercontent.com/MarkRyanGarcia/Resume/main/Mark_Garcia_Resume.pdf';
                                return null;
                            }} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </TooltipProvider>
    );
}