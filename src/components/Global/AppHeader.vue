<template>
<div class="AppHeader">

  <div class="d-flex justify-content-between align-items-center px-5 py-3">

    <div class="d-flex">

      <img class="mr-4" src="https://via.placeholder.com/93x31">

      <b-nav class="AppHeader__nav">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

    </div>

    <div>
      <b-nav>
        <b-nav-item active>Icon</b-nav-item>
        <b-nav-item>Children</b-nav-item>
        <b-nav-item>Icon</b-nav-item>
        <b-nav-item>Avatar dropdown</b-nav-item>
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
