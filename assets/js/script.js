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

    function appleType() {
    
        let applePicturesArray = [`<img src="assets/images/apple.png" class="apple-picture" style="top:${applePositionTop}; left:${applePositionLeft}"></img>`, `<img src="assets/images/apple2.png" class="apple-picture" style="top:${applePositionTop}; left:${applePositionLeft}">`, `<img src="assets/images/apple3.png" class="apple-picture" style="top:${applePositionTop}; left:${applePositionLeft}">`, `<img src="assets/images/apple-bad.png" class="apple-picture" style="top:${applePositionTop}; left:${applePositionLeft}">`, `<img src="assets/images/apple-bad2.png" class="apple-picture" style="top:${applePositionTop}; left:${applePositionLeft}">`, `<img src="assets/images/apple-bad3.png" class="apple-picture" style="top:${applePositionTop}; left:${applePositionLeft}">`];
    
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
$(document).on('click', '#test', (function(){
    $(this).hide();
  }));

let applesPicked = 0;

function pickApple(){
    applesPicked++;
    console.log(applesPicked);
    $(this).animate({height: '+=50px', width: '+=50px'});
    $(this).animate({height: '1px', width: '1px', opacity: 0}, function(){$(this).remove();});
}

$(document).on('click', '.apple-picture', pickApple);

function dropApple(){
    $(this).animate({top: '+=200', opacity: 0}, function(){$(this).remove();}); 
}

$(document).on('contextmenu', '.apple-picture', dropApple);