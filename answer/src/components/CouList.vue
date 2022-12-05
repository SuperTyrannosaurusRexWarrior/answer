<template>
    <div>
        <el-table height="250" border :stripe="tableConfig.isStripe" :data="tableData" style="
                width: 100%;
                min-height: 400px; 
                margin-top: 10px;
            " highlight-current-row @current-change="handleCurrentChange">
            <el-table-column sortable prop="date" label="创建日期" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column sortable prop="title" label="课程" width="180">
            </el-table-column>
            <el-table-column sortable prop="address" label="班级">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-form>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang="less">
.demo1 {
    margin-top: 20px;
}
</style>

<script>
export default {
    data() {
        return {
            tableConfig: {
                isStripe: true
            },
            tableData: [{
                id: 1,
                date: '2016-05-02',
                title: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 2,
                date: '2016-05-04',
                title: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id: 3,
                date: '2016-05-01',
                title: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                id: 4,
                date: '2016-05-03',
                title: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        onSubmit() {
            console.log('submit!');
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        },
        handleCurrentChange(val) {
            console.log(val);
        }
    }
}
</script>