<template>
  <div class="BasicPage">
    <p class="Welcome">Seja bem vindo {{session['FirstName']}}</p>
    <p class="CorporateID">Matrícula: {{session['CorporateID']}}</p>
    <button class="OptionBtn Exit"></button>
    <button class="OptionBtn New" v-on:click="novo" v-show="!this.show">Novo</button>
    <button class="OptionBtn New" v-on:click="cancelar" v-show="this.show">Cancelar</button>
    <button class="OptionBtn Foward" v-on:click="excluir" v-show="this.show && this.form.id">Excluir</button>
    <button class="OptionBtn Delete" v-on:click="salvar" v-show="this.show">Salvar</button>

    <b-form @submit="onSubmit" v-if="show">
      <p class="FormLabel Room">Sala:</p>

      <b-form-input
        class="RoomTexbox"
        id="RoomTexbox"
        v-model="form.name"
        required
        placeholder="Sala"
      ></b-form-input>

      <p class="FormLabel Type">Tipo:</p>

      <b-form-input
        class="TypeTexbox"
        id="TypeTexbox"
        v-model="form.type"
        required
        placeholder="Tipo"
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
          <tr v-for="item in data" :key="item.id" v-on:click="edit(item)">
            <td v-for="col in Object.keys(header)" :key="col">{{ item[col] }}</td>
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
.OptionBtn.New {
  left: 636px;
  top: 484px;
  background-color: #f8dd15;
  border-block-color: #033aa6;
  border-block: initial;
}
.OptionBtn.Foward {
  left: 817px;
  top: 484px;
  
}

.OptionBtn.Delete {
  left: 1035px;
  top: 484px;
}

.OptionBtn.Save {
  left: 751px;
  top: 724px;
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

.FormLabel.Type {
  width: 111.61px;
  height: 23px;
  left: 390px;
  top: 348px;
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

.TypeTexbox {
  position: absolute;
  width: 119px;
  height: 23px;
  left: 478px;
  top: 348px;

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
      header: { id: "Nº", name: "Sala", type: "Tipo" },
      data: [
        {
          id: "01",
          name: "05210",
          type: "conferência"
        },
        { ID: "02", name: "05211", type: "datashow" }
      ],
      form: {
        name: "", type: ""
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
    },
    edit(selected) {
      this.form = selected;
      this.show = true;
    },
    novo() {
      this.form = { id: null, name: "", type: "" };
      this.show = true;
    },
    cancelar() {
      this.show = false;

    },
    salvar() {
      axios
        .post(`http://localhost:8080/room/save?${this.form.id ? `id=${this.form.id}&` : ''}name=${this.form.name}&type=${this.form.type}`)
        .then(response => {
          if (this.form.id) this.form = response.data
          else this.data.push(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      this.show = false;
    },
    excluir() {
      axios
        .post("http://localhost:8080/room/delete?id=" + this.form.id)
        .then(response => this.data.splice(this.data.indexOf(this.form), 1))
        .catch(error => {
          console.log(error);
        });
      this.show = false;
    }
  }
};  
</script>