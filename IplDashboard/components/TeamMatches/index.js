import {Component} from 'react'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamMatchesDetailsList: []}

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getFormattedData = data => {
    const formattedData = {
      id: data.id,
      competingTeam: data.competing_team,
      competingTeamLogo: data.competing_team_logo,
      date: data.date,
      manOfTheMatch: data.man_of_the_match,
      matchStatus: data.match_status,
      result: data.result,
      secondInnings: data.second_innings,
      umpires: data.umpires,
      venue: data.venue,
    }
    return formattedData
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()

    const formattedFetchedData = {
      latestMatchDetails: this.getFormattedData(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
      teamBannerUrl: fetchedData.team_banner_url,
    }

    this.setState({teamMatchesDetailsList: formattedFetchedData})
  }

  render() {
    const {teamMatchesDetailsList} = this.state
    const {latestMatchDetails, teamBannerUrl} = teamMatchesDetailsList
    console.log(teamMatchesDetailsList)
    return (
      <div className="team-matches-card">
        <div className="team-banner-">
          jpn
          <img src={teamBannerUrl} className="team-banner-image" alt="" />
          <LatestMatch matchDetails={latestMatchDetails} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
