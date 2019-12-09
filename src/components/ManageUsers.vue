<template>
    <div class="BasicPage">
        <p class="Welcome">Seja bem vindo {{session['FirstName']}}</p>
        <p class="CorporateID">Matrícula: {{session['CorporateID']}}</p>
        <button class="OptionBtn Exit"></button>
        <button class="OptionBtn New" v-on:click="novo" v-show="!this.show">Novo</button>
        <button class="OptionBtn New" v-on:click="cancelar" v-show="this.show">Cancelar</button>
        <button class="OptionBtn Delete" v-show="this.show && this.form.id"></button>

        <b-form @submit="onSubmit" v-if="show">
            
                
            

            <p class="FormLabel Name">Nome:</p>

                <b-form-input 
                class="NameTexbox"
                id="NameTexbox"
                v-model="form.name"
                required
                placeholder="Nome"
                ></b-form-input>
                
            
            <p class="FormLabel Passwd">Senha:</p>

                <b-form-input 
                class="PasswdTexbox"
                id="PasswdTexbox"
                v-model="form.password"
                required
                placeholder="Senha"
                ></b-form-input>
                
            <p class="FormLabel Gender">Gênero:</p>

                <b-form-input 
                class="GenderTexbox"
                id="GenderTexbox"
                v-model="form.gender"
                required
                placeholder="Gênero"
                ></b-form-input>
                
            </b-form>
    
        <div class="BookingTable">
        <table>
            <thead>
                <tr>
                    <th class="HeaderLabel" v-for="item in header" :key="item">
                        {{ item }}
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id" v-on:click="edit(item)">
                    <td v-for="col in Object.keys(header)" :key="col">
                        {{ item[col]  }}
                    </td>
                    
                </tr>
            </tbody>
    </table>
    </div>


    </div>
</template>


<style>

body{
    background-color: #C4C2C2;  
}

.BasicPage{
    position: relative;
    width: 1194px;
    height: 834px;
    background-image: url("../assets/BasicScreenBG.png");
}
.Welcome{
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

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.CorporateID{
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

    color: #C4C2C2;    
}

.OptionBtn{
    position: absolute;
    width: 146px;
    height: 49px;
    border: 0px;
}
.OptionBtn.Exit{
    left: 974px;
    top: 724px;
    background-image: url("../assets/ExitBtn.png");
}
.OptionBtn.New{
    left: 636px;
    top: 484px;
    background-color: #F8DD15;
    border-block-color: #033AA6;
    border-block: initial;
}
.OptionBtn.Foward{
    left: 817px;
    top: 484px;
    background-image: url("../assets/FowardBtn.png");
}

.OptionBtn.Delete{
    left: 1035px;
    top: 484px;
    background-image: url("../assets/DeleteBtn.png");
}

.OptionBtn.Save{
    left: 751px;
    top: 724px;
    background-image: url("../assets/SaveBtn.png");
}

.BookingTable{
    position: absolute;
    width: 462px;
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

    background: #F1F1F1;
    border: 1px solid #939191;
    box-sizing: border-box;
    color: #939191;

}

.HeaderLabel{
    width: 462px;
    height: 39px;
    left: 83px;
    top: 310px;

    border-collapse:separate;
    border: 1px solid;
    border-color: #033AA6;
    background-color: #F8DD15;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    align-items: center;
    text-align: center;

    color: #033AA6;
}

.FormLabel{
    position: absolute;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #033AA6;
}

.FormLabel.ID{
    width: 111.61px;
    height: 23px;
    left: 618px;
    top: 310px;

}

.FormLabel.Name{
    width: 111.61px;
    height: 23px;
    left: 619px;
    top: 353px;
}

.FormLabel.Passwd{
    position: absolute;
    width: 111.61px;
    height: 23px;
    left: 619px;
    top: 389px;
}

.FormLabel.Gender{
    position: absolute;
    width: 111.61px;
    height: 23px;
    left: 619px;
    top: 423px;
}

.IDTexbox{
    position: absolute;
    width: 345px;
    height: 23px;
    left: 738px;
    top: 306px;

    background: #F1F1F1;
    border: 1px solid #939191;
    box-sizing: border-box;
}

.NameTexbox{
    position: absolute;
    width: 345px;
    height: 23px;
    left: 738px;
    top: 349px;

    background: #F1F1F1;
    border: 1px solid #939191;
    box-sizing: border-box;
}

.PasswdTexbox{
    position: absolute;
    width: 345px;
    height: 23px;
    left: 738px;
    top: 388px;

    background: #F1F1F1;
    border: 1px solid #939191;
    box-sizing: border-box;
}

.GenderTexbox{
    position: absolute;
    width: 345px;
    height: 18px;
    left: 738px;
    top: 424px;

    background: #F1F1F1;
    border: 1px solid #939191;
    box-sizing: border-box;
}


</style>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            header: {'id': 'ID', 'name':'Nome', 'password':'Senha', 'gender':'Gênero' },
            data:[  {'id': '01', 'name':'Dilma Roussef', 'password':'1234', 'gender':'Feminino' },
                    {'id': '02', 'name':'Sandra Tanaka', 'password':'123456', 'gender':'Feminino' }
                    ],
            form: {
                ID: ''
            },
            
            show: true,
            session:{'FirstName':'Erick','CorporateID':"17113707"}
        }
    },
  mounted() {
    axios
      .get("http://localhost:8080/user/all")
      .then(response => (this.data = response.data))
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
    edit(selected) {
        this.form = selected;
        this.show = true;
    },
    novo() {
        this.form = {id: null, name: '', password: '', gender: ''};
        this.show = true;
    },
    cancelar() {
        this.show = false;
    }
  }
}
</script>