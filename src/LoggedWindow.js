import React, { Component } from 'react';
import './App.css';
import {Materialize} from 'materialize-css';
import {SideNav, SideNavItem, Collection, CollectionItem, Button, Icon} from 'react-materialize';

class LoggedWindow extends Component {
  render() {
    return (
      <div id="logged-window">
        <SideNav id="sidebar" trigger={<Button>X</Button>} className="fixed" options={{menuWidth : 300}}>
          <SideNavItem>
            <Collection id="selfBox">
              <CollectionItem className="avatar">
                <img src="images/me.jpg" className="circle" />
                <span>Joe Doe</span>
              </CollectionItem>
            </Collection>
          </SideNavItem>
          <SideNavItem>
            <Collection id="contacts">
              <CollectionItem className="avatar">
                <img src="images/bob.jpg" alt="" className="circle" />
                <span className="title">Bob Kerman</span>
                <p>Landed on the Mun</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </CollectionItem>
              <CollectionItem className="avatar">
                <img src="images/valentina.jpg" alt="" className="circle" />
                <span className="title">Valentina Kerman</span>
                <p>Ready in spacedock</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </CollectionItem>
            </Collection>
          </SideNavItem>
        </SideNav>
        <div id="mainView">
          <div id="mainViewContent">
            Something is happening here
          </div>
        </div>
      </div>
    );
  }
}

export default LoggedWindow;
