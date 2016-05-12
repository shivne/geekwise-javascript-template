/*
function createTable(numCols,numRows) {
  var begin = "<table>";
  var middle = ".";
  var end = "</table>";
  for (var r = 1; r < numRows; ++r) {
    middle += "<tr>";
      for (var c = 1; c < numCols; ++c) {
        d = c;
        middle += "<td>cell-" + d;
        middle += "</td>";
      }
    middle += "</tr>";
  }
  return(begin + middle + end);
}

document.body.innerHTML = createTable(11, 11);
*/
/*
var d = 0;
document.body.innerHTML = createTable(10,10);
document.getElementsByTagName("table")[0].style.border = "5px solid black";
for (var i = 0; i < 100; i++) {
document.getElementsByTagName("td")[i].style.border = "5px solid black";
document.getElementsByTagName("td")[d].style.backgroundColor = "green";
}
*/
/*
//working table iterate number 1-100
function createTable(numCols, numRows) {
 var begin = "<table>";
 var middle = "";
 var end = "</table>";
 for(var r = 1; r < numRows; r++) {
   middle += "<tr>";
   for(var c = 1; c < numCols; c++) {
     d+= 1;
     middle += "<td> " + d + "</td>";
   }
   middle += "</tr>";
 }
 return (begin + middle + end);
}
var d = 0;
document.body.innerHTML = createTable(11,11);
document.getElementsByTagName("table")[0].style.border = "5px solid black";
for (var i = 0; i < 100; i++) {
 d = i;
 document.getElementsByTagName("td")[i].style.border = "5px solid black";
 document.getElementsByTagName("td")[d].style.backgroundColor = "green";
 d++;
}
*/
/*
function createTable(numCols,numRows) {
  var begin = "<table>";
  var middle = ".";
  var end = "</table>";
  var myArray = [1,2,3,4,5,6,7,8,9,10];
  for (var r = 0; r < numRows; ++r) {
    middle += "<tr>";
      for (var c = 0; c < numCols; ++c) {
        d = c + 1;
        middle += "<td>" + myArray[c] * myArray[c];
        middle += "</td>";
      }
    middle += "</tr>";
  }
  return(begin + middle + end);
}

document.body.innerHTML = createTable(10, 10);
*/
/*
var me = {
  age: 5,
  hobbies: [
    "coding",
    "boarding",
    "learning",
    "stuff"
  ],
    favoriteQuote: function() {
      alert("So shines a good deed in a weary world.");
  },
};
console.log(me.age);
*/
/*
var me = {
  key: "Value",
  age: 5,
  hobbies: [
    "coding",
    "boarding",
    "learning",
    "stuff"
  ],
  favoriteQuote: function() {
      alert("So shines a good deed in a weary world.");
  },
};

document.querySelector('#myButton').addEventListener('click', me.favoriteQuote);

var myEvents = {
  events: ['mouseover', 'mouseout'],
  mouseover: function (evt) {
    this.style.fontWeight = 'bold';
  },
  mouseout: function (evt) {
    this.style.fontWeight = 'normal';
  }
};
myEvents.events.forEach(function (event) {
  console.log("setting up event", event);
  document.querySelector('#myButton').addEventListener(event, myEvents[event]);
});
*/

/*
var numClick = 0;
var myEvents = {
  events: ['click'],
  click: function (evt) {
    numClick += 1;
    document.getElementById("counter").innerHTML = "Clicks: " + numClick;
  }
}
document.addEventListener('click', myEvents.click);
*/

/*
var numClicks = 0;
function myClick() {
  numClicks += 1;
  document.getElementById("counter").innerHTML = "Clicks: " + numClicks;
}
document.addEventListener('click', myClick);
*/

//Testing RegEx
/*
var someString = "foo";
var someTest = new RegExp('^foo');
alert(someTest.test(someString))
*/
/*
function createTable(numCols, numRows) {
 var begin = "<table>";
 var middle = "";
 var end = "</table>";
 document.addEventListener('DOMContentLoaded', function(event)){

 for(var r = 1; r < numRows; r++) {
   middle += "<tr>";
   for(var c = 1; c < numCols; c++) {
     d+= 1;
     middle += "<td> " + " " + "</td>";
   }
   middle += "</tr>";
 }
 return (begin + middle + end);
var d = 0;
document.body.innerHTML = createTable(11,11);
for (var i = 0; i < 100; i++) {
 d = i;
 document.getElementsByTagName("td")[i].style.border = "1px solid black";
 document.getElementsByTagName("td")[i].addEventListener('click', function(){
       document.getElementsByTagName("td").style="background-color: #000";
});
 d++;
}
};
}
*/
/* ----- WORKING GRID -----

function createTable(numCols, numRows) {
 var begin = "<table>";
 var middle = "";
 var end = "</table>";
 var d = 0;
 for(var r = 0; r < numRows; r++) {
   middle += "<tr>";
   for(var c = 0; c < numCols; c++) {
     d = c + 1;
     middle += "<td></td>";
   }
   middle += "</tr>";
 }
 return (begin + middle + end);
}
document.body.innerHTML = createTable(10,10);
document.getElementsByTagName("table")[0].style.border = "1px solid black";
for (var i = 0; i < 100; i++) {
 d = i;
 document.getElementsByTagName("td")[i].style.border = "1px solid black";
 d++;
 if (d==100) {
   d = i + 1;
 }
}
----- END WORKING GRID ----- */

/* -----Begin Cameron's Code -----

function createTableHTML(numCols, numRows) {

    var begin  = '<table>';
    var middle = '';
    var end    = '</table>';

    for (var r = 0; r < numRows; r++) {
        middle += '<tr class="row">';

        for (var c = 0; c < numCols; c++) {
            middle += '<td class="cell"></td>';
        }

        middle += '</tr>';
    }

    return begin + middle + end;
}


function createTableElement(numCols, numRows) {

    var table = document.createElement('table');

    for (var r = 0; r < numRows; r++) {
        var row = document.createElement('tr');
        row.className += ' row';

        for (var c = 0; c < numCols; c++) {
            var cell = document.createElement('td');
            cell.className += ' cell';
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
    return table;
}


function addConsoleLogOnClickEvent(element, number) {
    element.onclick = function () {
        console.log("CLICKED:", number);
    };
}

function addAndRemoveClass(element, classname, timer) {
    element.className += ' ' + classname;
    var t = setTimeout(function () {
        element.className = element.className.replace(classname, '');
        t = 0;
    }, timer);
}



function addSomeEvents(table) {
    var cells = table.getElementsByTagName('td');
    for (var c = 0; c < cells.length; c++) {
        addConsoleLogOnClickEvent(cells[c], c + 1);
        cells[c].onmouseover = function() {
            addAndRemoveClass(this, 'red', 1000);
        };
    }
}


// select our target DIV
var theGrid = document.getElementById("the-grid");

// create our grid table
var theGridTable = createTableElement(25, 15);

// append our grid table to the target DIV
theGrid.appendChild(theGridTable);

// attach some event handler to our grid's cells
addSomeEvents(theGridTable);
----- End Cameron's Code */

/*var d = document,
  input = d.querySelector('#userInput'),
  btn = d.querySelector('#userBtn'),
  list = d.querySelector('#userList');


function addItemToList(item){}
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

var btn = document.querySelector('#myButton');
btn.addEventListener('click', function() {
  checkPalindrome(input.value);
});*/

var theButton = document.querySelector("#firstButton");
var output = document.querySelector("#results");
var input = document.querySelector("#inputField");

theButton.addEventListener("click", function() {
  var palindrome = input.value.toLowerCase().replace(/[\W]/g, "");
  var reverseString = palindrome.replace(/[\W]/g, "").split('').reverse().join('');

  if (palindrome == reverseString) {
    output.innerHTML = "Your word IS a palindrome!"
  } else {
    output.innerHTML = "Your word is NOT a palindrome."
  };
});
if (palindrome == reverseString) {
function onSuccess(string) {
  var item = document.createElement('li');
  item.textContent = string;
  list.appendChild(item);
}
}
