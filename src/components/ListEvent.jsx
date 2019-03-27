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
                    eventName: doc.data().eventName,
                    date: doc.data().date,
                    eventPlace: doc.data().eventPlace,
                    organizer: doc.data().organizer,
                    eventId: doc.id,
                    participates: doc.data().participates
                }
                this.setState((prevState) => ({ eventsList: [...prevState.eventsList, singleEvent] }));
            });
        });
    }

    deleteEvent = (eventId) => { 
        let newState = this.state.eventsList;    
        let index = null;
        this.state.eventsList.forEach((el, i) => {
            if( el.eventId === eventId) {
                index=i;
            }       
        });
        if (index > -1) {
            newState.splice(index, 1);
        }
        this.setState({eventsList: newState});    
    }

    addMember = (eventId, name, food) => {
        const singleEvent = this.state.eventsList.find((el) => el.eventId === eventId);
        singleEvent.participates.push(`Member ${name} will eat ${food}`);        
        
        let newState = this.state.eventsList;
        let index = null;
        this.state.eventsList.forEach((el, i) => {
            if( el.eventId === eventId) {
                index=i;
            }    
        });
        if (index > -1) {
            newState.splice(index, 1, singleEvent);
        }
        this.setState(() => ({eventsList: newState}));   
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
                                eventId={singleEvent.eventId}
                                addMember={this.addMember}
                                deleteEvent={this.deleteEvent}
                                key={singleEvent.eventId}
                                eventName={singleEvent.eventName}
                                date={singleEvent.date}
                                eventPlace={singleEvent.eventPlace}
                                organizer={singleEvent.organizer}
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