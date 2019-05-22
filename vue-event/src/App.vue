<template>
  <div>
    <EventForm v-on:onCreate="handleCreate" />
    <EventList v-bind:events="state.events" />
  </div>
</template>

<script>
import EventForm from './components/EventForm';
import EventList from './components/EventList';

export default {
  name: 'app',
  components: {
    EventForm,
    EventList
  },
  data() {
    return {
      id: 1,
      state: {
        events: [
          {
            id: 0,
            title: 'Example',
            description: 'Example'
          }
        ]
      }
    };
  },
  methods: {
    handleCreate(event) {
      const { events } = this.state;
      this.state.events.push({
          id: this.id++,
          ...event
        });
    }
  }
}
</script>

<style>
</style>
