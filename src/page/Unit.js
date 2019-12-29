import React from 'react'
import ChangeMenus from '../components/ChangeMenus';
const menuArray = [
    "建设单位",
    "管理单位",
    "维护单位",
    "施工单位",
    "传输单位",
    "电力单位"];
const menuTypeArray = [
    "construction",
    "management",
    "maintainer",
    "ower",
    "transfer",
    "powerplant"];
class Unit extends React.Component {
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
                defaultType="construction"
                menus={menus} />
        )
    }
}
export default Unit;