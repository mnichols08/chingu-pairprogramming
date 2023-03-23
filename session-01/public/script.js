const button = document.querySelector('button');

button.addEventListener('click', generateLorem);
const length = () => document.querySelector("#inputNumber input").value;
const type = () => document.querySelector('input[name="radios"]:checked').value;
const lorem = () => document.querySelector(`input[type="checkbox"]`).checked;



function generateLorem(e) {
  e.preventDefault();
  fetchLorem();
}

const fetchLorem = async () => { 
  return await fetch(`/${length()}/${type()}/${lorem()}`)
    .then(data => data.json())
    .then(obj => updateUi(obj))
    }

const updateUi = (lorem) => {
  const { paragraph, type } = lorem;
  const anchor = document.getElementById("interfaceUpdate");
  anchor.innerHTML = "";
  if (type === "paragraphs") {
    paragraph.split("\n").map(item => {
      const p = document.createElement("p");
      p.innerText = item;
      anchor.append(p);
    })
  } 
  if (type === "words") {
    const p = document.createElement('p');
    p.innerText = paragraph;
    anchor.append(p);
  }
  if (type === 'bytes') {
    const p = document.createElement('p');
    console.log(paragraph)
    p.innerText = paragraph.slice(0, document.querySelector('#inputNumber input').value);
    anchor.append(p)                
}
if (type === 'lists') {
    const list = document.createElement('ul');
    paragraph.split('. ').map(item => {
            const li = document.createElement('li');
            li.innerText = item
            list.append(li)
            anchor.append(list)  
    });
} 
}