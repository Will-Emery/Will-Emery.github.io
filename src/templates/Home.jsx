import React from "react";
import "../App.css";

function Home() {
	return (
		<body className="has-background-grey-darker">
			<div className="container">
				<section className="section">
					{/* Summary */}
					<div className="box has-background-blue">
						<h1 className="title">Summary</h1>
						<p className="has-text-black-bis">
							I am a recent graduate with a Bachelor of Science in Computer
							Science and minors in Mathematics, Writing Practices, and
							Kinesiology and Sports Studies. With a strong focus on computer
							science, mathematics, and artificial intelligence, I have gained
							practical and professional experience in software development, web
							programming, AI/robotics technologies, and DevOps practices. I
							have demonstrated my ability to work effectively both
							independently and in team settings through various roles,
							showcasing leadership and creativity.
						</p>
					</div>

					{/* Skills Section */}
					<div className="box has-background-blue">
						<h1 className="title">Skills</h1>
						<div className="columns">
							<div className="column">
								{/* Column 1 content */}
								<div className="box has-background-grey-lighter">
									<h3
										className="subtitle"
										style={{ fontWeight: "bold", textDecoration: "underline" }}
									>
										Programming Languages
									</h3>
									<ul>
										<li>Java</li>
										<li>JavaScript</li>
										<li>TypeScript</li>
										<li>C</li>
										<li>C++</li>
										<li>C#</li>
										<li>Haskell</li>
										<li>Python</li>
										<li>SQL</li>
									</ul>
								</div>
							</div>
							<div className="column">
								{/* Column 2 content */}
								<div className="box has-background-grey-lighter">
									<h3
										className="subtitle"
										style={{ fontWeight: "bold", textDecoration: "underline" }}
									>
										Web Development
									</h3>
									<ul>
										<li>HTML</li>
										<li>CSS</li>
										<li>EJS</li>
										<li>Node.js</li>
										<li>React.js</li>
										<li>Angular</li>
										<li>Angular.js</li>
										<li>Responsive Design</li>
										<li>jQuery</li>
										<li>Webservers</li>
										<li>MongoDB</li>
										<li>Express</li>
										<li>MEAN/MERN Stack</li>
										<li>RESTful APIs</li>
									</ul>
								</div>
							</div>
							<div className="column">
								{/* Column 3 content */}
								<div className="box has-background-grey-lighter">
									<h3
										className="subtitle"
										style={{ fontWeight: "bold", textDecoration: "underline" }}
									>
										AI/Robotics
									</h3>
									<ul>
										<li>ROS</li>
										<li>Simultaneous Localization and Mapping (SLAM)</li>
										<li>OpenCV</li>
										<li>TensorFlow</li>
										<li>Machine Learning</li>
										<li>Deep Learning</li>
										<li>Reinforcement Learning</li>
										<li>Large Language Models</li>
										<li>Retrieval Augmented Generation</li>
									</ul>
								</div>
							</div>
							<div className="column">
								{/* Column 4 content */}
								<div className="box has-background-grey-lighter">
									<h3
										className="subtitle"
										style={{ fontWeight: "bold", textDecoration: "underline" }}
									>
										DevOps
									</h3>
									<ul>
										<li>Git</li>
										<li>Linux</li>
										<li>Windows</li>
										<li>MacOS</li>
										<li>App Deployment</li>
										<li>Unit Testing</li>
										<li>Docker</li>
										<li>Azure</li>
										<li>Postman</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Resume Section */}
					<div className="box has-background-blue">
						<h1 className="title">Resume</h1>
						<div className="columns">
							<div className="column">
								<p className="has-text-black-bis">
									If you would like to learn more about my professional
									experience, education, and skills, please feel free to
									download my resume.
								</p>
							</div>
							<div className="column">
								<a
									className="button has-background-grey-lighter"
									href="/assets/William Emery Resume.pdf"
									download
								>
									Download
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Introduction */}
				<div className="container">
					<section className="section">
						<div className="columns">
							<div className="column">
								<div className="box has-background-blue">
									<h1 className="title">More about me</h1>
									<p className="has-text-black-bis">
										My name is William Emery and I am a Senior studying Computer
										Science at the University of Denver. I have picked up minors
										in Mathematics, Writing Practices, and Kinesiology and
										Sports Studies as my interests and passions have grown. In
										addition to my interests outside of computer science, I have
										focused my studies within my major to include a strong focus
										on artificial intelligence and web development.
									</p>
									<br />
									<p className="has-text-black-bis">
										Throughout my college years I have worked a 3-year
										internship in an agile environment maintaining a MEAN stack
										application, and most recently I have been working as a lab
										manager for a robotics lab. I have also been involved in a
										number of clubs and organizations on campus, including the
										University of Denver's only Improvisational Comedy Troupe,
										and the DU film production club.
									</p>
								</div>
							</div>
							<div className="column">
								<div className="box has-background-blue">
									<img src="/assets/Will_Emery.jpg" alt="Your Picture" />
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</body>
	);
}

export default Home;
