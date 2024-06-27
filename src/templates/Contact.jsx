import React from "react";
import "./Contact.css";

export default function Contact() {
	return (
		<body className="has-background-grey-darker">
			<div className="container">
				<section className="section">
					{/* Contact Information */}
					<div className="box has-background-blue">
						<h1 className="title">Contact Me</h1>
						<p className="has-text-black-bis">
							If you would like to get in touch with me, please fill out the
							form below. I will get back to you as soon as possible.
						</p>

						{/* Contact Form */}
						<form
							method="POST"
							action="mailto:williamemery.b@gmail.com?subject=Contact%20Form%20Submission"
						>
							<label className="has-text-black-bis" htmlFor="name">
								Name:
							</label>
							<input
								className="input"
								type="text"
								id="name"
								name="name"
								placeholder="Your name.."
								required
							/>
							<br />
							<label className="has-text-black-bis" htmlFor="email">
								Email:
							</label>
							<input
								className="input"
								type="email"
								id="email"
								name="email"
								placeholder="Your email.."
								required
							/>
							<br />
							<label className="has-text-black-bis" htmlFor="subject">
								Subject:
							</label>
							<textarea
								className="textarea"
								id="subject"
								name="subject"
								placeholder="Write something.."
								style={{ height: "100px" }}
								cols="55"
								required
							></textarea>
							<br />
							<div className="has-text-centered">
								<input
									className="button is-success"
									type="submit"
									value="Submit"
								/>
							</div>
						</form>
					</div>
				</section>
			</div>
		</body>
	);
}
