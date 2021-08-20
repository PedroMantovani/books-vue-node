<template>
  <div class="center">
    <b-alert show dismissible v-for="msg in message" :key="msg.id" :variant="msg.type">{{ msg.text }}</b-alert>
    <h1>Register</h1>
    <form @submit.prevent="registerGoogle">
      <div class="txt_field">
        <input type="email" v-model="email" required />
        <span></span>
        <label>E-mail</label>
      </div>
      <div class="txt_field">
        <input type="password" v-model="password" required />
        <span></span>
        <label>Password</label>
      </div>
      <div class="txt_field">
        <input type="password" v-model="password1" required />
        <span></span>
        <label>Confirmation password</label>
      </div>
      <input type="submit" value="Register" />
      <div class="signup_link">
        Are you a member?
        <a href="#"><router-link to="/login">SingIn</router-link> </a>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      password1: "",
      message: [],
    };
  },
  methods: {
    limpar() {
      this.email = "";
      this.password = "";
      this. password1 = "";
      this.message = [];
    },
    registerGoogle() {
      if (this.password === this.password1) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            let user = userCredential.user;
            this.$http.post("register", { email: this.email, password: this.password, uid: user.uid}).then(() => {
              this.limpar()
              this.$router.replace("Login")
            }).catch(() => {
              this.message.push({text: "E-mail already exist.", type: "danger",})
            })
          })
          .catch(() => {
            this.message.push({text: "E-mail already exist.", type: "danger",})
          });
      } else {
        this.message.push({
            text: "Different passwords, please try again.",
            type: "danger",
          })
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
}
.center h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}
.center form {
  padding: 0 40px;
  box-sizing: border-box;
}
form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: 0.5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: #2691d9;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}
input[type="submit"] {
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #2691d9;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}
input[type="submit"]:hover {
  border-color: #2691d9;
  transition: 0.5s;
}
.signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.signup_link a {
  color: #2691d9;
  text-decoration: none;
}
.signup_link a:hover {
  text-decoration: underline;
}
</style>

