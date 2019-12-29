import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { routes } from '../router/routes';
import { Layout } from 'antd';
const { Content } = Layout;

const MainContent = () => {
	return (
		<TransitionGroup>
			<CSSTransition classNames="fade" timeout={500}>
				<Content style={{ padding: '15px' }}>
					<Switch>
						{routes.map(ele =>
							<Route render={() => <ele.component />}
								key={ele.path}
								path={ele.path} />
						)}
						{/* <Redirect from="/" exact to="/home" /> */}
						<Redirect to="/error/404" />
					</Switch>
				</Content>
			</CSSTransition>
		</TransitionGroup>
	);
};
export default MainContent;
