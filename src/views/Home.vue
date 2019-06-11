<template>
  <div class="home">
    <nav aria-label="Page navigation example" id="pg">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous!</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next!</a>
        </li>
      </ul>
    </nav>
    <div class="row">
      <div class="col-10 offset-1" id="log">
        <bug-log />
      </div>
    </div>
    <div class="row" id="Form">
      <div class="col-8 offset-2">
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
<style>
  #pg {
    margin-top: 150px;
  }
</style>