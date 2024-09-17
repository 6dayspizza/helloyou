<!-- src/components/WelcomePage.vue -->
<template>
  <div id="wrapper">
    <header id ="header">
      <div class="logo"></div>
      <div class="content">
        <h1>Welcome to the Welcome Page!</h1>
      </div>
      <div class="use-middle">
        <ul>
          <li><a href="#about">about</a></li>
          <li><a href="#work">projects</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </div>
    </header>
    <footer id="footer">
      <p class="copyright">
        "© Ruth."
      </p>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>