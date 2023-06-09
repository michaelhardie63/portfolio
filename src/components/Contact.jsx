import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs.send(
			import.meta.env.VITE_EMAILJS_SERVICE_KEY,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			{
				from_name: form.name,
				to_name: "Michael",
				from_email: form.email,
				to_email: "hardie.michael63@gmail.com",
				message: form.message,
			},
			import.meta.env.VITE_EMAILJS_PUBLIC_KEY
		)
		.then(() => {
			setLoading(false);
			alert("Success! Thanks I'll get back to you asap");

			setForm({
				name: "",
				email: "",
				message: "",
			})
		}, (error) => {
			setLoading(false);
			console.log(error);

			alert("Whoops! Something went wrong.")
		});
	}
  	return (
    	<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-tertiary p-8 rounded-2xl"
			>
				<h3 className={styles.sectionHeadText}>Lets chat!</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-5 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium">Name:</span>
						<input 
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Please enter your name..."
							className="bg-formInputs py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium">Email:</span>
						<input 
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Enter your email here..."
							className="bg-formInputs py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium">Message:</span>
						<textarea 
							name="message"
							value={form.message}
							rows="7"
							onChange={handleChange}
							placeholder="How can I help?"
							className="bg-formInputs py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-formInputs py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:shadow-none"
					>
					{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
  	)
}

export default SectionWrapper(Contact, "contact")
