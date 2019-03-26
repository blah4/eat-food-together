import React, { Component } from 'react';

import db from '../firebase/config';
import CardEvent from './CardEvent';

class ListEvents extends Component {

    state = {
        eventsList: []
    }

    componentDidMount() {
        db.collection('events').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                const singleEvent = {
                    uniqueKey: doc.id,
                    eventName: doc.data().eventName,
                    date: doc.data().date,
                    eventPlace: doc.data().eventPlace,
                    organizer: doc.data().organizer,
                    joinID: doc.id,
                    participates: doc.data().participates
                }
                this.setState((prevState) => ({ eventsList: [...prevState.eventsList, singleEvent] }));
            });
        });
    }

    deleteEvent = (uniqueKey) => { 
        let newState = this.state.eventsList;
        console.log(this.state.eventsList);      
        let index = null;
        this.state.eventsList.forEach((el, i) => {
            //console.log(el.uniqueKey, uniqueKey, i);
            if( el.uniqueKey === uniqueKey) {
                index=i;
            }       
        });
        if (index > -1) {
            newState.splice(index, 1);
        }
        this.setState({eventsList: newState});
    }
    
    render() {
        //this.state.eventsList.map(el => (console.log(el.participates)));
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
                        {this.state.eventsList.map(singleEvent => (
                            <CardEvent
                                deleteEvent={this.deleteEvent}
                                key={singleEvent.uniqueKey}
                                uniqueKey={singleEvent.uniqueKey}
                                eventName={singleEvent.eventName}
                                date={singleEvent.date}
                                eventPlace={singleEvent.eventPlace}
                                organizer={singleEvent.organizer}
                                joinID={singleEvent.joinID}
                                participates={singleEvent.participates}
                            />
                        ))}
                    </ul>
                </>
            )    
        }        
        
    }
}

export default ListEvents;