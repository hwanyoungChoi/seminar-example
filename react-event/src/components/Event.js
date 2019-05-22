import React from 'react';
import './Event.css';

const Event = (props) => {
    const { title, description } = props.event;

    return (
        <div className="event">
            <div><b>{title}</b></div>
            <div>{description}</div>
        </div>
    );
}

Event.defaultProps = {
    event: {
        id: 1,
        title: 'Example',
        description: 'Example'
    }
}

export default Event;