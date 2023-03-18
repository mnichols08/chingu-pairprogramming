const button = document.querySelector('button');

button.addEventListener('click', generateLorem);
const length = () => document.querySelector("#inputNumber input").value;
const type = () => document.querySelector('input[name="radios"]:checked').value;
const static = () => document.querySelector(`input[type="checkbox"]`).checked;



function generateLorem(e) {
  e.preventDefault();
  console.log(fetchLorem());
}

const fetchLorem = async () => {

  
  return await fetch(`http://localhost:3000/${length()}/${type()}/${static()}`)
    .then(data => data.json())
    .then(obj => updateUi(obj))
    }

const updateUi = (lorem) => {
  const { paragraph, type, static } = lorem;
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















// async function fetchIpsum() {
        
// }

// async function generateLorem(e) {

//     e.preventDefault();
//     const inputNumber = document.querySelector("#inputNumber input").value;
//     const type = document.querySelector('input[name="radios"]:checked').value;
//     const checkbox = document.querySelector(`input[type="checkbox"]`).checked;

//     //const fetchIpsum = async () => await fetch(`http://127.0.0.1:3000/${length}/${static}`).then(data => data.json()).then(obj => obj);
//     const data = await fetchIpsum().then(data => data)
//         updateUi(data)
    
// }

// const updateUi = (data) => {
//         const { bytes, type, string } = data;
//         let obj = {};
//         const interfaceFrame = document.querySelector('#interface-frame');
        
//         console.log(type)
//         interfaceFrame.innerText = '';
//         if (type == 'paragraphs') {
                
//                 string.split('\n').map(item => {
//                         const p = document.createElement('p');
//                         p.innerText = item
//                         interfaceFrame.append(p)
//                 });
                
                
//         }
//         if (type == 'words') {
//                 const p = document.createElement('p');
//                 p.innerText = string
//                 interfaceFrame.append(p)                
//         } 
//         if (type == 'bytes') {
//                 console.log(bytes)
//                 const p = document.createElement('p');
//                 p.innerText = string.slice(0, document.querySelector('#inputNumber input').value);
//                 interfaceFrame.append(p)                
//         }
//         if (type == 'lists') {
//                 const list = document.createElement('ul');
                 
//                 string.split('. ').map(item => {
//                         const li = document.createElement('li');
//                         li.innerText = item
//                         list.append(li)
//                         interfaceFrame.append(list)  
//                 });
//         }   
             
      
// }
