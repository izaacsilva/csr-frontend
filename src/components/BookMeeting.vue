<template>
  <div class="BasicPage">
    <p class="Welcome">Seja bem vindo {{session['FirstName']}}</p>
    <p class="CorporateID">Matrícula: {{session['CorporateID']}}</p>

    <p class="FormLabel Theme">Tema da Reunião:</p>

    <b-form-input
      class="ThemeTexbox"
      id="ThemeTexbox"
      v-model="form.theme"
      required
      placeholder="Tema da Reunião"
    ></b-form-input>

    <p class="FormLabel Room">Sala:</p>

    <b-form-select
      class="RoomSelection"
      id="RoomSelection"
      v-model="form.room.id"
      :options="rooms"
      value-field="id"
      text-field="name"
      required
    ></b-form-select>
    <div></div>

    <p class="FormLabel Time">Horário:</p>

    <b-form-input class="TimeSelection" id="TimeSelection" v-model="form.start" required></b-form-input>

    <p class="FormLabel Request">Pedido:</p>

    <b-form-input
      class="RequestTexbox"
      id="RequestTexbox"
      v-model="form.text"
      required
      placeholder="Pedido"
    ></b-form-input>

    <router-link to="/UserPage">
      <b-button class="OptionBtn Book" type="submit" variant="primary" v-on:click="salvar">Salvar</b-button>
    </router-link>
    <router-link to="/UserPage">
      <b-button class="OptionBtn Exit">Sair</b-button>
    </router-link>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      session: { FirstName: "Izaac Silva", CorporateID: "17113707" },
      form: {
        theme: "",
        room: { id: null, name: "" },
        start: null,
        text: "",
        user: { id: 3, name: "Izaac Silva" }
      },
      rooms: [{ text: "sala1", value: 1 }, { text: "sala2", value: 2 }],
      TimeFree: [
        { text: "Selecione Horário", value: null },
        "15/09/2019 12:50",
        "15/09/2019 15:00",
        "16/09/2019 12:00",
        "17/09/2019 12:00"
      ],
      show: true
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/room/all")
      .then(response => (this.rooms = response.data))
      .catch(error => {
        console.log(error);
      });
    this.show = false;
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
    },
    salvar() {
      axios
        .post(
          `http://localhost:8080/request/save?room.id=${
            this.form.room.id
          }&user.id=${3}&text=${this.form.text}&theme=${
            this.form.theme
          }&start=${this.form.start}`
        )
        .then(response => {
          this.form = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      this.show = false;
    }
  }
};
</script>