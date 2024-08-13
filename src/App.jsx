import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Testimonials from './Testimonials/Testimonials';
import Working from './Working/Working';
import CoverLetter from './CoverLetter/CoverLetter';
import SlidingComponent from './SlidingComponent/SlidingComponent';
import CoverSteps from './CoverSteps/CoverSteps';
import EditCover from './EditCover/EditCover';
import CoverLetterTemplate from './CoverLetterTemplate/CoverLetterTemplate';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import TemplateGallery from './TemplateGallery/TemplateGallery';
import Extra from './Extra/Extra';
import CvEditor2 from './CvEditor2/CvEditor2';
import CvEditor3 from './CvEditor3/CvEditor3';
import Us from './Us/Us';
import Customers from './Customers/Customers';
import Works from './Works/Works';
import Footer from './Footer/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PagefullTe from './Templatesr/PagefullTe';
import Template from './EditTemplate/Template';
import Template2 from './EditTemplate/Template2';
import ResumeChecker from './ResumeChecker/ResumeChecker';
import Login from './Login/Login';

import Signup from './Signup/Signup'
import Contact from './Contact/Contact';
import ResumeBuilder from './ResumeBuilder/ResumeBuilder';
import ForgotPassword from './Forgotpassword/Forgotpassword';



function App() {
  return (
    <>
    {/* <Signup/> */}
       <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Templates" element={<PagefullTe/>} />
          <Route path="/CoverLetter" element={<CoverLetter/>} />
          <Route path="/editcover" element={<EditCover/>} />
          <Route path="/CvEditor2" element={<CvEditor2/>} />
          <Route path="/CvEditor3" element={<CvEditor3/>} />
          <Route path="/Edit1" element={<Template/>} />
          <Route path="/Edit2" element={<Template2/>} />
          <Route path="/ResumeChecker" element={<ResumeChecker/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/rb" element={<ResumeBuilder/>} />
        
        
          
        </Routes>
        {/* <ForgotPassword/> */}
 
      </BrowserRouter> 
      
    </>
  );
}

export default App;
