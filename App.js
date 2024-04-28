import Header from './header';
import Footer from './footer';
import About from './about';
import Contact from './contact';
import Home from './home-page';
import Ambulance from './ambulance-services';
import Ansh from './ansh-community-kitchen';
import AReport from './annual-reports';
import Compliances from './compliances';
import Daddiction from './de-addiction';
import Donate from './donate';
import Overview from './donation-overview';
import Drug from './drug-prev';
import Education from './education';
import Facilities from './facilities';
import Gallery from './gallery';
import Partner from './partner-with-us';
import Policies from './policies-and-terms';
import Programs from './Programs';
import Rehabilitation from './Rehabilitation';
import Stories from './success-stories';
import skill from './skill-training';
import Team from './team';
import Trustees from './Trustees';
import ProgramsComp from './ProgramsComp';

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import './App.css';



function App() {

   
   
    return (
      <Router>
        <Header />
        <Routes>
        <Route path="/program/:id" element={<ProgramsComp />} />

          <Route path="/" element={<Home/>}></Route>
          <Route path="/ambulance-services" element={<Ambulance/>}></Route>
          <Route path="/ansh-community-kitchen" element={<Ansh/>}></Route>
          <Route path="/annual-reports" element={<AReport/>}></Route>
          <Route path="/compliances" element={<Compliances/>}></Route>
          <Route path="/de-addiction" element={<Daddiction/>}></Route>
          {/* <Route path="/de-addiction" element={<Daddiction/>}></Route> */}
          <Route path="/donate" element={<Donate/>}></Route>
          <Route path="/donation-overview" element={<Overview/>}></Route>
          <Route path="/drug-prevention-and-awareness" element={<Drug/>}></Route>     
          <Route path="/education" element={<Education/>}></Route>   
          <Route path="/facilities" element={<Facilities/>}></Route>   
          <Route path="/gallery" element={<Gallery/>}></Route>   
          <Route path="/policies-and-terms" element={<Policies/>}></Route>   
          <Route path="/programs" element={<Programs/>}></Route>   
          <Route path="/rehabilitation" element={<Rehabilitation/>}></Route>   
          <Route path="/skill-training" element={<skill/>}></Route>   
          <Route path="/success-stories" element={<Stories/>}></Route>   
          <Route path="/team" element={<Team/>}></Route>  
          <Route path="/trustees" element={<Trustees/>}></Route>        


          <Route path="/about-us" element={<About/>}></Route>
          <Route path="/partner-with-us" element={<Partner/>}></Route>
          <Route path="/contact-us" element={<Contact/>}></Route>

         
           
        </Routes>
        <Footer/>
      </Router>





  )
}

export default App;
