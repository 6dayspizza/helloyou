<!-- src/components/WelcomePage.vue -->
<template>
  <div>
    <!-- Mobile Menu -->
    
    <!-- Header -->
    <header>
      <div class="off-screen-menu">
      <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </div>

    <nav>
      <div class="ham-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </header>

    <!-- Main Content -->
    <section>
      <h2>Hello you</h2>
    </section>

    <!-- Footer -->
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>

<style scoped>
/* Any scoped styles for this component */
</style>
