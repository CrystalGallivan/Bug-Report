<template>
  <div id="app" class="container-fluid">
    <div id="nav" class="row">
      <div class="col-2">
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/code-bug-1-983310.png" alt="" srcset="">
      </div>
      <div class="col-8">
        <h1><b>BUGGIE</b></h1>
      </div>
      <div class="col-2">
        <!-- <button class="btn btn-secondary" to="/">Home</button> -->
        <router-link to="/">Home</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    background-color: rgba(40, 53, 56, 0.9);
  }

  #nav {
    padding: 30px;
    position: fixed;
    height: 120px;
    width: 100%;
    background-color: rgba(250, 250, 240, .5);
    z-index: 1;
    top: 0;
  }

  img {
    display: flex;
    justify-content: flex-start;
    width: 100px;
    height: 80px;
  }

  h1 {
    display: flex;
    justify-content: flex-start;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif, Arial, sans-serif;
    font-size: 4rem;
    color: black;
  }

  router-link {
    display: flex;
    align-content: flex-end;
    font-size: 4rem;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: black;

  }
</style>