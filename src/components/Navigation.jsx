import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

class Navigation extends Component {

    render() {
        console.log(this.props.activeTab);
        return(
            <Nav fill variant="tabs" defaultActiveKey={this.props.activeTab}>
                <Nav.Item>
                    <Link to="/create">
                        <Nav.Link eventKey="create" as="div">Create Evant</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/events">
                        <Nav.Link eventKey="join" as="div">Join Event</Nav.Link>
                    </Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Navigation;