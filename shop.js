// toggle visibility of filtered figures
$('#all').on('click', function () {
    $('li').not('#all').removeClass('selected');
    $('#all').toggleClass('selected');
    $('figure').show();
})
$('#b').on('click', function () {
    $('li').not('#b').removeClass('selected');
    $('#b').toggleClass('selected');
    $('figure').not('.b').hide();
    $('.b').show();
})
$('#c').on('click', function () {
    $('li').not('#c').removeClass('selected');
    $('#c').toggleClass('selected');
    $('figure').not('.c').hide();
    $('.c').show();
})
$('#p').on('click', function () {
    $('li').not('#p').removeClass('selected');
    $('#p').toggleClass('selected');
    $('figure').not('.p').hide();
    $('.p').show();
})
$('#i').on('click', function () {
    $('li').not('#i').removeClass('selected');
    $('#i').toggleClass('selected');
    $('figure').not('.i').hide();
    $('.i').show();
})
$('#g').on('click', function () {
    $('li').not('#g').removeClass('selected');
    $('#g').toggleClass('selected');
    $('figure').not('.g').hide();
    $('.g').show();
})