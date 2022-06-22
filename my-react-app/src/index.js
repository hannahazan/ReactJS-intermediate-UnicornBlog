import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import NavBar from './components/navBar.jsx';
import UploadForm from './components/uploadForm';
import Gallery from './components/gallery'


const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<NavBar />}/>
        <Route path="uploadForm" element={<UploadForm />}/>
        <Route path="gallery" element={<Gallery />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
)
  


