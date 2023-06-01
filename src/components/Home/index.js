// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isTrue: true}

  componentDidMount() {
    this.getTeam()
  }

  getTeam = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedData, isTrue: false})
  }

  render() {
    const {teamsList, isTrue} = this.state
    return (
      <div className="bgContainer">
        {isTrue ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="logoContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1 className="title">IPL Dashboard</h1>
            </div>
            <ul className="listContainer">
              {teamsList.map(each => (
                <TeamCard key={each.id} teamDetails={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
