<template lang="html">
<section class="tasks">
    <Task v-for="task in tasks" :task="task" />
    
    <AddTaskDialog/>
</section>
</template>

<script lang="js">
import Task from '../components/Task';
import AddTaskDialog from '../components/AddTaskDialog';

export default {
    name: 'tasks',
    props: [],
    components: {
        Task,
        AddTaskDialog,
    },
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        tasks() {
            return this.$store.getters.tasks
        }
    }
}
</script>

<style scoped>
</style>
