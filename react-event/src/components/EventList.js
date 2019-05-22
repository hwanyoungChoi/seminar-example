import React, { Component } from 'react';
import Event from './Event';

const EventList = (props) => {
    const { events } = props;
    const list = events.map(event => (
        <Event key={event.id} event={event} />
    ));
    
    return (
        <div>
            {list}
        </div>
    )
}

EventList.defaultProps = {
    events: []
}

export default EventList;