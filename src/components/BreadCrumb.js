import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';
import { menus } from '../router/menus';

class BreadCrumb extends React.Component {


	state = {
		name: ''
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ name: nextProps.name })
	}
	createBreadCrumbData = (location, data) => {
		let arrA = [];
		let arrB = [];
		let arrC = [];
		data.forEach(a => {
			if (location.pathname === a.path) {
				arrA.push(a);
			}
			if (a.children && a.children.length > 0) {
				a.children.forEach(b => {
					if (location.pathname === b.path) {
						arrB.push(b);
						arrA.push({
							icon: a.icon || '',
							path: a.path,
							title: a.title
						});
					}
					if (b.children && b.children.length > 0) {
						b.children.forEach(c => {
							if (location.pathname === c.path) {
								arrC.push(c);
								arrB.push({
									icon: b.icon || '',
									path: b.path,
									title: b.title
								});
								arrA.push({
									icon: a.icon || '',
									path: a.path,
									title: a.title
								});
							}
						});
					}
				});
			}
		});
		// console.log(arrA, arrB, arrC);
		return [...arrA, ...arrB, ...arrC];
	};
	render() {
		const { location } = this.props;
		const routes = this.createBreadCrumbData(location, menus);
		// console.log(routes);
		if (!routes.length) return null;
		const itemRender = (route, params, routes, paths) => {
			const last = routes.indexOf(route) === routes.length - 1;
			return last ?
				<Link to={route.path}>
					<span style={{
						color: "#000000",
						marginRight: '5px'
					}}>位置:</span>{route.title} > {this.state.name}
				</Link> :
				<span><span style={{
					color: "#000000",
					marginRight: '5px'
				}}>位置:</span>{route.title} > {this.state.name}</span>;
		};
		return (
			<div className="breadCrumb">
				<Breadcrumb routes={routes} itemRender={itemRender} />
			</div>
		);
	}
}

export default withRouter(BreadCrumb);
