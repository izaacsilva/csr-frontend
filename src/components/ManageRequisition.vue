<template>
    <div class="BasicPage">
        <p class="Welcome">Seja bem vindo {{session['FirstName']}}</p>
        <p class="CorporateID">Matrícula: {{session['CorporateID']}}</p>
        <button class="OptionBtn Exit"></button>
        <button class="OptionBtn Back"></button>
        <button class="OptionBtn Foward"></button>
        <button class="OptionBtn Deny"></button>
        <button class="OptionBtn Accept"></button>
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
                <tr v-for="line in data.length" :key="line">
                    <td v-for="col in Object.keys(header)" :key="col">
                        {{ data[line-1][col]  }}
                    </td>
                </tr>
            </tbody>
        </table>
            <div Class="FootDescription" >{{ description }}</div>
                
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
    left: 958px;
    top: 733px;
    background-image: url("../assets/ExitBtn.png");
}
.OptionBtn.Back{
    left: 407px;
    top: 732px;
    background-image: url("../assets/BackBtn.png");
}
.OptionBtn.Foward{
    left: 597px;
    top: 732px;
    background-image: url("../assets/FowardBtn.png");
}

.OptionBtn.Deny{
    left: 919px;
    top: 534px;
    background-image: url("../assets/DenyBtn.png");
}

.OptionBtn.Accept{
    left: 743px;
    top: 534px;
    background-image: url("../assets/AcceptBtn.png");
}

.BookingTable{
    position: absolute;
    width: 982.43px;
    height: 88px;
    left: 83px;
    top: 310px;
    text-align: center;
    background: #F1F1F1;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    align-items: center;
    text-align: left;

    color: #939191;
}

.FootDescription{
    width: 982.43px;
    height: 88px;
    left: 83px;
    top: 310px;
    text-align: center;
    background: #F1F1F1;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    align-items: center;
    text-align: left;

    color: #939191;

}

.HeaderLabel{
    width: 1017px;
    height: 39px;
    left: 113px;
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
</style>

<script>
export default {
    data() {
        return {
            header: {'Room': 'Sala', 'Theme':'Tema', 'Time':'Horário', 'UserName':'Requisitante' },
            data:[  {'Room': '05211', 'Theme':'Planejamento financeiro', 'Time':'12:55 12/10/2019', 'UserName':'Sandra' }],
            description: 'Senhor Carlos Alberto, requisito acesso a sala de reunião 05211 para discussão dos gastos de 2019',
            session:{'FirstName':'Erick','CorporateID':"17113707"}
        }
    }
}
</script>