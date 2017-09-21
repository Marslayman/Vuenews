<template>
  <div id="app">
  	<Loading v-show="loadingshow"></Loading>
   <NavHeader v-show="headershow"></NavHeader>
   <keep-alive> 
   	<router-view class="router-view">
   		<!-- 加载路由组件 -->
   	</router-view>
   </keep-alive>
   <FooterLink v-show="footershow"></FooterLink>
  </div>
</template>

<script>
import NavHeader from './components/Nav.vue'
import FooterLink from './components/Footer.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'app',
  // data () {
  
  //  },
  // mounted(){
  //   var path=this.$route.path.substring(1);
  //   this.headerChange(path);
  //   this.footerChange(path);
  // },
  methods:{
    headerChange(path){
        if(path=='user-info' || path=='user-reg' || path=='user-login' || path.indexOf('article')!=-1){

          this.$store.dispatch('headerHide');
  
        }else{
          this.$store.dispatch('headerShow');
  
        }
      },
      footerChange(path){
        if(path.indexOf('article')==-1){
          this.$store.dispatch('footerShow');
  
        }else{
          this.$store.dispatch('footerHide');
  
        }
      }
  },
  watch:{
    $route(to){
      var path = to.path.substring(1);
      this.headerChange(path);
      this.footerChange(path);
    }
  },
  computed:mapGetters([
  	'loadingshow',
  	'headershow',
  	'footershow'
  	]
  ),
  components:{
    NavHeader,
    FooterLink,
  }
}
</script>

<style>
  .slide-up-enter-active, .slide-up-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    transform: translate3d(0, 4em, 0);
  }
  .slide-up-enter, .slide-up-leave-active {
    opacity: .3;
    transform: translate3d(0, 4em, 0);
  }

  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    transform: translate3d(0, 6em, 0);
  }
  .slide-down-enter, .slide-down-leave-active {
    opacity: .1;
    transform: translate3d(0, 6em, 0);
  }

  .slide-left-enter-active, .slide-left-leave-active {
    transition: all .2s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .5;
    transform: translate3d(2em, 0, 0);
  }

  .slide-left-enter, .slide-left-leave-active {
    opacity: .3;
    transform: translate3d(2em, 0, 0);
  }

  .slide-right-enter-active, .slide-right-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .5;
    transform: translate3d(5em, 0, 0);
  }
  .slide-right-enter, .slide-right-leave-active {
    opacity: .3;
    transform: translate3d(5em, 0, 0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
