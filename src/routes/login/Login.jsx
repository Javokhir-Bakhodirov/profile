import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../register/Register.css";
import { ToastContainer, toast } from "react-toastify";
import apiAxios from "../../api/axios";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const userLogin = (e) => {
		e.preventDefault();

		apiAxios
			.post("/auth/login/", { email, password })
			.then((response) => {
				if (response.status === 201) {
					localStorage.setItem("token", response.data.access_token);
					toast.success("Login was successful");
					navigate("/profile");
				}
			})
			.catch((error) => {
				toast.error(`Error: ${error.response?.data?.message || error.message}`);
			});
	};
	return (
		<div className="container">
			<h1 className="form__text">Log in</h1>
			<form className="form" onSubmit={userLogin}>
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

				<button type="submit">Log in</button>
			</form>
			<Link to="/">Registration</Link>
		</div>
	);
};

export default Login;
