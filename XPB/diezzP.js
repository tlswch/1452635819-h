{
    "ua": "",
    "homeUrl": "https://www.dy888.tv",
    "dcVipFlag": "true",
    "pCfgJs": "https://www.dy888.tv/static/js/playerconfig.js",
    "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
    "dcShow2Vip": {},
    "dcPlayUrl": "true",
    "cateNode": "//ul[contains(@class,'top_nav clearfix')]//li/a[contains(@href, 'index.php/vod/type/id') and not(contains(@href, '20'))]",
    "cateName": "/text()",
    "cateId": "/@href",
    "cateIdR": "",
   "cateManual": {"电影": "1","连续剧": "2","综艺": "3","动漫": "4"},
    "homeVodNode": "//ul[contains(@class,'vodlist vodlist_wi')]/li/a[contains(@class, 'vodlist_thumb lazyload')]",
    "homeVodName": "/@title",
    "homeVodId": "/@href",
    "homeVodIdR": "/index.php/vod/detail/id/(\\s+).html",
    "homeVodImg": "/@data-original",
    "homeVodMark": "",
    "cateUrl": "https://www.dy888.tv/index.php/vod/show/area/{area}/class/{class}/id/{cateId}/page/{catePg}/year/{year}.html",
    "cateVodNode": "//div[contains(@class,'pannel clearfix')]/ul[contains(@class,'vodlist vodlist_wi clearfix')]/li/a",
    "cateVodName": "/@title",
    "cateVodId": "/@href",
    "cateVodIdR": "/index.php/vod/detail/id/(\\s+).html",
    "cateVodImg": "/@data-original",
    "cateVodMark": "/span[contains(@class,'pic_text text_right')]/text()",
    "dtUrl": "https://www.dy888.tv/index.php/vod/detail/id/{vid}.html",
    "dtNode": "//body//div[contains(@class,'content_box clearfix')]",
    "dtName": "//div[contains(@class,'pannel_head clearfix')]/h2[contains(@class,'title')]/text()",
    //"dtName": "//div[contains(@class,'content_thumb fl')]/a[contains(@class,'vodlist_thumb lazyload')]/@title",
    "dtImg": "//div[contains(@class,'content_thumb fl')]/a[contains(@class,'vodlist_thumb lazyload')]/@data-original",
    "dtImgR": "",
    "dtCate": "//span[contains(text(),'类型')]/following-sibling::*/text()",
    "dtYear": "//span[contains(text(),'年份')]/following-sibling::*/text()",
    "dtArea": "//span[contains(text(),'地区')]/following-sibling::*/text()",
    "dtDesc": "//span[contains(text(),'简介')]/following-sibling::*/text()",
    //"dtDescR": "//div[contains(@class,'content_desc context clearfix')]/span/text()",
    "dtFromNode": "//div[contains(@class,'play_source')]/div/a",
   // "dtFromNode": "//a[@class='active' and contains(@href, 'javascript')]",
   // "dtFromName": "/text()",(原文)
    "dtFromName": "/@alt",
    //"dtUrlNode": "//div[@id='playlistbox' and contains(@class, 'playlist_notfull')]",
    "dtUrlNode": "//div[contains(@class,'playlist_full')]/ul[contains(@class,'content_playlist clearfix')]",
    "dtUrlSubNode": "/li/a",
    "dtUrlId": "/@href",
    "dtUrlIdR": "/index.php/vod/play/id/40592/sid/1/nid/(\\d+).html",
    "dtUrlName": "/text()",
    "playUrl": "https://www.dy888.tv/index.php/vod/play/id/40592/sid/1/nid/{playUrl}.html",
    "searchUrl": "https://www.dy888.tv/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
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