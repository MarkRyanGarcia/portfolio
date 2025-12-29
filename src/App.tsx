import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';

export default function App() {
    return (
        <Router>
            <Navbar />
            <div className='flex max-w-4xl mx-auto m-5 px-5 md:px-0 md:py-15'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}