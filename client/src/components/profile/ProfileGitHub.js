import React, { useEffect } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const ProfileGitHub = props => {
  const { username, repos, getGithubRepos } = props
  useEffect(()=> {
    getGithubRepos(username)
  },[getGithubRepos, username])
  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">GitHub Repos:</h2>
      {repos === null ?
      <Spinner/>:
      repos.map((r, i)=> (
        <div key={repos._id} className="repo bg-white p-1 my-1">
          <div>
            <h4>
              <a href={r.html_url} target="_bland" rel="noopener noreferrer">{r.name}</a>
            </h4>
            <p>{r.description}</p>
          </div>
          <div>
            <ul>
              <li className="badge badge-primary">
              Stars: {r.stargazers_count}</li>
              <li className="badge badge-dark">
              Watchers: {r.watchers_count}</li>
              <li className="badge badge-light">
              Forks: {r.forks_count}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

ProfileGitHub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
}

export default ProfileGitHub
