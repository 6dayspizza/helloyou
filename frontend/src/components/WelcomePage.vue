<!-- src/components/WelcomePage.vue -->
<template>
  <div>
    <!-- Mobile Menu -->
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <!-- Header -->
    <header class="site-navbar site-navbar-target py-4" role="banner">
      <div class="container">
        <div class="row align-items-center position-relative">
          <div class="col-3">
            <div class="site-logo">
              <router-link to="/" class="font-weight-bold text-white">Ruth</router-link>
            </div>
          </div>

          <div class="col-9 text-right">
            <span class="d-inline-block d-lg-block">
              <a href="#" class="text-black site-menu-toggle js-menu-toggle py-5">
                <span class="icon-menu h3 text-white"></span>
              </a>
            </span>

            <nav class="site-navigation text-right ml-auto d-none d-lg-none" role="navigation">
              <ul class="site-menu main-menu js-clone-nav ml-auto">
                <li class="active"><router-link to="/" class="nav-link">Home</router-link></li>
                <li><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li>
                <li><router-link to="/about" class="nav-link">About</router-link></li>
                <li><router-link to="/contact" class="nav-link">Say Hi</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <!--<div class="hero" style="background-image: url('images/hero_1.jpg');"></div>-->

    <!-- Main Content -->
    <section class="container rk-main mt-5">
      <h2>Hello you</h2>
      <section class="rk-portfolio">
        <div class="rk-portfolio__items">
          <img src="assets/img/manuel-liniger-lsDsUMtrbb0-unsplash.jpg" alt="random image">
        </div>
      </section>
    </section>

    <!-- Footer -->
    <footer class="container rk-footer py-4">
      <div class="row">
        <div class="col-lg-4 text-center text-lg-left">
          <ul class="rk-menu rk-footer-menu">
            <li class="rk-menu__item">
              <router-link to="/impressum" class="rk-menu__link">the boring stuff</router-link>
            </li>
          </ul>
          <p class="rk-footer__text rk-footer__copy">
            <span class="ae-u-bold">©</span>
            <span class="ae-u-bolder">6dayspizza</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>

<!-- Optional: Add the imported styles in your Vue component -->
<style scoped>
/* Add any custom styles or imports here if needed */
</style>
