import { useState } from "react";
import {jsPDF} from "jspdf";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview" ; 
import "./App.css";

function App() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  //Generating PDF

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${name}` , 10 ,10);
    doc.text(`Email: ${email}`, 10 , 10);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.text(`Address: ${address}`, 10, 40);
    doc.text(`Summary: ${summary}`, 10, 50);
    doc.text(`Education: ${education}`, 10, 60);
    doc.text(`Experience: ${experience}`, 10, 70);
    doc.text(`Skills: ${skills}`, 10, 80);
    doc.save("resumeIrankunda.pdf");
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Professional Resume Builder</h1>

        {/* Input Form */}

        <ResumeForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
          summary={summary}
          setSummary={setSummary}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
          skills={skills}
          setSkills={setSkills}
        />

        {/* Resume Preview */}

        <ResumePreview
          name={name}
          email={email}
          phone={phone}
          address={address}
          summary={summary}
          education={education}
          experience={experience}
          skills={skills}
        />

         {/* Button to download resume as PDF */}
         <button className="download-btn" onClick={generatePDF}>
          Download as PDF
        </button>

      </div>
    </div>
  );
}

export default App;
