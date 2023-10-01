function pickingMode() {
    $('#screen').html(`
    <button id='test'>Make an apple appear...</button>
    <div id='apple-div'>
        <img src="assets/images/apple.png" class="apple-picture">
    </div>
    `);
    $('#screen').addClass('picking-screen');
};

$('button').on('click', pickingMode);