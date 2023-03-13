#h仓库https://agit.ai/1452635819/h.git
🅰本地
1,zb.txt的编码为：aHR0cHM6Ly9hZ2l0LmFpLzE0NTI2MzU4MTkvaC9yYXcvYnJhbmNoL21hc3Rlci96Yi50eHQ=



MD5值:  ;md5;614831abf011d5e24b9dcb372c94392c  Q2
添加过程
1.添加pyramid.aar到android项目libs目录下
2.在 app\build.gradle 中添加内容
dependencies {
    //添加pyramid.aar引用
    implementation files('libs\\pyramid.aar')
}
3.在 app\proguard-rules.pro 中添加内容
-keep public class com.undcover.freedom.pyramid.** { *; }
-dontwarn com.undcover.freedom.pyramid.**
-keep public class com.chaquo.python.** { *; }
-dontwarn com.chaquo.python.**
4.修改项目 App.java
// 添加引用
import com.undcover.freedom.pyramid.PythonLoader;

public class App extends MultiDexApplication {
    //...
}
public void onCreate() {
	// ....
	PlayerHelper.init();
    //pyramid-add-start
	PythonLoader.getInstance().setApplication(this);
    //pyramid-add-end
}
5.修改 ApiConfig.java
// 添加引用
import com.github.catvod.crawler.SpiderNull;
import com.undcover.freedom.pyramid.PythonLoader;
public class ApiConfig {
    //...
}
private void parseJson(String apiUrl, String jsonStr) {
    //pyramid-add-start
	PythonLoader.getInstance().setConfig(jsonStr);
    //pyramid-add-end
	JsonObject infoJson = new Gson().fromJson(jsonStr, JsonObject.class);
	//....
}
public Spider getCSP(SourceBean sourceBean) {
    //pyramid-add-start
    if (sourceBean.getApi().startsWith("py_")) {
        try {
            return PythonLoader.getInstance().getSpider(sourceBean.getKey(), sourceBean.getExt());
        } catch (Exception e) {
            e.printStackTrace();
            return new SpiderNull();
        }
    }
    //pyramid-add-end
    return jarLoader.getSpider(sourceBean.getKey(), sourceBean.getApi(), sourceBean.getExt());
}
public Object[] proxyLocal(Map param) {
    //pyramid-add-start
    try {
        if(param.containsKey("api")){
            String doStr = param.get("do").toString();
            if(doStr.equals("ck"))
                return PythonLoader.getInstance().proxyLocal("","",param);
            SourceBean sourceBean = ApiConfig.get().getSource(doStr);
            return PythonLoader.getInstance().proxyLocal(sourceBean.getKey(),sourceBean.getExt(),param);
        }else{
            String doStr = param.get("do").toString();
            if(doStr.equals("live")) return PythonLoader.getInstance().proxyLocal("","",param);
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
    //pyramid-add-end
    return jarLoader.proxyInvoke(param);
}
