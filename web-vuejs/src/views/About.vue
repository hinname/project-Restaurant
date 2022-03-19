 
<template>
      <div class="container">
            <h1>Sobre Nós</h1>

            <div class="aboutContent">
                  <div class="leftPart desktop">
                        <img class="restaurantImg" src="../assets/restaurant_background_1.jpg" alt="Resaurant image">

                        <img class="restaurantImg" src="../assets/restaurant_background_2.jpg" alt="Resaurant image">
                  </div>

                  <div class="rightPart">
                        <h2> Nosso Restaurante...</h2>

                        <div class="text">
                              <img class="restaurantImg mobile" src="../assets/restaurant_background_2.jpg" alt="Resaurant image">

                              <p>Criada em em 1999, em Ontário, Canadá, por dois brasileiros amantes de um bom churrasco, a Cheff Hat nasceu com a missão de entregar o melhor da culinária brasileira a outros países.</p>
                              <p> Temos duas estrelas Michelin com muito orgulho e outras altas classificações por críticos ao redor do mundo, porém, mais imporante, fazemos de tudo para o cliente sair satisfeito.</p>

                              <img class="restaurantImg mobile" src="../assets/restaurant_background_1.jpg" alt="Resaurant image">


                              <p>Chegamos também no Brasil, operamos em quatro dos maiores bairros do Rio de Janeiro e em três locais em São Paulo</p>
                        </div>
                        
                  </div>
            </div>

            <div class="contactTitle">
                  <h2> Contato</h2>
            </div>

            <div class="contactInfo">
                  <div class="email">
                        <h3>E-mail</h3>
                        <p>thecheffhat@hotmail.com</p>
                        <p>ocheffhatbr@outlook.com</p>
                        <p>ocheffhatcarioca@gmail.com</p>
                        <p>ocheffhatsp@yahoo.com.br</p>
                  </div>
                  
                  <div class="phone">
                        <h3>Telefones</h3>
                        <p>21 10000-0000</p>
                        <p>21 20000-0000</p>
                        <p>21 30000-0000</p>
                        <p>21 40000-0000</p>
                        <p>11 30000-0000</p>
                        <p>11 30000-0000</p>
                        <p>11 30000-0000</p>
                  </div>

                  <div class="adress">
                        <h3>Endereços</h3>
                        <div class="rj">
                              <h4>RJ</h4>

                              <p>Largo da Lapa, Centro - 		10001-000</p>
                              <p>Park Shopping, Campo Grande - 20002-000</p>
                              <p>Barra Shopping, Barra da Tijuca - 30003-000</p>
                              <p>Av. Maracanã, Maracanã - 40004-000</p>
                        </div>
                              
                        <div class="sp">
                              <h4>SP</h4>

                               <p>Jardim Helena - 10000-000</p>
                              <p>13 de Maio - 20000-000</p>
                              <p>Brás - 30000-000</p>
                        </div>
                  </div>
            </div>
            

           
      </div>
      
</template>

<script>
export default {
      name:'About'
}
</script>

<style scoped>
.mobile{
      display: none;
}

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
      padding: 0 0 0 0.2rem;
      margin-bottom: 2rem;

}

.leftPart{
      display: flex;
      flex-direction: column;
      float: left;
      gap: 1px;
      width: 100%;
      background-color: gray;
      padding: 0;
}

.rightPart{
      display: flex;
      flex-direction: column;
      gap:4rem;
      align-self:center;
      padding: 0 2rem 0 0;
}

.rightPart h2{
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-style: italic;
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

.contactInfo{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
}

.contactInfo p, .contactInfo h3, .contactInfo h4, .contactInfo div{
      margin: 0;
      padding: 0;
      text-align: center;
}

.contactInfo h3{
      margin-bottom: 1rem;
}


.email, .phone, .adress{
      display: flex;
      flex-direction: column;
      gap:1rem;
}

.email p{
      color:black;
      cursor: pointer;
}

.adress{
      gap:0.5rem;
      padding-right: 3rem;
}

.adress > *{
      display: flex;
      flex-direction: column;
}

.adress h4{
      margin-bottom: 0.25rem;
}

.adress p {
      font-size: 1rem;
      text-align: left;
}

.sp, .rj{
      gap:0.5rem;
      margin-bottom: 0.75rem !important;
}

@media screen and (max-width: 480px){
      .mobile{
            display: flex;
      }

      .desktop{
            display: none;
      }

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
            padding: 0;
      }

      .rightPart{
            gap: 2rem;
      }

      .rightPart *{
            padding: 0;
      }

      .rightPart img{
            width: 100vw;
            margin: 0;
            border-radius:0;
            margin: 2rem 0 0.75rem 0;
      }

      .rightPart .text{
            gap: 0.75rem;
      }

      .contactInfo{
      display: flex;
      flex-direction: column;
      gap: 3rem;
      }

      .contactInfo > div{
            border-bottom: 2px solid rgb(180, 178, 178);
            padding-bottom: 1rem;
      }

      .credits{
            text-align: center;
            margin: 5rem 0.5rem 0;
            color: var(--darkOne);
      }
}
</style>