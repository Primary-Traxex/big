(function(window,document){
    var currentPosition = 0;
    var app = {
        init:function(){
           document.addEventListener('DOMContentLoaded',function(){
              var viewport = document.querySelector('#viewport');
               app.bindBtnClick();   //绑定按钮点击事件
           }.bind(app),false);
        }(),

        transform:function(translatePos){
          this.style.webkitTransform = "translate3d(-"+translatePos+"px,0,0)";
          currentPosition = translatePos;
        },

        bindBtnClick:function(){
            var pageWidth = window.innerWidth;
            var initPos = 0;
            var button = document.querySelector("#button");
            button.addEventListener('click',function(){
              if (currentPosition>pageWidth*3) {
                initPos = -pageWidth;
                var translatePos = initPos + pageWidth;
                this.transform.call(viewport,translatePos);
                // console.log(translatePos)
              }else{
                initPos = currentPosition;
                var translatePos = initPos + pageWidth;
                this.transform.call(viewport,translatePos);
              }
            }.bind(this),false)
        }
    }
})(window,document);