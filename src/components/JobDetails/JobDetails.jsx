import { useParams } from "react-router";
import { useState, useEffect } from "react";
import * as jobService from "../../services/jobService";

const JobDetails = () => {
	const { jobId } = useParams();
	console.log("jobId", jobId);

	const [job, setJob] = useState(null);

	useEffect(() => {
		const fetchJob = async () => {
			const jobData = await jobService.show(jobId);
			setJob(jobData);
		};
		fetchJob();
	}, [jobId]);
	console.log("job state:", job);
	if (!job) return <main>loading...</main>;
	return (
		<main className="container">
			<article>
				<header>
					<h1>Job Title: {job.jobTitle}</h1>
					<p>Company: {job.companyName.toUpperCase()}</p>
					<p>Date Applied: {job.dateApplied}</p>
				</header>
				<p>Website: {job.companyWebsite}</p>
				<p>LinkedIn: {job.companyLinkedIn}</p>
				<p>Job Description: {job.jobDescription}</p>
				<p>{job.referral ? `Referral: ${job.referral}` : "N/A"}</p>
				<p>Status: {job.status}</p>
				<p>{`notes: ${job.notes}` || ""}</p>
			</article>
			<footer>
				<button>Edit</button>
				<button>Delete</button>
			</footer>
		</main>
	);
};

export default JobDetails;
