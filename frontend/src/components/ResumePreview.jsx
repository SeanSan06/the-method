// remove
function ResumePreview({ resume }) {
    console.log("RESUME PREVIEW DATA:", resume);
    if (!resume) return null;

    return (
        <div className="resume-page">
        <h1>{resume.name}</h1>

        <p>
            {resume.email}
            {resume.phone && ` | ${resume.phone}`}
        </p>

        {resume.about_section && (
            <>
            <h2>About</h2>
            <p>{resume.about_section}</p>
            </>
        )}

        {resume.experience?.length > 0 && (
            <>
            <h2>Experience</h2>
            {resume.experience.map((job, i) => (
                <div key={i}>
                <strong>{job.title}</strong> — {job.company}
                <p style={{ whiteSpace: "pre-line" }}>
                    {job.description}
                </p>
                </div>
            ))}
            </>
        )}

        {resume.suggestions?.length > 0 && (
            <>
            <h2>Suggestions</h2>
            <ul>
                {resume.suggestions.map((s, i) => (
                <li key={i}>{s}</li>
                ))}
            </ul>
            </>
        )}
        </div>
    );
}

export default ResumePreview;
