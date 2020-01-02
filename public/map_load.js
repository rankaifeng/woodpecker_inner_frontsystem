var bmapcfg = {
    'imgext': '.jpg',//瓦片图的后缀 ------ 根据需要修改，一般是 .png .jpg
    'tiles_dir': '',//普通瓦片图的地址，为空默认在 offlinemap/tiles/ 目录
    'tiles_hybrid': '',//卫星瓦片图的地址，为空默认在 offlinemap/tiles_hybrid/ 目录
    'tiles_self': ''//自定义图层的地址，为空默认在 offlinemap/tiles_self/ 目录
};
bmapcfg.home = "assets/baiduJs/"; //地图API主目录
bmapcfg.images = "assets/"; //地图图片资源

(function(){
  window.BMap_loadScriptTime = (new Date).getTime();
  //加载地图API主文件
  document.write('<script type="text/javascript" src="' + bmapcfg.home + 'api_v3.0_min.js"></script>');
})();
