import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Projects, StarsCanvas } from './components';

const App = () => {
  	const [scrollPosition, setScrollPosition] = useState(0);
  	const [navbarVisible, setNavbarVisible] = useState(false);

  	useEffect(() => {
    	const handleScroll = () => {
      		const currentPosition = window.pageYOffset;
      		const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      		const scrollPercentage = (currentPosition / pageHeight) * 100;

	    	setScrollPosition(scrollPercentage);

      		if (scrollPercentage >= 3 && !navbarVisible) {
        		setNavbarVisible(true);
      		} else if (scrollPercentage < 3 && navbarVisible) {
        		setNavbarVisible(false);
      		}
    	};

    	window.addEventListener('scroll', handleScroll);
    	return () => {
      		window.removeEventListener('scroll', handleScroll);
    	};
  	}, [navbarVisible]);

  	return (
    	<BrowserRouter>
    		<div className="relative z-0 bg-primary">
      			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        			<Navbar navbarVisible={navbarVisible} />
        			<Hero />
      			</div>
      			<About />
      			<Projects />
      			<Experience />
      			<div className="z-0">
        			<Contact />
        			<StarsCanvas />
      			</div>
    		</div>
  		</BrowserRouter>
	);
};

export default App;
