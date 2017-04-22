import React from 'react';

export default class BookText extends React.Component {
  render() {
    return (
      <div>
        <video src={`http://localhost:4000/stream/${this.props.params.url}`}></video>
      </div>
    );
  }
}
