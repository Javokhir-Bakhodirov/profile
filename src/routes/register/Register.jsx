import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import apiAxios from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [avatar, setAvatar] = useState("");
	const navigate = useNavigate();

	const userRegister = (e) => {
		e.preventDefault();

		apiAxios
			.post("/users", { name, email, password, avatar })
			.then((response) => {
				if (response.status === 201) {
					toast.success("Registration was successful");
					navigate("/login");
				} else {
					toast.error("Unexpected error occurred");
				}
			})
			.catch((error) => {
				toast.error(`Error: ${error.response?.data?.message || error.message}`);
			});
	};

	return (
		<div className="container">
			<h1 className="form__text">Sign Up</h1>
			<form className="form" onSubmit={userRegister}>
				<div className="input-wrapper">
					<input
						type="text"
						placeholder="Enter your name"
						className="input"
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="email"
						placeholder="Enter your email"
						className="input"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Enter your password"
						className="input"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="url"
						placeholder="Enter your avatar url"
						className="input"
						onChange={(e) => setAvatar(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Sign Up</button>
			</form>
			<Link to="login">Login</Link>
		</div>
	);
};

export default Register;
