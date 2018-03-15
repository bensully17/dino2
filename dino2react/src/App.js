import React, { Component } from 'react';
import './profile.css'
import Header from './Header/Header'
import Profiles from './Profiles/Profiles'
const api_url = './dinosaurs.json'


class App extends Component {
  state = {
    profiles: []
  }
  
  componentDidMount() {
    fetch(api_url)
        .then(response => response.json())        
        .then(response => this.setState({profiles: response}))
  }

  render() {
    const profiles = this.state.profiles.map((profile, index) => {
      return (<Profiles name={profile.name} image={profile.image} skills={profile.skills} showInfo={false} index={index}/>
      )
    })
    return (
      <div className="App">
        <Header className='Header' />
        <section id="profiles-container">
            <h2>Profiles</h2>
            <ul id="profiles">
              {profiles}
            </ul>
        </section>
      </div>
    );
  }
}

export default App;
