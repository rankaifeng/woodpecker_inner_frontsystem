import React from 'react';
import MenuCount from './MenuCount';
import BreadCrumb from '../components/BreadCrumb';
class ChangeMenus extends React.Component {
    state = {
        type: "",
        name: ''
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
            type: type, name: name
        });
    }
    render() {
        const { menus } = this.props;
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
                    name={this.state.name} />

                <MenuCount
                    type={this.state.type} />

            </div >
        )
    }
}
export default ChangeMenus;