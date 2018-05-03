import 'css/common.css'
import './index.css'


import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'
import Banner from 'components/Banner.vue'
//引入mint-ui中的无限滚动
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

let app = new Vue({
    el:'#app',
    data:{
        lists:null,
        pageNumber:1,
        pageSize:6,
        loading:false,
        allLoaded:false,
        bannerLists:null
    },
    created () {
       this.getLists()
       this.getBannerlists()
    },
    methods: {
        getLists(){
            if(this.allLoaded) return
            this.loading=true
            axios.post(url.hotlist,{
                pageNumber:this.pageNumber,
                pageSize:this.pageSize
            }).then(res=>{
                //判断是否所有数据是否加载完成
                let currentLists = res.data.lists
                if(currentLists.length < this.pageSize){
                    this.allLoaded = true
                }
                if(this.lists){
                    //当第二次请求的时候将获取到的数据加载到原来的数组中去
                    this.lists = this.lists.concat(currentLists)
                    console.log(this.lists)
                }else{
                    //第一次请求数据
                    this.lists = currentLists
                }
                this.loading = false
                this.pageNumber++
            })
        },
        getBannerlists(){
            axios.post(url.bannerLists).then(res=>{
                console.log(res.data.lists)
               this.bannerLists = res.data.lists
            })
        }
    },
    //组件的注册
    components:{
        Foot,
        Banner
    }
})
