import React from 'react';
import img from '../../img/d.png';
import redImg from '../../img/red.png';
import blueImg from '../../img/blue.png';
let map;
const BMap = window.BMap;
const BMapLib = window.BMapLib;
const width = window.screen.width;
const height = window.screen.height;
let lastInfoBox = null;//定义上一个窗体为lastInfoBox;
class MapView extends React.Component {
    state = {
        isShowMap: true
    }
    //初始化地图
    initMap = (mapData) => {
        this.setState({ isShowMap: false });
        map = new BMap.Map("container", { minZoom: 12 }); // 创建Map实例
        map.centerAndZoom(new BMap.Point(mapData[0].lng, mapData[0].lat), 13); // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.enableAutoResize();
        this.addMarkers(mapData);
    }
    //添加坐标点定位
    addMarkers = (dataArray) => {
        var markers = [];
        var sts = [{
            url: blueImg,
            size: new BMap.Size(32, 32),
            offset: new BMap.Pixel(-16, -16)
        }]
        for (let i = 0; i < dataArray.length; i++) {
            let item = dataArray[i];
            if (item.faultType == null || item.faultType === "") {
                var point = new BMap.Point(item.lng, item.lat);
                var myIcon = new BMap.Icon(item.picture, new BMap.Size(120, 120));
                var marker = new BMap.Marker(point, { icon: myIcon });
                markers.push(marker);
                this.addClickHandler(dataArray[i], marker);
            }
        }
        new BMapLib.MarkerClusterer(map, { markers: markers, styles: sts })
        var sts1 = [{
            url: redImg,
            size: new BMap.Size(48, 48),
            offset: new BMap.Pixel(-24, -24)
        },]
        var markers1 = [];
        for (let i = 0; i < dataArray.length; i++) {
            let item = dataArray[i];
            if (item.faultType.length > 0) {
                var point1 = new BMap.Point(item.lng, item.lat);
                var myIcon1 = new BMap.Icon(item.picture, new BMap.Size(120, 120));
                var marker1 = new BMap.Marker(point1, { icon: myIcon1 });
                markers1.push(marker1);
                this.addClickHandler(dataArray[i], marker1);
            }
        }
        new BMapLib.MarkerClusterer(map, { markers: markers1, styles: sts1 })

    }
    addClickHandler = (content, marker) => {
        marker.addEventListener("click", (e) => {
            this.openInfo(content, e)
        });
    }
    openInfo = (content, e) => {

        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        let typeName = "";
        if (content.faultType != null) {
            for (let i = 0; i < content.faultType.length; i++) {
                typeName += content.faultType[i].name + ",";
            }
            if (typeName.length > 0) {
                typeName = typeName.substr(0, typeName.length - 1);
            }
        }
        var title =
            `<div style="margin-top:5px;margin-left:10px;color:black">设备名：
                <span style="color:black">${content.drivername}</span></div>
                <div style="margin-left:10px;color:black;">故障状态：${typeName}</div>`;
        var infoBox = new BMapLib.InfoBox(map, title, {
            boxStyle: {
                background: 'white',
                borderRadius: '5px',
                border: '1px solid #E0E0E0',
                width: "200px",
                height: "auto",

            },
            closeIconUrl: img,
            closeIconMargin: "1px 1px 0 0",
            enableAutoPan: true,
            offset: new BMap.Size(20, 60)
        });
        if (lastInfoBox) {
            //判断上一个窗体是否存在，若存在则执行close
            lastInfoBox.close();
        }
        lastInfoBox = infoBox;
        infoBox.open(point);
    }
    render() {
        return (
            <div id="sidebar" style={{ position: 'relative' }}>
                <div className="map">
                    {this.state.isShowMap ? <div style={{
                        position: "absolute",
                        top: '30%', left: '45%', color: 'red', fontSize: '14px'
                    }}>地图加载中......</div> : <div id="container"
                        style={{ width: width, height: height }} />}
                </div>
            </div>
        )
    }
}

export default MapView;
