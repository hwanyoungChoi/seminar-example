<template>
    <form v-on:submit.prevent="handleSubmit">
        <input
            placeholder="제목"
            v-model="state.title"
        />
        <input
            placeholder="내용"
            v-model="state.description"
        />
        <button type="submit">등록</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            state: {
                title: '',
                description: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$emit('onCreate', this.state);
            this.state = {
                title: '',
                description: ''
            };
        }
    }
}
</script>
<style scoped>

</style>


