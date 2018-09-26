Page({
  data: {
    array: [{
      mode: 'scaleToFill',
     
    }
      
     ],

    
    src: '../../resources/cat.jpg'
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  }
})