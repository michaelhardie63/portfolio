import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../store';
import { logo, menu, close } from '../assets';

const Navbar = ({ navbarVisible }) => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

    	return (
			<nav
				className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
				style={{
			  		opacity: toggle || navbarVisible ? 1 : 0, 
			  		transition: 'opacity 0.3s ease-in-out',
				}}
		  	>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link 
					to="/" 
					className="flex items-center gap-2" 
					onClick={() => {

						setActive("");
						window.scrollTo(0, 0);
					}}>
						<img src={logo} alt="logo" className="w-9 h-9 object-contain" />
						<p className="text-white text-[18px] font-bold cursor-pointer">
							Michael Hardie <span className="sm:block hidden">| Full-Stack Developer</span>
						</p>
					</Link>
					<ul className="list-none hidden sm:flex flex-row gap-10">
						{navLinks.map((link) => (
							<li 
								key={link.id} 
								className={`${
									active === link.title
									? "text-white"
									: "text-secondary"
								} hover:text-white text-[18px] font-medium cursor-pointer`}
								onClick={() => setActive(link.title)}>
									<a href={`#${link.id}`}>{link.title}</a>
							</li>
						))}
					</ul>
					{/* Mobile Navigation */}
					<div className="sm:hidden flex flex-1 justify-end items-center">
						<img 
							src={toggle ? close : menu}
							alt="menu"
							className="w-[28] h-[28] object-contain cursor-pointer"
							onClick={() => setToggle(!toggle)}
						/>
						<div className={`${!toggle ? "hidden" : "flex"} p-6 bg-highlight absolute top-20 right-0  w-full z-10`}>
							<ul className="list-none flex justify-end items-start flex-col gap-4 sm:flex flex-row gap-10">
								{navLinks.map((link) => (
									<li 
										key={link.id} 
										className={`${
											active === link.title
											? "text-white"
											: "text-secondary"
										} font-poppins text-white text-[16px] font-medium cursor-pointer`}
										onClick={() => {
											setToggle(!toggle);
											setActive(link.title);
										}}>
											<a href={`#${link.id}`}>{link.title}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
			</div>
		</nav>
  	)
}

export default Navbar