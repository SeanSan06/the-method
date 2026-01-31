import { useState } from "react";
import ResumePreview from "./ResumePreview"; // remove

function Form() {
    const [resume, setResume] = useState({
        name: "",
        phone: "",
        email: "",
        is_us_citizen: false,
        links: [{ type: "", url: "" }],
        about_section: "",
        education: [
        {
            school: "",
            major: "",
            gpa: "",
            activities: "",
            start_year: "",
            end_year: "",
        },
        ],
        relevant_coursework: [""],
        experience: [
        {
            company: "",
            title: "",
            location: "",
            description: "",
            start_date: "",
            end_date: "",
        },
        ],
        projects: [
        {
            name: "",
            description: "",
            link: "",
            start_date: "",
            end_date: "",
        },
        ],
        skills: [""],
        certifications: [{ name: "", issuer: "", date: "" }],
        awards: [{ name: "", issuer: "", date: "" }]
    });
    const [generatedResume, setGeneratedResume] = useState(null); // remove

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            resume: resume,
        };

        try {
            const response = await fetch("http://localhost:8000/llm/generate-resume", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            setGeneratedResume(data); // remove
            console.log(data);
        } catch (err) {
            console.error("Error submitting resume:", err);
        }
    };

    return (
        <div id="form-page">
            <h1>Resume Maker</h1>
                <form id="resume-form" onSubmit={handleSubmit}>
                    {/* Basic Information */}
                    <h2>Basic Information</h2>
                    <div className="card">
                        <label>
                            Name
                            <input
                                type="text"
                                value={resume.name}
                                onChange={(e) => setResume({ ...resume, name: e.target.value })}
                            />
                        </label>

                        <label>
                            Phone
                            <input
                                type="text"
                                value={resume.phone}
                                onChange={(e) => setResume({ ...resume, phone: e.target.value })}
                            />
                        </label>

                        <label>
                            Email
                            <input
                                type="email"
                                value={resume.email}
                                onChange={(e) => setResume({ ...resume, email: e.target.value })}
                            />
                        </label>

                        <label>
                            US Citizen
                            <input
                                type="checkbox"
                                checked={resume.is_us_citizen}
                                onChange={(e) =>
                                setResume({ ...resume, is_us_citizen: e.target.checked })
                                }
                            />
                        </label>
                    </div>

                    {/* Links */}
                    <h2>Links</h2>
                    <div className="card">
                        <label>
                            Type
                            <input
                                type="text"
                                value={resume.links[0].type}
                                onChange={(e) => {
                                const newLinks = [...resume.links];
                                newLinks[0].type = e.target.value;
                                setResume({ ...resume, links: newLinks });
                                }}
                            />
                        </label>

                        <label>
                            URL
                            <input
                                type="url"
                                value={resume.links[0].url}
                                onChange={(e) => {
                                const newLinks = [...resume.links];
                                newLinks[0].url = e.target.value;
                                setResume({ ...resume, links: newLinks });
                                }}
                            />
                        </label>
                    </div>

                    {/* About */}
                    <h2>About</h2>
                    <div className="card">
                        <label>
                            About You
                            <textarea
                                rows="4"
                                value={resume.about_section}
                                onChange={(e) =>
                                setResume({ ...resume, about_section: e.target.value })
                                }
                            />
                        </label>
                    </div>

                    {/* Education */}
                    <h2>Education</h2>
                    <div className="card">
                        <label>
                            School
                            <input
                                type="text"
                                value={resume.education[0].school}
                                onChange={(e) => {
                                const newEducation = [...resume.education];
                                newEducation[0].school = e.target.value;
                                setResume({ ...resume, education: newEducation });
                                }}
                            />
                        </label>

                        <label>
                            Major
                            <input
                                type="text"
                                value={resume.education[0].major}
                                onChange={(e) => {
                                const newEducation = [...resume.education];
                                newEducation[0].major = e.target.value;
                                setResume({ ...resume, education: newEducation });
                                }}
                            />
                        </label>

                        <label>
                            GPA
                            <input
                                type="text"
                                value={resume.education[0].gpa}
                                onChange={(e) => {
                                const newEducation = [...resume.education];
                                newEducation[0].gpa = e.target.value;
                                setResume({ ...resume, education: newEducation });
                                }}
                            />
                        </label>

                        <label>
                            Activities
                            <input
                                type="text"
                                value={resume.education[0].activities}
                                onChange={(e) => {
                                const newEducation = [...resume.education];
                                newEducation[0].activities = e.target.value;
                                setResume({ ...resume, education: newEducation });
                                }}
                            />
                        </label>

                        <label>
                            Start Year
                            <input
                                type="text"
                                value={resume.education[0].start_year}
                                onChange={(e) => {
                                const newEducation = [...resume.education];
                                newEducation[0].start_year = e.target.value;
                                setResume({ ...resume, education: newEducation });
                                }}
                            />
                        </label>

                        <label>
                            End Year
                            <input
                                type="text"
                                value={resume.education[0].end_year}
                                onChange={(e) => {
                                const newEducation = [...resume.education];
                                newEducation[0].end_year = e.target.value;
                                setResume({ ...resume, education: newEducation });
                                }}
                            />
                        </label>
                    </div>

                    {/* Relevant Coursework */}
                    <h2>Relevant Coursework</h2>
                    <div className="card">
                        <label>
                            Coursework
                            <input
                                type="text"
                                value={resume.relevant_coursework[0]}
                                onChange={(e) => {
                                const newCoursework = [...resume.relevant_coursework];
                                newCoursework[0] = e.target.value;
                                setResume({ ...resume, relevant_coursework: newCoursework });
                                }}
                            />
                        </label>
                    </div>

                    {/* Experience */}
                    <h2>Experience</h2>
                    <div className="card">
                        <label>
                            Company
                            <input
                                type="text"
                                value={resume.experience[0].company}
                                onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[0].company = e.target.value;
                                setResume({ ...resume, experience: newExp });
                                }}
                            />
                        </label>

                        <label>
                            Title
                            <input
                                type="text"
                                value={resume.experience[0].title}
                                onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[0].title = e.target.value;
                                setResume({ ...resume, experience: newExp });
                                }}
                            />
                        </label>

                        <label>
                            Location
                            <input
                                type="text"
                                value={resume.experience[0].location}
                                onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[0].location = e.target.value;
                                setResume({ ...resume, experience: newExp });
                                }}
                            />
                        </label>

                        <label>
                            Description
                            <textarea
                                rows="3"
                                value={resume.experience[0].description}
                                onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[0].description = e.target.value;
                                setResume({ ...resume, experience: newExp });
                                }}
                            />
                        </label>

                        <label>
                            Start Date
                            <input
                                type="text"
                                value={resume.experience[0].start_date}
                                onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[0].start_date = e.target.value;
                                setResume({ ...resume, experience: newExp });
                                }}
                            />
                        </label>

                        <label>
                            End Date
                            <input
                                type="text"
                                value={resume.experience[0].end_date}
                                onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[0].end_date = e.target.value;
                                setResume({ ...resume, experience: newExp });
                                }}
                            />
                        </label>
                    </div>

                    {/* Projects */}
                    <h2>Personal / Team Projects</h2>
                    <div className="card">
                        <label>
                            Project Name
                            <input
                                type="text"
                                value={resume.projects[0].name}
                                onChange={(e) => {
                                const newProj = [...resume.projects];
                                newProj[0].name = e.target.value;
                                setResume({ ...resume, projects: newProj });
                                }}
                            />
                        </label>

                        <label>
                            Description
                            <textarea
                                rows="3"
                                value={resume.projects[0].description}
                                onChange={(e) => {
                                const newProj = [...resume.projects];
                                newProj[0].description = e.target.value;
                                setResume({ ...resume, projects: newProj });
                                }}
                            />
                        </label>

                        <label>
                            Link
                            <input
                                type="url"
                                value={resume.projects[0].link}
                                onChange={(e) => {
                                const newProj = [...resume.projects];
                                newProj[0].link = e.target.value;
                                setResume({ ...resume, projects: newProj });
                                }}
                            />
                        </label>

                        <label>
                            Start Date
                            <input
                                type="text"
                                value={resume.projects[0].start_date}
                                onChange={(e) => {
                                const newProj = [...resume.projects];
                                newProj[0].start_date = e.target.value;
                                setResume({ ...resume, projects: newProj });
                                }}
                            />
                        </label>

                        <label>
                            End Date
                            <input
                                type="text"
                                value={resume.projects[0].end_date}
                                onChange={(e) => {
                                const newProj = [...resume.projects];
                                newProj[0].end_date = e.target.value;
                                setResume({ ...resume, projects: newProj });
                                }}
                            />
                        </label>
                    </div>

                    {/* Skills */}
                    <h2>Skills</h2>
                    <div className="card">
                        <label>
                            Skill
                            <input
                                type="text"
                                value={resume.skills[0]}
                                onChange={(e) => {
                                const newSkills = [...resume.skills];
                                newSkills[0] = e.target.value;
                                setResume({ ...resume, skills: newSkills });
                                }}
                            />
                        </label>
                    </div>

                    {/* Certifications */}
                    <h2>Certifications</h2>
                    <div className="card">
                        <label>
                            Name
                            <input
                                type="text"
                                value={resume.certifications[0].name}
                                onChange={(e) => {
                                const newCerts = [...resume.certifications];
                                newCerts[0].name = e.target.value;
                                setResume({ ...resume, certifications: newCerts });
                                }}
                            />
                        </label>

                        <label>
                            Issuer
                            <input
                                type="text"
                                value={resume.certifications[0].issuer}
                                onChange={(e) => {
                                const newCerts = [...resume.certifications];
                                newCerts[0].issuer = e.target.value;
                                setResume({ ...resume, certifications: newCerts });
                                }}
                            />
                        </label>

                        <label>
                            Date
                            <input
                                type="text"
                                value={resume.certifications[0].date}
                                onChange={(e) => {
                                const newCerts = [...resume.certifications];
                                newCerts[0].date = e.target.value;
                                setResume({ ...resume, certifications: newCerts });
                                }}
                            />
                        </label>
                    </div>

                    {/* Awards */}
                    <h2>Awards</h2>
                    <div className="card">
                        <label>
                            Name
                            <input
                                type="text"
                                value={resume.awards[0].name}
                                onChange={(e) => {
                                const newAwards = [...resume.awards];
                                newAwards[0].name = e.target.value;
                                setResume({ ...resume, awards: newAwards });
                                }}
                            />
                        </label>

                        <label>
                            Issuer
                            <input
                                type="text"
                                value={resume.awards[0].issuer}
                                onChange={(e) => {
                                const newAwards = [...resume.awards];
                                newAwards[0].issuer = e.target.value;
                                setResume({ ...resume, awards: newAwards });
                                }}
                            />
                        </label>

                        <label>
                            Date
                            <input
                                type="text"
                                value={resume.awards[0].date}
                                onChange={(e) => {
                                const newAwards = [...resume.awards];
                                newAwards[0].date = e.target.value;
                                setResume({ ...resume, awards: newAwards });
                                }}
                            />
                        </label>
                    </div>

                    <button type="submit">Submit Resume</button>
                </form>
                                
                {/* Remove */}
                {generatedResume && (
                <>
                    <hr />
                    <ResumePreview resume={generatedResume.resume} />
                </>
                )}

        </div>
    );
}

export default Form;
