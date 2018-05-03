import 'css/common.css'
import './category.css'

import axios from "axios"
import Vue from "vue"
import Foot from "components/Foot.vue"
import url from "js/api.js"
import mixin from "js/mixin.js"
  new Vue({
      el:'#app',
      data:{
        topList:null,
        subData:null,
        topIndex:0,
        //综合排行中的热销
       
        //热门品牌和热门分类
        rankData:null
      },
      created(){
        this.getTopList()
        this.getSubList(0)
      },
      methods:{
        getTopList(){
            axios.post(url.topList).then(res=>{
                this.topList = res.data.lists
              
            }).catch(res=>{

            })
        },
        getSubList(index,id){
            this.topIndex = index
            if(index === 0){
                this.getRank()
            }else{
                axios.post(url.subList,{
                    id
                }).then(res=>{
                    this.subData = res.data.data
                })
            } 
        },
        getRank(){
            axios.post(url.rank).then(res=>{
                this.rankData = res.data.data
            })
        },
        toSearch(list){
            location.href = `search.html?keyword=${list.name}&id=${list.id}`
        },
      },
    
    //   components: {
    //       Foot
    //   },
      mixins: [mixin]
  })