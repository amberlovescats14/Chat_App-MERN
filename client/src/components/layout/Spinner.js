import React, {Fragment} from 'react'
import figitSpinner from '../../img/lg.fidget-spinner.gif'

const Spinner = () => {
  return (
    <Fragment>
      <img src={figitSpinner} alt="Loading..."
      style={{width: '200px', margin: 'auto', display: 'block'}}/>
    </Fragment>
  )
}

export default Spinner
