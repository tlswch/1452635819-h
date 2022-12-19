# coding=utf-8
# !/usr/bin/python
import sys
import re
sys.path.append('..')
from base.spider import Spider
import json
 
 
 
class Spider(Spider):  # 元类 默认的元类 type
    def getName(self):
        return "麦豆TV"
 
    def init(self, extend=""):
        print("============{0}============".format(extend))
        pass
 
    def homeContent(self, filter):
        result = {}
        cateManual = {
            "国产": "guocanju",
            "港台": "gangtai",
            "欧美": "en",
            "韩剧": "hanju",
            "日剧": "riju",
            "泰剧": "taiju",
            "集剧": "tv",
            "电影": "movie",
            "动漫": "ac",
            "综艺": "zongyi"           
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
        url = 'https://www.mdoutv.com/movie_bt_series/{0}/page/{1}'.format(tid, pg)       
        rsp = self.fetch(url)
        root = self.html(rsp.text)
        aList = root.xpath("//li/a[@target='_blank']")
        videos = []
        for a in aList:
            name = a.xpath('./img/@alt')
            pic = a.xpath('./img/@data-original')
            mark = a.xpath('./div/span/text()')
            sid = a.xpath('./@href')
            videos.append({
                "vod_id": ''.join(sid),
                "vod_name": ''.join(name),
                "vod_pic": ''.join(pic),
                "vod_remarks": ''.join(mark)
            })
        result['list'] = videos
        result['page'] = pg
        result['pagecount'] = 9999
        result['limit'] = 90
        result['total'] = 999999
        return result
 
    def detailContent(self, array):
        tid = array[0]
        url = '{0}'.format(tid) 
        header = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"}
        rsp = self.fetch(url,)
        root = self.html(rsp.text)  
        title = root.xpath("//div[@class='mi_ne_kd dypre']/div[2]/div/h1/text()")[0]
        pic = root.xpath("//div[@class='mi_ne_kd dypre']/div[1]/img/@src")[0]
        detail = root.xpath("//div[@class='yp_context']/p/text()")[0]
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
        infoArray = root.xpath("//ul[@class='moviedteail_list']/li")
        for info in infoArray:
            content = info.xpath('string(.)')           
            if content.startswith('地区'):
                vod['vod_area'] = content.replace("地区：", "")
            if content.startswith('年份'):
                vod['vod_year'] = content.replace("年份：", "")   
            if content.startswith('主演'):
                vod['vod_actor'] = content.replace("主演：", "")
            if content.startswith('导演'):
                vod['vod_director'] = content.replace("导演：", "")
         
        playList = []
        vodHeader = root.xpath("//div[@class='paly_list_btn']/a")
        for v in vodHeader:
            playList.append(v.xpath('./text()')[0] + '$' + v.xpath('./@href')[0] + '#')
        vod_play_url = ''.join(playList)
        vod_play_from = '线路$$$'
        vod['vod_play_from'] = vod_play_from
        vod['vod_play_url'] = vod_play_url + '$$$'
        result = {
            'list':[
                vod
            ]
        }
        return result
 
    def searchContent(self, key, quick):
        url = 'https://www.mdoutv.com/search/{0}/'.format(key)
        rsp = self.fetch(url)
        root = self.html(rsp.text)
        aList = root.xpath("//li/a[@target='_blank']")
        videos = []
        for a in aList:
            name = a.xpath('./img/@alt')
            pic = a.xpath('./img/@data-original')
            mark = a.xpath('./div/span/text()')
            sid = a.xpath('./@href')
            videos.append({
                "vod_id": ''.join(sid),
                "vod_name": ''.join(name),
                "vod_pic": ''.join(pic),
                "vod_remarks": ''.join(mark)
            })
        result = {
                'list':videos
        }
        return result
         
 
    def playerContent(self, flag, id, vipFlags):
        result = {}
        rsp = self.fetch(id)
        root = self.html(rsp.text)
        vl = root.xpath("//div[@class='xilubg xla']/a")
        vurl = []
        for info in vl:
            vurl.append(info.xpath("./@vurl"))
        vurl[0][0]
        vurl1 = vurl[0][0].split('?url=')
        vurl2 = vurl1[1]
        url = 'https://jxdp.codermart.net/jxplayer.php?v={0}'.format(vurl2)
        rsp = self.fetch(url)
        root = self.html(rsp.text)
        si = root.xpath("//script[@type='text/javascript']")
        if len(si) == 0:
            return ''
        si1 = ''
        for info in si:
            si1 = ''
            content = info.xpath('string(.)')
            content = content.strip()
            if content.startswith('var canPlay'):
                si1 = self.regStr(content,"var urls = \"(\\S+)\";")
                break
        if si1 == '':
            return ''
        result["parse"] = 0
        result["playUrl"] = ''
        result["url"] = si1
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