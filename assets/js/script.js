function pickingMode() {
    $('#screen').html(`
    <button id='test'>Make an apple appear...</button>
    <div id='apple-div'>
        
    </div>
    `);
    $('#screen').addClass('picking-screen');
};

$('button').on('click', pickingMode);

/*-----------*/

function applesAppear() {

    let applePositionTop = Math.floor(Math.random()*100) + '%';
    let applePositionLeft = Math.floor(Math.random()*100) + '%';
    let applePicture = '<img src="assets/images/apple.png" class="apple-picture">';
    $('.apple-picture').last().css({'top': applePositionTop, 'left': applePositionLeft});
    $('#apple-div').append(applePicture);

    console.log(applePositionTop, applePositionLeft);

}

function testTest() {
    
    console.log('test works!');
}

/*$(document).on('click', '#test', testTest);*/
$(document).on('click', '#test', applesAppear);
