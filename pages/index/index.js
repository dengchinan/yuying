Page({
  data: {
    src: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=788f4c153d4e251ff6faecaac6efa272/4d086e061d950a7b3bb3a0eb07d162d9f2d3c91f.jpg',
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ], array: [1]

  },
  goDetail: function () {
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})

