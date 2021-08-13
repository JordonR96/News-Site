/*
created by Jordon Rowley on 7/05/2021
*/

//JQuery
// convert document to jquery object
// the $ is same as sating jquery, its just calling a funcion basically
$(document).ready(function() {

  function printThis() {

    if ($(this).text()) {
      console.log($(this).text());
    } else {
      console.log($(this).val());
    }
  }

  $('input').focusin(printThis);
  $('input').css({
    background: '#f00',
    padding: '10px',
    borderColor: 'black'
  });

  // Each method loops over array jquery objects
  // $('p').each(printThis);

  //jquery can select elements of a type that contain certain text
  $('p:contains("Phasellus")').html("This had Phasellus in it, surprisingly still does");

  // can remove the p so just search for l that contains th text
  // .is('p') returns true if element is a p element
  if ($(':contains("Phasellus")').is("p")) {
    // console.log("Phasellus is inside a paragraph");
  }

  if ($(':contains("Phasellus")').hasClass("my-selector")) {
    // console.log("Phasellus has the class my-selector");
  }

  // do things when we focus on element
  $('textarea').focusin(function() {
    console.log("focusing on text area");
  });

  $('textarea').focusout(function() {
    console.log("lost focus on text area");
  });

  $('input').focusout(function() {
    if($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1) {
      $('.status').html("Valid Email");
    } else {
      $('.status').html("Invalid Email, try again");
    }
  });

  // find method used to target things inside a parent only
  // so the following iwll only add class to p elemnts inside element wiht id main
  $('#main').find('p').addClass('p-in-main');

  // can find first and last of an element using selectors
  // console.log($('.submenu a').first().text());
  // console.log($('.submenu a').last().text());



  // created new file fakejquery.js and included it in html before this.

  // var s = new fakequery(".my-selector"); dont want to have to use new
  // in the fakejquery file created a function of same name that instantiates
  // class and returns the element
  // var s = fakeQuery(".my-selector");
  // add a new class
  // fakeQuery(".my-selector").addClass("my-new-class");
  //
  // fakeQuery("#main").addClass("main-class");



  // document is now ready so run all jquery here so we know everything ready
  // console.log("jquery stuff will apply");

  // were going to prevent some html from doing its default function
  // get the a element that links to google using attr selector
  $('a[href="https://google.com"]').on('click', function(event) {
    event.preventDefault();
    // could return true or false here instead of rpevent default, true wouold
    // allow event to happen false would not
  });

  // target elements uses # for id . for class etc instaed of
  // getElementById().innerHTML , getelementsByClassName
  $('#jqtext').html("This is now my text from js using jquery");
  // setting input value
  $('.jqname-input').val("This is new input Values from JQ");

  $('#jqgo-button').on('click', function() {
    console.log('Clicked the JQ BUTTON');
  });

  // target dropdown by attribute, data-trigger could be href, or anything
  $('[data-trigger="dropdown"]').on('mouseenter', function() {
    // this accesses the element already targeted( thr one we gave dd to)
    // find the submenu by accessing parent
    var submenu = $(this).parent().find('.submenu');
    // add the active class
    // submenu.addClass('active');
    submenu.fadeIn(200);

    $('.profile-menu').on('mouseleave', function() {
      // submenu.removeClass('active');
      submenu.fadeOut(200);
    });

  });


  // APPEND REPLACE AND PREPEND CODE

  //specify multiple targets with comma
  $('#prepend, #append, #replace').on('click', function(event) {
    // these buttons are in a form so prevent from trying to go to action url with get
    event.preventDefault();

    // get the current trarget of clcick
    var el = $(event.currentTarget);
    // find the id attribute of clicked target
    var action  = el.attr('id');

    // get whar the user typed into text area
    var content = $('.text').val();

    // do different things depening on action
    if (action == "prepend") {

      console.log('Prepending...');

      // counld concat a element around content in the prepend funtion to make link
      // eg "<a href='#'>" + content + "</a>"
      $('#main').prepend(content);

    } else if (action == "append") {

      console.log('aPpending...');
      $('#main').append(content);

    } else if (action == "replace") {
      $('#main').html(content);
      console.log('rEPLACING...');

    }

    // reset text area each time
    $('.text').val('');

  });




  $(document).on('mousedown', function(event) {

    // event.which in case of mouse down will tlewl us which button pressed
    // 1 for left mouse, 2 for middle, 3 for right

    // switch statement
    // switch(event.which) {
    //   case 1:
    //     console.log("clicke left mouse button");
    //     break;
    //   case 2:
    //     console.log("clicke middle mouse button");
    //     break;
    //   case 3:
    //     console.log("clicke right mouse button");
    //     break;
    // }

    // show our own context submenu

    // deactivate normal right click bhabiour
    $(document).on('contextmenu', function() {
      return false
    });

    // on right click
    if (event.which == 3) {
      // make sure every hidden element is hidden
      $('.hidden').hide();

      // determin which elemt we are clicking on and which elemnt to show
      // we have given the elements the apporpriate classes
      if ($(event.target).is('img')) {
        $('.saveimg').show();
        $('.newtab').show();
      } else if ($(event.target).is('a')) {
        $('.newtab').show();
      }

      // we can set the css for an element,
      // we arre setting positions to mouse current position
      // and displaying the element
      $('#context').css({
        top: event.pageY,
        left: event.pageX
      });

      $('#context').fadeIn();

      // we are done return;
      return false;
    }
    // any other click gets rid
    $('#context').fadeOut();

  });



});

//this is adding event handle using vanilla js
// var jqbtn = document.getElementById("jqgo-button");
//
// function jqButtonClicked() {
//   console.log('Clicked the JQ BUTTON');
// }
//
// jqbtn.addEventListener('click', jqButtonClicked);

//CLASSES

class Animal {
  // constructor runs as soon as class instantiated
  constructor(name, height, weight) {
    console.log("created animal named " + name);
    //this. to define variables for entire instance of class (onj) can use anywhere
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
  // class method definition
  nameLength() {
    return this.name.length;
  }

}

// define variable for any instance of class always be the same for all instance
Animal.planet = "Earth";
// instantiating animal class
// var dog = new Animal("Dog", 25, 80);
// var fish = new Animal("Fish",2, 0.3);

// console.log(fish.nameLength());

// access class level variable
// console.log(fish.constructor.planet);

// extend Animal class
class Dog extends Animal {

  constructor(name, height, weight, barkVolume, leashColor, speed) {
    // this super calls parent class constructor, so sets the variable
    super(name, height, weight);

    // set dog specific vairables
    this.barkVolume = barkVolume;
    this.leashColor = leashColor;
    this.speed = speed;
  }

  // define bark method
  bark() {
    if (this.barkVolume > 50) {
      console.log(this.name, "barks loudly! volume:", this.barkVolume)
    } else {
      console.log(this.name, "barks timidly! volume:", this.barkVolume)
    }
  }

}

// extend animal for fish
class Fish extends Animal {

  constructor(name, height, weight, swimSpeed) {
    super(name, height, weight);

    this.swimSpeed = swimSpeed;

  }

  swim(chaserSpeed) {
      if (this.swimSpeed > 50){
        console.log(this.name, "swims around quickly (speed:", this.swimSpeed);
      } else {
        console.log(this.name, "swims around slowly (speed:", this.swimSpeed);
      }

      if (this.swimSpeed <= chaserSpeed) {
        console.log(this.name, "got caught by chaser");
      }else {
        console.log(this.name,"got away from chaser");
      }

  }

}

// var king = new Dog("King", 45, 92, 71, "red", 90);
//
// king.bark();
//
// var goldie = new Fish("Goldie", 2, 0.1, 89);
//
// goldie.swim(king.speed);


// var welcome_message = "this is the variable welcome message";
// var myAge = 24;
// var exactAge = 24.45;
// alert(myAge + exactAge);
// console.log("loggin to console mate");

var btn = document.getElementById("go-button");


function printName(name) {
  console.log("hello my name is " + name);
}

// printName("Jordon")

function buttonClicked() {
  console.log("button clicked")
  // btn.removeEventListener("click", buttonClicked);
  // document.getElementById("text").innerHTML = "Can't click that button now";

  var customText = document.getElementsByClassName("name-input");
  var textArea = document.getElementsByClassName("my-textarea");
  var results = document.getElementById("text");


  console.log(customText);
  results.innerHTML = "Hello, " + customText[0].value + "<br/>";
  results.innerHTML += "Message: " + textArea[0].value
}

function saySomething(phrase) {

  console.log("Your Said:" + phrase);

}

function getPhrase(params) {
  var l = 0;

  if (params.phrase) {
    l += params.phrase.length;
  }

  if (typeof params.phrase2 !== "undefined") {
    l += params.phrase2.length;
  }

  function printBoth() {
    return params.phrase +" " +params.phrase2;
  }

  // return l;
  return printBoth();
}

btn.addEventListener("click", buttonClicked);

var phrase = "This is a phrase";
// saySomething(phrase);
var phrase2 = "This is another phrase";

computed = getPhrase({phrase : phrase, phrase2: phrase2});
// console.log(computed);

var hobbies = ["Eating", "Gaming", "Reading", "Music"];
// pop removes last item from array and returns that item
// console.log(hobbies.pop());
// loging music will no longe rbe in it
// console.log(hobbies);
// add something on to end
hobbies.push("extra item");
// log last item, remember indexes start at 0
// console.log(hobbies[hobbies.length - 1])

// hobbies.forEach(function(item, index) {
//   console.log("I like ", item);
//   console.log(index);
// });

// same as pop but at start
// console.log(hobbies.shift());
// same as push but at start
hobbies.unshift("Drinking");

// remove item by finding the index of item with that value
// index of return s -1 when nothing
// can use array.indexOf(value) === -1 to find if item is not in array
// can use array.indexOf(value) > -1 to find if item is in array
// var indexOfReading = hobbies.indexOf("Reading");
// hobbies.splice(indexOfReading, 1);

// starting from index 1 remove 3 items including item at index 1
hobbies.splice(1,3);

// console.log(hobbies);

var numbers = [43,56,102,10,58,34,601,20,27,204];
var words  = ["Apple", "Pear","Coconut", "Pizza", "Hamburger", "Bannana"];
// sort numbers ascending using below
// console.log(numbers.sort(function(a,b) {
//   return a - b;
// }));
// console.log(words.sort());
// numbers 3 to 9 9 i currently missing
var numbermissing = [3,8,7,6,12,4,5,19,16,18,11,10,15,13,17,14];
// write a function that finds missing number which is 4

// provide any array containing all ints from x to y with one missing and it
// will find it.
function findMissingNumber(arrayWithMissingNumber) {
  // version from course
  var missing = -1;
  var sorted = arrayWithMissingNumber.sort(function(a,b) {
    return a - b;
  })
  // loop from  lowest number to lenght of array -1

  /*
  TIDI this is what was fone in course but number we iterate to should be
  the highest number in sequence so if we have 3,4,6,7,8,9 after ordering
  we should go from 3 to 9 checking if each value is in the array
  */
  // for (i = sorted[0]; i <= arrayWithMissingNumber.length -1; i++) {
  //   // if this number isnt in array we have hte missing number
  //   if (arrayWithMissingNumber.indexOf(i) === -1) {
  //     missing = i;
  //   }

  for (i = sorted[0]; i <= sorted[sorted.length -1]; i++) {
    // if this number isnt in array we have hte missing number
    if (arrayWithMissingNumber.indexOf(i) === -1) {
      missing = i;
  }

  }

  return missing;
}

// console.log(findMissingNumber(numbermissing));
