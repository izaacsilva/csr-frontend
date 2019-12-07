<template>
    <div class="BasicPage">
        <p class="Welcome">Seja bem vindo {{session['FirstName']}}</p>
        <p class="CorporateID">Matrícula: {{session['CorporateID']}}</p>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            
            <p class="FormLabel Theme">Tema da Reunião:</p>

                <b-form-input 
                class="ThemeTexbox"
                id="ThemeTexbox"
                v-model="form.Meeting_theme"
                required
                placeholder="Tema da Reunião"
                ></b-form-input>


            <p class="FormLabel Room">Sala:</p>

                <b-form-select 
                class="RoomSelection"
                id="RoomSelection"
                v-model="form.Room"
                :options="Rooms"
                required
                ></b-form-select>


            <p class="FormLabel Time">Horário:</p>

                <b-form-select
                class="TimeSelection"
                id="TimeSelection"
                v-model="form.Time"
                :options="TimeFree"
                required
                ></b-form-select>


            <p class="FormLabel Request">Pedido:</p>

                <b-form-input
                class="RequestTexbox"
                id="RequestTexbox"
                v-model="form.Request"
                required
                placeholder="Pedido"
                ></b-form-input>

            <b-button class="OptionBtn Book" type="submit" variant="primary"></b-button>
            </b-form>
            <button class="OptionBtn Exit"></button>
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

.FormBookMeeting{
    width: 1091px;
    height: 349px;
    left: 0px;
    top: 272px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
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

.FormLabel.Theme{
    width: 216px;
    height: 23px;
    left: 128px;
    top: 272px;
}

.FormLabel.Room{
    width: 62px;
    height: 23px;
    left: 282px;
    top: 319px;
}

.FormLabel.Time{
    width: 99px;
    height: 25px;
    left: 249px;
    top: 368px;
}

.FormLabel.Request{
    width: 99px;
    height: 25px;
    left: 245px;
    top: 417px;
}

.ThemeTexbox{
    position: absolute;
    width: 741px;
    height: 23px;
    left: 363px;
    top: 272px;

    background: #F1F1F1;
    border: 1px solid #939191;
    box-sizing: border-box;
}

.RoomSelection{
    position: absolute;
    width: 181px;
    height: 32px;
    left: 363px;
    top: 314px;

    background-color: #F1F1F1;
    border: 1px solid #939191;
    box-sizing: border-box;
}

.TimeSelection{
    position: absolute;
    width: 181px;
    height: 32px;
    left: 363px;
    top: 364px;

    background-color: #F1F1F1;
    border: 1px solid #939191;
    box-sizing: border-box;
}

.RequestTexbox{
    position: absolute;
    width: 741px;
    height: 220px;
    left: 363px;
    top: 417px;

    background: #F1F1F1;
    border: 1px solid #939191;
    box-sizing: border-box;
    vertical-align: top;
    
}

.OptionBtn{
    position: absolute;
    width: 146px;
    height: 49px;
    border: 0px;
}
.OptionBtn.Exit{
    left: 974px;
    top: 725px;
    background-image: url("../assets/ExitBtn.png");
}

.OptionBtn.Book{
    left: 795px;
    top: 725px;
    background-image: url("../assets/BookBtn.png");
}

</style>

<script>
export default {
    data() {
        return {
            session:{'FirstName':'Erick','CorporateID':"17113707"},
            form: {
                Meeting_theme: '',
                Room: null,
                Time: null,
                Request: ''
            },
            Rooms: [{ text: 'Selecione Sala', value: null }, '052114', '052115', '052116', '052117'],
            TimeFree: [{ text: 'Selecione Horário', value: null }, '15/09/2019 12:50', '15/09/2019 15:00', '16/09/2019 12:00', '17/09/2019 12:00'],
            show: true
        }
        }
        
    }
</script>