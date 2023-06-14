
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './homepage/homepage';

import MiniNavbar from './components/mini-nav';
import { useEffect, useState } from 'react';
import { getImages } from './ApiService';
import GalleryPage from './gallery/gallery';
import PriceList from './catalog/priceList';
import ReviewsPage from './reviews/reviews';

import ScrollToTop from './components/scrollToTop';
import ContactModal from './components/contactModal';
import LoginPage from './admin/components/login';
import AuthProvider, { useAuth } from './api/AuthContext';
import AdminHome from './admin/pages/home';




function App() {
  const [images, setImages] = useState(null);
  const [show, setShow] = useState(false);  

  function AuthenticatedRoute({ children }) {
    const auth = useAuth();
    if (auth.isAuthenticated) {
      return children;
    } else {
      return <LoginPage message={"Sign in to view this page."}/>
    }
  }

  useEffect(() => {
    getImages()
      .then(res => {
        setImages(res.data.resources)

      })

  }, [])

  return (
    <div className="App peach">
      <AuthProvider>
        <BrowserRouter>
          <MiniNavbar />
          <ScrollToTop setShow={setShow}>
            <Routes>
              <Route path="/" element={<Homepage images={images} setShow={setShow} />} />
              <Route path="/gallery" element={<GalleryPage images={images} setImages={setImages} />} />
              <Route path="/prices" element={<PriceList />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/login" element={<LoginPage message={"Admin Login"} />} />
              <Route path="/admin/*" element={<AuthenticatedRoute><AdminHome /></AuthenticatedRoute>} />
            </Routes>
          </ScrollToTop>
          <ContactModal show={show} setShow={setShow} />
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
