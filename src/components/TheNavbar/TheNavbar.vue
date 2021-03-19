<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a href="" class="navbar-brand">
        <img
          class="rounded-circle mr-2 img-fluid size-img"
          src="@/assets/github.png"
          alt=""
        />
        App
      </a>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-target="#navbar"
        data-bs-toggle="collapse"
        aria-controls="navbar"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ms-auto">
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "TheNavbar",
};
</script>
<style scoped>
@import "./styles.css";
</style>
