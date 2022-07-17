{
  "ua": "",
  "homeUrl": "https://vipmv.tv/",
  "dcVipFlag": "true",
  "pCfgJs": "https://vipmv.tv/static/js/playerconfig.js",
  "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
  "dcShow2Vip": {},
  "dcPlayUrl": "true",
  "cateNode": "//div[contains(@class,'ec-allnav')]/ul/li/a[contains(@href, 'Movietype')]",
  "cateName": "/spam/text()",
  "cateId": "/@href",
  "cateIdR": "/Movietype/(\\w+).html",
  "cateManual": {"追剧推荐":"20","连续剧":"2","国产剧": "13","港台剧": "14","日韩剧": "15","欧美剧":"16","电影":"1","动作片":"6","喜剧片":"7","爱情片":"8","科幻片":9",
                 "恐怖片":"10","剧情片":"11","战争片":"12","综艺":"3","动漫": "4"},
  "homeVodNode": "//div[contains(@class,'pack-ykpack')]/div/a[contains(@class,'aplus-exp')]",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "/Moviedetail/(\\w+).html",
  "homeVodImg": "/div/@data-original",
  "homeVodImgR": "\\S+(http\\S+)",
  "homeVodMark": "//span[contains(@class,'pack-prb')]/text()",
  "cateUrl": "https://vipmv.tv/vodshow/{cateId}--------{catePg}---.html",
  "cateVodNode": "//div[contains(@class,'pack-ykpack')]/div/a[contains(@class,'aplus-exp')]",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/Moviedetail/(\\w+).html",
  "cateVodImg": "/div/@data-original",
  "cateVodImgR": "\\S+(http\\S+)",
  "cateVodMark": "//span[contains(@class,'pack-prb')]/text()",
  "dtUrl": "https://vipmv.tv/Moviedetail/{vid}.html",
  "dtNode": "//body",
  "dtName": "//div[@class='s-top-right']/div/h1/text()",
  "dtNameR": "",
  "dtImg": "//div[@class='s-cover box']/a/img/@src",
  "dtImgR": "",
  "dtCate": "//div[@class='s-top-right']/div/p/span[contains(text(), '类型')]/following-sibling::*/text()",
  "dtYear": "//span[contains(text(), '年代')]/following-sibling::a/text()",
  "dtArea": "//span[contains(text(), '地区')]/following-sibling::a/text()",
  "dtMark": "//span[contains(text(), '地区')]/following-sibling::a/text()",
  "dtDirector": "//span[contains(text(), '导演')]/following-sibling::a/text()",
  "dtActor": "//span[contains(text(), '演员')]/following-sibling::a/text()",
  "dtDesc": "//span[contains(text(), '简介')]/following-sibling::span/text()",
  "dtFromNode": "//div[@class='play_source']/div/div/a",
  "dtFromName": "[substring-before(text(),'(')]",
  "dtFromNameR": "",
  "dtUrlNode": "//div[@class='playlist_notfull']/ul",
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "/@href",
  "dtUrlIdR": "/okplay/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "https://vipmv.tv/okplay/{playUrl}.html",
  "playUa": "",
  "searchUrl": "https://vipmv.tv/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
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