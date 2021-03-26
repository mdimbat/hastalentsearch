$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 20) {
            $(".navbar").addClass("compressed navbar-dark");
            $(".img-nav").addClass("img-shrink");
            $(".dropdown-menu").addClass("dropdown-dark");
        } else {
            $(".navbar").removeClass("compressed navbar-dark");
            $(".img-nav").removeClass("img-shrink");
            $(".dropdown-menu").removeClass("dropdown-dark");
        }
    });
});

function toggleDropdown(e) {
    const _d = $(e.target).closest('.dropdown'),
        _m = $('.dropdown-menu', _d);
    setTimeout(function () {
        const shouldOpen = e.type !== 'click' && _d.is(':hover');
        _m.toggleClass('show', shouldOpen);
        _d.toggleClass('show', shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);