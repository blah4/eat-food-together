import React, { Component } from 'react';
import * as firebase from 'firebase';

import EventCard from './EventCard';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBKo1JNrWqN2gbKXzmkl8i1WS3v6rKh96I",
    authDomain: "order-food-together.firebaseapp.com",
    databaseURL: "https://order-food-together.firebaseio.com",
    projectId: "order-food-together",
    storageBucket: "order-food-together.appspot.com",
    messagingSenderId: "745437231279"
};
firebase.initializeApp(config);
const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

class EventsList extends Component {

    state = {
        eventsList: []
    }

    componentDidMount() {
        db.collection('events').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let li = <li key={doc.id}>
                    <EventCard 
                    date={doc.data().date}
                    eventPlace={doc.data().eventPlace}
                    organizer={doc.data().organizer}
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