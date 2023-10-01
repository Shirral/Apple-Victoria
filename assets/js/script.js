function pickingMode() {
    $('#screen').html('');
    $('#screen').addClass('picking-screen');
};

$('button').on( 'click', pickingMode);