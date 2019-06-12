<template>
  <div class="bug-note">
    <div class="card" v-for="note in notes" :key="note._id">
      <div class="card-header">
        {{note.flagged}}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{note.content}}</p>
          <footer class="blockquote-footer">{{note.creator}}</footer>
        </blockquote>
        <button class="btn" @click='deleteNote'>Delete</button>
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
      this.$store.dispatch('getAllNotes', this.$route.params.id)
    },
    computed: {
      notes() {
        return this.$store.state.notes
      }
    },
    methods: {
      delete(id) {
        this.$store.dispatch('deleteNote', id)
      }
    }
  }


</script>


<style>


</style>