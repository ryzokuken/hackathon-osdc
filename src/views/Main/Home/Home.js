import React, { PropTypes as T } from 'react'
import {Button, Jumbotron, Grid, Row, Col} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import axios from 'axios'
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
      domains: []
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/domains')
      .then(res => {
        this.setState({ domains: res.data })
      })
  }

  render(){
    const { profile } = this.state
    return (
      <div className={styles.root}>
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
                {this.state.domains.map && this.state.domains.map(domain => (
                  <LinkContainer to={`/section/${domain._id}`}>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <div className={styles.cardDomain}>
                        <img src={domain.img} alt=""/>
                        <h4>{domain.title}</h4>
                      </div>
                    </Col>
                  </LinkContainer>
                ))}
              </Row>
            </Grid>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Home;
