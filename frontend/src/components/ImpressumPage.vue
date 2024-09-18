<!-- src/components/ImpressumPage.vue -->
<template>
  <div class="top-fixed">
    <header class="ae-container-fluid ae-container-fluid--full rk-header">
      <input type="checkbox" id="mobile-menu" class="rk-mobile-menu">
      <label for="mobile-menu">
        <svg>
          <use xlink:href="@/assets/img/symbols.svg#bar"></use>
        </svg>
        <svg>
          <use xlink:href="@/assets/img/symbols.svg#bar"></use>
        </svg>
        <svg>
          <use xlink:href="@/assets/img/symbols.svg#bar"></use>
        </svg>
      </label>
      <div class="ae-container-fluid rk-topbar">
        <h1 class="rk-logo">Ruth</h1>
        <nav class="rk-navigation">
          <ul class="rk-menu">
            <li class="rk-menu__item"><router-link to="/" class="rk-menu__link">home</router-link></li>
            <li class="rk-menu__item"><router-link to="/portfolio" class="rk-menu__link">portfolio</router-link></li>
            <li class="rk-menu__item"><router-link to="/about" class="rk-menu__link">about</router-link></li>
            <li class="rk-menu__item"><router-link to="/contact" class="rk-menu__link">say hi</router-link></li>
          </ul>
          <form class="rk-search">
            <input type="text" placeholder="Search" id="urku-search" class="rk-search-field">
            <label for="urku-search">
              <svg>
                <use xlink:href="@/assets/img/symbols.svg#icon-search"></use>
              </svg>
            </label>
          </form>
        </nav>
      </div>
    </header>
    
    <section class="ae-container-fluid rk-main">
      <h2>impressum</h2>
    </section>
    
    <footer class="ae-container-fluid rk-footer">
      <div class="ae-grid ae-grid--collapse">
        <div class="ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-left">
          <ul class="rk-menu rk-footer-menu">
            <li class="active rk-menu__item"><router-link to="/impressum" class="rk-menu__link">the boring stuff</router-link></li>
          </ul>
          <p class="rk-footer__text rk-footer__copy"><span class="ae-u-bold">©</span><span class="ae-u-bolder">2024 URKU PORTFOLIO</span> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ImpressumPage'
}
</script>
