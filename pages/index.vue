<template>
  <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Picture link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.key">
                        <td>{{ product.name }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.photo }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>



<script>
import { db } from "../plugins/firebase"
export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    db.collection("Products").onSnapshot((snapshotChange) => {
      this.products = []
      snapshotChange.forEach((item) => {
        this.products.push({
          key: item.id,
          name: item.data().name,
          description: item.data().description,
          photo: item.data().picture_link,
        })
      })
    })
  },
  methods: {
    clickMe() {
      const data = db.collection("Products").onSnapshot((snapshotChange) => {
      this.products = []
      snapshotChange.forEach((item) => {
        this.products.push({
          key: item.id,
          name: item.data().name,
          description: item.data().description,
          photo: item.data().picture_link,
        })
      })
    })
      console.log(db.collection('products'));
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
