<script>
import axios from "axios";
export default {
  name: "Centers",
  data() {
    return {
      centers: [],
      fields: [
        { key: "name", label: "Name", sortable: true },
        { key: "city", label: "City", sortable: true },
        { key: "address", label: "Address", sortable: true },
        { key: "average", label: "Rating", sortable: true },
      ],
    };
  },
  methods: {},
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

      <b-table
        show-empty
        stacked="md"
        :items="centers"
        :fields="fields"
        sort-by="name"
      >
        <tbody>
          <tr>
            <td>
              <b-button @click="reserve(center.id)">Reserve</b-button>
            </td>
          </tr>
        </tbody>
      </b-table>
    </div>
  </div>
</template>

<style>
</style>