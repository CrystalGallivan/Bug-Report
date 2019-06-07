<template>
  <div class="bug-report container">
    <div class="row">
      <div class="col">
        <div class="card text-center">
          <div class="card-header">
            <h6 v-if='bug.closed == false'>Open</h6>
            <h6 v-else-if='bug.closed == true'>Closed</h6>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{bug.title}}</h5>
            <p class="card-text">{{bug.description}}</p>
            <p class="card-text"><small class="text-muted">{{bug.creator}}</small></p>
            <button type="button" @click="deleteBug()" class="btn btn-info btn-sm">Close</button>
          </div>
          <div class="card-footer text-muted">
            {{new Date(bug.createdAt).toLocaleDateString()}}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <note-form :bugId="this.id" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <bug-note />
      </div>
    </div>



  </div>
</template>


<script>
  import BugNote from '@/components/BugNote.vue'
  import NoteForm from '@/components/NoteForm.vue'
  export default {
    name: "BugReport",
    props: ["id"],
    data() {
      return {

      }
    },
    mounted() {
      if (!this.bug._id) {
        this.$store.dispatch('getBugById', this.$route.params.id)
      }
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      },
      bug() {
        return this.$store.state.bug
      }

    },
    methods: {
      selectBug(id) {
        this.$store.dispatch('setBug', id);
      },
      deleteBug(id) {
        this.$store.dispatch('deleteBug', id)
      }
    },
    components: {
      BugNote,
      NoteForm
    }

  }


</script>


<style>


</style>