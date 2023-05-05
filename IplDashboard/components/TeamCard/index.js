import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, teamImageUrl, name} = teamDetails
    return (
      <Link to={`/team-matches/${id}`} className="team-link">
        <div className="team-card">
          <div className="team-logo-container">
            <img src={teamImageUrl} className="team-logo" alt="name" />
          </div>
          <p className="team-title">{name}</p>
        </div>
      </Link>
    )
  }
}

export default TeamCard
