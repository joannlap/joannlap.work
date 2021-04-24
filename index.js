var shooting = false;
var target;
var mousex;
var mousey;
var timer;

var links = document.querySelectorAll(".hoverjo");

links.forEach(function (eenLink) {
  eenLink.addEventListener("mouseover", function (event) {
    updateDisplay(event);
    shooting = true;
    target = this;
    shoot();
  });

  eenLink.addEventListener("mouseout", function () {
    shooting = false;
    target = "";
    clearTimeout(timer);
  });

  function updateDisplay(event) {
    mousex = event.pageX;
    mousey = event.pageY;
  }

  eenLink.addEventListener("mousemove", updateDisplay, false);
});

function shoot() {
  let joannie;

  let emoji;

  let deltax;
  let deltay;
  let richting;
  let rotatie;
  let duur;
  let posx;
  let posy;


  joannie = document.createElement("img");
  joannie.src = "img/confetti.png";
  joannie.classList.add("joannie");

  deltax = Math.random() * 6 - 3;
  deltay = Math.random() * 3 + 0;
  if (Math.random() < 0.5) {
    if (deltax > 0) {
      richting = -1;
    } else {
      richting = 1;
    }
  } else {
    if (deltax > 0) {
      richting = -1;
    } else {
      richting = 1;
    }
  }
  rotatie = Math.random() * 3 + 1;
  duur = Math.random() * 1 + 3;

  joannie.style.setProperty("--deltax", deltax);
  joannie.style.setProperty("--deltay", deltay);
  joannie.style.setProperty("--richting", richting);
  joannie.style.setProperty("--rotatie", rotatie);
  joannie.style.setProperty("--duur", duur);
  joannie.style.setProperty("--posx", mousex);
  joannie.style.setProperty("--posy", mousey);

  joannie.addEventListener("animationend", function () {
    this.remove();
  });
  document.body.prepend(joannie);

  timer = setTimeout(function () {
    if (shooting) {
      shoot();
    }
  }, 25);
}

// Bron: BIG SHOUTOUT TO Sanne 't Hooft