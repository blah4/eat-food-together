import React, { Component } from 'react';

import db from '../firebase/config';
import EventCard from './EventCard';


class EventsList extends Component {

    state = {
        eventsList: []
    }

    componentDidMount() {
        db.collection('events').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let li = <li key={doc.id} id={doc.id}> 
                    <EventCard 
                        date={doc.data().date}
                        eventPlace={doc.data().eventPlace}
                        organizer={doc.data().organizer}
                        joinID={doc.id}
                        participates={doc.data().participates}
                    />
                </li> 
                this.setState((prevState) => ({ eventsList: [...prevState.eventsList, li] }));
            });
        });
    }

    render() {
        return (
            <ul>
                {this.state.eventsList.map((el) => el)}
            </ul>
        )
    }
}

export default EventsList;