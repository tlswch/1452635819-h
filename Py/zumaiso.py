
# coding=utf-8
# !/usr/bin/python
import sys
import re
sys.path.append('..')
from base.spider import Spider
import json



class Spider(Spider):  # 元类 默认的元类 type
    def getName(self):
        return "祖玛影视"

    def init(self, extend=""):
        print("============{0}============".format(extend))
        pass

    def homeContent(self, filter):
        result = {}
        cateManual = {
            "电影": "1",
            "电视剧": "2",
            "综艺": "23",
            "纪录片": "3",
            "动画片": "4"
            
        }
        classes = []
        for k in cateManual:
            classes.append({
                'type_name': k,
                'type_id': cateManual[k]
            })

        result['class'] = classes
        if (filter):
            result['filters'] = self.config['filter']
        return result

    def homeVideoContent(self):
        result = {
            'list': []
        }
        return result

    def categoryContent(self, tid, pg, filter, extend):
        result = {}
        url = 'http://zumaiso.com/vodtype/{0}-{1}.html'.format(tid, pg)       
        rsp = self.fetch(url)
        root = self.html(rsp.text)
        aList = root.xpath("//a[@class='stui-vodlist__thumb lazyload']")
        videos = []
        for a in aList:
            name = a.xpath('./@title')[0]
            pic = a.xpath('./@data-original')[0]
            mark = a.xpath('./span[3]/b/text()')[0]
            sid = a.xpath('./@href')[0].replace("/", "").replace("vodhtml", "").replace(".html", "")
            videos.append({
                "vod_id": sid,
                "vod_name": name,
                "vod_pic": pic,
                "vod_remarks": mark
            })
        result['list'] = videos
        result['page'] = pg
        result['pagecount'] = 9999
        result['limit'] = 90
        result['total'] = 999999
        return result

    def detailContent(self, array):
        tid = array[0]
        url = 'http://zumaiso.com/vodhtml/{0}.html'.format(tid)	
        header = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"}
        rsp = self.fetch(url, headers=header)
        root = self.html(rsp.content)	
        divContent = root.xpath("//body")[0]
        title = divContent.xpath(".//div[@class='stui-content__thumb']/a/@title")[0]
        pic = divContent.xpath(".//div[@class='stui-content__thumb']/a/img/@data-original")[0]
        detail = divContent.xpath(".//span[@class='detail-content']/text()")[0]
        vod = {
            "vod_id": tid,
            "vod_name": title,
            "vod_pic": pic,
            "type_name": "",
            "vod_year": "",
            "vod_area": "",
            "vod_remarks": "",
            "vod_actor": "",
            "vod_director": "",
            "vod_content": detail
        }	
        infoArray = divContent.xpath(".//div[@class='stui-content__detail']/p")
        for info in infoArray:
            content = info.xpath('string(.)')	        
            if content.startswith('地区'):
                vod['vod_area'] = content.replace("地区：", "")
            if content.startswith('年份'):
                vod['vod_year'] = content.replace("年份：", "")   
            if content.startswith('主演'):
                vod['vod_actor'] = content.replace("\xa0", "/").replace("主演：", "")
            if content.startswith('导演'):
                vod['vod_director'] = content.replace("\xa0", "").replace("导演：", "")
        playFrom = ''
        vodHeader = divContent.xpath(".//h3[@class='title']/text()")
        for v in vodHeader:
            playFrom = playFrom + v.strip() + '$$$'
        vod_play_from = playFrom
        playitem = ''                
        vodList = divContent.xpath(".//ul[@class='stui-content__playlist clearfix']")
        for vl in vodList:
            playUrl = ''
            aList = vl.xpath(".//li/a[contains(@href,'/vodplay/')]")
            for tA in aList:
                href = tA.xpath('./@href')[0]
                name = tA.xpath('./text()')[0]
                tId = self.regStr(href,'/vodplay/(\\S+).html')
                playUrl = playUrl + '{0}${1}#'.format(name,tId)
            playitem = playitem + playUrl + '$$$'            
        vod_play_url = playitem
        vod['vod_play_from'] = vod_play_from
        vod['vod_play_url'] = vod_play_url
        result = {
            'list': [
                vod
            ]
        }
        return result

    def searchContent(self, key, quick):
        result = {}
        return result

    def playerContent(self, flag, id, vipFlags):
        result = {}
        jo = {}
        url = 'http://zumaiso.com/vodplay/{0}.html'.format(id)	
        rsp = self.fetch(url)
        root = self.html(rsp.text)
        scripts = root.xpath("//div[@class='stui-player__video embed-responsive embed-responsive-16by9 clearfix']/script/text()")[0]
        key = scripts.replace('var player_aaaa=', "")
        jo = json.loads(key)             
        result["parse"] = 0
        result["playUrl"] = ''
        result["url"] = jo["url"]
        result["header"] = ''
        return result


    config = {
        "player": {},
        "filter": {}
    }
    header = {}

    def isVideoFormat(self, url):
        pass

    def manualVideoCheck(self):
        pass

    def localProxy(self, param):       
        return [200, "video/MP2T", action, ""]
x = Spider(Spider)
filter = {}
tid = "4"
pg = "2"
extend = ""
flag = ""
id = "11525-4-1"
vipFlags = ""
y = x.playerContent(flag, id, vipFlags)
print(y)

