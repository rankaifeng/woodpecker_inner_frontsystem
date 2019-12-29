import React from 'react'
import ChangeMenus from '../components/ChangeMenus';
const menuArray = [
    "资产管理",
    "租赁费用",
    "运维项目",
    "设备类型",
    "设备分组",
    "故障类型"];
const menuTypeArray = [
    "device",
    "rentalcost",
    "projectcase",
    "devicetype",
    "devicegroup",
    "failuretype"];
class Configuration extends React.Component {
    state = {
        menus: []
    }
    componentDidMount() {
        let mMenu = [];
        menuArray.forEach((item, index) => {
            mMenu.push({
                name: item,
                type: menuTypeArray[index],
                isSelect: index === 0 ? true : false
            })
        })
        this.setState({ menus: mMenu });
    }
    render() {
        const { menus } = this.state;
        return (
            <ChangeMenus
                defaultType="device"
                menus={menus} />
        )
    }
}
export default Configuration;