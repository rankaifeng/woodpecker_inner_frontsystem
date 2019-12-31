import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Login from '../page/Login';
import TopHeader from '../components/TopHeader';
import MainContent from '../components/MainContent';
import AuthRouter from '../components/AuthRouter';//为了验证是否登录逻辑组件
const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route component={Login} exact path="/login" />
                <AuthRouter path="/" component={Mlayout} />
            </Switch>
        </HashRouter>
    );
};
const Mlayout = () => {
    return (
        <div className="layout">
            <Layout style={{ minHeight: '100vh' }}>
                <Layout className="div_cont">
                    <TopHeader />
                    <MainContent />
                </Layout>
            </Layout>
        </div>
    );
}
export default Router;
