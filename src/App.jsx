// src/App.jsx
import { useContext, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router"; 
import { UserContext } from "./contexts/UserContext";
import * as jobService from "./services/jobService"
import JobDetails from "./components/JobDetails/JobDetails";

import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import JobForm from "./components/JobForm/JobForm";

const App = () => {
	const { user } = useContext(UserContext);
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		const fetchAllJobs = async () => {
			const jobsData = await jobService.index();
			setJobs(jobsData)
		}
		if (user) fetchAllJobs();
	}, [user]);

	const navigate = useNavigate();

	const handleAddJob = async (jobFormData) => {
		const newJob = await jobService.create(jobFormData);
		setJobs([newJob, ...jobs])
		navigate("/")
	}

	return (
		<>
			<NavBar />
			<Routes>
				{user ? (
				<>
					<Route path="/" element={<Dashboard jobs={jobs} />} />
					<Route path="/jobs/:jobId" element={<JobDetails />} />
					<Route path="/jobs/new" element={<JobForm handleAddJob={handleAddJob} />} />
					</>
				) : (
				<>
					<Route path="/" element={<Landing />} />
					<Route path="/sign-up" element={<SignUpForm />} />
					<Route path="/sign-in" element={<SignInForm />} />
				</>
				)}
			</Routes>
		</>
	);
};

export default App;
