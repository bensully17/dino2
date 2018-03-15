import React, { Component } from 'react'
import '../profile.css'
import Skills from '../SkillList/SkillList'

class Profiles extends Component {

    state = {
        showInfo: false
    }

    toggleInfo = (profileIndex) => {   
        const doesShow = this.state.showInfo  
        this.setState({showInfo: !doesShow})
    }
    
    render() {
        return (
        <li>
            <div onClick={() => this.toggleInfo(this.props.index)} id="profile-template" type="text/x-handlebars-template">
                <div className="profile-card">
                    <header className="profile-header">
                        <img src={this.props.image} />
                        <h2>{this.props.name}</h2>
                    </header>
                    <Skills skills={this.props.skills} showing={this.state.showInfo}/>
                </div>
            </div>
        </li>
        )
    }
}

export default Profiles