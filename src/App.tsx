import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Beta from './components/Beta';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';
import { Purchase } from './components/Purchase/Purchase';
import { EbookReader } from './components/Ebook/EbookReader';
import Mira from './components/Mira/Mira';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/founderprofile" element={<AboutMe />} />
          <Route path="/beta" element={<Beta />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/ebook" element={<EbookReader />} />
          <Route path="/mira" element={<Mira />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}
