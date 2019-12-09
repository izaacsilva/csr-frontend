<template>
  <div class="BasicPage">
    <p class="Welcome">Seja bem vindo {{session['FirstName']}}</p>
    <p class="CorporateID">Matrícula: {{session['CorporateID']}}</p>
    <button class="OptionBtn Exit"></button>
    <button class="OptionBtn Back"></button>
    <button class="OptionBtn Foward"></button>
    <button class="OptionBtn Delete"></button>

    <b-form @submit="onSubmit" v-if="show">
      <p class="FormLabel Room">Sala:</p>

      <b-form-input
        class="RoomTexbox"
        id="RoomTexbox"
        v-model="form.Room"
        required
        placeholder="Sala"
      ></b-form-input>

      <b-button class="OptionBtn Save" type="submit" variant="primary"></b-button>
    </b-form>

    <div class="BookingTable">
      <table>
        <thead>
          <tr>
            <th class="HeaderLabel" v-for="item in header" :key="item">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="line in data.length" :key="line">
            <td v-for="col in Object.keys(header)" :key="col">{{ data[line-1][col] }}</td>
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
  left: 383px;
  top: 377px;
  background-image: url("../assets/BackBtn.png");
}
.OptionBtn.Foward {
  left: 548px;
  top: 377px;
  background-image: url("../assets/FowardBtn.png");
}

.OptionBtn.Delete {
  left: 828px;
  top: 379px;
  background-image: url("../assets/DeleteBtn.png");
}

.OptionBtn.Save {
  left: 828px;
  top: 379px;
  background-image: url("../assets/SaveBtn.png");
}

.BookingTable {
  position: absolute;
  width: 170px;
  height: 326px;
  left: 83px;
  top: 310px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  align-items: center;
  text-align: left;

  background: #f1f1f1;
  border: 1px solid #939191;
  box-sizing: border-box;

  color: #939191;
}

.HeaderLabel {
  width: 170px;
  height: 39px;
  left: 83px;
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

.FormLabel {
  position: absolute;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: right;

  color: #033aa6;
}

.FormLabel.Room {
  width: 111.61px;
  height: 23px;
  left: 390px;
  top: 318px;
}

.RoomTexbox {
  position: absolute;
  width: 119px;
  height: 23px;
  left: 478px;
  top: 318px;

  background: #f1f1f1;
  border: 1px solid #939191;
  box-sizing: border-box;
}
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      header: { id: "Nº", name: "Sala" },
      data: [
        {
          ID: "01",
          Room: "05210"
        },
        { ID: "02", Room: "05211" }
      ],
      form: {
        Room: ""
      },

      show: true,
      session: { FirstName: "Erick", CorporateID: "17113707" }
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/room/all")
      .then(response => (this.data = response.data))
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};  
</script>