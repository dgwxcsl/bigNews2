$(function () {
    $.ajax({
        type: 'get',
        url: BigNew.user_info,
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        success: function (res) {
            // console.log(res);
            if (res.code === 200) {
                $('.user_info span').html(`欢迎&nbsp;&nbsp;${res.data.nickname}`)
                $('.user_info img').attr('src', res.data.userPic)
                $('.user_center_link img').attr('src', res.data.userPic)
            }
        }
    })

    $('.logout').on('click',function(){
        localStorage.removeItem('token')
        location.href='./login.html'
    })
})