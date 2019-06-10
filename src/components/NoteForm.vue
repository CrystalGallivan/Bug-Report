<template>
  <div class="note-form">
    <div class="note-report card">
      <form @submit.prevent='handleSubmit' class="note-entered">
        <div class="form-group">
          <label for=""><b>Noted By</b></label>
          <input type="text" class="form-control" placeholder="Name..." v-model='creator'>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1"><b>Content</b></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model='content'></textarea>
        </div>
        <button class="btn btn-danger" type="submit" disabled v-show="bug.closed == true">Note!</button>
        <button class="btn btn-danger" type="submit">Note!</button>
      </form>

    </div>
  </div>
</template>


<script>
  export default {
    name: "NoteForm",
    props: ["id"],
    data() {
      return {
        creator: '',
        content: '',
        flagged: '',
        bug: {}
      }
    },
    computed: {
      notes() {
        return this.$store.state.notes
      },
      bugs() {
        return this.$store.state.bugs
      }
    },
    methods: {
      // selectBug(id) {
      //   this.$store.dispatch('setBug', this.$route.params.id);
      // },
      getAllNotes(id) {
        this.$store.dispatch('getAllNotes', this.$route.params.id)
      },
      handleSubmit(id) {
        let data = {
          content: this.content,
          creator: this.creator,
          bug: this.$route.params.id
          // user: this.user,
          // flagged: this.flagged
        }
        this.$store.dispatch('createNote', data)
        this.content = '',
          this.creator = '',
          this.bug = ''
        // this.user = ''
        // this.flagged = 'pending' || 'rejected' || 'completed'
      }
    },
  }


</script>


<style>


</style>