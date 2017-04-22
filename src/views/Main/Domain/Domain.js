import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import axios from 'axios';
import {LinkContainer} from 'react-router-bootstrap';

import styles from './styles.module.css';

export default class Domain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: {}
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:4000/api/domains/${this.props.params.sectionId}`)
      .then(res => {
        this.setState({ domain: res.data });
      });
  }
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2 className={styles.textCenter}>{this.state.domain.title ? this.state.domain.title : 'Loading'}</h2>
        </Jumbotron>
        <div className={styles.boxMain}>
          <Grid>
            <Row className="show-grid">
              {this.state.domain.topics && this.state.domain.topics.map(topic => (
                <LinkContainer to={`/section/${this.props.params.sectionId}/shelf/${topic._id}`}>
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className={styles.cardShelf}>
                      {topic.title}
                    </div>
                  </Col>
                </LinkContainer>
              ))}
            </Row>
          </Grid>
        </div>
      </Grid>
    );
  }
}
