function ResumePreview({ resume }) {
  if (!resume) return null;

  return (
    <div className="resume-wrapper">
      <div className="resume-page">

        {/* HEADER */}
        <div className="resume-header">
          <h1>{resume.name}</h1>
          <p>
            {resume.phone} · {resume.email}
            {resume.links?.map((link, i) => (
              <span key={i}> · {link.url}</span>
            ))}
          </p>
        </div>

        {/* EDUCATION */}
        {resume.education?.length > 0 && (
          <section>
            <h2>Education</h2>
            {resume.education.map((edu, i) => (
              <div key={i} className="resume-block">
                <div className="row">
                  <strong>{edu.school}</strong>
                  <span>{edu.start_year} – {edu.end_year}</span>
                </div>
                <div className="row sub">
                  <em>{edu.major}</em>
                  <span>{edu.gpa && `GPA: ${edu.gpa}`}</span>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* EXPERIENCE */}
        {resume.experience?.length > 0 && (
          <section>
            <h2>Experience</h2>
            {resume.experience.map((exp, i) => (
              <div key={i} className="resume-block">
                <div className="row">
                  <strong>{exp.company}</strong>
                  <span>{exp.start_date} – {exp.end_date}</span>
                </div>
                <div className="row sub">
                  <em>{exp.title}</em>
                  <span>{exp.location}</span>
                </div>
                {exp.description && (
                  <ul>
                    {exp.description.split("\n").map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* PROJECTS */}
        {resume.projects?.length > 0 && (
          <section>
            <h2>Projects</h2>
            {resume.projects.map((proj, i) => (
              <div key={i} className="resume-block">
                <div className="row">
                  <strong>{proj.name}</strong>
                  <span>{proj.start_date} – {proj.end_date}</span>
                </div>
                {proj.description && (
                  <ul>
                    {proj.description.split("\n").map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* SKILLS */}
        {resume.skills?.length > 0 && (
          <section>
            <h2>Technical Skills</h2>
            <p className="skills">
              {resume.skills.join(", ")}
            </p>
          </section>
        )}

      </div>
    </div>
  );
}

export default ResumePreview;
