//和后台做对接的一个文件let 
let url = {
    hotlist:'/index/hotLists',
    bannerLists:'/index/banner',
    topList:"/category/topList",
    subList:"/category/subList",
    rank:"/category/rank",
    searchList:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal'

}

//开发环境和真是环境的切换，开发环境使用的是ip接口，这样可以实现前后端的分离。
//let host = ''
let host = 'http://rapapi.org/mockjsdata/24170'
for(let key in url){
    if(url.hasOwnProperty(key)){
       url[key]=host + url[key]
    }
}

export default url