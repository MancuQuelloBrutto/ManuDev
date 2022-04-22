//Text Animated
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
 
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
 
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
 
    var that = this;
    var delta = 200 - Math.random() * 100;
 
    if (this.isDeleting) { delta /= 2; }
 
    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }
 
    setTimeout(function() {
    that.tick();
    }, delta);
};
 
window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
//Text Animated
 
//Big Title
var home = document.querySelector(".home2")
var home1 = document.querySelector(".home")
 
home.addEventListener("mouseover",()=>{
        home1.style.display = "flex";
        setTimeout(()=>{
                home1.style.opacity = 1
        }, 150)   
})
home.addEventListener("mouseleave",()=>{
        home1.style.opacity = 0
        setTimeout(()=>{
                home1.style.display = "none";
        }, 150)
})
 
 
 
var projects = document.querySelector(".projects2")
var projects1 = document.querySelector(".projects")
 
projects.addEventListener("mouseover",()=>{
        projects1.style.display = "flex";
        setTimeout(()=>{
                projects1.style.opacity = 1
        }, 150)
})
projects.addEventListener("mouseleave",()=>{
        projects1.style.opacity = 0
        setTimeout(()=>{
                projects1.style.display = "none";
        }, 150)
})
 
 
 
var contacts = document.querySelector(".contacts2")
var contacts1 = document.querySelector(".contacts")
 
contacts.addEventListener("mouseover",()=>{
        contacts1.style.display = "flex";
        setTimeout(()=>{
                contacts1.style.opacity = 1
        }, 150)
})
contacts.addEventListener("mouseleave",()=>{
        contacts1.style.opacity = 0
        setTimeout(()=>{
                contacts1.style.display = "none";
        }, 150)
})
//Big Title
 
//Loader
const loader = document.querySelector(".loader")
const header = document.querySelector(".header")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")
 
function init(){
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';
 
    header.style.display = 'flex';
    main.style.display = 'block';
    setTimeout(() => header.style.opacity = 1, 500)
    setTimeout(() => main.style.opacity = 1, 500)
    setTimeout(() => footer.style.opacity = 1, 500)
  }, 2000)
}
 
init()
//Loader
 
//Loader Stop
 
if (document.title == "ManuDev | Home"){
        if (loader.element.style.display == 'none'){
                alert("Work!")
                
        }
        else{
                document.querySelector(".home2").href = "index.html"
        }
}
 
//Loader Stop