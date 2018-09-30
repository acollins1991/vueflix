<template>
<div class="AppHeader">

  <div class="d-flex justify-content-between align-items-center px-5 py-3">

    <div class="d-flex">

      <img class="mr-4" src="https://via.placeholder.com/93x31">

      <b-nav class="AppHeader__nav">
        <b-nav-item>Home</b-nav-item>
        <b-nav-item>Series</b-nav-item>
        <b-nav-item>Filmes</b-nav-item>
        <b-nav-item>Recently Added</b-nav-item>
        <b-nav-item>My List</b-nav-item>
      </b-nav>

    </div>

    <div>
      <b-nav>
        <b-nav-item active>Icon</b-nav-item>
        <b-nav-item class="text-uppercase">Children</b-nav-item>
        <b-nav-item>Icon</b-nav-item>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'AppHeader',
  mounted() {

    let header = document.getElementsByClassName('AppHeader')[0]
    const classname = 'AppHeader--top'

    window.addEventListener('scroll', function(e) {

        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

        if (scrollTop > 0) {
          header.classList.add(classname)
        } else {
          header.classList.remove(classname)
        }

    })
  }
}
</script>
