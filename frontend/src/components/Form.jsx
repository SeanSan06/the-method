function Form() {
    return  (
        <div id="form-page">
            <h1>Resume Maker</h1>
                <form id="resume-form">
                    {/* Basic information section */}
                    <h2>Basic Information</h2>
                    <div id="basic-information-container">
                        <div id="basic-information">
                            <label>
                                Name:
                                <input type="text" name="resume[name]" />
                            </label>
                            <br />
                            <label>
                                Phone:
                                <input type="text" name="resume[phone]" />
                            </label>
                            <br />
                            <label>
                                Email:
                                <input type="email" name="resume[email]" />
                            </label>
                            <br />
                            <label>
                                US Citizen:
                                <input type="checkbox" name="resume[is_us_citizen]" />
                            </label>
                            <br />
                        </div>
                    </div>

                    {/* Links section */}
                    <h2>Links</h2>
                    <div id="links-container">
                        <div id="link">
                            <label>
                                Type:
                                <input type="text" name="resume[links][0][type]" />
                            </label>
                            <label>
                                URL:
                                <input type="url" name="resume[links][0][url]" />
                            </label>
                        </div>
                    </div>

                    {/* About section */}
                    <h2>About</h2>
                    <textarea name="resume[about_section]" rows="4" cols="50"></textarea>

                    {/* Education section */}
                    <h2>Education</h2>
                    <div id="education-container">
                        <div id="education">
                            <label>
                                School:
                                <input type="text" name="resume[education][0][school]" />
                            </label>
                            <label>
                                Major:
                                <input type="text" name="resume[education][0][major]" />
                            </label>
                            <label>
                                GPA:
                                <input type="text" name="resume[education][0][gpa]" />
                            </label>
                            <label>
                                Activities:
                                <input type="text" name="resume[education][0][activities]" />
                            </label>
                            <label>
                                Start Year:
                                <input type="text" name="resume[education][0][start_year]" />
                            </label>
                            <label>
                                End Year:
                                <input type="text" name="resume[education][0][end_year]" />
                            </label>
                        </div>
                    </div>

                    {/* Relevant coursework section */}
                    <h2>Relevant Coursework</h2>
                    <input type="text" name="resume[relevant_coursework][0]" />

                    {/* Experience section */}
                    <h2>Experience</h2>
                    <div id="experience-container">
                        <div id="experience">
                            <label>
                                Company:
                                <input type="text" name="resume[experience][0][company]" />
                            </label>
                            <label>
                                Title:
                                <input type="text" name="resume[experience][0][title]" />
                            </label>
                            <label>
                                Location:
                                <input type="text" name="resume[experience][0][location]" />
                            </label>
                            <label>
                                Description:
                                <textarea name="resume[experience][0][description]" rows="3"></textarea>
                            </label>
                            <label>
                                Start Date:
                                <input type="text" name="resume[experience][0][start_date]" />
                            </label>
                            <label>
                                End Date:
                                <input type="text" name="resume[experience][0][end_date]" />
                            </label>
                        </div>
                    </div>

                    {/* Personal/team projects section */}
                    <h2>Personal/Team Projects</h2>
                    <div id="projects-container">
                        <div id="project">
                            <label>
                                Name:
                                <input type="text" name="resume[projects][0][name]" />
                            </label>
                            <label>
                                Description:
                                <textarea name="resume[projects][0][description]" rows="3"></textarea>
                            </label>
                            <label>
                                Link:
                                <input type="url" name="resume[projects][0][link]" />
                            </label>
                            <label>
                                Start Date:
                                <input type="text" name="resume[projects][0][start_date]" />
                            </label>
                            <label>
                                End Date:
                                <input type="text" name="resume[projects][0][end_date]" />
                            </label>
                        </div>
                    </div>

                    {/* Skills section */}
                    <h2>Skills</h2>
                    <input type="text" name="resume[skills][0]" />

                    {/* Certifications */}
                    <h2>Certifications</h2>
                    <div id="certifications-container">
                        <div id="certification">
                            <label>
                                Name:
                                <input type="text" name="resume[certifications][0][name]" />
                            </label>
                            <label>
                                Issuer:
                                <input type="text" name="resume[certifications][0][issuer]" />
                            </label>
                            <label>
                                Date:
                                <input type="text" name="resume[certifications][0][date]" />
                            </label>
                        </div>
                    </div>

                    {/* Awards section */}
                    <h2>Awards</h2>
                    <div id="awards-container">
                        <div id="award">
                            <label>
                                Name:
                                <input type="text" name="resume[awards][0][name]" />
                            </label>
                            <label>
                                Issuer:
                                <input type="text" name="resume[awards][0][issuer]" />
                            </label>
                            <label>
                                Date:
                                <input type="text" name="resume[awards][0][date]" />
                            </label>
                        </div>
                    </div>

                    <br />
                    <button type="submit">Submit Resume</button>
                </form>

        </div>
    );
}

export default Form;