/**
 * Created by christine on 2017/7/17.
 */
// const models = require('./db')
const express = require('express')
const router = express.Router()

// 创建账号接口
router.post('/api/staffs', (req, res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  // let newAccount = new models.Login({
  //   account: req.body.account,
  //   password: req.body.password
  // });
  // // 保存数据newAccount数据进mongoDB
  // newAccount.save((err,data) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send('createAccount successed');
  //   }
  // });
})

// 获取已有账号接口
router.get('/api/staffs',(req,res) => {
  let staffs = [{
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
  }]
  res.send(staffs)
})

module.exports = router
