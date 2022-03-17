 
<template>
      <div class="container">
            <h1>Sobre Nós</h1>

            <div class="aboutContent">
                  <div class="leftPart">
                        <img class="restaurantImg" src="../assets/restaurant_background_1.jpg" alt="Resaurant image" >

                        <img class="restaurantImg" src="../assets/restaurant_background_2.jpg" alt="Resaurant image" >

                  </div>

                  <div class="rightPart">
                        <h2> Nosso Restaurante...</h2>
                        <div class="text">
                              <p>Criada em em 1999, em Ontário, Canadá, por dois brasileiros amantes de um bom churrasco, a Cheff Hat nasceu com a missão de entregar o melhor da culinária brasileira a outros países.</p>
                              <p> Temos duas estrelas Michelin com muito orgulho e outras altas classificações por críticos ao redor do mundo, porém, mais imporante, fazemos de tudo para o cliente sair satisfeito.</p>

                              <p>Chegamos também no Brasil, operamos em quatro dos maiores bairros do Rio de Janeiro e em três locais em São Paulo</p>
                        </div>
                        
                  </div>
            </div>

            <div class="contactTitle">
                  <h2> Contato</h2>
            </div>

            <div class="contactInfo">
                  <div class="email">
                        <p>thecheffhat@hotmail.com</p>
                        <p>ocheffhatbr@outlook.com</p>
                        </div>
                  
                  <div class="phone">
                        <p>21 33411-4544</p>
                        <p>21 32415-2525</p>
                        <p>21 31988-8433</p>
                        <p>21 33919-4554</p>
                        <p>11 39835-4398</p>
                        <p>11 2885-5944</p>
                        <p>11 33015-5660</p>
                  </div>

                  <div class="enderecos">
                        <h3>RJ</h3>
                        <div class="rj">
                              <p>Largo da Lapa, Centro - 		20021-170</p>
                              <p>Park Shopping, Campo Grande - 23045-830</p>
                              <p>Barra Shopping, Barra da Tijuca - 22640-102</p>
                              <p>Av. Maracanã, Maracanã - 20511-000</p>
                        </div>
                              
                        <h3>SP</h3>
                        <div class="sp">
                               <p>Jardim Helena - 08090-284</p>
                              <p>13 de Maio - 04849-529</p>
                              <p>Brás - 03047-000</p>
                        </div>
                  </div>
            </div>
            
            
            

            <div class="credits"><a href='https://www.freepik.com/vectors/background'>Background vector created by wangstdo - www.freepik.com</a></div>
           
      </div>
      
</template>

<script>
export default {
      name:'About'
}
</script>

<style scoped>
.container {
      position: relative;
      display: flex;
      left: 15%;
      width: 88%;
      flex-direction: column;
      gap: 3rem;
}
.container *{
      text-align: center;
      padding: 0 1rem 0;
      color: var(--darkOne);
}

.container h1{
      margin-top: 2rem;
}

.container p {
      text-align: justify;
      margin: 0 6rem;
      color: var(--darkTwo);
}

.restaurantImg{
      width: 100%;
      padding:0;
      border-radius: 0.25rem;
}

.aboutContent{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      padding: 0;
}

.leftPart{
      display: flex;
      flex-direction: column;
      float: left;
      padding: 0 0 0 0.2rem;
      gap: 1px;
      width: 100%;
      background-color: gray;
}

.rightPart{
      display: flex;
      flex-direction: column;
      gap:8rem;
      align-self:center;
}

.rightPart h2{
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.rightPart .text{
      display: flex;
      flex-direction: column;
      gap:0.75rem;
}

.rightPart p{
      text-align: justify;
      margin: 0;
      text-indent: 2rem;
}

@media screen and (max-width: 480px){
      .container{
            left: 0;
            width: 100%;
            height: 88vh;
      }

      .container p{
            margin: 0 0.5rem 0;
            line-height: 1.75rem;
      }

      .aboutContent{
            grid-template-columns: none;
      }

      .credits{
            text-align: center;
            margin: 5rem 0.5rem 0;
            color: var(--darkOne);
      }
}
</style>