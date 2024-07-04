function pickingMode() {
    $('.screen').hide();
    $('.picking-screen').show();
};

$('#start-button').on('click', pickingMode);

$(document).contextmenu(function() {
    return false;
});

/*-----------*/

let binApples = 0;

function applesAppear() {

    let applePositionTop = Math.floor(Math.random()*100) + '%';
    let applePositionLeft = Math.floor(Math.random()*100) + '%';

    function appleType() {
    
        let applePicturesArray = [
            `<img src="assets/images/apple.png" class="apple-picture prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}"></img>`, 
            `<img src="assets/images/apple2.png" class="apple-picture prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}">`, 
            `<img src="assets/images/apple3.png" class="apple-picture prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}">`, 
            `<img src="assets/images/apple-bad.png" class="apple-picture bad-apple prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}">`, 
            `<img src="assets/images/apple-bad2.png" class="apple-picture bad-apple prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}">`, 
            `<img src="assets/images/apple-bad3.png" class="apple-picture bad-apple prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}">`
        ];
    
        let appleNum = Math.floor(Math.random()*100)+1;
    
        switch (true) {
            case (appleNum <= 17):
                return applePicturesArray[0];
            case (appleNum <= 34):
                return applePicturesArray[1];
            case (appleNum <= 51):
                return applePicturesArray[2];
            case (appleNum <= 67):
                return applePicturesArray[3];
            case (appleNum <= 83):
                return applePicturesArray[4];
            default:
                return applePicturesArray[5];
        }
    
    }

    let applePicture = `${appleType()}`;
    $('#apple-div').append(applePicture);

}

function newTree(){
    let appleAmount = Math.floor(Math.random() * 35.99 + 5);
    for (let i = 0; i < appleAmount; i++) {
        applesAppear();
      }
    $('.apple-picture').bind('swipedown', dropApple);
} 

$(document).on('click', '#gamestart', newTree);
$(document).on('click', '#gamestart', timer);
$(document).on('click', '#gamestart', (function(){
    $('.modal').hide();
  }));

let applesPicked = 0;
let badApples = 0;

function pickApple(){

    if ($(this).attr("data-picked") == "picked"){
        return;
    }

    $(this).attr("data-picked", "picked");

    applesPicked++;
    binApples++;
    if ($(this).hasClass("bad-apple")){
        badApples++;
    }
    
    $(this).animate({height: '+=50px', width: '+=50px'}, "fast");
    $(this).animate({height: '1px', width: '1px', opacity: 0}, "fast").promise().done(function() {
        $(this).remove();
        showBinFullnessLevel();
        nextBin();
        nextTree();    
    });
}

$(document).on('click', '.apple-picture', pickApple);

function dropApple(){

    if ($(this).attr("data-picked") == "picked"){
        return;
    }

    $(this).attr("data-picked", "picked");

    $(this).animate({top: '+=200', opacity: 0}).promise().done(function() {
        $(this).remove();
        nextTree();    
    });
}

$(document).on('contextmenu', '.apple-picture', dropApple);


function nextBin(){
    
    if (binApples == 40){
        
        let windowWidth = $(window).width();
        let binWidth = $('#apple-bin').outerWidth();
        let finalMarginLeft = (windowWidth - binWidth) / 2;

        $('.bin-image').hide();
        $('.bin5').show();
        
        $('#apple-bin').animate({marginLeft: 0, opacity: 0}, 'slow', function() {
            $(this).css({marginLeft: '100%'});
        });
        $('#apple-bin').animate({marginLeft: finalMarginLeft, opacity: 1}, 'slow');
        binApples = 0;
        
        setTimeout(() => {
            $('.bin-image').hide();
            $('.bin1').show();
        }, 700);
        
    }
}

function showBinFullnessLevel(){
    switch(true){
        case (binApples < 13):
            $('.bin-image').hide();
            $('.bin2').show();
            break;
        case (binApples < 26):
            $('.bin-image').hide();
            $('.bin3').show();
            break;
        case (binApples < 40):
            $('.bin-image').hide();
            $('.bin4').show();
            break;
        default:
            break;
    }
}


function nextTree(){
    if ($('#apple-div').children().length === 0) {

        let windowWidth = $(window).width();
        let binWidth = $('#tree-bg-div').outerWidth();
        let finalMarginLeft = (windowWidth - binWidth) / 2;
        
        $('#tree-bg-div').animate({marginLeft: '-100%'}, 'slow', function() {
            $(this).css({marginLeft: '100%'});
        });
        $('#tree-bg-div').animate({marginLeft: finalMarginLeft}, 'slow', function(){
            newTree();
        });
    }
}

function timer() {
    let counter = 0;

    function displayTime(){
        dateObj = new Date(counter * 60 * 1000);
        hours = (dateObj.getUTCHours() + 8);
        minutes = dateObj.getUTCMinutes();

        $('#hours').html(hours);
        if (minutes == 0){
            $('#minutes').html('00');
        } else {
            $('#minutes').html(minutes);
        }
    }

    let interval =setInterval(() => {
        counter += 15;
        displayTime();
        if (counter == 480) {
            clearInterval(interval);
            endScreen();
        }
    }, 5000);
}

function endScreen () {
    
    let badApplePercentage = 0;
    if (applesPicked > 0) {
        badApplePercentage = Math.floor((badApples / applesPicked) * 100);
    }

    let binsPicked = 0;
    if (applesPicked > 0) {
        binsPicked = (applesPicked/40).toFixed(1);
    }

    $('.picking-screen').hide();
    $('.end-screen').show();

    $('#bins-picked').html(binsPicked);
    $('#rotten-percentage').html(badApplePercentage);

    if (applesPicked >= 140 && badApplePercentage <= 5){
        $('#win-fail-div h1').html('APPLE VICTORIA!');
        $('#supervisor-span').html('is very pleased with your work.');
        $('#supervisor-says').html('Good speed, good fruit quality; you\'ve done well, kid');
        $('#what-next-span').html('Give yourself a pat on the back - you\'ve earned it! As you retreat to your caravan to enjoy the rest of your day, you wonder if you can be even better tomorrow?...');
        $('#score-span').html(applesPicked);
    } else if (applesPicked >= 140 && badApplePercentage > 5){
        $('#win-fail-div h1').html('APPLE DEFEAT!');
        $('#supervisor-span').html('is not impressed.');
        $('#supervisor-says').html('Good speed, but the fruit quality is awful. Would you buy these apples? I would not. We can\'t do much with them');
        $('#what-next-span').html('The supervisor was probably right - although the beauty standards for apples are unreasonably high, most people still prefer their fruits without mushy bits, mould, or worms. You\'ll need to do better tomorrow...');
        $('#score-span').html('0');
    } else if (applesPicked < 140 && badApplePercentage <= 5){
        $('#win-fail-div h1').html('APPLE DEFEAT!');
        $('#supervisor-span').html('looks slightly disappointed.');
        $('#supervisor-says').html('Good quality, but you really need to speed up. The farm will take losses if you don\'t, and the owners won\'t be happy about that...');
        $('#what-next-span').html('As you go back to your caravan, you hear your peers bragging about how much they picked today. If they can do it, surely you can get there, too? Tomorrow, you think to yourself. You will be faster tomorrow.');
        $('#score-span').html('0');
    } else {
        $('#win-fail-div h1').html('APPLE DEFEAT!');
        $('#supervisor-span').html('looks at you in disbelief.');
        $('#supervisor-says').html('You spent all day picking THAT? The quality is appaling, and you haven\'t even picked 3,5 bins. What am I supposed to do with you?');
        $('#what-next-span').html('You don\'t know what your supervisor will do with you, but you sure hope it doesn\'t involve being sent to the packhouse. There is a reason everybody hates it there. You better do much, MUCH better tomorrow...');
        $('#score-span').html('0');
    }

    if (badApples == 0){
        $('#rotten-percentage').html('None');
        $('#rotten-appraisal').html('Very impressive! Such commendable attention to detail!');
    } else if (badApplePercentage == 0){
        $('#rotten-percentage').html('Hardly any');
        $('#rotten-appraisal').html('Good. This is what we want.');
    } else if (badApplePercentage <= 5){
        $('#rotten-percentage').html(`${badApplePercentage}%`);
        $('#rotten-appraisal').html('This will do.');
    } else {
        $('#rotten-percentage').html(`${badApplePercentage}%`);
        $('#rotten-appraisal').html('Sadly, this is below satisfactory.');
    }
}


$(document).on('click', '#tryagain p', function(){
    binApples = 0;
    applesPicked = 0;
    badApples = 0;
    $('.modal').show();
    $('.apple-picture').remove();
    $('#timer-div h1').html('8:00');
    $('.bin-image').hide();
    $('.bin1').show();

    pickingMode();
});