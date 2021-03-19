<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 h-100">
        <h1 class="mt-3">Repositories</h1>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Full Name</th>
              <th scope="col">Owner</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in repos" v-bind:key="repo._id">
              <th scope="row">{{ repo._id }}</th>
              <td>{{ repo._name }}</td>
              <td>{{ repo._full_name }}</td>
              <td>{{ repo._owner.login }}</td>
              <td>
                <div class="row">
                  <div class="col">
                    <the-modal :repo="repo._name" />
                  </div>
                  <div class="col">
                    <a
                      :href="repo._html_url"
                      class="btn-primary btn-website"
                      target="_blank"
                      ><img src="../assets/website.png" class="size-img" alt=""
                    /></a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import TheModal from "@/components/TheModal/TheModal.vue";
export default {
  components: {
    "the-modal": TheModal,
  },
  data: function(repos) {
    return {
      repos,
    };
  },
  async beforeMount() {
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    let jwt = getCookie("jwt");
    if (jwt) {
      try {
        const response = await fetch("http://localhost:8000/repos", {
          method: "GET",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        });
        let repos_reponse = await response.text();
        this.repos = JSON.parse(repos_reponse).repos;
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("cookie not found");
    }
  },
};
</script>
<style scoped>
table {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.size-img {
  width: 20px;
}
.btn-website {
  line-height: 1.5;
  text-align: center;
  display: block;
  padding: 7px;
  border-radius: 5px;
  max-width: 46px;
}
</style>
