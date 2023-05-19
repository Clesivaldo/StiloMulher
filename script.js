$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.nav-bar').addClass("sticky");
        }else{
            $('.nav-bar').removeClass("sticky");
        }if(this.scrollY > 500){
            $('.scrool-up-btn').addClass("show");
        }else{
            $('.scrool-up-btn').removeClass("show");
        }
    });

    const btn = document.getElementById("btnTopo")
    btn.addEventListener("click", function(){
        window.scrollTo(0,0)
    })

    document.addEventListener('scroll',ocultar)

    function ocultar(){
        if(window.scrollY > 10){
            btn.style.display = "flex"
        } else {
            btn.style.display = "none"
        }
    }

    ocultar()

    var typed = new Typed(".typing", {
        strings:["Desenvolvedor","Designer","Freelancer","Programador"],
        typedSpeed:100,
        backSpeed:60,
        loop:true
    });

    
$('.menu-btn').click(function(){
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }

    });
});



$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }



    

});


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu .btn-close');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon .btn-menu').src = "image/menu_white_36dp.svg" class="fa fa-bars fa-lg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon .btn-menu').src = "image/menu_white_36dp.svg" class="fa fa-times";
    }
}
$(".btn-close").click(function() {
  $(".btn-close").hide('open');
});


$(".mobile-menu-icon").click(function() {
  $(".btn-close").toggle('open');
});





$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPauser:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
    
});

