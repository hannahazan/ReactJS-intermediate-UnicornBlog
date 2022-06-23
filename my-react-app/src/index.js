import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot} from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import NavBar from './components/navBar.jsx';
import UploadForm from './components/uploadForm';
import Gallery from './components/gallery'
import PostsDisplay from './components/postDisplay';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<NavBar />}/>
        <Route path="uploadForm" element={<UploadForm />}/>
        <Route path="gallery" element={<Gallery />}/>
        <Route path="postDisplay" element={<PostsDisplay />}/> 
    </Routes>
  </BrowserRouter>
)
  


