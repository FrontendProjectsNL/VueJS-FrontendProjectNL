/*

*/
window.history.forward(1);
const overMijParagraph = document.getElementById('over-mij-paragraph');

const overMijParagraphObserverCallback = (overMijParagraphToWatch, overMijParagraphObserver ) => {
    /*je MOET hier een loop gebruiken: ookal heb je 1 paragraaf: */
    overMijParagraphToWatch.forEach(element => {
        if(element.isIntersecting) {
            //console.log("Hallo!");
            //console.log(element.target);
            console.log(element.target);
            element.target.classList.add('show');
            overMijParagraphObserver.unobserve(element.target);
        }
    
    });
    
}
const overMijParagraphObserverOPtions = {
    treshhold: .7
}

const overMijParagraphObserver = new IntersectionObserver(overMijParagraphObserverCallback, overMijParagraphObserverOPtions);
overMijParagraphObserver.observe(overMijParagraph);

/*
======================
Intersection Observer skills:
=========================
*/

const skills = document.getElementById('skills-bar');

const skillsObserverCallback = (skillsToWatch, skillsObserver ) => {
    /*je MOET hier een loop gebruiken: ookal heb je 1 paragraaf: */
    skillsToWatch.forEach(element => {
        if(element.isIntersecting) {
            //console.log("Hallo!");
            //console.log(element.target);
            console.log('Skills gedeelte, element target: ', element.target);
           
             element.target.classList.add('showSkills');
             console.log('Skills gedeelte, element target: ', element.target);
           
             skillsObserver.unobserve(element.target);
        }
    
    });
    
}
const skillsObserverOPtions = {
    treshhold: .7
}

const skillsObserver = new IntersectionObserver(skillsObserverCallback, skillsObserverOPtions);
skillsObserver.observe(skills);


/*
==================================

Intersection Observer id="progress-line-span":

========================================
*/

const progressBar = document.querySelectorAll('#progress-line-span');

const progressBarObserverCallback = (progressBarToWatch, progressBarObserver ) => {
    /*je MOET hier een loop gebruiken: ookal heb je 1 paragraaf: */
    progressBarToWatch.forEach(element => {
        if(element.isIntersecting) {
            //console.log("Hallo!");
            //console.log(element.target);
            console.log('progressBar gedeelte, element target: ', element.target);
            element.target.classList.add('showAnimation');
            progressBarObserver.unobserve(element.target);
        }
    
    });
    
}
const progressBarObserverOPtions = {
    treshhold: .7
}

const progressBarObserver = new IntersectionObserver(progressBarObserverCallback, progressBarObserverOPtions);
progressBar.forEach(bar => progressBarObserver.observe(bar));
 




// Mijn Slideshow:
//=================
const Slider = document.querySelector(".slider");
const allBtns = document.querySelectorAll(".btn");
const allSlideImgs = document.querySelectorAll(".img");

let index = 0;
let imgWidth = allSlideImgs[index].clientWidth;

window.addEventListener('resize', () => {
	imgWidth = allSlideImgs[index].clientWidth;
})

function slide() {
	Slider.style.transition = 'transform 500ms ease-in-out';
	Slider.style.transform = 'translateX(' + (-imgWidth * index) + 'px)';
}

function btnClick() {

	if (this.id === 'prev') {
    console.log("prev. index is: ", index);
    console.log("allSlideImgs.length is: ", allSlideImgs.length);
		if(index >= 1) {
      console.log('index-- is nu: ', index);
    index--;
    }
    
	}
	else {
    console.log("next. index is: ", index);
    console.log("allSlideImgs.length is: ", allSlideImgs.length);
		if( index <= (allSlideImgs.length-2) ) {
      index++;
      console.log("index++ is nu: ", index);
    }
	}
	this.disabled = true
	slide();
}

Slider.addEventListener('transitionend', () => {

	allBtns[0].disabled = false
	allBtns[1].disabled = false
})

allBtns.forEach(btn => btn.addEventListener('click', btnClick));


// ============================
// Mijn Welkom tekst:
//============================
consoleText(['Welkom!', 'Ik ben Ehsan.', 'Een front-end developer.', 'Gespecialiseerd in o.a. HTML, CSS en Javascript.' ], 'welkom-tekst',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'welkom-test-underscore hidden'
      visible = false;

    } else {
      con.className = 'welkom-tekst-underscore'

      visible = true;
    }
  }, 400)
}

/*
=======================
removing part of header:
======================
*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   document.getElementById("logo-and-social-media").style.cssText = "display:none;opacity:0;transition:opacity 1s ease-out;";
     
  } else {
    document.getElementById("logo-and-social-media").style.cssText = "opacity: 1; display: flex";
     
  }
}

