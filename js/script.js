$(document).ready(function () {
    // 移动菜单按钮点击事件
    $('[data-mobile-menu-trigger]').click(function () {
        $('#mobileMenu').toggleClass('hidden');
    });

    // 点击菜单外区域关闭菜单
    $('#mobileMenu').click(function(e) {
        if (e.target === this) {
            $(this).addClass('hidden');
        }
    });
})