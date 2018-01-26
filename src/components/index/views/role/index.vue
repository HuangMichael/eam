<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.roleName" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="getDataList">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">新增</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <!--列表-->
        <el-table :data="dataList" highlight-current-row v-loading="listLoading" @selection-change="selsChange"
                  style="width: 100%;">
            <el-table-column type="selection" min-width="20%">
            </el-table-column>
            <el-table-column type="index" min-width="15%">
            </el-table-column>
            <el-table-column prop="roleName" label="角色名称" min-width="25%" sortable>
            </el-table-column>
            <el-table-column prop="roleDesc" label="角色描述" min-width="25%" sortable>
            </el-table-column>
            <el-table-column label="操作" min-width="15%">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="16"
                           :total="total" style="float:right;">
            </el-pagination>
        </el-col>

        <!--编辑界面-->
        <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
            <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                <el-form-item label="角色名称" prop="roleName">
                    <el-input v-model="editForm.roleName " auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色描述">
                    <el-input type="textarea" v-model="editForm.roleDesc"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>

        <!--新增界面-->
        <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
            <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                <el-form-item label="角色名称" prop="roleName">
                    <el-input v-model="addForm.roleName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色描述">
                    <el-input type="textarea" v-model="addForm.roleDesc"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="addFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    import roleJs from './index';
    export default roleJs;
</script>

<style scoped>

</style>