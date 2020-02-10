// Objects //

// example of objects using my computer name //

operatingSystem Windows
screenSize 15 inches
purchaseYear 2019

// for objects add colon to separate the object and then add quotes for each object

var myComputer = {
    operatingSystem: 'windows',
    screenSize: '15 inches',
    purchaseYear: 2019,
}

myComputer /* variable name */
{operatingSystem: "windows", screenSize: "15 inches", purchaseYear: 2011}
myComputer.operatingSystem        
"windows"
myComputer.screenSize
"15 inches"
myComputer.purchaseYear
2011

// example using objects and functions //

var will = {
    name: 'Will',
    sayName: function () {
        console.log(this.name); /* using dot notation with 'this.name' to console log only my name "Will"
       }
    }

    // method - functions on objects//