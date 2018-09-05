import React, { Component } from 'react';
import axios from 'axios';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

    export default class Header extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink href="./component/TabelBTC.js">Bitcoin Today</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./component/RpToBtc.js">Rupiah</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./component/BtcToRp.js">Bitcoin</NavLink>
              </NavItem>
                  
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
    }
    