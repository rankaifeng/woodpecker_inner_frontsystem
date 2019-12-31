import React from 'react';
import MenuCount from './MenuCount';
import BreadCrumb from '../components/BreadCrumb';
class ChangeMenus extends React.Component {
    state = {
        type: "",
        name: '',
        isShow: false
    }
    componentDidMount() {
        this.isSelect();
    }
    isSelect = (type = this.props.defaultType, name = this.props.defaultName) => {
        const { menus } = this.props;
        for (let menuItem of menus) {
            if (menuItem.type === type) {
                menuItem.isSelect = true;
            } else {
                menuItem.isSelect = false;
            }
        }
        this.setState({
            type: type, name: name, isShow: false
        });
    }
    menuItem = (item) => {
        const { menus } = this.props;
        for (let menuItem of menus) {
            menuItem.isSelect = false;
        }
        this.setState({
            type: item.type, name: item.name, isShow: true
        });
    }
    render() {
        const { menus } = this.props;
        const { name, type } = this.state;
        return (
            <div>
                <ul
                    className="title_bg">
                    {menus.map((item, index) => {
                        return <li
                            onClick={() => this.isSelect(item.type, item.name)}
                            className={item.isSelect ? "title_bg_select" : ""}
                            key={index}>{item.name}</li>
                    })
                    }
                </ul >
                <BreadCrumb
                    name={name} />

                <MenuCount
                    type={type} />

            </div >
        )
    }
}
export default ChangeMenus;