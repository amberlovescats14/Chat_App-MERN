import ProfileGitHub from '../../components/profile/ProfileGitHub'
import { connect } from 'react-redux'
import { getGithubRepos } from '../../redux/actions/Actions'

const mapStateToProps = state => ({
  repos: state.getCurrentProfile.repos
})

const mapDispatchToProps = dispatch => ({
  getGithubRepos: (username) => dispatch(getGithubRepos(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileGitHub)