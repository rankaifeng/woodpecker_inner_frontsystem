/**
 * @ Author: Jone Chen
 * @ Create Time: 2019-06-19 16:58:23
 * @ Modified by: Jone Chen
 * @ Modified time: 2019-07-18 16:09:41
 * @ Description:权限控制，permission 1==超级管理员，其它为普通用户
 */

export const menus = [
	{
		path: '/home',
		title: '首页'
	},
	{
		path: '/configuration',
		title: '基础配置',
		children: [
			{
				path: '/configuration/device',
				title: '资产管理'
			},
			{
				path: '/configuration/rentalcost',
				title: '租赁费用'
			},
			{
				path: '/configuration/projectcase',
				title: '运维项目'
			},
			{
				path: '/configuration/devicetype',
				title: '设备类型'
			},
			{
				path: '/configuration/devicegroup',
				title: '设备分组'
			},
			{
				path: '/configuration/failuretype',
				title: '故障类型'
			}
		]
	}, {
		path: '/unit',
		title: '单位',
		children: [
			{
				path: '/configuration/user',
				title: '管理单位'
			},
			{
				path: '/configuration/admin',
				title: '维护单位'
			},
			{
				path: '/configuration/book',
				title: '施工单位'
			},
			{
				path: '/configuration/book',
				title: '传输单位'
			},
			{
				path: '/configuration/book',
				title: '电力单位'
			}
		]
	}
];
