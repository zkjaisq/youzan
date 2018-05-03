<template>
 <div class="bottom-nav">
          <ul>
            <li :class="{active:index===curIndex}" v-for="(list,index) in navConfig" @click="changeNav(list,index)"><a><i :class="list.icon"></i><div>{{list.name}}</div></a></li>
           
          </ul>
        </div>
  
</template>

<script>
import qs from 'qs'
//location.search得到从问号开始的URL，返回的index是一个string的类型
let {index} = qs.parse(location.search.substr(1))
console.log(index)
//对底部导航进行数据处理
var navConfig = [{
  name:'有赞',
  icon:'icon-home',
  href:'index.html'
},
{
  name:'分类',
  icon:'icon-category',
  href:'category.html'
},
{
  name:'购物车',
  icon:'icon-cart',
  href:'cart.html'
},
{
  name:'我',
  icon:'icon-user',
  href:'member.html'
},
]

export default {
  data(){
    return {
      navConfig,
       curIndex: parseInt(index) || 0
    }
  },
  methods: {
    //使用js来进行页面的跳转
    changeNav(list,index){
      location.href = `${list.href}?index=${index}`
    }
  }
}
</script>


<style>
.bottom-nav {
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  background-color: #fff;
  z-index: 8;
  -o-border-image: url(https://b.yzcdn.cn/v2/image/wap/border-line-2.png) 2 stretch;
  border-image: url(https://b.yzcdn.cn/v2/image/wap/border-line-2.png) 2 stretch;
  border-top: 2px solid #e5e5e5
}

@media only screen and (-webkit-min-device-pixel-ratio:1.5),
only screen and (min--moz-device-pixel-ratio:1.5),
only screen and (min-device-pixel-ratio:1.5) {
  .bottom-nav {
    border-top-width: 1px
  }
}

.bottom-nav ul {
  position: relative;
  height: 100%;
  zoom: 1
}

.bottom-nav ul:after {
  content: "";
  display: table;
  clear: both
}

.bottom-nav li {
  display: block;
  float: left;
  width: 25%;
  height: 100%
}

.bottom-nav a {
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  text-align: center;
  font-size: 10px
}

.bottom-nav [class^=icon-] {
  display: block;
  width: 22px;
  height: 22px;
  margin: auto;
  margin-bottom: 4px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% auto
}
</style>


