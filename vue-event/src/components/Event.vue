<template>
    <div class="event">
        <div><b>{{title}}</b></div>
        <div>{{description}}</div>
    </div>
</template>
<script>
export default {
    props: ['event'],
    data() {
        return {
            title: this.event.title,
            description: this.event.description
        };
    }
}
</script>
<style scoped>
.event {
    border: 1px solid black;
    padding: 8px;
    margin: 8px;
}
</style>


