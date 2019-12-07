<template>
  <div class="section_wide">
    <div class="logo">
      <img class="img_logo" src="../assets/Logo.svg" />
      <P class="name_logo">Controle de Salas de Reunião</P>
    </div>
    <input v-model="corporate_id" class="input_textbox_login" />
    <button class="btn btn-primary" type="submit">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      corporate_id: "17113707",
      password: "123456",
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
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
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
