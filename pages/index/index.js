//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World111',
    userInfo: {},
    //默认未获取地址
    hasLocation:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
  //获取经纬度
  getLocation:function(e){
    console.log(e)
    var that=this
    wx.getLocation({
      success: function(res){
        // success
        console.log(res)
        that.setData({
          hasLocation:true,
          location:{
            longitude: res.longitude,
            latitude:res.latitude
          }
        })
      }
    })
  },
  //根据经纬度在地图上显示
  openLocation:function(e){
    console.log("openLocation"+e)
    var value=e.detail.value
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude)
    })
  }
})
