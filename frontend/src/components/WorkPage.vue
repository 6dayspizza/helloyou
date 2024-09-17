<!-- src/components/AboutPage.vue -->
<template>
  <div id="wrapper">
    <header id ="header">
      <div class="logo"></div>
      <div class="content">
        <div class="inner">
          <h1>About</h1>
          <p>some text about me</p>
        </div>
      </div>
    </header>
    <footer id="footer">
      <p class="copyright">
        © Ruth
      </p>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'WorkPage'
}
</script>