import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';

import styles from './styles.module.css';

export default class Domain extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2 className={styles.textCenter}>Technology</h2>
        </Jumbotron>
        <div className={styles.boxMain}>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className={styles.cardShelf}>
                  Technology
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className={styles.cardShelf}>
                  Medicine
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className={styles.cardShelf}>
                  Education
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className={styles.cardShelf}>
                  Science
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className={styles.cardShelf}>
                  Law and Order
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className={styles.cardShelf}>
                  Culture
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Grid>
    );
  }
}
