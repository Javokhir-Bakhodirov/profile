import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";

const Register = lazy(() => import("./register/Register"));
const Login = lazy(() => import("./login/Login"));
const Profile = lazy(() => import("./profile/Profile"));

const RoutController = () => {
	return (
		<>
			<Routes>
				<Route
					path=""
					element={
						<Suspense fallback={<Loading />}>
							<Register />
						</Suspense>
					}
				/>
				<Route
					path="login"
					element={
						<Suspense fallback={<Loading />}>
							<Login />
						</Suspense>
					}
				/>
				<Route
					path="profile"
					element={
						<Suspense fallback={<Loading />}>
							<Profile />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
};

export default RoutController;
