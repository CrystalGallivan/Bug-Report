<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="row">
      <div class="col-10 offset-1">
        <bug-log />
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1">
        <bug-form />
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugForm from '@/components/BugForm.vue'
  import BugLog from '@/components/BugLog.vue'


  export default {
    name: 'home',
    components: {
      BugForm,
      BugLog
    }
  }
</script>