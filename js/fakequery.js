// fake jquery created by jorodn 10/05/2021

class fakequery {

  constructor(el) {


    if(el.indexOf(".") > -1) {
      // if we have a class selector get elements by clasname
      // replace the dot with nothing then continue
      el = el.replace(".", "");
      this.elements  = document.getElementsByClassName(el);
    } else if (el.indexOf("#") > -1) {
      // if we have id selector get elements by id
      el = el.replace("#", "");
      // there will be only one id but need to put it in array so everything works
      this.elements = [document.getElementById(el)];
    } else {
      // not given element selector just set to document
      this.elements = document;
    }

  }

  addClass(cl) {
    var count = 0;
    // loop over every element we have selected
    while(count < this.elements.length) {

      if (this.elements[count].className) {
        // add a space and the new class if el already have classes
        this.elements[count].className += " " + cl;
      } else {

        this.elements[count].className = cl;
      }
      // ADD TE count
      count++;
    }
  }
}

function fakeQuery(el) {
  var element = new fakequery(el);

  return element;
}
