<template>
    <div>
        <template v-for="event in events">
            <Event v-bind:key="event.id" v-bind:event="event" />
        </template>
    </div>
</template>
<script>
import Event from './Event';

export default {
    props: ['events'],
    components: {
        Event
    }
}
</script>
<style scoped>

</style>


