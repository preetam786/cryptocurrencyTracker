import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeamsList: []}

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const responseStatus = await response.status
    console.log(responseStatus)
    const data = await response.json()
    const {teams} = data
    const formattedData = await teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeamsList: formattedData})
  }

  render() {
    const {iplTeamsList} = this.state
    return (
      <div className="ipl-dashboard">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="logo-title">Ipl Dashboard</h1>
        </div>
        <div className="ipl-team-list">
          {iplTeamsList.map(eachTeam => (
            <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
