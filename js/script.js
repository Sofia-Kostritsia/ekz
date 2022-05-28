var count=0;
var counts=0;

$(document).ready(function(){
    $(function() {
        var $menu = $("#chek");
        var $img=$("#img");
        $("#plus").on("click", function() {
            ++count;
            console.log(count);
            $menu.css("display", "block");
            $img.css("display", "none");
            if(count==2){
                $menu.css("display", "none");
                $img.css("display", "flex");
                count=0;
            }
            console.log(count);
        });
    })
})