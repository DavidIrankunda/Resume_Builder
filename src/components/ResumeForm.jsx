import React from "react";

function ResumeForm({
    name, 
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    summary,
    setSummary,
    education,
    setEducation,
    experience,
    setExperience,
    skills,
    setSkills

}) {
    return (
        <div className="form">
        <label>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Professional Summary:
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Briefly summarize your professional experience"
          />
        </label>
        <label>
          Education:
          <textarea
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Enter your educational background"
          />
        </label>
        <label>
          Work Experience:
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Enter your work experience"
          />
        </label>
        <label>
          Skills:
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter your skills separated by commas"
          />
        </label>
      </div>
    )
}

export default ResumeForm;