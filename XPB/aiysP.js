{//2022.7.1
    "author": "尤东风",
    "ua": "",
    "homeUrl": "https://aiyingshis.com/",
    //"pCfgJs": "https://aiyingshis.com/static/js/playerconfig.js",
    //"pCfgJsR": "MacPlayerConfig.player_list=([\\w\\W]*?),MacPlayerConfig.downer_list=",
    //"dcShow2Vip": {},
    //"dcVipFlag": "true",
    //"dcPlayUrl": "true",
    //"cateNode": "//ul[contains(@class,'nav-menu-items')]/li[contains(@class, 'nav-menu-item')]/a[contains(@href,'type')]",
    //"cateName": "/@title",
    //"cateId": "/@href",
    //"cateIdR": "/type/(\\d+)/",
    "cateManual": { "电影": "1", "电视剧": "2","综艺": "3","动漫": "4","蓝光片": "37" },
    "homeVodNode": "//div[@class='module-items']//div[@class='module-item-cover']",
    "homeVodName": "//div[@class='module-item-pic']/a/@title",
    "homeVodId": "//div[@class='module-item-pic']/a/@href",
    "homeVodIdR": "/detail/(\\w+).html",
    "homeVodImg": "//div[@class='module-item-pic']/img/@data-src",
    "homeVodImgR": "\\S+(http\\S+)",
    "homeVodMark": "//div[@class='module-item-caption right']/span/text()",
    "cateUrl": "https://aiyingshis.com/vodshow/id/{cateId}/page/{catePg}.html",
    "cateVodNode": "//div[@class='module-items']//div[@class='module-item-cover']",
    "cateVodName": "//div[@class='module-item-pic']/a/@title",
    "cateVodId": "//div[@class='module-item-pic']/a/@href",
    "cateVodIdR": "/voddetail/(\\w+).html",
    "cateVodImg": "//div[@class='module-item-pic']/img/@data-src",
    "cateVodImgR": "\\S+(http\\S+)",
    "cateVodMark": "//div[@class='module-item-caption right']/span/text()",
    "dtUrl": "https://aiyingshis.com/voddetail/{vid}.html",
    "dtNode": "//body",
    "dtName": "//div[@class='video-info-header']/h1/text()",
    "dtImg": "//div[@class='video-cover']/div/div/img/@data-src",
    "dtArea": "//a[@class='tag-link'][3]/text()",
    "dtDirector": "//div[@class='video-info-items'][1]/div/a/text()",
    "dtActor": "//div[@class='video-info-items'][2]/div/a/text()",
    "dtYear": "//div[@class='video-info-items'][3]/div/a/text()",
    "dtMark": "//div[@class='video-info-item'][1]/text()",
    "dtDesc": "//div[@class='video-info-item video-info-content vod_content']/span/text()",
    "dtFromNode": "//div[@class='module-tab-items']//div[@class='module-tab-content']//div[contains(@class,'module-tab-item tab-item')]/span",
    "dtFromName": "/text()",
    "dtUrlNode": "//div[contains(@class, 'module-blocklist')]",
    "dtUrlSubNode": "/div/a",
    "dtUrlId": "@href",
    "dtUrlIdR": "/vodplay/(\\S+).html",
    "dtUrlName": "/span/text()",
    "dtUrlNameR": "",
    "playUrl": "https://aiyingshis.com/{playUrl}.html",
    "playUa": "",
    "searchUrl": "https://aiyingshis.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": "",
 "filter":{
"1": 
[
{"name":"年份","key":"year","value":
[
{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},
{"n":"更早","v":"更早"}
]
}
],
"2": 
[
{
"name":"年份","key":"year","value":
[
{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},
{"n":"更早","v":"更早"}
]
}
],
"3": 
[
{
"name":"年份","key":"year","value":
[
{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}
]
}
],
"4": [
{"name":"年份","key":"year","value":
[
{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}
]
}
]
}
}