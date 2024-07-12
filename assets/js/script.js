/* disable the context menu appearing on right clicking on the page */

$(document).contextmenu(function() {
    return false;
});

/* display the main game screen */

function pickingMode() {
    $('.screen').hide();
    $('.picking-screen').show();
    $('#timer-div h1').hide();
    $('#apple-bin').hide();
}

/* event listener displaying the main game screen */

$('#start-button').on('click', pickingMode);

/* generate an apple image at a random position on the screen */

function applesAppear() {

    /* calculate a random position for a new apple object */

    let applePositionTop = Math.floor(Math.random()*100) + '%';
    let applePositionLeft = Math.floor(Math.random()*100) + '%';

    /* determine which one of the 6 different kinds of apple objects gets generated */

    function appleType() {

        /* array of the 6 different apple images with the corresponding attributes */
    
        let applePicturesArray = [
            `<img src="assets/images/apple.png" class="apple-picture prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}" alt="A good apple."></img>`, 
            `<img src="assets/images/apple2.png" class="apple-picture prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}" alt="A good apple.">`, 
            `<img src="assets/images/apple3.png" class="apple-picture prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}" alt="A good apple.">`, 
            `<img src="assets/images/apple-bad.png" class="apple-picture bad-apple prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}" alt="A bad apple.">`, 
            `<img src="assets/images/apple-bad2.png" class="apple-picture bad-apple prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}" alt="A bad apple.">`, 
            `<img src="assets/images/apple-bad3.png" class="apple-picture bad-apple prevent-select" style="top:${applePositionTop}; left:${applePositionLeft}" alt="A bad apple.">`
        ];
  
        /* generate a number between 1-100 */

        let appleNum = Math.floor(Math.random()*100)+1;
    
        /* use the generated number to determine which object from the array will be created */

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

    /* generate a new apple object and add it to the DOM */

    let applePicture = `${appleType()}`;
   
    $('#apple-div').append(applePicture);

}

/* generate a random amount of apples between 5-40 */

function newTree(){
    let appleAmount = Math.floor(Math.random() * 35.99 + 5);
    for (let i = 0; i < appleAmount; i++) {
        applesAppear();
      }

    /* enable swiping down on an apple image to drop it to make 
    the gameplay possible on mobile devices; swipedown event created
    by @w3codemasters, available on CodePen*/

    $('.apple-picture').bind('swipedown', dropApple);
}

/* event listeners starting the game upon clicking on the gamestart button */

$(document).on('click', '#gamestart', newTree);
$(document).on('click', '#gamestart', timer);
$(document).on('click', '#gamestart', (function(){
    $('.modal').hide();
  }));

/* initialise global variables */

let applesPicked = 0;
let badApples = 0;
let binApples = 0;

/* runs if the player decides to pick an apple */

function pickApple(){

    /* check if the apple object has already been picked or dropped; ignore the 
    rest of the function, if so */

    if ($(this).attr("data-picked") == "picked"){
        return;
    }
      
    /* mark the apple object as having been picked or dropped so that it won't
    be counted multiple times if the player keeps clicking on it 
    before it disappears */

    $(this).attr("data-picked", "picked");

    /* increment the global variables */

    applesPicked++;
    binApples++;
    if ($(this).hasClass("bad-apple")){
        badApples++;
    }

    /* animate the image of the apple being picked, then remove it from
    the DOM and run showBinFullnessLevel, nextBin and nextTree functions */
    
    $(this).animate({height: '+=50px', width: '+=50px'}, "fast");
    $(this).animate({height: '1px', width: '1px', opacity: 0}, "fast").promise().done(function() {
        $(this).remove();
        showBinFullnessLevel();
        nextBin();
        nextTree();    
    });
}

/* runs if the player decides to drop an apple to the ground */

function dropApple(){

    /* check if the apple object has already been picked or dropped; ignore the 
    rest of the function, if so */

    if ($(this).attr("data-picked") == "picked"){
        return;
    }

    /* mark the apple object as having been picked or dropped so that it won't
    be counted multiple times if the player keeps clicking on it 
    before it disappears */

    $(this).attr("data-picked", "picked");

    /* animate the image of the apple being dropped, then remove it from
    the DOM and run nextTree function */

    $(this).animate({top: '+=200', opacity: 0}).promise().done(function() {
        $(this).remove();
        nextTree();    
    });
}

/* event listeners: picking an apple on a left click, 
dropping it on a right click */

$(document).on('click', '.apple-picture', pickApple);
$(document).on('contextmenu', '.apple-picture', dropApple);

/* display the old bin being taken away and a new bin being brought in
once the player fills a bin with apples */

function nextBin(){
    
    if (binApples == 40){
        
        /* calculate the position of the bin in the middle
        of the screen for the animation */

        let windowWidth = $(window).width();
        let binWidth = $('#apple-bin').outerWidth();
        let finalMarginLeft = (windowWidth - binWidth) / 2;

        /* replace the current bin image with the image of a full bin */
        
        $('.bin-image').hide();
        $('.bin5').show();

        /* animate the bin image to move off the screen and fade out,
        then set its position to the other side of the screen and animate it
        to move back to its original position in the middle of the screen with fadein */
        
        $('#apple-bin').animate({marginLeft: 0, opacity: 0}, 'slow', function() {
            $(this).css({marginLeft: '100%'});
        });
        $('#apple-bin').animate({marginLeft: finalMarginLeft, opacity: 1}, 'slow');
        binApples = 0;

        /* swap the image of the full bin to an image of an empty bin
        while the bin object is off screen */
        
        setTimeout(() => {
            $('.bin-image').hide();
            $('.bin1').show();
        }, 700);
        
    }
}

/* position the second and folowing bins in the middle of the screen after the
window is resized - the nextBin function calculates its new position to pass it to
the animation, which doesn't accept standard values for centering, overriding
the css margin settings from the stylesheet; the new position won't be central
anymore if the screen is suddenly resized */

$(window).resize(function() {
    $('#apple-bin').css({margin: '0 auto'});
});

/* show the image of a bin corresponding to the level of its fullness depending 
on the current value of binApples to visually display the player's progress*/

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

/* visually display the player moving on to the next tree once all
the apples have been picked or dropped from the previous tree */

function nextTree(){
    if ($('#apple-div').children().length === 0) {

        /* calculate the central position of the tree background 
        for the animation */

        let windowWidth = $(window).width();
        let treeWidth = $('#tree-bg-div').outerWidth();
        let finalMarginLeft = (windowWidth - treeWidth) / 2;

        /* animate the image of the tree moving offscreen, and then the image
        of a new tree moving in from the other side of the screen; generate 
        a new set of apples once the animation finishes */
        
        $('#tree-bg-div').animate({marginLeft: '-100%'}, 'slow', function() {
            $(this).css({marginLeft: '100%'});
        });
        $('#tree-bg-div').animate({marginLeft: finalMarginLeft}, 'slow', function(){
            newTree();
        });
    }
}

/* create a timer that counts the passing time and updates
the clock showing in-game time during the gameplay */

function timer() {
    let counter = 0;

    /* display the in-game time clock and set it to its starting value when
    the timer starts running */

    $('#hours').html('8');
    $('#minutes').html('00');
    $('#timer-div h1').show();
    $('#apple-bin').show();

    /* convert the time passed stored in the counter variable to a hh:mm format 
    and update the in-game clock using the Date object */
    
    function displayTime(){

        /* create a new Date object using the value of the counter variable,
        representing minutes passed, converted into miliseconds */

        dateObj = new Date(counter * 60 * 1000);

        /* pull the values of the hours and minutes for a hh:mm display format 
        from the Date object */

        hours = (dateObj.getUTCHours() + 8);
        minutes = dateObj.getUTCMinutes();

        /* update the in-game clock with the new values */

        $('#hours').html(hours);
        if (minutes == 0){
            $('#minutes').html('00');
        } else {
            $('#minutes').html(minutes);
        }
    }

    /* count the passing time, incrementing the counter value by 15 every 5 seconds
    and updating the in-game clock (1s of the game represents 3 minutes 
    of the in-game time); finish the game and show the final screen
    once the in-game time reaches 16:00 */

    let interval = setInterval(() => {
        counter += 15;

        displayTime();
        if (counter == 480) {
            clearInterval(interval);
            endScreen();
        }
    }, 5000);
}

/* show the final screen to the player once the game ends */

function endScreen () {
    
    /* calculate the % of the bad appled picked by the player */

    let badApplePercentage = 0;
    if (applesPicked > 0) {
        badApplePercentage = Math.floor((badApples / applesPicked) * 100);
    }

    /* calculate the amount of bins picked by the player */

    let binsPicked = 0;
    if (applesPicked > 0) {
        binsPicked = (applesPicked/40).toFixed(1);
    }

    /* display the end screen */

    $('.picking-screen').hide();
    $('.end-screen').show();

    /* update the html of the end screen with the information on the player's
    performance, depending on how many apples they picked and how many of them 
    were rotten */

    $('#bins-picked').html(binsPicked);
    $('#rotten-percentage').html(badApplePercentage);

    if (binsPicked <= 0.5){
        $('#win-fail-div h1').html('APPLE DEFEAT!');
        $('#supervisor-span').html('looks at you in disbelief.');
        $('#supervisor-says').html('You\'re taking a piss or what? What have you even been doing all day? We have no need for the likes of you here, kid');
        $('#what-next-span').html('It looks like apple picking might not be the perfect role for you. You head to your caravan to pack your stuff...');
        $('#score-span').html('0');
    } else if (binsPicked >= 3.5 && badApplePercentage <= 5){
        $('#win-fail-div h1').html('APPLE VICTORIA!');
        $('#supervisor-span').html('is very pleased with your work.');
        $('#supervisor-says').html('Good speed, good fruit quality; you\'ve done well, kid');
        $('#what-next-span').html('Give yourself a pat on the back - you\'ve earned it! As you retreat to your caravan to enjoy the rest of your day, you wonder if you can be even better tomorrow?...');
        $('#score-span').html(applesPicked);
    } else if (binsPicked >= 3.5 && badApplePercentage > 5){
        $('#win-fail-div h1').html('APPLE DEFEAT!');
        $('#supervisor-span').html('is not impressed.');
        $('#supervisor-says').html('Good speed, but the fruit quality is awful. Would you buy these apples? I would not. We can\'t do much with them');
        $('#what-next-span').html('The supervisor was probably right - although the beauty standards for apples are unreasonably high, most people still prefer their fruits without mushy bits, mould, or worms. You\'ll need to do better tomorrow...');
        $('#score-span').html('0');
    } else if (binsPicked < 3.5 && badApplePercentage <= 5){
        $('#win-fail-div h1').html('APPLE DEFEAT!');
        $('#supervisor-span').html('looks slightly disappointed.');
        $('#supervisor-says').html('Good quality, but you really need to speed up. The farm will take losses if you don\'t, and the owners won\'t be happy about that...');
        $('#what-next-span').html('As you go back to your caravan, you hear your peers bragging about how much they picked today. If they can do it, surely you can get there, too? Tomorrow, you think to yourself. You will be faster tomorrow.');
        $('#score-span').html('0');
    } else {
        $('#win-fail-div h1').html('APPLE DEFEAT!');
        $('#supervisor-span').html('looks at you in disbelief.');
        $('#supervisor-says').html('You spent all day picking THAT? The quality is appaling, and you haven\'t even picked enough. What am I supposed to do with you?');
        $('#what-next-span').html('You don\'t know what your supervisor will do with you, but you sure hope it doesn\'t involve being sent to the packhouse. There is a reason everybody hates it there. You better do much, MUCH better tomorrow...');
        $('#score-span').html('0');
    }

    if (badApples == 0 && applesPicked == 0){
        $('#rotten-percentage').html('None');
        $('#rotten-appraisal').html('Hardly an achievement, given you haven\'t picked anything at all.');
    } else if (badApples == 0){
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

/* reset the game and let the player try again if they click on the
#tryagain button */

$(document).on('click', '#tryagain p', function(){
    binApples = 0;
    applesPicked = 0;
    badApples = 0;
    $('.modal').show();
    $('.apple-picture').remove();
    $('.bin-image').hide();
    $('.bin1').show();

    pickingMode();
});