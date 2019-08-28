var dp = 0.008030567
$(function() {
    if ($.cookie("valor")) {
        $("#fechamento").val($.cookie("valor"))
        $("#nivel").val($.cookie("ve"))
        $("#max").html(Math.round($.cookie("max") * 10) / 10)
        $("#min").html(Math.round($.cookie("min") * 10) / 10)
    }
})

$("#nivel, #fechamento").on("change keyup paste", function() {
    var valor = $("#fechamento").val()
    console.log(valor)
    var ve = $("#nivel").val()
    console.log(ve)
    var bool = valor != "" && ve != ""
    console.log(bool)
    if (bool) {
        var res = ve * window.dp
        var max = valor * (1 + res)
        var min = valor * (1 - res)
        $.cookie("valor", valor)
        $.cookie("ve", ve)
        $.cookie("max", max)
        $.cookie("min", min)
        $("#max").html(Math.round(max * 10) / 10)
        $("#min").html(Math.round(min * 10) / 10)
    }
})