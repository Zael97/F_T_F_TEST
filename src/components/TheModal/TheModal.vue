<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    <img src="../../assets/commit.png" class="size-img" alt="" />
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Commit History</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="accordion" id="accordionExample">
            <div
              v-for="commit in commits"
              v-bind:key="commit._id"
              class="accordion-item"
            >
              <h2 class="accordion-header" :id="`heading${commit._id}`">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${commit._id}`"
                  aria-expanded="false"
                  :aria-controls="`collapse${commit._id}`"
                >
                  <div class="row">
                    <p>Commit</p>
                    <p>date: {{ commit._date }}</p>
                  </div>
                </button>
              </h2>
              <div
                :id="`collapse${commit._id}`"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row">
                    <p>Id: {{ commit._id }}</p>
                    <p>Author: {{ commit._author }}</p>
                    <p>Email: {{ commit._email }}</p>
                    <p>Message: {{ commit._message }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style scoped>
@import "./styles.css";
</style>
