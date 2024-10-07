import React from "react";

function ResumePreview({
    name, email , phone, address , summary , education , experience , skills
}){
    return(
        <div className="resume-preview">
        <h2>Resume Preview</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Professional Summary:</strong> {summary}</p>
        <p><strong>Education:</strong> {education}</p>
        <p><strong>Work Experience:</strong> {experience}</p>
        <p><strong>Skills:</strong> {skills}</p>
      </div>
    )
}

export default ResumePreview;