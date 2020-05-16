$(function () {
    var login_form = $('.login_form')
    login_form.on('submit', function (e) {
        e.preventDefault()
        console.log($(this).serialize());
        $.ajax({
            type: 'post',
            url: BigNew.user_login,
            data: $(this).serialize(),
            beforeSend: function () {
                var flag = false
                $('.login_form input[name]').each(function (index, ele) {
                    if ($.trim($(ele).val()) == '') {
                        flag = true
                    }
                })
                if (flag) {
                    $('.modal-body p').text('输入的密码不能为空')
                    $('#myModal').modal('show')                  
                    return false
                }
            },
            success: function (res) {
                console.log(res);
                $('.modal-body p').text(res.msg)
                $('#myModal').modal('show')

                if (res.code === 200) {
                    $('.modal').on('hidden.bs.modal', function () {
                        window.localStorage.setItem('token', res.token)
                        window.location.href = './index.html'
                    })
                }



            }
        })
    })
})