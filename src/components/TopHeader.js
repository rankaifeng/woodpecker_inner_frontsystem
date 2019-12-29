import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { menus } from '../router/menus';
import { Popover, Icon, Avatar, Dropdown, Menu, Badge } from 'antd';

class TopHeader extends Component {
	state = {
		isShow: false
	}
	handleLogout = () => {
		localStorage.clear();
		this.props.history.push('/login');
	};
	menuClick = () => {
		this.setState({ isShow: true })
	}
	menuClick1 = () => {
		this.setState({ isShow: false })
	}
	renderTitleMenus = data => {
		return (
			<div style={{
				width: "200px", height: "100px", border: '1px solid red'
			}}>
				{
					data.map((item => (
						<Link
							key={item.path}
							onClick={this.menuClick}
							to={item.path}
							path={item.path}>
							{item.title}
						</Link>
					)))
				}
			</div>
		)
	}

	// 递归渲染菜单
	renderMenu = data => {
		return data.map((item => {
			if (item.children) {
				return (
					<Popover
						key={item.path}
						content={this.renderTitleMenus(item.children)}>
						<div
							style={{ cursor: 'pointer' }}
							className={this.state.isShow ? "select_style" : 'un_select'}>{item.title}</div>
					</Popover>
				)
			}
			return (
				<Link
					to={item.path}
					key={item.path} >
					<div
						onClick={this.menuClick1}
						className={!this.state.isShow ?
							"select_style" : 'un_select'}>{item.title}</div>
				</Link>
			);
		}))
	}
	render() {
		const DropdownList = (
			<Menu className="drop-list">
				<Menu.Item key="logout" onClick={this.handleLogout}>
					<Icon type="logout" />
					退出登录
				</Menu.Item>
				<Menu.Item key="logout" onClick={this.handleLogout}>
					<Icon type="user" />
					用户信息
				</Menu.Item>
				<Menu.Item key="logout" onClick={this.handleLogout}>
					<Icon type="password" />
					修改密码
				</Menu.Item>
			</Menu>
		);
		return (
			<div className="top-header">
				<div className="top_left">运维管理应用综合平台</div>
				<div className="top_menu">
					{this.renderMenu(menus)}
				</div>
				<div className="top_right" id="dropdown-wrap">
					<Dropdown
						overlay={DropdownList}>
						<div style={{ cursor: 'pointer' }}>
							<Avatar style={{ width: "30px", height: "30px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADwElEQVRYR7WXTWwTVxDH/7Pe9Qf+ahyaOAmBUKeBAyqXSlUrUM/0A6lHxAWE1PbSG+IIoceKG5e2EqKXimMlWtpzRdWqgkurHiDEJTgkcQJx8Bf+2I9Bb8kG2/H6PRL7XfbwZub9dmbezDzCa6z5fH7EqTQ/AuFDZhwBMAUgvmmiDGCBCP+B8bsWC/46nU6vqZonFcFsdvmYCesCHJwggq6iwwwLGn4zoH+TyYz/IdPpCXJvIX9Qs82rzPyxzFCvfSK65QSMrw5PpR/6yfmCzGWXTjFb3wHkuX43LAC4TKR/MZOZuNHNUFeQ+9nFiwTMMrNS6FQJiYgZmD2Umfy6U2fbQQICzJdVje9IjuhSJ0wbiAgH4PzYb09s+3siBrTTrWHaAhGJSVbjH5WcCGga3kjGEI1GEDReXqKmaaFareFZsQLbcRQcxWXWQ0e9BN4Cmcsu/qJyO2LRCEZHUhAw3ZaAWF0roFKtSWHEbZrJTH4iBF0QUScstm7LNAXE2OgwiHrnMDNjZXVdCUYn/bioM67Fe9ncTWJ82gtEeGDqwJivJzp1hWcWHq1Iw8SEnw9n9p8kUbatcnNJVjGHhxIYTiVlTmvbXy8Usb5R6qkjKrAeD07Q3HzuDAPXZSfs3zeKcCgoE2vbrzeayD1eleoQcJbmsrnrzDgjk54+OAHNJ0H9dB3HwfzDJZlpEOEHuj+fuwPgXZn0IEEA3BUgTwDslYEMMjQAngqQOoCQDGRQybp5bkMZZFDXtxVEKTRCYRAFbRPEDY1Ssnqh62eJb0mHu8rXtzWH+tP0Xll0r69qQZMl82723YKmWuJ3c1AvXbfEU3BCuel5xiLhEEIhA8GgAT0Q2OrEouNato1m00SjYaJWbyixbzU9lTFAtP3UUALJeBS6HlA6wLJsFMtVFDZKEJB+q20MEEJ+g5Fh6Ng39ibEdyfLNC08XnkC8e1c2wYjIdBtVBRNbmoyrewFP1DhnYXFPEQTfLV8RsWXXmkfnkf2DrmzaT+WmGXXnm64psSzwnd49g7znhOaRnjrwPhrt34/aOGN/x8tw3FYkPR+TrTCxPZEZsfTw319YC3n17nyvKb2wPJgStXquWg48q2m0c6ytMM1jsNWtV77MhGNXuvmtZ5/XCgU3onHE9/reuC93eSJZdl/l8ulz1Op1L9+dpRcXyo9/ywcNs4bhv6+9wRRAGPTtP6q180ricSen2TySiCekbVi8e2YYZwMGMZxAj4IaNoQkeZWOGbHth1ng4E/bdO8XTHNmyPJ5AMZgLf/At/j2PAbUsw0AAAAAElFTkSuQmCC" />
							<span style={{ marginLeft: '4px' }}>admin</span>
							<Icon style={{ color: 'rgba(0,0,0,.3)', cursor: 'pointer' }} type="caret-down" />
						</div>
					</Dropdown>
				</div>
			</div>
		);
	}
}
export default withRouter(TopHeader);
