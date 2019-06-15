// Select color input
// Select size input
var height;
var width;
var color=document.querySelector('#colorPicker');
var box = document.querySelector('#pixelCanvas');


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
  console.log('Height: '+height+' Width: '+width);
})

function makeGrid(h, w){
  $('tr').remove(); //remove any previously created grid, any table rows, remove them
  //row loop
  for (var x=0; x<=h; x++){
    let row = box.insertRow(x);
    for (var y=0; y <= w; y++) {
      let cell = row.insertCell(y);
      cell.addEventListener("click",
        function (evt){
          console.log('table was clicked');
          cell.style.backgroundColor=color.value;
        });

    }
  }

}

//changed heading color
const heading=document.querySelector('h1');
heading.style.color='blue';
