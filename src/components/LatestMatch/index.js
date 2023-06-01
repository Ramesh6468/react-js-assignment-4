import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latestMatchContainer">
      <h1 className="heading">Latest Matches</h1>
      <div className="logoContainer3">
        <div className="leftContainer">
          <p className="name2">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="logo5"
          alt={`latest match ${competingTeam}`}
        />
        <div className="rightContainer">
          <p className="first">First Innings</p>
          <p className="second">{firstInnings}</p>
          <p className="first">Second Innings</p>
          <p className="second">{secondInnings}</p>
          <p className="first">Man Of The Match</p>
          <p className="second">{manOfTheMatch}</p>
          <p className="first">Umpires</p>
          <p className="second">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
