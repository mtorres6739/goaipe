import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Solutions = lazy(() => import('./pages/Solutions'));
const VoiceAgent = lazy(() => import('./pages/VoiceAgent'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const About = lazy(() => import('./pages/About'));
const Research = lazy(() => import('./pages/Research'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/ContactSimple'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-pulse">
      <div className="w-16 h-16 bg-primary rounded-full"></div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/voice-agent" element={<VoiceAgent />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;