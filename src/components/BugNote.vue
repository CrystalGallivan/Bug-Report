<template>
  <div class="bug-note">
    <div class="card" v-for="note in notes" :key="note._id">
      <div class="card-header">
        {{note.creator}}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{note.content}}</p>
          <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>




  </div>
</template>


<script>
  export default {
    name: "BugNote",
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch('getAllNotes')
    },
    computed: {
      notes() {
        return this.$store.state.notes
      }
    }
  }


</script>


<style>


</style>