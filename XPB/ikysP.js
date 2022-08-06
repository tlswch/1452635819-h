{// 尤东风于2022.6.17再次编制
  "ua": "",
  "homeUrl": "https://www.5dy6.cc/",
  "dcVipFlag": "true",
  //"pCfgJs": "https://555dy.fun/static/js/playerconfig.js",
  //"pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
  "dcShow2Vip": {},
  "dcPlayUrl": "true",
  "cateNode": "//ul[contains(@class,'myui-header__menu')]/li[@class='dropdown-hover']//ul/li/a[contains(@href, 'vodtype')]",
  "cateName": "/text()",
  "cateId": "/@href",
  "cateIdR": "/vodtype/(\\d+).html",
  "cateManual": {"电影":"1","连续剧":"2","综艺记录片":"3","动漫":"4","福利":"124"},
  "cateUrl": "https://www.5dy6.cc/vodshow/{cateId}---{area}-{by}----{catePg}---{year}.html",
  "cateVodNode": "//div[contains(@class,'module-items module-poster-items-base ')]/a",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/voddetail/(\\w+).html",
  "cateVodImg": "//div[contains(@class,'module-item-pic')]/img/@data-original",
  "cateVodImgR": "\\S+(http\\S+)",
  "cateVodMark": "//div[contains(@class,'module-item-note')]/text()",
  "dtUrl": "https://www.5dy6.cc/voddetail/{vid}.html",
  "dtNode": "//div[contains(@class,'page view')]",
  "dtName": "//div[@class='module-item-pic']/img/@alt",
  "dtNameR": "",
  "dtImg": "//div[@class='module-item-pic']/img/@data-original",
  "dtImgR": "\\S+(http\\S+)",
  "dtCate": "//div[@class='module-info-tag']/div[@class='module-info-tag-link'][3]/a/text()",
  "dtCateR": "",
  "dtYear": "//div[@class='module-info-tag']/div[contains(@class,'module-info-tag-link')]/a/text()",
  "dtYearR": "",
  "dtArea": "//div[@class='module-info-tag']/div[@class='module-info-tag-link'][2]/a/text()",
  "dtAreaR": "",
  "dtMark": "",
  "dtMarkR": "",
  "dtActor": "//span[contains(text(),'主演')]/following-sibling::div/a/text()",
  "dtActorR": "",
  "dtDirector": "//span[contains(@class,'module-info-item-title') and contains(text(), '导演')]//parent::/div/a/text()",
  "dtDirectorR": "",
  "dtDesc": "//div[@class='module-info-introduction-content show-desc']/p/text()",
  "dtDescR": "",
  "dtFromNode": "//div[@class='module-tab']//div[@class='module-tab-items']//div[contains(@class,'module-tab-items-box')]//div[contains(@class,'module-tab-item tab-item')]/span",
  "dtFromName": "/text()",
  "dtFromNameR": "",
  "dtUrlNode": "//div[@class='module-play-list']",
  "dtUrlSubNode": "/div/a",
  "dtUrlId": "@href",
  "dtUrlIdR": "/vodplay/(\\S+).html",
  "dtUrlName": "/span/text()",
  "dtUrlNameR": "",
  "playUrl": "https://www.5dy6.cc/vodplay/{playUrl}.html",
  "playUa": "",
  "searchUrl": "https://www.5dy6.cc/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
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