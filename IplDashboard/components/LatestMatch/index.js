import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  console.log(matchDetails)
  const {manOfTheMatch} = matchDetails
  console.log(manOfTheMatch)
  //   const {
  //     competingTeam,
  //     competingTeamLogo,
  //     date,
  //     id,
  //     manOfTheMatch,
  //     matchStatus,
  //     result,
  //     secondInnings,
  //     umpires,
  //     venue,
  //   } = latestMatchDetails
  //   console.log(competingTeam)

  return (
    <div className="latest-match-card">Hello this is latest match card</div>
  )
}

export default LatestMatch
