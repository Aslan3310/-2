function buildLaptop() {
    var processor = document.getElementById('processor').value;
    var graphicsCard = document.getElementById('graphicsCard').value;
    var ram = document.getElementById('ram').value;

    var isCompatible = true;

    if (isCompatible) {
        alert('Ноутбук собран успешно!\nПроцессор: ' + processor + '\nВидеокарта: ' + graphicsCard + '\nОперативная память: ' + ram);
    } else {
        alert('Невозможно собрать ноутбук из-за несовместимости компонентов.');
    }
}




{
    const dragstart = function(event) {
      event.dataTransfer.setData("text", event.target.id);
    };
    const dragover = function(event) {
      if(event.target.nodeName.toLowerCase() === "img") {
        return true;
      }
      event.preventDefault();
    }
    const drop = function(event) {
      event.preventDefault();
      let imageId = event.dataTransfer.getData("text");
      event.target.appendChild(document.getElementById(imageId));
    };

    const cells = document.getElementsByClassName("col");
    Array.from(cells).forEach((element) => {
      element.addEventListener('dragover',dragover);
      element.addEventListener('drop',drop);
    });      

    const images = document.getElementsByTagName("img");
    Array.from(images).forEach((element) => {
      element.addEventListener('dragstart',dragstart);
    });
  }
  const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearPuzzle);

function clearPuzzle() {
const puzzle = document.querySelector(".puzzle");
const cells = puzzle.getElementsByClassName("col");


Array.from(cells).forEach((cell) => {
  const image = cell.querySelector("img");
  if (image) {
    document.querySelector(".images").appendChild(image);
  }
});
}