import React from 'react'
import ChangeMenus from '../components/ChangeMenus';
import { withRouter } from 'react-router-dom'
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
                // unitArray: index === menuArray.length - 1 ? unitArray : [],
                isSelect: index === 0 ? true : false
            })
        })
        this.setState({ menus: mMenu });
    }
    render() {
        const { menus } = this.state;
        return (
            <div>
                <ChangeMenus
                    {...this.props}
                    defaultType="device"
                    defaultName="资产管理"
                    menus={menus} />
            </div>

        )
    }
}
export default withRouter(Configuration);