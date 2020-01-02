import React from 'react'
import MapView from '../components/map/mapView';
import * as mHttpUtils from "../utils/HttpUtils";
class Home extends React.Component {

    componentDidMount() {
        this.requestMap();
    }

    requestMap = () => {
        let mDataArray = [];
        mHttpUtils.get("devices", {
            pagination: { page: 0, perPage: 10 },
        }).then(result => {
            let dataArray = result.data.rows;
            if (dataArray.length > 0) {
                for (let i = 0; i < dataArray.length; i++) {
                    if (dataArray[i].lat != null && dataArray[i].lng != null) {
                        let item = {
                            key: i,
                            id: dataArray[i].id,
                            drivername: dataArray[i].name,
                            sn: dataArray[i].sn,
                            type: dataArray[i].failuretype_name,
                            lat: dataArray[i].lat,
                            lng: dataArray[i].lng,
                            picture: dataArray[i].picture,
                            faultType: dataArray[i].devicestate_etc
                        };
                        mDataArray.push(item);
                    }
                }
            }
            mDataArray[0].lng = "106.7894399854";
            mDataArray[0].lat = "30.3962356879";
            if (this.mapview != null)
                this.mapview.initMap(mDataArray);
        });
    }

    render() {
        return (
            <MapView
                ref={(mapview) => {
                    this.mapview = mapview;
                }} />
        )
    }
}
export default Home;