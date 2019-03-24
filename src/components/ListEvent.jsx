import React, { Component } from 'react';

import db from '../firebase/config';
import EventCard from './CardEvent';

class ListEvents extends Component {

    state = {
        eventsList: [],
        activeTab: this.props.activeTab
    }

    componentDidMount() {
        db.collection('events').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let li = 
                <li key={doc.id} id={doc.id}> 
                    <EventCard
                        activCard={this.state.activCard} 
                        eventName={doc.data().eventName}
                        date={doc.data().date}
                        eventPlace={doc.data().eventPlace}
                        organizer={doc.data().organizer}
                        joinID={doc.id}
                        participates={doc.data().participates}
                    />
                </li>
                this.setState((prevState) => ({ eventsList: [...prevState.eventsList, li], activeTab: 'join' }));
                console.log(this.state.activeTab);
            });
        });
    }

    render() {
        if (this.state.eventsList.length === 0) {
            return (
                <>
                    <h1 id='event-list'>OOOPSSS!!</h1>
                    <h2>There is no Food events you need too create one.</h2>
                    <h3>Go to Create Event Cadr</h3>
                </>
            )
        } else {
            return (
                <>
                    <h1 id='event-list'>Events</h1>
                    <ul>
                        {this.state.eventsList.map(el => el)}
                    </ul>
                </>
            )    
        }        
        
    }
}

export default ListEvents;