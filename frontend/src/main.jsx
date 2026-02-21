import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Greeting from './Greeting'
import Profil from './Profil'
import Project from './Project'
import SertifikatPage from "./SertifikatPage";
import WebPage from "./WebPage";
import DesignPage from "./DesignPage";
import ContactMe from "./ContactMe";

createRoot(document.getElementById('root')).render(
  
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/greeting" element={<Greeting />} />
    <Route path="/profil" element={<Profil />} />
    <Route path="/project" element={<Project />} />
    <Route path="/contact-me" element={<ContactMe />} />
    <Route path="/sertifikat" element={<SertifikatPage />} />
    <Route path="/website" element={<WebPage />} />
    <Route path="/design" element={<DesignPage />} />
  </Routes>
</BrowserRouter>
)
