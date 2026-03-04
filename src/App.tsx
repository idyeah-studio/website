import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Beta from './components/Beta';

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founderprofile" element={<AboutMe />} />
        <Route path="/beta" element={<Beta />} />
      </Routes>
    </ThemeProvider>
  );
}
