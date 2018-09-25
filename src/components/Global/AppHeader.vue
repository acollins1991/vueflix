<template>
<div class="d-flex justify-content-between align-items-center px-5 py-3">

  <div class="d-flex">

    <img class="mr-3" src="https://via.placeholder.com/93x31">

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
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
