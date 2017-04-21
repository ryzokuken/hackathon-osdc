import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'

import NavbarComponent from './partials/Navbar/Navbar'

import styles from './styles.module.css'

export default class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <div>
        <NavbarComponent auth={this.props.route.auth}/>
        {children}
      </div>
    )
  }
}
