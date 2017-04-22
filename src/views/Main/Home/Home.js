import React, { PropTypes as T } from 'react'
import {Button, Jumbotron, Grid, Row, Col} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile(),
      domains: {}
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  render(){
    const { profile } = this.state
    return (
      <div className={styles.root}>
        {JSON.stringify(this.state.domains)}
        <Grid>
          <Jumbotron>
            <h1>Welcome to the Library of Alexandria!</h1>
          </Jumbotron>
          <div className={styles.boxDomains}>
            <h3 className={styles.textDomains}>
              Sections
            </h3>
            <Grid>
              <Row className="show-grid">
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className={styles.cardDomain}>
                    Technology
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className={styles.cardDomain}>
                    Medicine
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className={styles.cardDomain}>
                    Education
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className={styles.cardDomain}>
                    Science
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className={styles.cardDomain}>
                    Law and Order
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className={styles.cardDomain}>
                    Culture
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Home;
