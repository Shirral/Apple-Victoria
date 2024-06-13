function pickingMode() {
    $('#screen').html(`
    <button id='test'>Make an apple appear...</button>
    <div id='timer-div'>
        <h1>8:00</h1>
    </div>
    <div id='apple-div'>
        
    </div>
    <div id='apple-bin'>
        <img src='assets/images/bin.png'>
    </div>`);
    $('#screen').addClass('picking-screen');
};

$('button').on('click', pickingMode);

$(document).contextmenu(function() {
    return false;
});

/*-----------*/

let binApples = 0;

function applesAppear() {

    let applePositionTop = Math.floor(Math.random()*100) + '%';
    let applePositionLeft = Math.floor(Math.random()*100) + '%';

    function appleType() {
    
        let applePicturesArray = [`<img src="assets/images/apple.png" class="apple-picture" style="top:${applePositionTop}; left:${applePositionLeft}"></img>`, `<img src="assets/images/apple2.png" class="apple-picture" style="top:${applePositionTop}; left:${applePositionLeft}">`, `<img src="assets/images/apple3.png" class="apple-picture" style="top:${applePositionTop}; left:${applePositionLeft}">`, `<img src="assets/images/apple-bad.png" class="apple-picture bad-apple" style="top:${applePositionTop}; left:${applePositionLeft}">`, `<img src="assets/images/apple-bad2.png" class="apple-picture bad-apple" style="top:${applePositionTop}; left:${applePositionLeft}">`, `<img src="assets/images/apple-bad3.png" class="apple-picture bad-apple" style="top:${applePositionTop}; left:${applePositionLeft}">`];
    
        let appleNum = Math.floor(Math.random()*100)+1;
    
        console.log(appleNum);
    
        switch (true) {
            case (appleNum <= 17):
                console.log('1');
                return applePicturesArray[0];
            case (appleNum <= 34):
                console.log('2');
                return applePicturesArray[1];
            case (appleNum <= 51):
                console.log('3');
                return applePicturesArray[2];
            case (appleNum <= 67):
                console.log('4');
                return applePicturesArray[3];
            case (appleNum <= 83):
                console.log('5');
                return applePicturesArray[4];
            case (appleNum <= 100):
                console.log('6');
                return applePicturesArray[5];
        }
    
    }

    console.log(appleType());

    let applePicture = `${appleType()}`;
    $('#apple-div').append(applePicture);

    console.log(applePositionTop, applePositionLeft);

}

function newTree(){
    let appleAmount = Math.floor(Math.random() * 35.99 + 5);
    console.log(appleAmount);
    for (let i = 0; i < appleAmount; i++) {
        applesAppear();
      }
} 

$(document).on('click', '#test', newTree);
$(document).on('click', '#test', timer);
$(document).on('click', '#test', (function(){
    $(this).hide();
  }));

let applesPicked = 0;
let badApples = 0;

function pickApple(){
    applesPicked++;
    binApples++;
    if ($(this).hasClass("bad-apple")){
        badApples++;
    }
    console.log(applesPicked);
    console.log(binApples);
    console.log(badApples);
    $(this).animate({height: '+=50px', width: '+=50px'});
    $(this).animate({height: '1px', width: '1px', opacity: 0}).promise().done(function() {
        $(this).remove();
        console.log('Apple removed');
        showBinFullnessLevel();
        nextBin();
        nextTree();    
    });
}

$(document).on('click', '.apple-picture', pickApple);

function dropApple(){
    $(this).animate({top: '+=200', opacity: 0}).promise().done(function() {
        $(this).remove();
        console.log('Apple removed');
        nextTree();    
    });
}

$(document).on('contextmenu', '.apple-picture', dropApple);

function nextBin(){
    
    if (binApples >= 43){
        binApples = 0;
        let windowWidth = $(window).width();
        let binWidth = $('#apple-bin').outerWidth();
        let finalMarginLeft = (windowWidth - binWidth) / 2;
        
        $('#apple-bin').animate({marginLeft: 0, opacity: 0}, 'slow', function() {
            $(this).css({marginLeft: '100%'});
        });
        $('#apple-bin').animate({marginLeft: finalMarginLeft, opacity: 1}, 'slow');
    }
}

function showBinFullnessLevel(){
    switch(true){
        case (binApples < 15):
            $('#apple-bin').html(`
                <img src='assets/images/bin2.png'></img>
            `);
            break;
        case (binApples < 30):
            $('#apple-bin').html(`
                <img src='assets/images/bin3.png'></img>
            `);
            break;
        case (binApples < 43):
            $('#apple-bin').html(`
                <img src='assets/images/bin4.png'></img>
            `);
            break;
        case (binApples == 43):
            $('#apple-bin').html(`
                <img src='assets/images/bin5.png'></img>
            `);
            break;
    }
}

function nextTree(){
    if ($('#apple-div').children().length === 0) {
        console.log('yeah');

        let windowWidth = $(window).width();
        let binWidth = $('#apple-div').outerWidth();
        let finalMarginLeft = (windowWidth - binWidth) / 2;
        
        $('#apple-div').animate({marginLeft: '-100%'}, 'slow', function() {
            $(this).css({marginLeft: '100%'});
        });
        $('#apple-div').animate({marginLeft: finalMarginLeft}, 'slow', function(){
            newTree();
        });
    
        

        console.log('yeah yeah');
    }
}

function timer() {
    let minutes = 0;
    setInterval(function () {
        minutes++;
        console.log(minutes);
        switch(true){
            case (minutes < 15):
                $('#timer-div h1').html('8:00');
                break;
            case (minutes < 30):
                $('#timer-div h1').html('8:15');
                break;
            case (minutes < 45):
                $('#timer-div h1').html('8:45');
                break;
            case (minutes < 60):
                $('#timer-div h1').html('9:00');
                break;
            case (minutes < 75):
                $('#timer-div h1').html('9:15');
                break;
            case (minutes < 90):
                $('#timer-div h1').html('9:30');
                break;
            case (minutes < 105):
                $('#timer-div h1').html('9:45');
                break;
            case (minutes < 120):
                $('#timer-div h1').html('10:00');
                break;
            case (minutes < 135):
                $('#timer-div h1').html('10:15');
                break;
            case (minutes < 150):
                $('#timer-div h1').html('10:30');
                break;
            case (minutes < 165):
                $('#timer-div h1').html('10:45');
                break;
            case (minutes < 180):
                $('#timer-div h1').html('11:00');
                break;
            case (minutes < 195):
                $('#timer-div h1').html('11:15');
                break;
            case (minutes < 210):
                $('#timer-div h1').html('11:30');
                break;
            case (minutes < 225):
                $('#timer-div h1').html('11:45');
                break;
            case (minutes < 240):
                $('#timer-div h1').html('12:00');
                break;
            case (minutes < 255):
                $('#timer-div h1').html('12:15');
                break;
            case (minutes < 270):
                $('#timer-div h1').html('12:30');
                break;
            case (minutes < 285):
                $('#timer-div h1').html('12:45');
                break;
            case (minutes < 300):
                $('#timer-div h1').html('13:00');
                break;
            case (minutes < 315):
                $('#timer-div h1').html('13:15');
                break;
            case (minutes < 330):
                $('#timer-div h1').html('13:30');
                break;
            case (minutes < 345):
                $('#timer-div h1').html('13:45');
                break;
            case (minutes < 360):
                $('#timer-div h1').html('14:00');
                break;
            case (minutes < 375):
                $('#timer-div h1').html('14:15');
                break;
            case (minutes < 390):
                $('#timer-div h1').html('14:30');
                break;
            case (minutes < 405):
                $('#timer-div h1').html('14:45');
                break;
            case (minutes < 420):
                $('#timer-div h1').html('15:00');
                break;
            case (minutes < 435):
                $('#timer-div h1').html('15:15');
                break;
            case (minutes < 450):
                $('#timer-div h1').html('15:30');
                break;
            case (minutes < 465):
                $('#timer-div h1').html('15:45');
                break;
            case (minutes < 480):
                $('#timer-div h1').html('16:00');
                break;
        }
        }, 1000);
    
}