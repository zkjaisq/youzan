<template>
              <div class="swiper-container" >
                <div class="swiper-wrapper">
                  <div class="swp-page swiper-slide"  v-for="list in lists">
                    <a class="js-no-follow" :href="list.clickURL">
                      <img class="goods-main-photo fadeIn" :src="list.image">
                    </a>
                  </div>
                </div>
                  <div class="swiper-pagination"></div> 
              </div>
      
</template>


<script>
//swiper是对DOM节点进行操作，什么时候生成DOM节点的呢
import Swiper from 'swiper'
import "swiper/dist/js/swiper.min.js"
import "swiper/dist/css/swiper.min.css"


//默认将一个单vue文件当做一个vue实例，只需要输出一个option就可以的了~
export default{
  name:'swipe',
  //props: ['bannerLists']
  props: {
    lists:{
      type:Array,
      requeir:true,
    }
  },
  mounted () {
   new Swiper('.swiper-container', {
        loop:true,
        pagination:'.swiper-pagination'
    });
  }

}


</script>


<style>
.swiper-slide img{
  width: 100%;
  height: 100%;
}

</style>

