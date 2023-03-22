import _ from "lodash";
let parent = document.querySelectorAll(".animate-text");
for (let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px";
}
function component(ele) {
  const element = document.createElement(ele);

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "from webpack"], " ");

  return element;
}

//document.body.appendChild(component("div"));

const renderPage = () => {
  const pre = document.getElementById("app");
  pre.innerHTML = `
  <style>
  /* taken from https://codepen.io/alvarotrigo/pen/rNwvmNb */
  @import url(https://fonts.googleapis.com/css?family=Montserrat:800,200);
body {
  font-family: montserrat;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #1e2134;
  line-height: 1.7;
  color: #fff;
  transform: skewY(-5deg);
}

.bg-text-container {
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  z-index: -999;
}

@keyframes text-scrolling {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0%, 0, 0);
  }
}
.animate-text {
  animation: text-scrolling 20s linear infinite;
  will-change: transform;
  display: block;
  position: relative;
  white-space: nowrap;
}
.animate-text.left {
  animation-direction: reverse;
}

span {
  font-size: 280px;
  color: transparent;
  -webkit-text-stroke: 2px #30442a;
  text-transform: uppercase;
  display: inline-block;
  line-height: 0.75;
  min-width: auto;
  font-weight: 800;
}

.container {
  padding: 30px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}
.container .col {
  max-width: 600px;
  margin: 0;
}

h1 {
  font-size: 90px;
  margin: 0;
}

p {
  font-size: 18px;
  font-weight: 200;
  margin: 0;
}
</style>
  <div class="bg-text-container">
    <div class="animate-text">
      <span>mnichols08 canomogollon&nbsp;</span>
      <span>mnichols08 canomogollon&nbsp;</span>
    </div>
    <div class="animate-text left">
      <span>mnichols08 canomogollon&nbsp;</span>
      <span>mnichols08 canomogollon&nbsp;</span>
    </div>
  </div>
  
  
  
  <div class="container">
    <div class="col">
      <h1>Pair Programming Session 03</h1>
      <p>This app was created for the Chingu Pair Programming session during the week of March 22nd. Our goal is to create a header with animated / dynamic text in the center similer to the functionality found <a href="https://threejs.org/examples/#webgl_geometry_text_shapes" target="_blank">here</a> or <a href="https://codepen.io/alvarotrigo/pen/rNwvmNb" target="blank">this codepen</a> 
      </p>
    </div>
  </div>
  `;
};

renderPage();
