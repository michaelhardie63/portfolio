import React from 'react';
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../store/index';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
		<Tilt className="w-[120px]">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] min-h-[200px] flex justify-evenly items-center flex-col">
						<img className="w-16 h-16 object-contain" src={icon} alt={title} />
						<h3 className="text-white text-[20] text-center font-bold">{title}</h3>
					</div>
			</motion.div>
		</Tilt>
	);

const About = () => {
  	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={styles.sectionHeadText}>About me. 🤓 💻 🍻</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 mb-20 text-secondary text-[17px] max-w-3xl leading-[30px]">
					My name is Michael Hardie, I am a Full-Stack Developer from 
					Melbourne, Australia. I have been in the creative industry as a developer and 
					designer for over 10 years and am passionate about producing high quality 
					full-stack applications.

					In my spare time you’ll find me building niche projects or keeping up to date with 
					tech releases and trends.
			</motion.p>

			<motion.div variants={textVariant()}>
				<h2 className={`${styles.sectionSubText}`}>Languages & Tech.</h2>
			</motion.div>

			<div className="mt-10 mb-20 flex flex-wrap gap-10 flex justify-center items-center">
				{services.map((service, index) => (
					<ServiceCard 
						key={service.title}
						index={index} {...service}
					/>
				))}
			</div>
		</>
  	)
}

export default SectionWrapper(About, "about");
