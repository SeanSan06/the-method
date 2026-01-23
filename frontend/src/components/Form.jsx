function Form() {
    return (
        <div id="form-page">
            <h1>Resume Maker</h1>

            <form id="resume-form">
                {/* Basic Information */}
                <h2>Basic Information</h2>
                <div className="card">
                <label>
                    Name
                    <input type="text" name="resume[name]" />
                </label>

                <label>
                    Phone
                    <input type="text" name="resume[phone]" />
                </label>

                <label>
                    Email
                    <input type="email" name="resume[email]" />
                </label>

                <label>
                    US Citizen
                    <input type="checkbox" name="resume[is_us_citizen]" />
                </label>
                </div>

                {/* Links */}
                <h2>Links</h2>
                <div className="card">
                <label>
                    Type
                    <input type="text" name="resume[links][0][type]" />
                </label>

                <label>
                    URL
                    <input type="url" name="resume[links][0][url]" />
                </label>
                </div>

                {/* About */}
                <h2>About</h2>
                <div className="card">
                <label>
                    About You
                    <textarea name="resume[about_section]" rows="4" />
                </label>
                </div>

                {/* Education */}
                <h2>Education</h2>
                <div className="card">
                <label>
                    School
                    <input type="text" name="resume[education][0][school]" />
                </label>

                <label>
                    Major
                    <input type="text" name="resume[education][0][major]" />
                </label>

                <label>
                    GPA
                    <input type="text" name="resume[education][0][gpa]" />
                </label>

                <label>
                    Activities
                    <input type="text" name="resume[education][0][activities]" />
                </label>

                <label>
                    Start Year
                    <input type="text" name="resume[education][0][start_year]" />
                </label>

                <label>
                    End Year
                    <input type="text" name="resume[education][0][end_year]" />
                </label>
                </div>

                {/* Relevant Coursework */}
                <h2>Relevant Coursework</h2>
                <div className="card">
                <label>
                    Coursework
                    <input type="text" name="resume[relevant_coursework][0]" />
                </label>
                </div>

                {/* Experience */}
                <h2>Experience</h2>
                <div className="card">
                <label>
                    Company
                    <input type="text" name="resume[experience][0][company]" />
                </label>

                <label>
                    Title
                    <input type="text" name="resume[experience][0][title]" />
                </label>

                <label>
                    Location
                    <input type="text" name="resume[experience][0][location]" />
                </label>

                <label>
                    Description
                    <textarea name="resume[experience][0][description]" rows="3" />
                </label>

                <label>
                    Start Date
                    <input type="text" name="resume[experience][0][start_date]" />
                </label>

                <label>
                    End Date
                    <input type="text" name="resume[experience][0][end_date]" />
                </label>
                </div>

                {/* Projects */}
                <h2>Personal / Team Projects</h2>
                <div className="card">
                <label>
                    Project Name
                    <input type="text" name="resume[projects][0][name]" />
                </label>

                <label>
                    Description
                    <textarea name="resume[projects][0][description]" rows="3" />
                </label>

                <label>
                    Link
                    <input type="url" name="resume[projects][0][link]" />
                </label>

                <label>
                    Start Date
                    <input type="text" name="resume[projects][0][start_date]" />
                </label>

                <label>
                    End Date
                    <input type="text" name="resume[projects][0][end_date]" />
                </label>
                </div>

                {/* Skills */}
                <h2>Skills</h2>
                <div className="card">
                <label>
                    Skill
                    <input type="text" name="resume[skills][0]" />
                </label>
                </div>

                {/* Certifications */}
                <h2>Certifications</h2>
                <div className="card">
                <label>
                    Name
                    <input type="text" name="resume[certifications][0][name]" />
                </label>

                <label>
                    Issuer
                    <input type="text" name="resume[certifications][0][issuer]" />
                </label>

                <label>
                    Date
                    <input type="text" name="resume[certifications][0][date]" />
                </label>
                </div>

                {/* Awards */}
                <h2>Awards</h2>
                <div className="card">
                <label>
                    Name
                    <input type="text" name="resume[awards][0][name]" />
                </label>

                <label>
                    Issuer
                    <input type="text" name="resume[awards][0][issuer]" />
                </label>

                <label>
                    Date
                    <input type="text" name="resume[awards][0][date]" />
                </label>
                </div>

                <button type="submit-button">Submit Resume</button>
            </form>
        </div>
    );
}

export default Form;
