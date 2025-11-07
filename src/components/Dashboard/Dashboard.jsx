import { useContext } from "react";
import { useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as userService from "../../services/userService";
import { Link } from "react-router";

const Dashboard = ({ jobs }) => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        setUsers(fetchedUsers);
      } catch (err) {
        console.log(err);
      }
    };
    if (user) fetchUsers();
  }, [user]);

  return (
    <main className="container">
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you can see a list of all the Job
        lists.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Job Title</th>
            <th scope="col">Company</th>
            <th scope="col">Company Website</th>
            <th scope="col">Job Description</th>
            <th scope="col">Date Applied</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => {
            return (
              <tr key={job._id}>
                <th scope="row">
                  <Link to={`/jobs/${job._id}`}>{job.jobTitle}</Link>
                </th>
                <td>{job.companyName}</td>
                <td>{job.companyWebsite}</td>
                <td>{job.jobDescription}</td>
                <td>{job.dateApplied}</td>
                <td>{job.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Dashboard;
