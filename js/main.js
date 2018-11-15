$(document).ready(function () {

    function animation() {
        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $(".animation").each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 100) {
                var animacija = $(this).attr("data-animation");
                $(this).addClass(animacija);
            }
        });
    }

    animation();
    counter();



    $(window).scroll(function () {
        animation();
        counter();
    });

    //counter
    function counter() {
        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();
        var position = $('.my-skills').offset().top;
        if (position < scrollDown + windowHeight - 50) {
            $('.counter').each(function () {
                var $this = $(this),
                        countTo = $this.attr('data-count');

                $({countNum: $this.text()}).animate({
                    countNum: countTo
                },
                        {

                            duration: 2000,
                            easing: 'linear',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }
                        });
            });
        }

    }

    //hide and show let's go btn
    $(".enter").hide();

    function showBtn() {
        $(".enter").slideDown();
    }

    setTimeout(showBtn, 15000);

    //EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });



    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll >= 400) {
            $('.skillbar').skillBars({

                speed: 2000,
                classes: {
                    skillBarBar: '.skillbar-bar'
                }
            });
        }

    });

    //ADD HEADER STYLE ON SCROOL
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll > 400) {
            $('nav').css({'top': '0px', 'background': 'rgba(0,0,0,0.7)'});
        } else {
            $('nav').css({'top': '-100px'});
        }
    });


    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".about").fadeOut(1000);
        } else {
            $(".about").fadeIn(1000);
        }
    });
    
    
    function complateClass(){
        $('.preloader').addClass('complate');
    }
    
    $(window).on('load', setTimeout(complateClass, 2000));
    
      
    
    function hidePreloader (){
        $('.preloader').hide();
    }
    
    setTimeout(hidePreloader, 5000);

});









//Type effect
const TypeWriter = function (textElement, words, wait = 3000) {
    this.textElement = textElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
};

//Type Method
TypeWriter.prototype.type = function () {
    //Current index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullText = this.words[current];

    // Check if deleteing
    if (this.isDeleting) {
        //Remove char
        this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
        //Add char
        this.txt = fullText.substring(0, this.txt.length + 1);
    }

    //Insert txt element
    this.textElement.innerHTML = `<h2 class="txt">${this.txt}</h2>`;

    //Type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    //if word is complate
    if (!this.isDeleting && this.txt === fullText) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
};

//document.addEventListener("DOMContentLoaded", init);
////Init App

function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    //init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

setTimeout(init, 7000);

// HAMBURGER

var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t);
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}




