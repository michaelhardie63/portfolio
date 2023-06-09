import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles";
import { github, codepen } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../store";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
			options={{
				max: 45,
				scale: 1,
				speed: 450,
			}}
			className="bg-tertiary p-5 rounded 2xl sm:w-[360px] w-full">
				<div className="relative w-full h-[230px]">
					<img 
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							onClick={() => window.open(source_code_link, "_blank")}>
							<img 
								src={github}
								alt="github"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">
						{name}
					</h3>
					<p className="text-secondary text-[14px]">
						{description}
					</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={tag.name} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	)
}

const Works = () => {
  	return (
    	<>
			<motion.div variants={textVariant()}>
				<h2 className={styles.sectionHeadText}>Project showcase.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[19px] max-w-3xl leading-[30px]">
					Check out my projects that showcase my skills and experience through real world examples of my work.
					Each project is briefly described with links to the github repositories as well as links to live demos.
				</motion.p>
			</div>
			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard 
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
			<div>
			<motion.div 
				variants={textVariant()}
				className="w-full flex justify-center items-center mt-20">
				<h2 className={`${styles.sectionSubText} text-[100px]`}>View more projects and examples:</h2>
			</motion.div>
				<motion.div
					variants={fadeIn("up", "spring", 0.5, 1)}
					className="w-full flex justify-center items-center">
					<div className="w-[300px] flex flex-row justify-center items-center">
						<Link to="https://github.com/michaelhardie63" target="_blank" rel="noopener noreferrer">
							<img src={github} alt="github" className="w-[100px] cursor-pointer" />
						</Link>
						<Link to="https://codepen.io/Michael-Hardie" target="_blank" rel="noopener noreferrer">
							<img src={codepen} alt="codepen" className="w-[100px] cursor-pointer" />
						</Link>
					</div>
				</motion.div>
			</div>
		</>
  	)
}

export default SectionWrapper(Works, "works");
