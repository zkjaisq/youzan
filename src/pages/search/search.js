import css from 'css/common.css'
import './search.css'
import Vue from 'vue'
import url from 'js/api.js'
import axios from 'axios'
import qs from 'qs'
import mixin from 'js/mixin.js'




let {keyword,id} = qs.parse(location.search.substr(1))

new Vue({
    el:'.container',
    data:{
        searchList:null,
        keyword,
        isShow:false
    },
    created(){
        this.getSearchList()
    },
    methods:{
        getSearchList(){
            axios.post(url.searchList,{
                keyword,id
            }).then(res=>{
                this.searchList = res.data.lists
            })
        },
        move(){
            if(document.body.scrollTop > 100) {
                this.show = true
              } else {
                this.show = false
              }
        },
        toTop(){
            Velocity(document.body,"scroll",{duration:1000})
        }
    },
    mixins:[mixin]
})