/**
 * Created by huangbin on 2018/1/26.
 */

import util from 'common/js/util'
//import NProgress from 'nprogress'
import {getUserListPage, removeUser, batchRemoveUser, editUser, addUser} from 'api/api';

export default {
    data() {
        return {
            filters: {
                name: ''
            },
            //定义查询条件

            queryCols: [{
                colName: "userName",
                placeHolder: "用户名称"
            }, {
                colName: "telephone",
                placeHolder: "电话号码"
            }],
            operations: [{
                label: "查询",
                method: "getUsers()",
                btnType: "primary",
                icon: "el-icon-circle-plus"
            }, {
                label: "新增记录",
                method: "handleAdd()",
                btnType: "primary",
                icon: "el-icon-search"
            }, {
                label: "发起流程",
                method: "startFlow()",
                btnType: "primary",
                icon: "el-icon-caret-right"
            }],
            users: [],
            total: 0,
            page: 1,
            listLoading: false,
            sels: [],//列表选中列

            editFormVisible: false,//编辑界面是否显示
            editLoading: false,
            editFormRules: {
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur'}
                ]
            },
            //编辑界面数据
            editForm: {
                id: 0,
                name: '',
                sex: -1,
                age: 0,
                birth: '',
                addr: ''
            },

            addFormVisible: false,//新增界面是否显示
            addLoading: false,
            addFormRules: {
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur'}
                ]
            },
            //新增界面数据
            addForm: {
                name: '',
                sex: -1,
                age: 0,
                birth: '',
                addr: ''
            }

        }
    },
    methods: {
        applyMethod(m){
            eval("this." + m);
        },
        //性别显示转换
        formatSex: function (row, column) {
            return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
        },
        handleCurrentChange(val) {
            this.page = val;
            this.getUsers();
        },
        //获取用户列表
        getUsers() {
            let para = {
                page: this.page,
                name: this.filters.name
            };
            this.listLoading = true;
            getUserListPage(para).then((res) => {
                this.total = res.data.total;
                this.users = res.data.users;
                this.listLoading = false;
            });
        },
        //删除
        handleDel: function (index, row) {
            this.$confirm('确认删除该记录吗?', '提示', {
                type: 'warning'
            }).then(() => {
                this.listLoading = true;
                //NProgress.start();
                let para = {id: row.id};
                removeUser(para).then((res) => {
                    this.listLoading = false;
                    //NProgress.done();
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    this.getUsers();
                });
            }).catch(() => {

            });
        },
        //显示编辑界面
        handleEdit: function (index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
        },
        //显示新增界面
        handleAdd: function () {
            this.addFormVisible = true;
            this.addForm = {
                name: '',
                sex: -1,
                age: 0,
                birth: '',
                addr: ''
            };
        },
        //编辑
        editSubmit: function () {
            this.$refs.editForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.editLoading = true;
                        //NProgress.start();
                        let para = Object.assign({}, this.editForm);
                        para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                        editUser(para).then((res) => {
                            this.editLoading = false;
                            //NProgress.done();
                            this.$message({
                                message: '提交成功',
                                type: 'success'
                            });
                            this.$refs['editForm'].resetFields();
                            this.editFormVisible = false;
                            this.getUsers();
                        });
                    });
                }
            });
        },
        //新增
        addSubmit: function () {
            this.$refs.addForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.addLoading = true;
                        //NProgress.start();
                        let para = Object.assign({}, this.addForm);
                        para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                        addUser(para).then((res) => {
                            this.addLoading = false;
                            //NProgress.done();
                            this.$message({
                                message: '提交成功',
                                type: 'success'
                            });
                            this.$refs['addForm'].resetFields();
                            this.addFormVisible = false;
                            this.getUsers();
                        });
                    });
                }
            });
        },
        selsChange: function (sels) {
            this.sels = sels;
        },
        //批量删除
        batchRemove: function () {
            var ids = this.sels.map(item => item.id).toString();
            this.$confirm('确认删除选中记录吗？', '提示', {
                type: 'warning'
            }).then(() => {
                this.listLoading = true;
                //NProgress.start();
                let para = {ids: ids};
                batchRemoveUser(para).then((res) => {
                    this.listLoading = false;
                    //NProgress.done();
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    this.getUsers();
                });
            }).catch(() => {

            });
        }
    },
    mounted() {
        this.getUsers();
    }
}


