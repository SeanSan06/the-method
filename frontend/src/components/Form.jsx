import { useState } from "react";             // Usestates needed to store JSON content
import ResumePreview from "./ResumePreview";  // This function creates/formats the resume

/* 
Overview(Function WIP):
    UI: This function generates the UI for the entire form with questions and input boxes.

    Functionality: This function talks to /llm/generate-resume endpoint. It gives a "resume"
    usestate with the JSON fields that the endpoint needs. It gets back slightly reformated 
    responses for each question(key-value-pairs). It uses this new JSON resume data to make
    a resume that follows JAKE's resume template.
*/
function Form() {
    // "resume" usestate follows the same key-value-pair as the Pydatic resume object
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
    
    // "generateResume" usestate is used to store resume JSON data from endpoint
    const [generatedResume, setGeneratedResume] = useState(null);

    /* 
        When submit button is clicked it capture all data stored in input boxes.
        Stores responses into a "resume" usestate which is sent to the FASTAPI backend
        /llm/generate-resume endpoint.
            SUCCESFUL: Once resume in JSON format is recieved from backend update
            "generatedResume" usestate. This data will be used to create a resume
            using JAKE's template.

            FAILED: Console log a standard error.
    */
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Passed this") // used for dev logs

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
            console.log(data) // used for dev logs
            setGeneratedResume(data);
            console.log(data) // used for dev logs
        } catch (err) {
            console.error("Error submitting resume:", err);
        }
    };

    // The actual UI React component for all questions, input boxes, and submit button
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
                        {resume.links.map((link, index) => (
                            <div key={index} className="link-block">

                            <h3>Link #{index + 1}</h3>

                            <label>
                                Type
                                <input
                                type="text"
                                value={link.type}
                                onChange={(e) => {
                                    const newLinks = [...resume.links];
                                    newLinks[index].type = e.target.value;
                                    setResume({ ...resume, links: newLinks });
                                }}
                                />
                            </label>

                            <label>
                                URL
                                <input
                                type="url"
                                value={link.url}
                                onChange={(e) => {
                                    const newLinks = [...resume.links];
                                    newLinks[index].url = e.target.value;
                                    setResume({ ...resume, links: newLinks });
                                }}
                                />
                            </label>

                            <hr className="resume-hr-between-sections" />
                            </div>
                        ))}

                        <button
                            type="button"
                            className="add-section-form-button"
                            onClick={() => {
                            setResume({
                                ...resume,
                                links: [
                                ...resume.links,
                                { type: "", url: "" }
                                ]
                            });
                            }}
                        >
                            Add Section
                        </button>
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
                        {resume.education.map((edu, index) => (
                            <div key={index} className="education-block">

                            <h3>Education #{index + 1}</h3>

                            <label>
                                School
                                <input
                                type="text"
                                value={edu.school}
                                onChange={(e) => {
                                    const newEducation = [...resume.education];
                                    newEducation[index].school = e.target.value;
                                    setResume({ ...resume, education: newEducation });
                                }}
                                />
                            </label>

                            <label>
                                Major
                                <input
                                type="text"
                                value={edu.major}
                                onChange={(e) => {
                                    const newEducation = [...resume.education];
                                    newEducation[index].major = e.target.value;
                                    setResume({ ...resume, education: newEducation });
                                }}
                                />
                            </label>

                            <label>
                                GPA
                                <input
                                type="text"
                                value={edu.gpa}
                                onChange={(e) => {
                                    const newEducation = [...resume.education];
                                    newEducation[index].gpa = e.target.value;
                                    setResume({ ...resume, education: newEducation });
                                }}
                                />
                            </label>

                            <label>
                                Activities
                                <input
                                type="text"
                                value={edu.activities}
                                onChange={(e) => {
                                    const newEducation = [...resume.education];
                                    newEducation[index].activities = e.target.value;
                                    setResume({ ...resume, education: newEducation });
                                }}
                                />
                            </label>

                            <label>
                                Start Year
                                <input
                                type="text"
                                value={edu.start_year}
                                onChange={(e) => {
                                    const newEducation = [...resume.education];
                                    newEducation[index].start_year = e.target.value;
                                    setResume({ ...resume, education: newEducation });
                                }}
                                />
                            </label>

                            <label>
                                End Year
                                <input
                                type="text"
                                value={edu.end_year}
                                onChange={(e) => {
                                    const newEducation = [...resume.education];
                                    newEducation[index].end_year = e.target.value;
                                    setResume({ ...resume, education: newEducation });
                                }}
                                />
                            </label>

                            <hr className="resume-hr-between-sections" />
                            </div>
                        ))}

                        <button
                            type="button"
                            className="add-section-form-button"
                            onClick={() => {
                            setResume({
                                ...resume,
                                education: [
                                ...resume.education,
                                {
                                    school: "",
                                    major: "",
                                    gpa: "",
                                    activities: "",
                                    start_year: "",
                                    end_year: "",
                                },
                                ],
                            });
                            }}
                        >
                            Add Section
                        </button>
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

                    {resume.experience.map((exp, index) => (
                        <div key={index} className="experience-block">
                        <h3 class="resume-sub-headers">Experience #{index + 1}</h3>
                        <label>
                            Company
                            <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[index].company = e.target.value;
                                setResume({ ...resume, experience: newExp });
                            }}
                            />
                        </label>

                        <label>
                            Title
                            <input
                            type="text"
                            value={exp.title}
                            onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[index].title = e.target.value;
                                setResume({ ...resume, experience: newExp });
                            }}
                            />
                        </label>

                        <label>
                            Location
                            <input
                            type="text"
                            value={exp.location}
                            onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[index].location = e.target.value;
                                setResume({ ...resume, experience: newExp });
                            }}
                            />
                        </label>

                        <label>
                            Description
                            <textarea
                            rows="3"
                            value={exp.description}
                            onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[index].description = e.target.value;
                                setResume({ ...resume, experience: newExp });
                            }}
                            />
                        </label>

                        <label>
                            Start Date
                            <input
                            type="text"
                            value={exp.start_date}
                            onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[index].start_date = e.target.value;
                                setResume({ ...resume, experience: newExp });
                            }}
                            />
                        </label>

                        <label>
                            End Date
                            <input
                            type="text"
                            value={exp.end_date}
                            onChange={(e) => {
                                const newExp = [...resume.experience];
                                newExp[index].end_date = e.target.value;
                                setResume({ ...resume, experience: newExp });
                            }}
                            />
                        </label>

                        <hr class="resume-hr-between-sections" />
                        </div>
                    ))}

                        <button
                            type="button"
                            className="add-section-form-button"
                            onClick={() => {
                            setResume({
                                ...resume,
                                experience: [
                                ...resume.experience,
                                {
                                    company: "",
                                    title: "",
                                    location: "",
                                    description: "",
                                    start_date: "",
                                    end_date: "",
                                },
                                ],
                            });
                            }}
                        >
                            Add Section
                        </button>

                    </div>


                    {/* Projects */}
                    <h2>Personal / Team Projects</h2>
                    <div className="card">
                    {resume.projects.map((project, index) => (
                        <div key={index} className="project-block">

                        <h3>Project #{index + 1}</h3>

                        <label>
                            Project Name
                            <input
                            type="text"
                            value={project.name}
                            onChange={(e) => {
                                const newProj = [...resume.projects];
                                newProj[index].name = e.target.value;
                                setResume({ ...resume, projects: newProj });
                            }}
                            />
                        </label>

                        <label>
                            Description
                            <textarea
                            rows="3"
                            value={project.description}
                            onChange={(e) => {
                                const newProj = [...resume.projects];
                                newProj[index].description = e.target.value;
                                setResume({ ...resume, projects: newProj });
                            }}
                            />
                        </label>

                        <label>
                            Link
                            <input
                            type="url"
                            value={project.link}
                            onChange={(e) => {
                                const newProj = [...resume.projects];
                                newProj[index].link = e.target.value;
                                setResume({ ...resume, projects: newProj });
                            }}
                            />
                        </label>

                        <label>
                            Start Date
                            <input
                            type="text"
                            value={project.start_date}
                            onChange={(e) => {
                                const newProj = [...resume.projects];
                                newProj[index].start_date = e.target.value;
                                setResume({ ...resume, projects: newProj });
                            }}
                            />
                        </label>

                        <label>
                            End Date
                            <input
                            type="text"
                            value={project.end_date}
                            onChange={(e) => {
                                const newProj = [...resume.projects];
                                newProj[index].end_date = e.target.value;
                                setResume({ ...resume, projects: newProj });
                            }}
                            />
                        </label>

                        <hr className="resume-hr-between-sections" />
                        </div>
                    ))}

                    <button
                        type="button"
                        className="add-section-form-button"
                        onClick={() => {
                        setResume({
                            ...resume,
                            projects: [
                            ...resume.projects,
                            {
                                name: "",
                                description: "",
                                link: "",
                                start_date: "",
                                end_date: "",
                            },
                            ],
                        });
                        }}
                    >
                        Add Section
                    </button>
                    </div>


                    {/* Skills */}
                    <h2>Certifications</h2>
                    <div className="card">
                        {resume.certifications.map((cert, index) => (
                            <div key={index} className="certification-block">
                            <h3>Certification #{index + 1}</h3>

                            <label>
                                Name
                                <input
                                type="text"
                                value={cert.name}
                                onChange={(e) => {
                                    const newCerts = [...resume.certifications];
                                    newCerts[index].name = e.target.value;
                                    setResume({ ...resume, certifications: newCerts });
                                }}
                                />
                            </label>

                            <label>
                                Issuer
                                <input
                                type="text"
                                value={cert.issuer}
                                onChange={(e) => {
                                    const newCerts = [...resume.certifications];
                                    newCerts[index].issuer = e.target.value;
                                    setResume({ ...resume, certifications: newCerts });
                                }}
                                />
                            </label>

                            <label>
                                Date Received (i.e. February 2026)
                                <input
                                type="text"
                                value={cert.date}
                                onChange={(e) => {
                                    const newCerts = [...resume.certifications];
                                    newCerts[index].date = e.target.value;
                                    setResume({ ...resume, certifications: newCerts });
                                }}
                                />
                            </label>

                            <hr className="resume-hr-between-sections" />
                            </div>
                        ))}

                        <button
                            type="button"
                            className="add-section-form-button"
                            onClick={() => {
                            setResume({
                                ...resume,
                                certifications: [
                                ...resume.certifications,
                                {
                                    name: "",
                                    issuer: "",
                                    date: "",
                                },
                                ],
                            });
                            }}
                        >
                            Add Section
                        </button>
                    </div>


                    {/* Awards */}
                    <h2>Awards</h2>
                    <div className="card">
                        {resume.awards.map((award, index) => (
                            <div key={index} className="award-block">

                            <h3>Award #{index + 1}</h3>

                            <label>
                                Name
                                <input
                                type="text"
                                value={award.name}
                                onChange={(e) => {
                                    const newAwards = [...resume.awards];
                                    newAwards[index].name = e.target.value;
                                    setResume({ ...resume, awards: newAwards });
                                }}
                                />
                            </label>

                            <label>
                                Issuer
                                <input
                                type="text"
                                value={award.issuer}
                                onChange={(e) => {
                                    const newAwards = [...resume.awards];
                                    newAwards[index].issuer = e.target.value;
                                    setResume({ ...resume, awards: newAwards });
                                }}
                                />
                            </label>

                            <label>
                                Date Received (i.e. February 2026)
                                <input
                                type="text"
                                value={award.date}
                                onChange={(e) => {
                                    const newAwards = [...resume.awards];
                                    newAwards[index].date = e.target.value;
                                    setResume({ ...resume, awards: newAwards });
                                }}
                                />
                            </label>

                            <hr className="resume-hr-between-sections" />
                            </div>
                        ))}

                        <button
                            type="button"
                            className="add-section-form-button"
                            onClick={() => {
                            setResume({
                                ...resume,
                                awards: [
                                ...resume.awards,
                                {
                                    name: "",
                                    issuer: "",
                                    date: "",
                                },
                                ],
                            });
                            }}
                        >
                            Add Section
                        </button>
                    </div>


                    <button type="submit">Submit Resume</button>
                </form>
                                
                {/* Once "generate" usestate updates this will generate a resume at bottom of page */}
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
