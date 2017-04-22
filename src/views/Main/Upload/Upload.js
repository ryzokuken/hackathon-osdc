import React from 'react';
import axios from 'axios';
import styles from './styles.module.css';

export default class Upload extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile(),
      data: {}
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
    this.onChange = this.onChange.bind(this);
  }

  submitData(e) {
    e.preventDefault();
    var data = new FormData();
    data.append("title", this.state.title);
    data.append("file", this.state.file);
    data.append("domainId", this.props.params.sectionId);
    data.append("topicId", this.props.params.shelfId);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "http://localhost:4000/uploads");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "d6d55059-8f4c-1bba-589a-0d7ded54ed1a");

    xhr.send(data);
  }

  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    return (
      <div>
        <form enctype="multipart/form-data" method="POST">
          <input type="text" name="title" placeholder="Title" onChange={this.onChange}/>
          <textarea name="text" id="" cols="30" rows="10"  onChange={this.onChange}></textarea>
          <input type="file" name="file"/>
          <input name="creatorName" type="text" style={{ display: 'none' }} value={this.state.profile.nickname}  onChange={this.onChange}/>
          <input type="text" style={{display:'none'}} name="domainId" value={this.props.params.sectionId}  onChange={this.onChange}/>
          <input type="text" style={{display:'none'}} name="topicId" value={this.props.params.shelfId}  onChange={this.onChange}/>
          <input type="submit" value="Submit Book" onClick={this.submitData}/>
        </form>
      </div>
    );
  }
}
