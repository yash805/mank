import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './component/AboutUs';
import Collaborations from './component/Collaborations';
import Contact from './component/Contact';
import EventPictures from './component/EventPictures';
import Footer from './component/Footer';
import Grants from './component/Grants';
import IconsSection from './component/IconsSection';
import Impact from './component/Impact';
import NavbarHeaderWrapper from './component/NavbarHeaderWrapper';
import Workshop from './component/Workshop';


function App() {
    return (
        <>
        <Router>
            <Routes>
                {/* Home route */}
                <Route
                    path="/"
                    element={
                        <>
                            <NavbarHeaderWrapper />
                            <Impact />
                            <IconsSection />
                            <Collaborations />
                            <Grants />
                            <EventPictures />
                            <Footer /> {/* Footer included here */}
                        </>
                    }
                />
                
                {/* About Us route */}
                <Route 
                    path="/about-us" 
                    element={
                        <>
                            <AboutUs />
                            <Footer /> {/* Footer included here */}
                        </>
                    } 
                />
                
                {/* Workshop route */}
                <Route 
                    path="/workshop" 
                    element={
                        <>
                            <Workshop />
                            <Footer /> {/* Footer included here */}
                        </>
                    } 
                />

                {/* Contact route */}
                <Route 
                    path="/contact" 
                    element={
                        <>
                            <Contact />
                            <Footer /> {/* Footer included here */}
                        </>
                    } 
                />
            </Routes>
        </Router>
    </>
    );
}

export default App;
