<template>
  <div>
    <div id="sectionWide" class="section_wide">
      <button id="darkBox" class="darkBox" v-on:click="greet()"></button>
      <div id="logo" class="logo">
        <img class="img_logo" src="../assets/Logo.svg" />
        <P class="name_logo">Controle de Salas de Reunião</P>
      </div>
      <button id="bttnLogin" class="btn btn-primary" v-on:click="greet()">Login</button>

      <b-form @submit="onSubmit" v-if="show">
        <div class="bottom_login_menu">
          <b-form-input
            id="corporate_id"
            v-model="form.corporate_id"
            required
            placeholder="ID Corporativo"
          ></b-form-input>
          <b-form-input
            type="password"
            id="password"
            v-model="form.password"
            required
            placeholder="Senha"
          ></b-form-input>
          <router-link to="/UserPage">
            <button type="submit" class="loginButton">SEND</button>
          </router-link>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        corporate_id: "",
        password: "",
        admin: false
      },
      show: false
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    greet(event) {
      var display = this.show ? "block" : "none";
      document.getElementById("bttnLogin").style.display = display;
      document.getElementById("logo").style.display = display;
      this.show = !this.show;
      display = this.show ? "block" : "none";
      document.getElementById("darkBox").style.display = display;
      axios
        .get("http://localhost:8080/user/login?id=" + this.form.corporate_id)
        .then(response => this.admin = this.data.admin)
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
body {
  background-color: #c4c2c2;
}

.row {
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
}
.form_div {
  width: 50%;
  margin: auto;
}
.section_wide {
  position: relative;
  width: 1194px;
  height: 834px;
  background: #033aa6;
}
.section_inner {
  width: 80%;
  height: 80%;
  background-color: #ffffff;
  border-radius: 25px;
  margin: auto;
  padding: 20px;
  position: relative;
}
.input_textbox_login {
  width: 80%;
  text-align: center;
  margin: 0 auto;
  border-radius: 25px;
}
.name_logo {
  position: absolute;
  width: 497px;
  height: 39px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
  color: #ffffff;

  text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.logo {
  position: absolute;
  width: 497px;
  height: 117px;
  left: 348px;
  top: 335px;
}

.btn {
  position: absolute;
  width: 205px;
  height: 48px;
  left: 494px;
  top: 519px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;

  background: #f8dd15;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  color: #033aa6;
}

.bottom_login_menu {
  position: absolute;
  width: 1194px;
  height: 153px;
  left: 0px;
  top: 681px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.loginButton {
  position: absolute;
  width: 1194px;
  height: 47px;
  border-radius: 0px;
  bottom: 0px;
  left: 0px;

  background: #f8dd15;

  color: #033aa6;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
}

.darkBox {
  display: none;
  position: absolute;
  width: 1194px;
  height: 681px;
  left: 0px;
  top: 0px;
  border: 0px;

  background: linear-gradient(180deg, #ffffff 0%, rgba(5, 5, 5, 0.56) 0.01%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
