// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const getMatchClassName = status => (status === 'Won' ? 'won' : 'lost')
  const matchStatusClassName = `match-status ${getMatchClassName(matchStatus)}`

  return (
    <li className="itemContainer2">
      <img
        src={competingTeamLogo}
        className="logo3"
        alt={`competing team ${competingTeam}`}
      />
      <p className="name5">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
