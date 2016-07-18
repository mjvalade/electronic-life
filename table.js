// function rowHeights(rows) {
//   return rows.map(function(row) {
//     return row.reduce(function(max, cell) {
//       return Math.max(max, cell.minHeight());
//     }, 0);
//   });
// }
//
// function colWidths(rows) {
//   return rows[0].map(function(_, i) {
//     return rows.reduce(function(max, row) {
//       return Math.max(max, row[i].minWidth());
//     }, 0);
//   });
// }
//
// function drawTable(rows) {
//   var heights = rowHeights(rows);
//   var widths = colWidths(rows);
//
//   function drawLine(blocks, lineNo) {
//     return blocks.map(function(block) {
//       return block[lineNo];
//     }).join(" ");
//   }
//
//   function drawRow(row, rowNum) {
//     var blocks = row.map(function(cell, colNum) {
//       return cell.draw(widths[colNum], heights[rowNum]);
//     });
//     return blocks[0].map(function(_, lineNo) {
//       return drawLine(blocks, lineNo);
//     }).join("\n");
//   }
//
//   return rows.map(drawRow).join("\n");
// }
//
// function repeat(string, times) {
//   var result = "";
//   for (var i = 0; i < times; i++)
//     result += string;
//   return result;
// }
//
// var newText  = new TextCell("v")
// newText.minWidth();
// drawRow();

// all children lives in the same village, goe to the same school and are ages 6-12
// single responsibility --> one object does one thing / is responsible for one thing

// constructor --> object factory --> creating many instances of X
function SchoolChild(age) {
  this.age = age;
  this.teacher = this.determineTeacher();
  this.grade = this.determineGrade();
  // this.grade = determineGrade(this.age); --> give input, return ioutput
  this.schoolName = "Blue School";
  this.village = "Redtown";
  this.food = "vegan";
}

SchoolChild.prototype.determineTeacher = function() {
  if (this.age === 6) {
    return "Smith";
  } else if (this.age === 8) {
    return "Chris";
  }
};

SchoolChild.prototype.determineGrade = function () {
  if (this.age === 6) {
    return "1st";
  } else if (this.age === 8) {
    return "2nd";
  }
};

SchoolChild.prototype.study = functino () {
  // incerase knowlegde
  // when knowledge is 100, we change grade
}

// CRUD --> create, read, update, delete

var laurel = new SchoolChild(8);
var ethan = new SchoolChild(6);

console.log(ethan.schoolName);
console.log(ethan.age);
console.log(ethan.grade);
console.log(ethan.teacher);
console.log(ethan.food);

console.log(laurel.schoolName);
console.log(laurel.age);
console.log(laurel.grade);
console.log(laurel.teacher);
console.log(laurel.food);
// 2 prototype functions
//
// function TextCell(text) {
//   // "##", "  "
//   this.text = text.split("\n");
// }
//
// TextCell.prototype.minWidth = function() {
//   return this.text.reduce(function(width, line) {
//     return Math.max(width, line.length);
//   }, 0);
// };
//
// TextCell.prototype.minHeight = function() {
//   return this.text.length;
// };
//
// TextCell.prototype.draw = function(width, height) {
//   var result = [];
//   for (var i = 0; i < height; i++) {
//     var line = this.text[i] || "";
//     result.push(line + repeat(" ", width - line.length));
//   }
//   return result;
// };
//
// console.log(Object.getPrototypeOf(TextCell));
//
// var rows = [];
// for (var i = 0; i < 5; i++) {
//    var row = [];
//    for (var j = 0; j < 5; j++) {
//      if ((j + i) % 2 == 0)
//        var t = new TextCell("##")
//        //  t.text -> ## | t.text = 'wowowo'
//        console.log(Object.getPrototypeOf(t));  // TextCell {mW.. mH.. draw: Functino () }
//        row.push(t);
//      else
//        row.push(new TextCell("  ")); // t.text -> "  "
//    }
//    rows.push(row);
// }
//
// console.log(drawTable(rows));
//
