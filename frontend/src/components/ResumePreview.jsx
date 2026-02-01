import React from "react";

function SafeText({ children }) {
  if (!children && children !== 0) return null;
  return <>{children}</>;
}

function SubHeading({ leftTitle, leftSubtitle, right }) {
    return (
        <div className="subheading">
          <div className="sub-left">
            <div className="sub-title"><strong>{leftTitle}</strong></div>
            {leftSubtitle && <div className="sub-subtitle"><em>{leftSubtitle}</em></div>}
          </div>
          <div className="sub-right">
            <span>{right}</span>
          </div>
        </div>
    );
}

export default function ResumePreview({ resume }) {
    if (!resume) return null;

    const contactPieces = [
      resume.phone,
      resume.email,
      resume.links?.[0]?.url,
      resume.links?.[0]?.type ? resume.links[0].type : null,
      resume.is_us_citizen ? "US Citizen" : null,
    ].filter(Boolean);

    const joinContact = contactPieces.join("  |  ");

    return (
      <div className="resume-latex" role="document">
        {/* Heading */}
        <header className="heading">
          <h1 className="name">{resume.name || "Your Name"}</h1>
          <div className="contact">{joinContact}</div>
        </header>

        {/* Education */}
        <section className="section">
          <div className="section-title">Education</div>
          <div className="section-body">
            {resume.education && resume.education.length > 0 ? (
              resume.education.map((edu, i) => (
                <div key={i} className="block">
                  <SubHeading
                    leftTitle={`${edu.school || ""}`}
                    leftSubtitle={`${edu.major ? `${edu.major}` : ""}`}
                    right={`${edu.start_year || ""}${edu.start_year || edu.end_year ? " — " : ""}${edu.end_year || ""}`}
                  />
                  {edu.gpa && <div className="muted small">GPA: {edu.gpa}</div>}
                  {edu.activities && <div className="muted small">{edu.activities}</div>}
                  {i === 0 && resume.relevant_coursework && resume.relevant_coursework.filter(Boolean).length > 0 && (
                    <div className="small coursework">
                      <strong>Relevant Coursework:</strong> {resume.relevant_coursework.filter(Boolean).join(", ")}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="muted small">No education entered</div>
            )}
          </div>
        </section>

        {/* Experience */}
        <section className="section">
          <div className="section-title">Experiences</div>
          <div className="section-body">
            {resume.experience && resume.experience.length > 0 ? (
              <ul className="item-list">
                {resume.experience.map((exp, i) => (
                  <li key={i} className="item-block">
                    <SubHeading
                      leftTitle={`${exp.title || ""} ${exp.company ? `— ${exp.company}` : ""}`}
                      leftSubtitle={exp.location}
                      right={`${exp.start_date || ""}${exp.start_date || exp.end_date ? " — " : ""}${exp.end_date || ""}`}
                    />
                    {exp.description && (
                      <ul className="resume-items">
                        {/* split description into lines if it's multi-line, else single item */}
                        {exp.description.split("\n").map((d, idx) => (
                          d.trim() ? <li key={idx} className="resume-item">{d}</li> : null
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="muted small">No experience entered</div>
            )}
          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <div className="section-title">Projects</div>
          <div className="section-body">
            {resume.projects && resume.projects.length > 0 ? (
              <ul className="item-list">
                {resume.projects.map((p, i) => (
                  <li key={i} className="item-block">
                    <div className="project-heading">
                      <div className="proj-left">
                        <strong>{p.name}</strong>
                        {p.description && <div className="muted small proj-tech">{p.description}</div>}
                      </div>
                      <div className="sub-right small">{p.start_date || ""}{p.start_date || p.end_date ? " — " : ""}{p.end_date || ""}</div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="muted small">No projects entered</div>
            )}
          </div>
        </section>

        {/* Academic Clubs */}
        {resume.clubs || resume.awards ? (
          <section className="section">
            <div className="section-title">Academic Clubs</div>
            <div className="section-body">
              {/* if the user provided clubs array use it else fallback */}
              {resume.clubs && resume.clubs.length > 0 ? (
                resume.clubs.map((c, i) => (
                  <div key={i} className="block">
                    <SubHeading
                      leftTitle={c.name}
                      leftSubtitle={c.role}
                      right={`${c.start || ""}${c.start || c.end ? " — " : ""}${c.end || ""}`}
                    />
                    {c.description && <div className="muted small">{c.description}</div>}
                  </div>
                ))
              ) : (
                <div className="muted small">No clubs entered</div>
              )}
            </div>
          </section>
        ) : null}

        {/* Skills */}
        <section className="section">
          <div className="section-title">Technical Skills</div>
          <div className="section-body">
            <div className="skills-list small">
              {resume.skills && resume.skills.length > 0 ? (
                <div>
                  <strong>Languages:</strong> {resume.skills.join(", ")}
                </div>
              ) : (
                <div className="muted small">No skills entered</div>
              )}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section">
          <div className="section-title">Certifications</div>
          <div className="section-body">
            {resume.certifications && resume.certifications.length > 0 ? (
              <ul className="item-list">
                {resume.certifications.map((c, i) => (
                  <li key={i} className="small">
                    <strong>{c.name}</strong>{c.issuer ? ` — ${c.issuer}` : ""} {c.date ? ` (${c.date})` : ""}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="muted small">No certifications entered</div>
            )}
          </div>
        </section>
      </div>
    );
}
