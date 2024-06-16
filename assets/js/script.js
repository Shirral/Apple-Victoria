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

$('button').on('click', endScreen); /* change it later to pickingMode again */

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
    let seconds = 0;

    let interval = setInterval(displayTime, 1000);

    function displayTime(){
        seconds++;
        console.log(seconds);
        switch(true){
            case (seconds < 5):
                $('#timer-div h1').html('8:00');
                break;
            case (seconds < 10):
                $('#timer-div h1').html('8:15');
                break;
            case (seconds < 15):
                $('#timer-div h1').html('8:30');
                break;
            case (seconds < 20):
                $('#timer-div h1').html('8:45');
                break;
            case (seconds < 25):
                $('#timer-div h1').html('9:00');
                break;
            case (seconds < 30):
                $('#timer-div h1').html('9:15');
                break;
            case (seconds < 35):
                $('#timer-div h1').html('9:30');
                break;
            case (seconds < 40):
                $('#timer-div h1').html('9:45');
                break;
            case (seconds < 45):
                $('#timer-div h1').html('10:00');
                break;
            case (seconds < 50):
                $('#timer-div h1').html('10:15');
                break;
            case (seconds < 55):
                $('#timer-div h1').html('10:30');
                break;
            case (seconds < 60):
                $('#timer-div h1').html('10:45');
                break;
            case (seconds < 65):
                $('#timer-div h1').html('11:00');
                break;
            case (seconds < 70):
                $('#timer-div h1').html('11:15');
                break;
            case (seconds < 75):
                $('#timer-div h1').html('11:30');
                break;
            case (seconds < 80):
                $('#timer-div h1').html('11:45');
                break;
            case (seconds < 85):
                $('#timer-div h1').html('12:00');
                break;
            case (seconds < 90):
                $('#timer-div h1').html('12:15');
                break;
            case (seconds < 95):
                $('#timer-div h1').html('12:30');
                break;
            case (seconds < 100):
                $('#timer-div h1').html('12:45');
                break;
            case (seconds < 105):
                $('#timer-div h1').html('13:00');
                break;
            case (seconds < 110):
                $('#timer-div h1').html('13:15');
                break;
            case (seconds < 115):
                $('#timer-div h1').html('13:30');
                break;
            case (seconds < 120):
                $('#timer-div h1').html('13:45');
                break;
            case (seconds < 125):
                $('#timer-div h1').html('14:00');
                break;
            case (seconds < 130):
                $('#timer-div h1').html('14:15');
                break;
            case (seconds < 135):
                $('#timer-div h1').html('14:30');
                break;
            case (seconds < 140):
                $('#timer-div h1').html('14:45');
                break;
            case (seconds < 145):
                $('#timer-div h1').html('15:00');
                break;
            case (seconds < 150):
                $('#timer-div h1').html('15:15');
                break;
            case (seconds < 155):
                $('#timer-div h1').html('15:30');
                break;
            case (seconds < 160):
                $('#timer-div h1').html('15:45');
                break;
            case (seconds >= 165):
                $('#timer-div h1').html('16:00');
                /*end screen*/
                clearInterval(interval);
                break;
        }
    }
}

function endScreen () {
    $('#screen').html(`
    <div id = 'win-fail-div'>
    </div>
    <div id='outcome-text-div'>
    </div>
    <div id='score-div'>
    </div>
    <div id='tryagain'>
        <button>GIVE IT ANOTHER GO!</button>
    </div>
        `);
    
    $('#screen').removeClass('picking-screen').addClass('end-screen');
}


$(document).on('click', '#tryagain button', function(){
    $('#screen').removeClass('end-screen').addClass('picking-screen');
    binApples = 0;
    applesPicked = 0;
    badApples = 0;
    pickingMode();
});