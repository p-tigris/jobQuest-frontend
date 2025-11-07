import { useState } from "react";

const JobForm = (props) => {
    const [formData, setFormData] = useState({
        jobTitle: "",
        companyName: "",
        companyWebsite: "",
        companyLinkedIn: "",
        jobDescription: "",
        dateApplied: "",
        referral: "",
        status: "",
        contact: "",
        notes: "",
    })
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleAddJob(formData);
    }

    return(
        <main>
            <h1>Add a new job</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="job-title-input">Job Title</label>
            <input 
                required 
                type="text" 
                name="jobTitle" 
                id="job-title-input"
                value={formData.jobTitle}
                onChange={handleChange}
            />
            <label htmlFor="company-name-input">Company Name</label>
            <input 
                type="text" 
                name="companyName" 
                id="company-name-input"
                value={formData.companyName}
                onChange={handleChange}
            />
            <label htmlFor="company-website-input">Company Website</label>
            <input 
                type="text" 
                name="companyWebsite" 
                id="company-website-input"
                value={formData.companyWebsite}
                onChange={handleChange}
            />
            <label htmlFor="company-LinkedIn-input">Company LinkedIn</label>
            <input 
                type="text" 
                name="companyLinkedIn" 
                id="company-linkedin-input"
                value={formData.companyLinkedIn}
                onChange={handleChange}
            />
            <label htmlFor="job-description-input">Job Description</label>
            <input 
                type="text" 
                name="jobDescription" 
                id="job-description-input"
                value={formData.jobDescription}
                onChange={handleChange}
            />
            <label htmlFor="date-applied-input">Date Applied</label>
            <input 
                type="date" 
                name="dateApplied" 
                id="date-applied-input"
                value={formData.dateApplied}
                onChange={handleChange}
            />
            <label htmlFor="referral-input">Referral</label>
            <input 
                type="text" 
                name="referral" 
                id="referral-input"
                value={formData.referral}
                onChange={handleChange}
            />
            <label htmlFor="status-input">Status</label>
            <select
                type="select" 
                name="status" 
                id="status-input"
                value={formData.status}
                onChange={handleChange}
            > 
                <option value="interested">Interested</option>
                <option value="applied">Applied</option>
                <option value="rejected">Rejected</option>
                <option value="pending">Pending</option>
                <option value="interviewing">Interviewing</option>
                <option value="ghosted">Ghosted</option>
            </select>
            <label htmlFor="contact-input">Contact</label>
            <input 
                type="text" 
                name="contact" 
                id="contact-input"
                value={formData.contact}
                onChange={handleChange}
            />
            <label htmlFor="notes-input">Notes</label>
            <textarea 
                name="notes" 
                id="notes-input"
                value={formData.notes}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    </main>
    )
};

export default JobForm;