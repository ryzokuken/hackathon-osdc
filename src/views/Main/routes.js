import React from 'react'
import {Route, IndexRedirect, IndexRoute} from 'react-router'
import AuthService from 'utils/AuthService'

import Container from './Container'
import Home from './Home/Home'
import Domain from './Domain/Domain'
import Shelf from './Shelf/Shelf'
import Upload from './Upload/Upload'
import BookText from './BookText/BookText'
import Login from './Login/Login'
import Logout from './Logout/Logout'
import NotFound from './NotFound/NotFound';

const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__);

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} />
      <Route path="section/:sectionId">
        <IndexRoute component={Domain} />
        <Route path="shelf/:shelfId">
          <IndexRoute component={Shelf}/>
          <Route path="upload" component={Upload} onEnter={requireAuth} />
        </Route>
      </Route>
      <Route path="stream/:url" component={BookText}/>
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} onEnter={requireAuth} />
      <Route path="*" component={NotFound} />
    </Route>
  )
}

export default makeMainRoutes
