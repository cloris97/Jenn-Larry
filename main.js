// toggle visibility of filtered figures
$('#all').on('click', function () {
    $('li').not('#all').removeClass('selected');
    $('#all').toggleClass('selected');
    $('figure').show(1000);
})
$('#b').on('click', function () {
    $('li').not('#b').removeClass('selected');
    $('#b').toggleClass('selected');
    $('figure').not('.b').hide(1000);
    $('.b').show(1000);
})
$('#c').on('click', function () {
    $('li').not('#c').removeClass('selected');
    $('#c').toggleClass('selected');
    $('figure').not('.c').hide(1000);
    $('.c').show(1000);
})
$('#p').on('click', function () {
    $('li').not('#p').removeClass('selected');
    $('#p').toggleClass('selected');
    $('figure').not('.p').hide(1000);
    $('.p').show(1000);
})
$('#i').on('click', function () {
    $('li').not('#i').removeClass('selected');
    $('#i').toggleClass('selected');
    $('figure').not('.i').hide(1000);
    $('.i').show(1000);
})
$('#g').on('click', function () {
    $('li').not('#g').removeClass('selected');
    $('#g').toggleClass('selected');
    $('figure').not('.g').hide(1000);
    $('.g').show(1000);
})