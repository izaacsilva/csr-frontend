<template>
  <div class="BasicPage">
    <p class="Welcome">Seja bem vindo {{ session.FirstName }}</p>
    <p class="CorporateID">Matrícula: {{ session.CorporateID }}</p>
    <router-link to="/ViewBookings">
      <button class="MenuBtn TopLeft" tag="button"></button>
    </router-link>
    <router-link to="/BookMeeting" tag="button">
      <button class="MenuBtn TopRight" />
    </router-link>
    <router-link to="/CancelMeeting">
      <button class="MenuBtn BottomLeft"></button>
    </router-link>
    <router-link to="/" tag="button">
      <button class="MenuBtn BottomRight"></button>
    </router-link>
  </div>
</template>



<style>
body {
  background-color: #c4c2c2;
}

.BasicPage {
  position: relative;
  width: 1194px;
  height: 834px;
  background-image: url("../assets/BasicScreenBG.png");
}
.Welcome {
  position: absolute;
  width: 381px;
  height: 38px;
  left: 54px;
  top: 176px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.CorporateID {
  position: absolute;
  width: 401px;
  height: 35px;
  left: 773px;
  top: 176px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;

  color: #c4c2c2;
}

.MenuBtn {
  position: absolute;
  width: 460px;
  height: 213px;
  border: 0px;
}

.MenuBtn.TopLeft {
  left: 106px;
  top: 290px;
  background-image: url("../assets/ViewBookings.png");
}

.MenuBtn.TopRight {
  left: 616px;
  top: 290px;
  background-image: url("../assets/BookRoom.png");
}

.MenuBtn.BottomLeft {
  left: 106px;
  top: 534px;
  background-image: url("../assets/CancelBtn.png");
}

.MenuBtn.BottomRight {
  left: 618px;
  top: 534px;
  background-image: url("../assets/LogOutBtn.png");
}
</style>

<script>
export default {
  data() {
    return {
      session: {
        FirstName: "Erick",
        CorporateID: "17113707"
      }
    };
  },
  mounted() {
    console.log(localStorage.session);
  },
};
</script>