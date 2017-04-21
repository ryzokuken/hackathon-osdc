import React, { PropTypes as T } from 'react'
import {Button} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'

export class Logout extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  render(){
    return (
      <div className={styles.root}>
        <h2>Logout</h2>
        <Button
          onClick={this.logout.bind(this)}
          bsStyle="primary"
          bsSize="large">Logout</Button>
      </div>
    )
  }
}

export default Logout;
