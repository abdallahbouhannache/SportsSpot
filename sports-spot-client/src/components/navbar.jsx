/*jshint esversion: 6 */
import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem,NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

class MainNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
         loggedIn: 1,
        };
    }
    button_click(){
    }
    render() {
        return (
            <div>
                <Navbar inverse fixedTop collapseOnSelect>
                    <Navbar.Header>
                    <LinkContainer to={`/`} style={{cursor:"pointer"}}>    
                        <Navbar.Brand onClick={this.props.getCurrentALLNews} >
                          SportsSpot
                        </Navbar.Brand>
                    </LinkContainer>    
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to={`/nfl`}>
                                <NavItem onClick={this.props.getCurrentNFLNews} eventKey={1}>NFL</NavItem>
                            </LinkContainer>
                            <LinkContainer to = {`/mlb`}>
                               <NavItem onClick={this.props.getCurrentMLBNews} eventKey={2} >MLB</NavItem>
                            </LinkContainer>
                            <LinkContainer to={`/nba`}>
                               <NavItem onClick={this.props.getCurrentNBANews} eventKey={3}>NBA</NavItem>
                            </LinkContainer>
                            <LinkContainer to={`/nhl`}>
                               <NavItem onClick={this.props.getCurrentNHLNews} eventKey={4}>NHL</NavItem>
                            </LinkContainer>   
                        </Nav>
                    <Nav pullRight>
                        <LinkContainer to={`/login`}>
                                <NavItem>Login</NavItem>
                        </LinkContainer>
                        <LinkContainer to={`/signup`}>
                            <NavItem>Sign Up</NavItem>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>
        )
    }
}

MainNav.propTypes = {
  getCurrentNHLNews : PropTypes.func.isRequired,
  getCurrentMLBNews : PropTypes.func.isRequired,
  getCurrentNFLNews : PropTypes.func.isRequired,
  getCurrentNBANews : PropTypes.func.isRequired,
  getCurrentALLNews : PropTypes.func.isRequired
};

export default connect(null,actionCreators)(MainNav);
// export default MainNav;
