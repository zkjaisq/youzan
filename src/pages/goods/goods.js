import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'

import css from 'css/common.css'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import qs from 'qs'

let {id} = qs.parse(location.search.substr(1))
let detailTab = ['商品详情','本店成交']

new Vue({
    el:'#app',
    data:{
        details:null,
        detailTab,
        curIndex:0,
        dealList:null
    },
    created () {
      this.getDetails(id)  
    },
    methods:{
        getDetails(id){
            axios.post(url.details,{id}).then(res=>{
                this.details = res.data.data
            })
        },
        changeTabList(index){
            this.curIndex = index
            console.log(this.curIndex)
            if(this.curIndex === 1){
                this.getDeal(id)
                console.log(this.dealList)
            }
        },
        getDeal(id){
            axios.post(url.deal,{id}).then(res=>{
                this.dealList = res.data.data
            })
        }
    },
    mixins: [mixin]
})