import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';

export default function App() {
    return (
        <Router>
            <Navbar />
            <div className='flex max-w-4xl mx-auto m-5 min-h-[calc(100vh-197px)] px-5 md:px-0 md:py-15'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="resume" Component={() => {
                        window.location.href = 'https://docs.google.com/viewerng/viewer?url=https://raw.githubusercontent.com/MarkRyanGarcia/Resume/main/Mark_Garcia_Resume.pdf';
                        return null
                    }} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}