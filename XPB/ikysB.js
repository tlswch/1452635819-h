{
  "author": "hogo18于20220806",
  "name": "爱看影视",
  "url": "https://www.zhanlangbu.com/", //填网站链接
  "tihuan": "cnzz.com", //这个不用动，是个别网站嗅探时过滤地址用的
  "User": "空", //这个不用动，是个别网站播放需要请求头时才用到
  "shouye": "1",

  "fenlei": "电影$/index.php/vod/show/id/1/page/#电视剧$/index.php/vod/show/id/2/page/#综艺$/index.php/vod/show/id/3/page/#动漫$/index.php/vod/show/id/4/page/#直播$/index.php/vod/show/id/36/page/#剧情剧$/index.php/vod/show/class/剧情/id/2/page/#武侠剧$/index.php/vod/show/class/武侠/id/2/page/#古装剧$/index.php/vod/show/class/古装/id/2/page/#奇幻剧$/index.php/vod/show/class/奇幻/id/2/page/#爱情剧$/index.php/vod/show/class/爱情/id/2/page/#喜剧$/index.php/vod/show/class/喜剧/id/2/page/#动作片$/index.php/vod/show/class/动作/id/1/page/#战争片$/index.php/vod/show/class/战争/id/1/page/#冒险片$/index.php/vod/show/class/冒险/id/1/page/#犯罪片$/index.php/vod/show/class/犯罪/id/1/page/#科幻片$/index.php/vod/show/class/科幻/id/1/page/", //网站列表的分类
  "houzhui": ".html", //网站翻页链接的后缀

  "shifouercijiequ": "1", //截取的列表数组是否需要二次截取，0不需要，1需要
  "jiequqian": "<div class=\"module-items module-poster-items-small scroll-content ", //不需要二次截取就填空
  //"jiequhou": "<div id=\"page", //不需要二次截取就填空
  "jiequhou": "class=\"fixedGroup", //不需要二次截取就填空
  "jiequshuzuqian": "<a", //截取的列表数组的前关键词,截取的关键词有 " 的用 \ 进行转义
  "jiequshuzuhou": "alt=\"", //截取的列表数组的后关键词,截取的关键词有 " 的用 \ 进行转义
  "tupianqian": "data-original=\"", //列表中资源的图片前关键词,截取的关键词有 " 的用 \ 进行转义
  "tupianhou": "\"", //列表中资源的图片后关键词,截取的关键词有 " 的用 \ 进行转义
  "biaotiqian": "title=\"", //列表中资源的标题前关键词,截取的关键词有 " 的用 \ 进行转义
  "biaotihou": "\"", //列表中资源的标题后关键词,截取的关键词有 " 的用 \ 进行转义
  "lianjieqian": "href=\"", //列表中资源的详情页跳转链接前关键词,截取的关键词有 " 的用 \ 进行转义
  "lianjiehou": "\"", //列表中资源的详情页跳转链接后关键词,截取的关键词有 " 的用 \ 进行转义

  //搜索部分基本不用动，现在网站基本都是苹果CMS，所有搜索是固定的。
  "sousuoqian": "/index.php/ajax/suggest?mid=1&wd=",
  "sousuohou": "&limit=500",
  "sousuohouzhui": "/index.php/vod/detail/id/", //搜索页影片跳转详情页的中间标识链接部分
  "ssmoshi": "0",
  "sousuoshifouercijiequ": "0",
  "jspic": "pic",
  "jsname": "name",
  "jsid": "id",
  "ssjiequqian": "空",
  "ssjiequhou": "空",
  "ssjiequshuzuqian": "空",
  "ssjiequshuzuhou": "空",
  "sstupianqian": "空",
  "sstupianhou": "空",
  "ssbiaotiqian": "空",
  "ssbiaotihou": "空",
  "sslianjieqian": "空",
  "sslianjiehou": "空",

  "bfshifouercijiequ": "0",
  "bfjiequqian": "空",
  "bfjiequhou": "空",
  "bfjiequshuzuqian": "class=\"module-play-list-content", //播放截取的列表数组的前关键词
  "bfjiequshuzuhou": "</div>", //播放截取的列表数组的后关键词

  "zhuangtaiqian": "更新：</span>", //状态前关键词
  "zhuangtaihou": "</div>", //状态后关键词
  "daoyanqian": "导演：</span>", //导演前关键词
  "daoyanhou": "</div>", //导演态后关键词
  "zhuyanqian": "主演：</span>", //主演前关键词
  "zhuyanhou": "</div>", //主演后关键词
  "juqingqian": ":<p>", //剧情前关键词
  "juqinghou": "</p>", //剧情后关键词

  "bfyshifouercijiequ": "0", //截取的播放列表数组是否需要二次截取，0不需要，1需要
  "bfyjiequqian": "空", //不需要二次截取就填空
  "bfyjiequhou": "空", //不需要二次截取就填空
  "bfyjiequshuzuqian": "<a", //播放剧集数组前关键词
  "bfyjiequshuzuhou": "/a>", //播放剧集数组后关键词
  "bfbiaotiqian": "span>", //播放剧集标题前关键词
  "bfbiaotihou": "</span", //状播放剧集标题后关键词
  "bflianjieqian": "href=\"", //播放剧集链接前关键词
  "bflianjiehou": "\""
} //播放剧集链接后关键词
