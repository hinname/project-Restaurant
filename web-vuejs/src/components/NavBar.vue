<template>
      <div class="navBar">
            
            <!-- Nav Bar do App. Fixa à Esquerda-->
            <div class="bigLogo">
                  <img :src="require(`../assets/${$store.state.dark ? imageDark : imageLight }`)" alt="foto">
            </div>
            <div class="navBarOptions">
                  <!-- Opções da Nav Bar-->
                  <ul>
                        <li>
                              <RouterLink to="/" exact>
                                    <div class="listOption">
                                          <fa :icon="['fas','home']" class="navBarIcon"/>
                                          <p>Home</p>
                                    </div> 
                              </RouterLink>
                        </li>
                        <li>
                              <div class="pedidosDesktop">Meus Pedidos</div>
                              <div class="pedidosMobile">
                                    <div class="listOption">
                                          <fa :icon="['fas','clipboard']" class="navBarIcon"/>
                                          <p>Pedidos</p>
                                    </div> 
                              </div>
                        </li>
                        <li>
                              <RouterLink to="/cart">
                                    <div class="listOption"> 
                                          <fa :icon="['fas','shopping-basket']" class="navBarIcon"/>
                                          <p>Cesta</p>
                                    </div> 
                              </RouterLink>
                        </li>
                        <li id="mostReq">
                              <div id="mostReqOption" @click="mostReq()">
                                    Os Mais Pedidos
                              </div> 
                        </li>
                        <li id="promotions">
                              <div id="promotionsOption" @click="promotions()">
                                    Promoções
                              </div>
                        </li>
                        <li>
                              <RouterLink to="/about">
                                    <div class="listOption"> 
                                          <fa :icon="['fas','book']" class="navBarIcon"/>
                                          <p>Sobre</p>
                                    </div> 
                              </RouterLink>
                        </li>
                        <li>
                              <RouterLink to="/settings">
                                    <div class="listOption"> 
                                          <fa :icon="['fas','tools']" class="navBarIcon"/>
                                          <p>Ajustes</p>
                                    </div> 
                              </RouterLink>
                        </li>
                  </ul>

            </div>
            <div class="navBarUser">
                  <!-- Informações do Usuário/Mesa-->
                  <div class="ids">
                        <div class="userID"><p>User #X</p></div>
                        <div class="tableID"><p>Mesa #Y</p></div>
                  </div>

                  <div class="userStatus"><p>Vazia</p></div>
                  <!-- Status da Mesa: Vazia, Ocupada, Indisponível.
                        Se Ocupada, Mostrar também o Status do Pedido (Aguardando pedido, Pedido em preparação...)-->
            </div>
            <div class="socialMediaLinks">
                  <a href="https://www.facebook.com"><fa :icon="['fab', 'facebook']" /></a>
                  <a href="https://www.instagram.com"><fa :icon="['fab', 'instagram']" /></a>
            </div>
      </div>
      <div id="popUpContainer">
            <div id="mostReqContainer">
                  <MostReq @closePopUp="closePopUp" v-show="mostReqPopUp"/>
            </div>
            <div id="promotionsContainer">
                  <Promotions @closePopUp="closePopUp" v-show="promotionsPopUp"/>
            </div>
      </div>
</template>

<script>
import MostReq from "../views/MostReq.vue"
import Promotions from "../views/Promotions.vue"

export default {
      name: 'NavBar',
      
      components: {
            MostReq, Promotions
      },

      methods:{
            mostReq(){
                  //Se já tiver um popupAtivo
                  if(this.popUp){
                        this.closePopUp()
                  }
                  
                  this.popUp = true
                  this.mostReqPopUp = true
                  console.log(this.mostReqPopUp)
            },

            promotions(){
                  //Se já tiver um popupAtivo
                  if(this.popUp){
                        this.closePopUp()
                  }

                  this.popUp = true
                  this.promotionsPopUp = true
                  console.log(this.promotionsPopUp)
            },
            
            closePopUp(){
                  this.mostReqPopUp = false
                  this.promotionsPopUp = false
                  this.popUp = false //sem popupAtivo
                  // console.log(this.mostReqPopUp)          
            },
      },

      data() {
            return {
                  mostReqPopUp: false,
                  promotionsPopUp: false,
                  popUp:false,
                  imageLight: 'Restaurant-logo_light.jpg',
                  imageDark: 'Restaurant-logo_dark.jpg',
                  btnShowMobileNav: false
            }
      }
}

</script>

<style scoped>

.navBar{
      background-color: var(--backgroundColor);
      position: fixed;
      display: flex;
      flex-direction: column;
      width: 15%;
      height: 100vh;
      left:0;
      text-align: center;
      justify-content: space-between;
      z-index: 10;
}

.btn-mobile {
      display: none;
}

.bigLogo{
      width: 100%;
      height: 18%;
}

.bigLogo img {
      width: 100%;
}


.navBarOptions ul{
      display: flex;
      flex-direction: column;
      gap:1rem;
      font-size: 1.05rem;
      list-style: none;
}

.navBarOptions .router-link-active {
      color: #E83C3C;
      text-shadow: 0 0 1px #0C1005;
}

.navBarOptions a {
      text-decoration: none;
}

.navBarOptions > *{
      cursor:pointer;
}

.navBar > *{
      color: var(--darkOne);
}

.navBarIcon{
      display: none;
} 

.pedidosMobile{
      display: none;
}

.navBarUser{
      display: flex;
      flex-direction: column;
      gap:0.8rem;
}

.ids{
      display: flex;
      flex-direction: column;
      gap:0.4rem;
}

.socialMediaLinks{
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      font-size: 1.75rem;

}

.socialMediaLinks a {
      margin: 0 0.5rem;
      text-decoration: none;
      color: var(--DarkOne);
}

/* Media Query do Tablet*/

@media screen and (max-width: 870px){

}

/* Media Query de Smartphones*/

@media screen and (max-width: 480px){
      .navBar{
      flex-direction: row;
      width: 100vw;
      height: 12vh;
      top: 88vh;
}

.bigLogo{
      display: none;
}

.navBarOptions ul{
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100%;
      font-size: 0.85rem;
      gap: 8.5%;
}

.listOption{
      display: flex;
      flex-direction: column;
      align-items: center;
}

 .navBarIcon{
       display: flex;
       font-size: 1.5rem;
       margin-bottom: 1rem;
 }

 #mostReq, #promotions,  .navBarUser, .socialMediaLinks, .pedidosDesktop{
       display:none;
 }

 .pedidosMobile{
       display: flex;
 }

}

@media screen and (max-width: 360px){
      .navBarOptions ul{
      gap: 6.5%;
      font-size: 0.8rem;
      }
      
      .navBarIcon{
       font-size: 1.35rem;
       margin-bottom: 0.95rem;
      }
}
</style>
