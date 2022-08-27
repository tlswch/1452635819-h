{
    "author": "春风",
    "ua": "Mozilla/5.0 (Android 12; Mobile; rv:68.0) Gecko/68.0 Firefox/99.0",
    "homeUrl": "https://www.miniku.cc/",
    "dcVipFlag": "true",
    "dcPlayUrl": "true",
    "cateManual": { "电影":"1","电视剧":"2","综艺":"3", "动漫":"4"},
    "homeVodNode": "//div[@class='stui-pannel stui-pannel-bg clearfix'][position()>2]//div[@class='stui-vodlist__box']/a",
    "homeVodName": "/@title",
    "homeVodId": "/@href",
    "homeVodIdR": "/movie/(\\S+).html",
    "homeVodImg": "/@data-original",
    "homeVodImgR": "",
    "homeVodMark": "/span[@class='pic-text text-right']/text()",
    "cateUrl": "https://www.miniku.cc/vodtype/{cateId}---{catePg}---.html",
    "cateVodNode": "//div[@class='stui-vodlist__box']/a",
    "cateVodName": "/@title",
    "cateVodId": "/@href",
    "cateVodIdR": "/movie/(\\S+).html",
    "cateVodImg": "/@data-original",
    "cateVodImgR": "",
    "cateVodMark": "/span[@class='pic-text text-right']/text()",
    "dtUrl": "https://www.miniku.cc/movie/{vid}.html",
    "dtNode": "//body",
    "dtName": "//div[@class='myui-content__thumb']/a/@title",
    "dtNameR": "",
    "dtImg": "//div[@class='myui-content__thumb']/a/img/@data-original",
    "dtImgR": "",
    "dtCate": "//span[contains(text(), '类型')]/following-sibling::a/text()",
    "dtCateR": "",
    "dtYear": "//span[contains(text(), '年份')]/following-sibling::a/text()",
    "dtYearR": "",
    "dtArea": "//span[contains(text(), '地区')]/following-sibling::a/text()",
    "dtAreaR": "",
    "dtDirector": "//span[contains(text(), '导演')]/following-sibling::a/text()",
    "dtDirectorR": "",
    "dtActor": "//span[contains(text(), '主演')]/following-sibling::a/text()",
    "dtActorR": "",
    "dtDesc": "//span[contains(@class,'detail-content')]/text()",
    "dtDescR": "",
    "dtFromNode": "//div[contains(@class,'myui-panel_hd')]/ul[contains(@class,'nav nav-tabs')]/li/a",
    "dtFromName": "/text()",
    "dtFromNameR": "",
    "dtUrlNode": "//ul[@class='myui-content__list sort-list clearfix']",
    "dtUrlSubNode": "/li/a",
    "dtUrlId": "/@href",
    "dtUrlIdR": "/vodplay/(\\S+).html",
    "dtUrlName": "/text()",
    "dtUrlNameR": "",
    "playUrl": "https://www.miniku.cc/vodplay/{playUrl}.html",
    "playUa": "",
    "searchUrl": "https://www.miniku.cc/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": ""
}