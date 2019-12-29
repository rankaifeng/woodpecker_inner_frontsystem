import React from 'react';
import MenuCount from './MenuCount';

class ChangeMenus extends React.Component {

    state = {
        type: ""
    }
    componentDidMount() {
        this.isSelect();
    }
    isSelect = (type = this.props.defaultType) => {
        const { menus } = this.props;
        for (let menuItem of menus) {
            if (menuItem.type === type) {
                menuItem.isSelect = true;
                type = type;
            } else {
                menuItem.isSelect = false;
            }
        }
        this.setState({ type: type });
    }

    render() {
        const { menus } = this.props;
        return (
            <div>
                <ul
                    className="title_bg">
                    {menus.map((item, index) => {
                        return <li
                            onClick={() => this.isSelect(item.type)}
                            className={item.isSelect ? "title_bg_select" : ""}
                            key={index}>{item.name}</li>
                    })
                    }
                </ul >
                <div style={{ width: '100%', height: "500px", border: '1px solid red' }}>
                    <MenuCount
                        type={this.state.type} />
                </div>
            </div >
        )
    }
}
export default ChangeMenus;