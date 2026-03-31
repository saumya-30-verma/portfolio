const skills =({skills}) => {
    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>

            <ul className="skills-container">
                {skills.map((skill, index) => (
                    <li className="skills-card" key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    )
}

export default skills;