import React, { Component } from 'react';
import './App.css';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

class App extends Component {
  id = 1

  state = {
    events: [
      {
        id: 0,
        title: 'Example',
        description: 'Example'
      }
    ]
  }

  handleCreate = (event) => {
    const { events } = this.state;
    this.setState({
      events: events.concat({
        id: this.id++,
        ...event
      })
    });
  }

  render() {
    return (
      <div>
        <EventForm 
          onCreate={this.handleCreate}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
