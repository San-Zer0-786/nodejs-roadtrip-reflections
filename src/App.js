import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom'

import Feed from './components/Feed'
import Profile from './components/Profile'
import PostView from './components/PostView'
import Editor from './components/Editor'
import requireAuthentication from './utils/requireAuth'
import SignInWith from './components/SignInWith'
import Popular from './components/Popular';
import './index.css';

class App extends Component {
    render() {
        const pathname = window.location.pathname
        return ( 
            <div>
            { !pathname.includes('editor') ? <Header /> : '' }
            <SignInWith />
                <Switch>
                
                    <Route exact path="/" component={Feed} />
                    <Route path="/popular" component={Popular} />
                    <Route path="/profile/:id" component={Profile} />
                    <Route path="/postview/:id" component={PostView} />
                    <Route path="/editor" component={requireAuthentication(Editor)} />
                    <Route path="**" component={Feed} />
                </Switch>
            </div>
        );
    }
}

export default App;