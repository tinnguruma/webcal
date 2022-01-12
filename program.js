$(function() {

    $('.calbutton').click(function() {

        var a = +($("#num1").val());
        var b = +($("#num2").val());
        var c;

        switch ($(this).attr("id")) {
            case "plus":
                c = a + b;
                break;
            case "minus":
                c = a - b;
                break;
            case "multi":
                c = a * b;
                break;
            case "divs":
                c = a / b;
                break;
        }

        $("#hyouji").html(c);
    });

});