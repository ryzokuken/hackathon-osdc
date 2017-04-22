import React from 'react';
import {Jumbotron, Grid, Button} from 'react-bootstrap';

import styles from './styles.module.css';

export default class Shelf extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2 className="text-center">Web Design</h2>
        </Jumbotron>
        <div className={styles.boxShelf}>
          <div className={styles.boxShelfButtons}>
            <Button block>Sort by Views</Button>
            <Button block>Sort by Likes</Button>
            <Button block>Sort by Date</Button>
          </div>
          <div className={styles.boxShelfBooks}>
            <div className={styles.cardBook}>
              Introduction to CSS3
            </div>
            <div className={styles.cardBook}>
              Introduction to Foundation
            </div>
            <div className={styles.cardBook}>
              Introduction to Animations
            </div>
            <div className={styles.cardBook}>
              Introduction to Bootstrap
            </div>
            <div className={styles.cardBook}>
              Introduction to Bootstrap4
            </div>
            <div className={styles.cardBook}>
              Introduction to SASS
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}
