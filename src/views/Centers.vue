<script>
import axios from "axios";
export default {
  name: "Centers",
  data() {
    return {
      centers: [],
    };
  },
  methods: {
    reserve: function (id) {
      this.$router.push("/questionnaire/");
    },
  },
  created() {
    axios.get("http://localhost:8080/center/").then((Response) => {
      console.log(Response.data);
      this.centers = Response.data;
    });
  },
};
</script>

<template>
  <div id="centers">
    <div class="card-body">
      <div class="card-header">
        <h4>Centers</h4>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="center.id" v-for="center in centers">
            <td>{{ center.name }}</td>
            <td>{{ center.city }}</td>
            <td>{{ center.address }}</td>
            <td>{{ center.average }}</td>
            <td>
              <b-button @click="reserve(center.id)">Reserve</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
</style>