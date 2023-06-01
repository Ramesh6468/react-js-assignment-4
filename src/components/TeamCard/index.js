// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <li className="itemContainer">
      <Link to={`/team-matches/${id}`} className="link">
        <div className="teamListContainer">
          <img src={teamImageUrl} alt={name} className="image1" />
          <p className="name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
