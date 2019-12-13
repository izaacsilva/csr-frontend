<template>
  <div class="BasicPage">
    <p class="Welcome">Seja bem vindo {{session['FirstName']}}</p>
    <p class="CorporateID">Matrícula: {{session['CorporateID']}}</p>
    <router-link to="/UserPage">
      <button class="OptionBtn Exit"></button>
    </router-link>
    
    <div class="BookingTable">
      <table>
        <thead>
          <tr>
            <th class="HeaderLabel" v-for="item in header" :key="item">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="item.id">
            <td v-for="col in Object.keys(header)" :key="col">{{ item[col] }}</td>
            <td><a v-on:click="cancelar(index)" href="#">Cancelar</a></td>
          </tr>
        </tbody>
      </table>
    </div>
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

.OptionBtn {
  position: absolute;
  width: 146px;
  height: 49px;
  border: 0px;
}
.OptionBtn.Exit {
  left: 974px;
  top: 724px;
  background-image: url("../assets/ExitBtn.png");
}
.OptionBtn.Back {
  left: 120px;
  top: 417px;
  background-image: url("../assets/BackBtn.png");
}
.OptionBtn.Foward {
  left: 279px;
  top: 417px;
  background-image: url("../assets/FowardBtn.png");
}

.OptionBtn.Delete {
  left: 974px;
  top: 424px;
  background-image: url("../assets/DeleteBtn.png");
}

.BookingTable {
  position: absolute;
  width: 1017px;
  height: 86px;
  left: 113px;
  top: 310px;
  text-align: center;
  background: #f1f1f1;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  align-items: center;
  text-align: left;

  color: #939191;
}

.HeaderLabel {
  width: 1017px;
  height: 39px;
  left: 113px;
  top: 310px;
  border-collapse: separate;
  border: 1px solid;
  border-color: #033aa6;
  background-color: #f8dd15;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  align-items: center;
  text-align: center;

  color: #033aa6;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      header: {id: "Id", room: "Sala", start: "Horário", theme: "Reunião" },
      data: [
        {   
          id: 1,
          room: "05210",
          start: "02:55 15/07/2019",
          theme: "Planejamento estratégico 2020"
        }
      ],
      session: { FirstName: "Erick", CorporateID: "17113707" }
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/request/all")
      .then(
        response =>
          (this.data = response.data.map(booking => ({
            id: booking.id,
            room: booking.room.name,
            start: booking.start,
            theme: booking.theme
          })))
      )
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    cancelar(index) {
      axios
        .post("http://localhost:8080/request/delete?id=" + this.data[index].id)
        .then(response => this.data.splice(index, 1))
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>