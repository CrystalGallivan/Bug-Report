<template>
  <div class="bug-log">
    <div class="row">
      <div class="col-10 offset-1">

        <table class="table table-sm table-dark">
          <caption>List of Bugs</caption>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Reported By</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr @click="selectBug(bug)" v-for='bug in bugs' :key="bug._id">
              <th scope="row">{{bug.title}}</th>
              <td>{{bug.creator}}</td>
              <td v-if="bug.closed == false" class="bg-info">Open</td>
              <td v-else-if="bug.closed == true" class="bg-danger">Closed</td>
              <td>
                {{new Date(bug.createdAt).toLocaleDateString()}}
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "BugLog",
    data() {
      return {

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
      selectBug(bug) {
        this.$store.dispatch('setBug', bug);
      }
    },

  }


</script>


<style>


</style>