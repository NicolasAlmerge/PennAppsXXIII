export default function Contact() {
	const submitForm = (e: any) => {
		const inputObject = Object.fromEntries(new FormData(e.target));
		console.log(inputObject);
		return false;
	};

	return (
		<form onSubmit={submitForm}>
			<div>
				<input name="first-name" placeholder="First Name" required />
				<input name="last-name" placeholder="Last Name" required />
			</div>
			<br />
			<div>
				<input name="email" type="email" placeholder="Email" required />
			</div>
			<br />
			<div>
				<textarea
					style={{ resize: "none" }}
					required
					className="message"
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
