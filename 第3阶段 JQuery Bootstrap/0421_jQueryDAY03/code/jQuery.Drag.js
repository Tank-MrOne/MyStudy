;
+function ($) {
    $.fn.extend({
        //参数color  可以设定这个拖拽元素的颜色
        Drag: function (color) {
            $(this).css("backgroundColor", color)
            var $_this = $(this);
            $(this).mousedown(function (e) {

                e.preventDefault();
                //获取鼠标距离拖拽块的位置
                var pointToBox = {
                    left: e.offsetX,
                    top: e.offsetY
                }

                function move(e) {
                    e.preventDefault();
                    var boxPoint = {
                        left: e.clientX - pointToBox.left,
                        top: e.clientY - pointToBox.top
                    }
                    //赋值
                    $_this.css({
                        left: boxPoint.left + "px",
                        top: boxPoint.top + "px"
                    })
                }
                $(document).mousemove(move);
                $(document).mouseup(function () {
                    $(document).off("mousemove", move)
                })
            })

            return $(this);
        }
    })
}(jQuery)
