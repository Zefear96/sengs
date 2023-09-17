import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import ListProjects from "./components/projects/ListProjects";
import DetailsProjects from "./components/projects/DeatailsProjects";
import HomePage from "./page/HomePage";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginForm />} />
			<Route path="/registration" element={<RegisterForm />} />
			<Route path="/projects" element={<ListProjects />} />
			<Route path="/projects-details" element={<DetailsProjects />} />
		</Routes>
	);
};

export default MainRoutes;
