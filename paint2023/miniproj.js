// selects color buttons
const redButton = document.getElementById("red-button");
const orangeButton = document.getElementById("orange-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const bleenButton = document.getElementById("bleen-button");
const purpleButton = document.getElementById("purple-button");
const purpinkButton = document.getElementById("purpink-button");
const pinkButton = document.getElementById("pink-button");

// clicking on color buttons via selected color
redButton.onclick = function() {
  selectedColor = "lightcoral";
  redButton.classList.add("selected-color-button", "clicked");
};
orangeButton.onclick = function() {
  selectedColor = "lightsalmon";
  orangeButton.classList.add("selected-color-button", "clicked");
};
yellowButton.onclick = function() {
  selectedColor = "khaki";
  yellowButton.classList.add("selected-color-button", "clicked");
};
greenButton.onclick = function() {
  selectedColor = "lightgreen";
  greenButton.classList.add("selected-color-button", "clicked");
};
blueButton.onclick = function() {
  selectedColor = "darkturquoise";
  blueButton.classList.add("selected-color-button", "clicked");
};
bleenButton.onclick = function() {
  selectedColor = "deepskyblue";
  bleenButton.classList.add("selected-color-button", "clicked");
};
purpleButton.onclick = function() {
  selectedColor = "slateblue";
  purpleButton.classList.add("selected-color-button", "clicked");
};
purpinkButton.onclick = function() {
  selectedColor = "orchid";
  purpinkButton.classList.add("selected-color-button", "clicked");
};
pinkButton.onclick = function() {
  selectedColor = "lightpink";
  pinkButton.classList.add("selected-color-button", "clicked");
};

// onmouseout
redButton.onmouseout = removeClicked;
orangeButton.onmouseout = removeClicked;
yellowButton.onmouseout = removeClicked;
greenButton.onmouseout = removeClicked;
blueButton.onmouseout = removeClicked;
bleenButton.onmouseout = removeClicked;
purpleButton.onmouseout = removeClicked;
purpinkButton.onmouseout = removeClicked;
pinkButton.onmouseout = removeClicked;

// selects and removes color button that is clicked on
function removeClicked() {
  redButton.classList.remove("clicked");
  orangeButton.classList.remove("clicked");
  yellowButton.classList.remove("clicked");
  greenButton.classList.remove("clicked");
  blueButton.classList.remove("clicked");
  bleenButton.classList.remove("clicked");
  purpleButton.classList.remove("clicked");
  purpinkButton.classList.remove("clicked");
  pinkButton.classList.remove("clicked");
  const selectedButton = document.querySelector(".selected-color-button");
  if (selectedButton) {
    selectedButton.classList.add("clicked");
  }
}

    // select all grid cells
    const gridCells = document.querySelectorAll("td");
    // add selected color to each cell clicked on
    for (let i = 0; i < gridCells.length; i++) {
    const cell = gridCells[i];
    //set bg color of all cells to azure
    cell.style.backgroundColor = "azure";
    cell.onclick = function() {
        cell.style.backgroundColor = selectedColor;
    };
    }

    // adds color of selected onto grid that mouse hovers over
    for (let i = 0; i < gridCells.length; i++) {
    const cell = gridCells[i];
    cell.onmouseover = function() {
        cell.style.borderColor = selectedColor;
    }
    cell.onmouseout = function() {
        cell.style.borderColor = "burlywood";
    }
    }

// toggle Randomizer Button
  function toggleColorRandom() {
  // get all the table cells
    const cells = document.getElementsByTagName("td");
      // array of color classes
      const colorClasses = [
        "lightcoral",
        "lightsalmon",
        "khaki",
        "lightgreen",
        "darkturquoise",
        "deepskyblue",
        "slateblue",
        "orchid",
        "lightpink",
      ];
      // loop through each cell and assign a random variable from colorClass if not azure
      for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor !== "azure") {
          const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
          cells[i].style.backgroundColor = randomColorClass;
        }
      }
    }

// toggling Eraser button
  let colorEraserEnabled = false;
  let colorEraserButton = document.getElementById("colorEraser-button");
  function toggleColorEraser() {
    colorEraserEnabled = !colorEraserEnabled;
    if (colorEraserEnabled) {
      colorEraserButton.style.backgroundColor = "rosybrown";
    } else {
      colorEraserButton.style.backgroundColor = "";
    }
  }
    // function acts like correction tape, replaces any cell with a non-azure color, with azure
    function colorCellClick(cell) {
      if (colorEraserEnabled && cell.style.backgroundColor !== "azure") {
        cell.style.backgroundColor = "azure";
      }
    }
  gridCells.forEach(function(cell) {
    cell.addEventListener("click", function() {
      colorCellClick(cell);
    });
  });

// toggling Bucket button
function toggleColorBucket() {
  var cells = document.getElementsByTagName("td");
  // loop through each cell and set its content to selectedColor
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = selectedColor;
  }
}

// toggling Pan Left Button
let panLeftEnabled = false;
let panLeftButton = document.getElementById("panL-button");
panLeftButton.onclick = function() {
  togglePanLeft();
};

// function to shift colors one cell to the left
function togglePanLeft() {
  const grid = document.getElementById("table");
  console.log(table);
  const rows = grid.querySelectorAll("tr");
  // loop through each row and shift the colors
  rows.forEach(function(row) {
    const cells = row.querySelectorAll("td");
    const firstCell = cells[0];
    const lastCell = cells[cells.length - 1];
    const firstCellColor = firstCell.style.backgroundColor;

    for (let i = 0; i < cells.length - 1; i++) {
      const currentCell = cells[i];
      const nextCell = cells[i + 1];
      const currentColor = nextCell.style.backgroundColor;
      currentCell.style.backgroundColor = currentColor;
    }

    lastCell.style.backgroundColor = firstCellColor;
  });
}

// toggling Pan Right Button
let panRightEnabled = false;
let panRightButton = document.getElementById("panR-button");
panRightButton.onclick = function() {
  togglePanRight();
};

// function to shift colors one cell to the right
function togglePanRight() {
  const grid = document.getElementById("table");
  const rows = grid.querySelectorAll("tr");
  
  rows.forEach(function(row) {
    const cells = row.querySelectorAll("td");
    const firstCell = cells[0];
    const lastCell = cells[cells.length - 1];
    const lastCellColor = lastCell.style.backgroundColor;

    for (let i = cells.length - 1; i > 0; i--) {
      const currentCell = cells[i];
      const prevCell = cells[i - 1];
      const currentColor = prevCell.style.backgroundColor;
      currentCell.style.backgroundColor = currentColor;
    }

    firstCell.style.backgroundColor = lastCellColor;
  });
}

// toggling Pan Down Button
let panDownEnabled = false;
let panDownButton = document.getElementById("panD-button");
panDownButton.onclick = togglePanDown;

// function to shift colors one cell down
function togglePanDown() {
  const grid = document.getElementById("table");
  const rows = grid.querySelectorAll("tr");
  const lastRow = rows[rows.length - 1];
  const firstRowColor = rows[0].querySelectorAll("td")[0].style.backgroundColor;

  for (let i = rows.length - 1; i > 0; i--) {
    const currentRow = rows[i];
    const prevRow = rows[i - 1];
    const cells = currentRow.querySelectorAll("td");
    const prevCells = prevRow.querySelectorAll("td");

    for (let j = 0; j < cells.length; j++) {
      const currentCell = cells[j];
      const prevCell = prevCells[j];
      const currentColor = prevCell.style.backgroundColor;
      currentCell.style.backgroundColor = currentColor;
    }
  }

  const firstRow = rows[0];
  const firstRowCells = firstRow.querySelectorAll("td");
  for (let i = 0; i < firstRowCells.length; i++) {
    firstRowCells[i].style.backgroundColor = firstRowColor;
  }
}

// toggling Pan Up Button
let panUpEnabled = false;
let panUpButton = document.getElementById("panU-button");
panUpButton.onclick = togglePanUp;

// function to shift colors one cell up
function togglePanUp() {
  const grid = document.getElementById("table");
  const rows = grid.querySelectorAll("tr");
  const firstRow = rows[0];
  const lastRow = rows[rows.length - 1];
  const lastRowColor = lastRow.querySelectorAll("td")[0].style.backgroundColor;

  for (let i = 0; i < rows.length - 1; i++) {
    const currentRow = rows[i];
    const nextRow = rows[i + 1];
    const cells = currentRow.querySelectorAll("td");
    const nextCells = nextRow.querySelectorAll("td");

    for (let j = 0; j < cells.length; j++) {
      const currentCell = cells[j];
      const nextCell = nextCells[j];
      const currentColor = nextCell.style.backgroundColor;
      currentCell.style.backgroundColor = currentColor;
    }
  }

  const lastRowCells = lastRow.querySelectorAll("td");
  for (let i = 0; i < lastRowCells.length; i++) {
    lastRowCells[i].style.backgroundColor = lastRowColor;
  }
}

// toggle Clear Canvas Button
function toggleColorDelete() {
  // get all the table cells
  var cells = document.getElementsByTagName("td");
  // loop through each cell and set its backgroundColor to azure
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "azure";
  }
}