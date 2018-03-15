import React from 'react'

const Skills = (props) => {
    const skills = props.skills.map((skill) => {
        return <li>{skill}</li>
    })
    return (
        <section className={
            props.showing ? 'skills-container' : 'skills-container hidden'
        }>
            <h4>Skills</h4>
            <ul className="skills-list">
                {skills}
            </ul>
        </section>
    )
}

export default Skills