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
        <button class="btn btn-danger" type="submit">Note!</button>
      </form>
    </div>
  </div>
</template>


<script>
  export default {
    name: "NoteForm",
    props: ["bugId"],
    data() {
      return {
        creator: '',
        content: '',
        flagged: ''
      }
    },
    mounted() {
      this.$store.dispatch('getAllNotes')
    },
    computed: {
      notes() {
        return this.$store.state.notes
      }
    },
    methods: {
      handleSubmit() {
        let data = {
          content: this.content,
          creator: this.creator,
          bug: this.bug
        }
        this.$store.dispatch('createNote', data)
        this.content = '',
          this.creator = ''
      }
    },
  }


</script>


<style>


</style>