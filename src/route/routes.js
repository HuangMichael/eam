import Login from '../modules/index/views/Login.vue'
import NotFound from '../modules/index/views/404.vue'
import Home from '../modules/index/views/Home.vue'
import Table from '../modules/index/views/nav1/Table.vue'
import Role from '../modules/index/views/role/index.vue'
import User from '../modules/index/views/nav1/user.vue'
import ECharts from '../modules/index/views/charts/echarts.vue'
import Person from '../modules/index/views/person/index.vue'
import MapView from '../modules/index/views/map/map.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routers = new VueRouter({
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
            name: '统计分析',
            iconCls: 'fa fa-bar-chart',
            children: [
                {path: '/portal', component: ECharts, name: '我的门户'},
                {path: '/unitsStat', component: ECharts, name: '外委单位统计'},
                {path: '/mapView', component: MapView, name: '高德地图'}
            ]
        },
        {
            path: '/',
            component: Home,
            name: '系统管理',
            iconCls: 'fa fa-bar-chart',
            children: [
                {path: '/person', component: Person, name: '人员信息'},
                {path: '/user', component: User, name: '用户信息'},
                {path: '/role', component: Role, name: '角色信息'},
                {path: '/auth', component: User, name: '角色授权'},
                {path: '/resource', component: User, name: '资源信息'}
            ]
        },
        {
            path: '/eqManage',
            component: Home,
            name: '设备管理',
            iconCls: 'el-icon-message',//图标样式class
            children: [
                {path: '/equipments', component: Table, name: '设备信息'},
                {path: '/location', component: Table, name: '位置信息'}
            ]
        },
        {
            path: '/baseData',
            component: Home,
            name: '基础数据',
            iconCls: 'fa fa-id-card-o',
            children: [
                {path: '/classifications', component: Table, name: '设备分类信息'},
                {path: '/units', component: Table, name: '外委单位信息'}
            ]
        },

        {
            path: '/maintain',
            component: Home,
            name: '维修管理',
            iconCls: 'fa fa-id-card-o',
            children: [
                {path: '/reportCart', component: Table, name: '报修车信息'},
                {path: '/reportBill', component: Table, name: '报修单查询'},
                {path: '/dispatcher', component: Table, name: '调度台信息'},
                {path: '/maintainBill', component: Table, name: '维修单信息'},
            ]
        },
        {
            path: '/budget',
            component: Home,
            name: '采购管理',
            iconCls: 'fa fa-address-card',
            // leaf: true,//只有一个节点
            children: [
                {path: '/apply', component: Table, name: '采购申请'},
                {path: '/ecApply', component: Table, name: '易耗品采购申请'},
                {path: '/buyApply', component: Table, name: '设备新置申请'},
                {path: '/updateApply', component: Table, name: '设备更新申请'}
            ]
        }
    ]
})

export default routers;