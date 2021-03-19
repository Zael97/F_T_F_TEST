<template>
  <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-12 col-md-3">
        <form
          action=""
          class="p-3"
          style="box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);"
        >
          <div class="mb-3">
            <p class="text-center">Welcome</p>
            <label for="formUsernameInput" class="form-label">Username:</label>
            <input
              type="text"
              class="form-control"
              id="formUsernameInput"
              v-bind:placeholder="username"
              v-model.trim="username"
            />
          </div>
          <button
            @click="login"
            type="submit"
            class="btn btn-primary align-self-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      username: "username...",
    };
  },
  methods: {
    login: async function(event) {
      event.preventDefault();
      try {
        await fetch("http://localhost:8000/login", {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: this.username }),
        });
        this.$router.push("/repos");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped></style>
