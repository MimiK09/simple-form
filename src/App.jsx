import "./App.css";
import { useState } from "react";
import axios from "axios";


function App() {
	const [isVisible, setIsVisible] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const data = {
		name: name,
		email: email,
		password: password,
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		if (name == "" || email == "" || password == "") {
			return setErrorMessage(
				"Tous les champs obligatoires ne sont pas saisis"
			);
		} else {
			setErrorMessage("");
		}
		if (password !== confirmPassword) {
			return setErrorMessage("Les mots de passe ne sont pas identiques");
		} else {
			setErrorMessage("");
		}
		setIsVisible(false);
		console.log(data);
	}

	

	return (
		<>
			<form
				className={isVisible ? "visible" : "invisible"}
				onSubmit={handleSubmit}
			>
				<h1>Create account</h1>
				<label>
					Name
					<input
						type="text"
						placeholder="Bob"
						id="name"
						onChange={(event) => {
							setName(event.target.value);
						}}
						value={name}
					></input>
				</label>

				<label>
					Email
					<input
						type="email"
						placeholder="bob@gmail.com"
						id="email"
						onChange={(event) => {
							setEmail(event.target.value);
						}}
						value={email}
					></input>
				</label>

				<label>
					Password
					<input
						type="password"
						placeholder="*****"
						id="password"
						value={password}
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					></input>
				</label>

				<label>
					Confirm your password
					<input
						type="password"
						placeholder="*****"
						value={confirmPassword}
						onChange={(event) => {
							setConfirmPassword(event.target.value);
						}}
					></input>
				</label>
				<p className="alert">{errorMessage}</p>

				<button>Register</button>
			</form>

			<div className={isVisible ? "invisible result" : "visible result"}>
				<h1>Result</h1>
				<div className="info">
					<p>Name : {name}</p>
					<p>Email : {email}</p>
					<p>Password : {password}</p>
				</div>
				<button
					type="button"
					onClick={() => {
						setIsVisible(true);
					}}
				>
					Edit Your Information
				</button>
			</div>
		</>
	);
				}

export default App;
