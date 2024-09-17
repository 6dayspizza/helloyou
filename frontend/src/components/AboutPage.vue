<!-- src/components/AboutPage.vue -->
<template>
  <div id="main">
    <article id="intro" style class="active">
      <h2 class="major">About</h2>
      <span class="image main">

      </span>
      <p>Some text about me.</p>
      <div class="close">"close"</div>
    </article>
    <router-view></router-view>
  </div>
</template>
  
  <script>
  export default {
    name: 'AboutPage'
  }
  </script>