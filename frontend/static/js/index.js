import ImcView from './views/ImcView'
import ImcTableView from './views/ImcTableView'
import Person from './domain/Person'

function buildCalculateImc(imcView){

  const person = imcView.observe('person', new Person());

  return function (evt) {
    var heightElem = document.querySelector("#altura");
    var weightElem = document.querySelector("#peso");
  
    if (!heightElem) throw Error("height is required field!");
    if (!weightElem) throw Error("weight is required field!");
  
    person.height = parseFloat(heightElem.value);
    person.weight = parseFloat(weightElem.value);
  }

}

function init(evt) {
  var imcView = new ImcView();
  new ImcTableView();
  var btn = document.querySelector(".data .form button");
  btn.addEventListener("click", buildCalculateImc(imcView));
};

window.onload = init;