<template>
  <div class="bug-form">
    <div class="bug-report card">
      <form @submit.prevent='handleSubmit' class="bug-entered">
        <div class="form-group">
          <label for=""><b>Reported By</b></label>
          <input type="text" class="form-control" placeholder="Name..." v-model='creator'>
        </div>
        <div class="form-group">
          <label for=""><b>Title</b></label>
          <input type="text" class="form-control" placeholder="Title..." v-model='title'>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1"><b>Description</b></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model='description'></textarea>
        </div>
        <button class="btn btn-danger" type="submit">Report!</button>
      </form>
    </div>





  </div>
</template>


<script>
  export default {
    name: "BugForm",
    data() {
      return {
        title: '',
        creator: '',
        description: '',
        closed: Boolean,
        date: ''
        // flagged: '',
        // bug: { '_id': ObjectId("") }
        // remember to to check if bug is necessary and if this is the proper way to return it
      }
    },
    mounted() {
      this.$store.dispatch('getAllBugs')
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    },
    methods: {
      handleSubmit() {
        let data = {
          title: this.title,
          description: this.description,
          creator: this.creator,
        }
        this.$store.dispatch('createBug', data)
        this.title = '',
          this.description = '',
          this.creator = ''
      }
    },
  }


</script>


<style>


</style>