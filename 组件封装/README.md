## 以下几个组件均采用面向对象方式进行封装，以便调用
- ### Carousel 轮播组件 [预览](https://mamba-hui.github.io/mamba/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/Carousel/)
> 调用方式：`carousel.init($('.carousel'), 2000)` 
  1. 第一个参数：用以初始化的容器
  2. 第二个参数：轮播移动时间间隔
  
- ### DatePicker 日历组件 [预览](https://mamba-hui.github.io/mamba/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/DatePicker/)
> 功能： 提供初始日期设置，也可以使用input元素来输入日期
> 调用方式： 
  1. 仅仅需要一个日历 `calendar.init($('.calendar'));`
  2. 需要在input中输入 `calendar.datePicker($('.date-ipt'));`
  3. 参数是初始化的容器，可以在容器中设置`data-init`attribute来初始化日期
  
- ### Dialog 对话框组件 [预览](https://mamba-hui.github.io/mamba/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/Dialog/)
> 使用具体看js代码，如：
```
$('#open4').on('click', function() {
    var dialog4 = new Dialog();
    dialog4.open({
        title: '欢迎来到Dialog',
        message: tpl,
        isShowCloseBtn: true,
        isShowConfirmBtn: true,
        onclose: function() {
            alert('close')
        },
        onconfirm: function() {
            alert('确定');
        }
    });
});
```
- ### Exposure 曝光加载组件（懒加载） [预览](https://mamba-hui.github.io/mamba/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/Exposure/)
- ### Tab Tab组件 [预览](https://mamba-hui.github.io/mamba/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/Tab/)
> 调用方式： `tab.init($('.tab'))`
