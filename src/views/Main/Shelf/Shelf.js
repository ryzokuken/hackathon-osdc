import React from 'react';
import {Jumbotron, Grid, Button} from 'react-bootstrap';
import axios from 'axios';
import {LinkContainer} from 'react-router-bootstrap';

import styles from './styles.module.css';

export default class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/domains/${this.props.params.sectionId}`)
      .then(res => {
        res.data.topics.map(topic => {
          if (topic._id === this.props.params.shelfId) {
            this.setState({ books: topic.posts });
          }
        })
      });
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2 className="text-center">Web Design</h2>
        </Jumbotron>
        <div className={styles.boxShelf}>
          <div className={styles.boxShelfButtons}>
            <LinkContainer to={`/section/${this.props.params.sectionId}/shelf/${this.props.params.shelfId}/upload`}>
              <Button block bsStyle="primary">Add a new book</Button>
            </LinkContainer>
            <Button block>Sort by Views</Button>
            <Button block>Sort by Likes</Button>
            <Button block>Sort by Date</Button>
          </div>
          <div className={styles.boxShelfBooks}>
            {/* {JSON.stringify(this.state.books)} */}
            {this.state.books && this.state.books.map(book => (
              <a href={`http://localhost:4000/${book.file}`} target="_blank">
                <div className={styles.cardBook}>
                  {book.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Grid>
    );
  }
}
