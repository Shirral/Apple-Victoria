# Apple Victoria

![mockup](assets/readme/mockup.jpg "A mockup picture for the Apple Victoria project.")

["Apple Victoria"](https://shirral.github.io/Apple-Victoria/) is a short game about picking apples created as a project meant to teach me working with Javascript and jQuery. The goal of the game is simple: fill the fruit bins with many apples as you can while maintaining the quality of the fruit! Pick the good apples, drop the bad apples to the ground - and be careful not to mix them up! Your supervisor will not be impressed if you do...

Left click or tap on an apple to pick it; right click or swipe it down to drop it to the ground. Once the tree has been stripped of apples, you will move onto the next tree. It might be filled with apples, or it might only have a few fruits. That happens! 

When you fill a bin, a new one will be brought in. You need to fill a minimum of 3.5 bins. Good luck!

## User Experience & User Interface (UX/UI)

### Site goals

The goal of the site is to deliver a short humorous interactive experience to the user. It is inspired by my time spent at an apple farm as a picker and while it's not a serious and technically correct simulation, it provides some glimpses into how a day of picking might look like, what are the main requirements set upon the pickers, and how is your progress at the end of the day judged. Because of this, it should do a decent job at satisfying some of the curiosity the user might have about this like of work, too.

### User stories

**First time visitor goals:**

* As a first time visitor, I am bored and I'm looking for some entertainment; I want to have fun.
* As a first time visitor, I have a few minutes to pass and I'm looking for something to do that won't take a long time.
* As a first time visitor, I am curious about apple picking and want to see how an apple picking simulator might work.

**Returning visitor goals:**

* As a returning visitor, I want to try to beat my previous score in the game.
* As a returning visitor, I want to try to share the game with somebody who might find it funny - perhaps someone who has worked as an apple picker at a farm before.

### Design

**Colour scheme**

Black has been chosen as the default colour of the in-game text, buttons, and shadows of several design elements. White has been used as an accent colour. As the game uses full-screen image backgrounds for all of its screens, the other leading colours have been chosen to match the colours of the background images.

The starting screen focuses on pastel yellow and warm red, matching the golden light in the orchard and the red apples:

![colour palette - starting screen](assets/readme/colours1.png "A colour palette for the interface elements of the starting screen.")

The end screen features two different shades of green - a very light yellowish green and a very dark cyan. Because the latter is almost black, it has been used to replace the black in the "GIVE IT ANOTHER GO!" button to fit with the design of the screen better: 

![colour palette - end screen](assets/readme/colours2.png "A colour palette for the interface elements of the end screen.")

The overlay with the controls instructions uses white as its background, black as the main colour of the information presented, and the same pastel yellow as the starting screen as the accent colour:

![colour palette - controls overlay](assets/readme/colours3.png "A colour palette for the interface elements of the overlay with the controls instructions.")

The main game screen is a little different as it showcases hand-drawn images of the apple tree, the apples, and the apple bin. The design goal of these is to give the player accurate information about their progress (changing colours of the apple bin, going from colourless through oragne and yellow to green when it's full) and to create a challenge of quickly telling apart different kinds of apples - good and bad - many of which might look similar at a first glance, but which show clear signs of being rotten upon closer inspection. While I tried to provide as varied colours for the different kinds of apples as possible, I was sticking to the shades found in different kinds of apples in real life.

![colours used for the apples and apple bins](assets/readme/bins-apples.png "Colours used for the apples and for the apple bins.")

The background was made to visually represent a tree that is being picked, including the animation representing the player moving on to the next tree filled with new apples, but the main focus of the player's atention should be on the apples themselves. For this reason, the background features muted shades of green that don't distract from the bright colours of the apples.

**Typography**

The website features two fonts:

* **Sedan SC** - a Garalde font used for the h1 headings and buttons, 
* **Josefin Sans** - a sans-serif font used for any other text.

Sedan SC is a serif font that conveys the feelings of grandeur and refinement; it was perfect for the project logo, the announcement of the player's victory or defeat, the clock reminding the player of the inexorable passage of time, and the call-to-action buttons.

In contrast, Josefin Sans is a rounded sans-serif font that invokes friendliness. It is albo easy to read. It is used to convery the instructions about the gameplay to the player, as well as the detailed information about their performance.

Both fonts are served by Google Fonts. Garamond has been provided as a fallback font for Sedan SC, as it's also a Garalde typeface; Arial has been provided as fallback for Josefin Sans as the most rounded of the web safe sans-serif fonts currently available.

**Imagery**

The imagery of the project revolves around one theme: apples. Opening the page with the game, the user is greeted by a full-screen background picture of an apple orchard during the picking season with a bin filled with freshly picked apples - this is to let them know immediately what the game will be about. The colours are pleasant, warm, and inviting.

The end screen is fresh and crisp, featuring an image of a thick apple leafage with apples growing among them. It provides a fitting background for the information about the player's performance in the orchard.

The main game screen, once more, is a bit different from the rest. While the starting screen and the end screen serve the function of providing the player with information about the game, this screen is where the game actually happens. The function of the visual elements is not just to look nice; they need to provide very specific information to the player. For this reason, I needed full control over what the visual elements are going to look like. All the images there, including the animated images showing the controls on the overlay, are hand-drawn and kept in the same cartoonish visual style. It's meant to be simple and fun.

**Wireframes**

As for this project I did not need to cooperate with other developers, I did not see the need to use digital tools to make "proper" wireframes. I find it much more efficient to sketch out my ideas on paper. While I could had redone them with digital tools later to make them look pretty - and it is something I plan on doing in the future when I need to communicate my ideas to others clearly in the planning stage - in this case, that would had been a waste of time.

Below are the sketches made in the planning stage of working on the project, along with some early notes - please excuse the lined paper, sadly I had no plain paper available at the time.

![wireframes](assets/readme/wireframes.png "Initial sketches from the planning stage of the project work.")
![wireframes](assets/readme/wireframes2.png "Initial sketches from the planning stage of the project work.")

At the very beginning of the project work I intented to build a more advanced simulator including the elements and gameplay known from visual novel games. I wanted to create a coherent story around the main apple picking part, including a cast of characters, several different endings, and twists that can affect the gameplay. Fortunately, it was pointed out to me that the scope of that idea might had been a bit too broad for my very first Javascript project, and that in order to make sure I finish before the deadline, it might be good to just focus on the main gameplay itself. Here is a screenshot of the skeleton of the visual-novel style screen I intended to use:

![visual novel game style screen design](assets/readme/prototype1.png "A skeleton of the visual novel game style screen design.")

Early prototype of the picking screen:

![early prototype of the picking screen](assets/readme/prototype2.png "Early prototype of the picking screen.")

## Features


