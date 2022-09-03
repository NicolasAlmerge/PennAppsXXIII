import { useState } from "react";

export default function Contact() {
	let [message, setMessage] = useState("");
	const submitForm = (e: any) => {
		console.log(message);
		e.preventDefault();
		const inputObject = Object.fromEntries(new FormData(e.target));
		console.log(inputObject);
		return true;
	};

	return (
		<form onSubmit={submitForm}>
			<div>
				<input
					name="first-name"
					id="first-name"
					placeholder="First Name"
					required
				/>
				<input
					name="last-name"
					id="last-name"
					placeholder="Last Name"
					required
				/>
			</div>
			<br />
			<div>
				<input
					name="email"
					id="email"
					type="email"
					placeholder="Email"
					required
				/>
			</div>
			<br />
			<div>
				<textarea
					style={{ resize: "none" }}
					required
					id="message"
					placeholder="Message"
				/>
			</div>
			<br />
			<div>
				<button type="reset">Reset</button>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
}
