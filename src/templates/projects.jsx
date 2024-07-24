import React from "react";
import "../App.css";

export default function Projects() {
	return (
		<body className="has-background-grey-darker">
			{/* Header */}
			<div className="box has-background-blue">
				<section className="section">
					<h1 className="title">Projects</h1>
					<p className="has-text-black-bis">
						Here are some of the projects I have worked on. Click on the project
						name to view the project's repository. My github can also be found
						by clicking the github logo in the top left corner of this website.
					</p>
				</section>
			</div>

			<div className="container">
				<section className="section">
					{/* Online Recipe book */}
					<div className="box has-background-blue">
						<a className="title" href="https://github.com/Will-Emery/">
							Online Recipe Book
						</a>
						<br></br>
						<br></br>

						<section className="columns">
							{/* <!-- Main Body --> */}
							<div className="column">
								<p className="has-text-black-bis">
									This was a project I worked on in the Winter of 2023. The goal
									of this project was to create a web application that would
									allow users to to view recipes and add reviews to the recipes.
									This was implemented for a class that had a focus on full
									stack web development. The application was created using
									Node.js and a RESTFull API with a MongoDB storage config for
									the backend. The front end was created using REACT and was
									deplyed to an Azure Container APP.
								</p>
								<br></br>
								<p className="has-text-black-bis">
									The application was able to store recipes and reviews in a
									database and display them to the end user. The end user was
									able to view the recipes and add reviews to them. I took great
									pride in the UI styling of this application. This was a super
									informative project as I learned a lot about common web
									development practices and how to deploy a web application to
									the cloud.
								</p>
							</div>

							{/* <!-- Technologies Used --> */}
							<div className="column">
								<p className="subtitle"> Technologies used:</p>
								<li>Node.js</li>
								<li>Express</li>
								<li>React</li>
								<li>MongoDB</li>
								<li>HTML</li>
								<li>CSS</li>
								<li>JSON</li>
								<li>Azure</li>
								<li>RESTFull APIs</li>
							</div>
						</section>
					</div>

					{/* <!-- Othello Deep Q Learning --> */}
					<div className="box has-background-blue">
						<a
							className="title"
							href="https://github.com/Will-Emery/Othello-Q-Learning"
						>
							Othello Deep Q Learning
						</a>
						<br></br>
						<br></br>

						<section className="columns">
							{/* <!-- Main Body --> */}
							<div className="column">
								<p className="has-text-black-bis">
									{" "}
									For this project my goal was to use reinforcement learning to
									teach an agent to play the game Othello. I used a deep Q
									learning algorithm to train the agent to play the against an
									opposing random agent. The agent was able to learn to play the
									game and was able to beat their opponent with varrying degrees
									of success. This is due to the nature of training an agent
									against a completely random agemt. The agent was able to learn
									to play, but it was unable to learn a strategy that would work
									consistently against a random opponent.
								</p>
								<br></br>
								<p className="has-text-black-bis">
									This was a very challenging project that I worked on in the
									Fall of 2022. I learned a lot about reinforcement learning and
									how to apply it to a game enviornment. I also learned a lot
									about how to program an implementation of a game in Python. I
									also learned a lot about the challenges of training an agent
									to play a game and how to evaluate the success of the agent.
								</p>
							</div>

							{/* <!-- Technologies Used --> */}
							<div className="column">
								<p className="subtitle">Technologies used:</p>
								<li>Python</li>
								<li>Tensorflow</li>
								<li>Open AI Gym</li>
								<li>Pytorch</li>
								<li>Matplot Lib</li>
								<li>Pandas</li>
								<li>Numpy</li>
							</div>
						</section>
					</div>

					{/* <!-- Flavor Fuel --> */}
					<div className="box has-background-blue">
						<a
							className="title"
							href="https://github.com/Will-Emery/Flavor_Fuel/"
						>
							Flavor Fuel
						</a>
						<br></br>
						<br></br>

						<section className="columns">
							<div className="column">
								<p className="has-text-black-bis">
									This project was a full stack Express web app that I deployed
									to an Azure VM. This was an application that allowed users to
									specify health goals and the app would help them meet those
									goals. The app would allow users to log their caloric intake
									as well as macronutrients. In addition to this, the app had a
									database of recipes that the end user could use to help meet
									their goals.
								</p>
							</div>
							<div className="column">
								<p className="subtitle">Technologies used:</p>
								<li>Node.js</li>
								<li>Express</li>
								<li>HTML</li>
								<li>CSS</li>
								<li>JSON</li>
							</div>
						</section>

						{/* columns for images */}
						<br></br>
						<br></br>

						<div className="columns">
							<div className="column">
								<img src="/assets/FF_Setup.jpg" alt="Flavor Fuel Setup"></img>
							</div>
							<div className="column">
								<img
									src="/assets/FF_ Recipes.jpg"
									alt="Flavor Fuel Recipes"
								></img>
							</div>
							<div className="column">
								<img
									src="/assets/FF_Dashboard.jpg"
									alt="Flavor Fuel Dashboard"
								></img>
							</div>
						</div>
					</div>

					{/* <!-- Pokemon Battle Predictor --> */}
					<div className="box has-background-blue">
						<a
							className="title"
							href="https://github.com/Will-Emery/Pokemon_Battle_Predictor"
						>
							Pokemon Battle Predictor
						</a>
						<br></br>
						<br></br>

						<section className="columns">
							{/* <!-- main body --> */}
							<div className="column">
								<p className="has-text-black-bis">
									A project I worked on on with the goal of being able to
									predict the outcome of pokemon battles from the website
									Pokemon Showdown. Pokemon as a game is unfathomably complex,
									each player will enter a game with a team of 6 monsters,
									chosen out of the 1,015 possible. If each player has 6 of
									these possible creatures and cannot repeat then, without even
									taking attacks or abilities into consideration, then there are
									a possible 2.18 * 1035 states before a game even begins. From
									there the game just gets more complex.
								</p>
								<br></br>
								<p className="has-text-black-bis">
									The program I wrote to challenge this problem was a terminal
									based python program that ended up working with about 60%
									accuracy. For this I used scikit learn and random tree
									classifiers in order to predit the outcomes of scraped battles
									from the website mentioned earlier. This is better than a
									coinfilp and is successful in my eyes.
								</p>
							</div>

							{/* <!-- Technologies Used --> */}
							<div className="column">
								<p className="subtitle">Technologies used:</p>
								<li>Python</li>
								<li>Scikit Learn</li>
								<li>Beautiful Soup</li>
								<li>Pandas</li>
								<li>Numpy</li>
							</div>
						</section>
					</div>

					{/* <!-- Competitive Pokemon Chatbots --> */}
					<div className="box has-background-blue">
						<a
							className="title"
							href="https://github.com/Will-Emery/Bot-With-the-World-Champ-Difference"
						>
							Competitive Pokemon Chatbots - Bot with the World Champ Difference
						</a>
						<br></br>
						<br></br>
						<section className="columns">
							{/* <!-- main body --> */}
							<div className="column">
								<p className="has-text-black-bis">
									{" "}
									This was a project that I worked on in the Spring of 2024. As
									I mentioned above, Pokemon is an incredibly complicated game.
									This make the barrier of entry extremly high for new players.
									So to help combat this issue, I made a chatbot to help new
									players get a grasp on the game.
								</p>
								<br></br>
								<p className="has-text-black-bis">
									For this project I used the Open AI GPT3.5 turbo model to
									create a chatbot that could help new players. In the back, the
									chatbot had access to a Weaviate Vector Database to enable
									Retrival Augmented Generation (RAG). So in the end I created a
									very capable and factual chatbot to help new players step into
									the world of competitive Pokemon.
								</p>
							</div>

							{/* <!-- Techologies Used --> */}
							<div className="column">
								<p className="subtitle">Technologies used:</p>
								<li>Python</li>
								<li>Open AI GPT3.5</li>
								<li>Large Language Models</li>
								<li>Weaviate Vector Database</li>
								<li>Retrival Augmented Generation (RAG)</li>
							</div>
						</section>
					</div>

					{/* <!-- Chat GPT and Online Writing Communities --> */}
					<div className="box has-background-blue">
						<a
							className="title"
							href="https://github.com/Will-Emery/Research-of-Writing-Project-ChatGPT-and-Online-Writing-Communities"
						>
							LLMs and Writing Communities
						</a>
						<br></br>
						<br></br>
						<section className="columns">
							{/* <!-- main body --> */}
							<div className="column">
								<p className="has-text-black-bis">
									This was a project I worked on in conjuction with an essay
									which explored people's perception of large language models
									across many different communities. Originally this was
									intended to interface with Twitter, but due ownership changes
									in the fall of 2022, Twitter had restricted their api access.
									I shifted to working with Reddit and the various subreddits
									that would have interesting and relavant opinions to what I
									was researching.
								</p>
								<br></br>
								<p className="has-text-black-bis">
									Using the Reddit API I scraped posts from Reddit and ran them
									through a sentiment analysis to get the general opinion of the
									user making the post. From there I took the average sentiments
									of different communities in order to make generalizations
									about the opinions of people in those communities.
								</p>
							</div>

							{/* <!-- Technologies Used --> */}
							<div className="column">
								<p className="subtitle">Technologies used:</p>
								<li>Python</li>
								<li>Reddit API</li>
								<li>Natural Language Toolkit </li>
								<li>Matplot Lib</li>
								<li>Pandas</li>
							</div>
						</section>
					</div>

					{/* <!-- Machine Readable Recipies --> */}
					<div className="box has-background-blue">
						<h1 className="title">Machine Readable Recipes</h1>
						<section className="columns">
							<div className="column">
								<p className="has-text-black-bis">
									This was a project I worked on in the Spring of 2023 for a
									class. The goal was to create a program that could take a
									recipe from a website and convert it into a machine readable
									format. This was done using a Python program that utilized
									webscrapping to get the recipe from the website and then used
									a natural language processing library to convert the recipe
									into a machine or robot readable format. The idea was to get
									instructions such as "preheat the oven to 350 degrees" into a
									form that a robot could understand and execute. So using the
									example above, the program would tell the robot to "heat
									oven".
								</p>
								<br></br>
								<p className="has-text-black-bis">
									I worked on this project with a handfull of other students in
									an Agile format in order to deliver the end poduct described
									above to a client. In the end we made a viable program that
									worked better than we had imagined. I learned valuable team
									work skills as well as leadership skills within the context of
									a computer science enviornment while working on this project.
								</p>
								<br></br>
								<p className="has-text-black-bis">
									I cannot share the code from this project as I no longer have
									acess to the repository, but I do have access to a video
									overview of what we did. I am waiting to hear back from my
									teammates before I upload the video to this website.
								</p>
							</div>
							<div className="column">
								<p className="subtitle"> Technologies used:</p>
								<li>Python</li>
								<li>Beautiful Soup</li>
								<li>Natural Language Toolkit</li>
								<li>Matplot Lib</li>
								<li>Pandas</li>
								<li>SQL</li>
								<li>Git Lab</li>
							</div>
						</section>
					</div>

					{/* <!-- AI and Robotics --> */}
					<div className="box has-background-blue">
						<h1 className="title">Robot Wall Following</h1>
						<div className="columns">
							<div className="column">
								<p className="has-text-black-bis">
									This was a project I worked on in the Winter of 2023 in
									conjuction with a class. The goal was to program a robot to
									follow a wall utilizing a q-learning algorithm. The robot in
									question was a turtlebot 3 that was controlled using a Python
									program using the Robotics Operating System (ROS). The
									learning was done within a Gazebo simulation complete with a
									model of the robot and the wall it was to follow. The robot
									was able to learn to follow the wall with a decent amount of
									success.
								</p>
								<br></br>
								<p className="has-text-black-bis">
									{" "}
									This was a very challenging and rewarding project that proved
									to be a great learning experience. I learned a lot about the
									ROS system and how to program a robot to learn from its
									environment. I also learned a lot about the challenges of
									working with a physical robot and moving from a simulation to
									the real world.
								</p>
								<br></br>
								<p className="has-text-black-bis">
									I am unfortunatly unable to share the code for this project
									due to University policy, but I do have a video of the robot
									in action with my code running as well as a vide from the
									simulation. Please try to ignore how tired I sound in the
									video, this was recorded at the end on finals week.
								</p>
							</div>

							{/* <!-- Embeded youtube video --> */}
							<div className="column">
								<iframe
									width="400"
									height="300"
									src="https://www.youtube.com/embed/ZLnwpJ9iKYM?si=sA4h1cVZETp7LsNo"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>

								{/* <!-- Technologies Used --> */}
								<p className="subtitle"> Technologies used:</p>
								<li>Python</li>
								<li>C++</li>
								<li>ROS</li>
								<li>Gazebo</li>
								<li>Numpy</li>
								<li>Matplot Lib</li>
								<li>Linux (Ubuntu 20.04)</li>
							</div>
						</div>
					</div>
				</section>
			</div>
		</body>
	);
}
