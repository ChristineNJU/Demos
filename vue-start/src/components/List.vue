<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%;text-align: left;">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="operations"
        label="操作">
        <template scope="scope">
          <!--<router-link to="/detail">-->
            <el-button @click="handleClick(scope.$index, tableData)" type="text" size="small">查看</el-button>
          <!--</router-link>-->
          <!--<el-button type="text" size="small" @click="showEditor(scope.$index, tableData, form, dialogFormVisible)">编辑</el-button>-->
          <el-button type="text" size="small" @click="showEditor(scope.$index, tableData, form)">编辑</el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名：">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期：">
          <el-input v-model="form.date" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址：">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleExitEdit()">取 消</el-button>
        <el-button type="primary" @click="handleEdit(tableData, form)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    methods: {
      deleteRow (index, rows) {
        rows.splice(index, 1)
      },
      handleClick (index, rows) {
        let path = '/detail/' + rows[index].id
        this.$router.push(path)
      },
      showEditor (index, rows, form) {
//        console.log('in method')
        form.name = rows[index].name
        form.date = rows[index].date
        form.address = rows[index].address
        form.index = index
        this.dialogFormVisible = true
      },
      handleEdit (rows, form) {
        let index = form.index
        rows[index].name = form.name
        rows[index].date = form.date
        rows[index].address = form.address
        this.dialogFormVisible = false
      },
      handleExitEdit () {
        this.form.name = ''
        this.form.address = ''
        this.form.date = ''
        this.form.index = -1
        this.dialogFormVisible = false
      }
    },
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id: 0
        }, {
          date: '2016-05-04',
          name: '王大虎',
          address: '上海市普陀区金沙江路 1517 弄',
          id: 1
        }, {
          date: '2016-05-01',
          name: '王二虎',
          address: '上海市普陀区金沙江路 1519 弄',
          id: 2
        }, {
          date: '2016-05-03',
          name: '王虎',
          address: '上海市普陀区金沙江路 1516 弄',
          id: 3
        }],
        dialogFormVisible: false,
        form: {
          name: '',
          date: '',
          address: '',
          index: -1
        }
      }
    }
  }
</script>

<style>

</style>
