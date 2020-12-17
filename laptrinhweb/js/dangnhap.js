$('#DN').click(function() {
    $username = $("input[name='tentk1']");
    $password = $("input[type='mktk1']");
    $.post(
        "kiemtraketnoi.php",
        data = "username=" + $username.val() + "&password" + $password.val(),
        success =
        function(result) {
            if (result != "0") {
                $(this).html(result);
            } else
                alert("Tên tài khoản hoặc mật khẩu bị sai ");
        }
    )
})