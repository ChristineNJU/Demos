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
            @click.native.prevent="_handleDelete(scope.$index, tableData)"
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
        <el-button type="primary" @click="_handleEdit(tableData, form)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    methods: {
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
        form.id = rows[index]._id
        this.dialogFormVisible = true
      },
      handleExitEdit () {
        this.form.name = ''
        this.form.address = ''
        this.form.date = ''
        this.form.index = -1
        this.dialogFormVisible = false
      },
      _fetchData () {
        this.$store.dispatch('fetchStaff')
      },
      _handleEdit (rows, form) {
        this.$store.dispatch({
          type: 'updateStaff',
          id: form.id,
          date: form.date,
          name: form.name,
          address: form.address
        })
        this.dialogFormVisible = false
      },
      _handleDelete (index) {
        this.$store.dispatch({
          type: 'deleteStaff',
          id: this.tableData[index]._id
        })
      }
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this._fetchData()
    },
    computed: {
      tableData () {
        return this.$store.state.staffs
      }
    },
    data () {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          date: '',
          address: '',
          index: -1,
          id: -1
        }
      }
    }
  }
</script>

<style>

</style>
