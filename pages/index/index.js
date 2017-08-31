import {
  loadAllRecord,
  deleteRecordById 
} from '../../services/tallyService.js'

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    list: [],
    totalMoney: 0
  },
  customerData: {
    isFirstShow: true,
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShow() {
    this.fetchData()
  },
  fetchData() {
    if (this.customerData.isFirstShow) {
      wx.showLoading({
        title: '加载数据中...',
      })
    }
    
    var self = this
    loadAllRecord((list)=> {
      var totalMoney = 0
      list.forEach((item)=> {
        totalMoney += Number(item.money)
        console.log(item)
      }) 
      self.setData({list, totalMoney})

      if (self.customerData.isFirstShow) {
        self.customerData.isFirstShow = false
        setTimeout(() => {
          wx.hideLoading()
        }, 1000)
      }
    })
  }
})
