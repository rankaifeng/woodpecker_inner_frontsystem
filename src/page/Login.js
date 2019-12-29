import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import * as globalApi from '../api/globalApi';
import { Redirect } from 'react-router-dom';
import '../css/login.css';
import imgBg from "../img/bg.png";
import imgBg1 from "../img/log.png";

const FormItem = Form.Item;

function Login(props) {

    const [isLogin, setIsLogin] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                globalApi.userLogin(values, result => {
                    setIsLogin(true);
                });
            }
        });
    }
    const { getFieldDecorator } = props.form;
    if (isLogin) {
        return <Redirect to="/home" />
    }
    return (
        <div>
            <img src={imgBg}
                alt=""
                className="log-bybg" />
            <img src={imgBg1} alt="" className="log-img" />
            <div className="main">
                <div className="logo" />
                <div className="log-cnt wrap clearfix">
                    <div className="ywm1 fr">
                        <div className="contert">
                            <Form layout="inline" onSubmit={handleSubmit}>
                                <div className="inputtext">
                                    <div className="warp1">用 户 名</div>

                                    <div className="warp">

                                        <FormItem>
                                            {getFieldDecorator('name', {
                                                rules: [{ required: true, message: '请输入用户名!' }],
                                            })(
                                                <Input placeholder="请输入用户名" />
                                            )}
                                        </FormItem>
                                    </div>
                                </div>
                                <div className="inputtext1">
                                    <div className="warp1">密 码</div>
                                    <div className="warp">
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入密码!' }],
                                            })(
                                                <Input
                                                    type="password"
                                                    placeholder="请输入密码" />
                                            )}
                                        </FormItem>
                                    </div>

                                </div>

                                <div className="yan1">
                                    <Button type="primary"
                                        htmlType="submit"
                                        className="login-form-button" />

                                    <Button type="primary" className="login-form-button1" />
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="fooert">
                    {/*<p>版权所有：岳池公安局 技术支持：重庆市盛海科技发展有限公司</p>*/}
                </div>
            </div>
        </div>
    );
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;