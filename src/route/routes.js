import Login from '../modules/index/views/Login.vue'
import NotFound from '../modules/index/views/404.vue'
import Home from '../modules/index/views/Home.vue'
import Table from '../modules/index/views/nav1/Table.vue'
import Info from '../modules/index/views/nav1/Info.vue'
import Form from '../modules/index/views/nav1/Form.vue'
import User from '../modules/index/views/nav1/user.vue'
import TelManage from '../modules/index/views/nav2/TelManage.vue'
import Page5 from '../modules/index/views/nav2/Page5.vue'
import Echarts from '../modules/index/views/charts/echarts.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routers = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login,
            name: '',
            hidden: true
        },
        {
            path: '/404',
            component: NotFound,
            name: '',
            hidden: true
        },
        {
            path: '/',
            component: Home,
            name: '设备管理',
            iconCls: 'el-icon-message',//图标样式class
            children: [
                {path: '/table', component: Table, name: '设备信息'},
                {path: '/info', component: Info, name: '位置信息'},
                {path: '/form', component: Form, name: '设备分类'},
            ]
        },
        {
            path: '/',
            component: Home,
            name: '采购管理',
            iconCls: 'fa fa-id-card-o',
            children: [
                {path: '/page4', component: TelManage, name: '采购计划'},
                {path: '/page5', component: Page5, name: '采购申请'}
            ]
        },
        {
            path: '/',
            component: Home,
            name: '',
            iconCls: 'fa fa-address-card',
            leaf: true,//只有一个节点
            children: [
                {path: '/user', component: User, name: '用户管理'}
            ]
        },
        {
            path: '/',
            component: Home,
            name: '统计分析',
            iconCls: 'fa fa-bar-chart',
            children: [
                {path: '/echarts', component: Echarts, name: '我的业务'},
                {path: '/echarts2', component: Echarts, name: '供应商统计'}
            ]
        }
    ]
})

export default routers;