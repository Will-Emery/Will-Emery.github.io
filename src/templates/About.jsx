import React from "react";
import "../App.css";

export default function About() {
	return (
		<body className="has-background-grey-darker">
			<div className="container">
				<section className="section">
					{/* Summary */}
					<div className="box has-background-blue">
						<h1 className="title">More About my Experience</h1>
						<p className="has-text-black-bis">
							This past June, I finished my Bachelor's of Science in Computer
							Science at the University of Denver. During my time in University,
							I added 3 minors to my degree: Mathematics, Writing Practices, and
							Kinesiology and Sports Studies. These minors work to make me a
							well rounded individual with a diverse set of skills and
							interests.
						</p>
						<br />
						<p className="has-text-black-bis">
							My studies over the past few years have focused in on my interests
							of full stack web development and artificial intelligence. I have
							worked in a number of different languages and frameworks, and have
							had the opportunity to work in a number of different environments.
							I have worked in an agile environment for a MEAN stack
							application, and most recently I have been working in a robotics
							lab as a lab manager. With this wide range of experience, I have
							been able to develop a strong set of skills that are always
							growing and evolving. Just because I don't have a specific skill
							on my resume, doesn't mean I can't learn it and at a rapid pace.
						</p>
						<br />
						<p className="has-text-black-bis">
							My skill set expands beyond the classroom and workplace as well.
							Throughout my University years, I had been involved in a few
							campus organizations and clubs. I was most prominently a member of
							the University of Denver's only Improvisational Comedy Troupe. The
							beauty of improv comedy is that it is, in my opinion a very
							applicable skill to nearly all of life. It forces you to think on
							your feet in new and creative ways every time you step on stage.
							It also taught me a very important lesson in failure: in improv,
							you are going to fail, and you are going to fail a lot. But the
							key is to learn from these failures and to celebrate them. Some of
							the best moments in improv come from the biggest failures.
						</p>
					</div>

					<div className="columns">
						<div className="column">
							<div className="box has-background-blue">
								<img
									src="/assets/sunset.JPG"
									alt="sunset"
									style={{ display: "block", margin: "0 auto" }}
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</body>
	);
}
