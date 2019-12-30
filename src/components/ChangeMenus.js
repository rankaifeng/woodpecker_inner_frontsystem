import React from 'react';
import MenuCount from './MenuCount';
import BreadCrumb from '../components/BreadCrumb';
import { Popover, Button } from 'antd';
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
                type = type;
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
        const content = dataArray => {
            return <div>
                {dataArray.map((item => {
                    return (
                        <p onClick={() => this.menuItem(item)}>{item.name}</p>
                    )
                }))}
            </div>
        }


        const { menus } = this.props;
        const { name, type } = this.state;
        return (
            <div>
                <ul
                    className="title_bg">
                    {menus.map((item, index) => {
                        // if (index === menus.length - 1) {
                        //     return (<div>
                        //         <Popover content={content(item.unitArray)} title="Title" trigger="hover">
                        //             <li className={this.state.isShow ? "title_bg_select" : ''}>{item.name}</li>
                        //         </Popover>
                        //     </div>)
                        // }
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