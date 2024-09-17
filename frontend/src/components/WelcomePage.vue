<!-- src/components/WelcomePage.vue -->
<template>
  <div id="wrapper">
    <header id ="header" style="display:none;">
      <div class="logo"></div>
      <div class="content">
        <div class="inner">
          <h1>Welcome to the Welcome Page!</h1>
          <p>some text</p>
        </div>
      </div>
      <div class="use-middle">
        <ul>
          <li><a href="#about">about</a></li>
          <li><a href="#work">projects</a></li>
          <li><a href="#contact">say hi</a></li>
        </ul>
      </div>
    </header>
    <div id="main">
      <article id="intro" style class="active">
        <h2 class="major">About</h2>
        <span class="image main">
          <img src="images/pic01.jpg" alt>
        </span>
        <p>Some text about me.</p>
        <div class="close">"Close."</div>
      </article>
    </div>
    <footer id="footer" style="display:none;">
      <p class="copyright">
        © Ruth.
      </p>
    </footer>
    <router-view></router-view>
  </div>
  <div id="bg">
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>