<template>
  <section class="container">
    <b-container class="bv-example-row mt-3">
      <b-row>
        <h1 class="align">Upload Image</h1>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <form @submit.prevent="upload">
            <img
              :src="img ? img : img2"
              class="rounded mx-auto d-block rounded mb-3"
              style="width: 150px !important"
            />
            <div>
              <input
                class="mb-3"
                type="file"
                id="uploadButton"
                name="image"
                @change="onfileSelected"
              />
              <label for="uploadButton"></label>
            </div>
            <input type="submit" value="Send" />
          </form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      id: null,
      avatar: null,
      img: "",
      img2: "https://res.cloudinary.com/pmanti/image/upload/v1629437571/147144_eqyn1k.png",
      selectedFile: null,
    };
  },
  methods: {
    onfileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    upload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile);

      const user = firebase.auth().currentUser;

      this.$http.get(`register/${user.email}`).then((res) => {
        this.id = res.data.listUser._id;
        this.avatar = res.data.listUser.avatar;
        const metodo = this.avatar == "null" ? "put" : "post";
        const finalUrl = this.avatar == "null" ? this.id : "";
        this.$http[metodo](`upload/${finalUrl}`, fd).then((res) => {
          this.img = res.data.result.url
        });
      });
    },
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

form {
  display: inline-block;
  align-items: center;
}

img {
  margin-left: 50%;
}
</style>