$(function () {
    // start header section 
    $(".mobile-menu-icon").click(function () {
        $(".header-links").slideToggle(400);
    });
    // end header section 
    // start landing section 
    var Swipes = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    // end landing section 
    // start carousel section 
    var $sliderCarousel = $('.carousel-section .carousel').flickity({
        autoPlay: 2000,
        wrapAround: true,
        pauseAutoPlayOnHover: false,
        contain: true,
        prevNextButtons: false,
        pageDots: false,
    });
    $sliderCarousel.on(
        {
            'change.flickity': function () {
                var source = $(".carousel-cell[aria-hidden!='true']").children().attr("data");
                $(".a111").attr("src", source);

            },
        }
    );
    // start carousel section 
    // start filter image slider
    var btnFilter = $('main .filter-container .right-filter .filter-top button')
    $(btnFilter).click(function () {
        $(this).addClass('active').siblings().removeClass("active")
        var filtervalue = ($(this).attr("data-tap"))
        //filter with add and remove classes
        var imageColumn = $('')
        $('main .filter-container .right-filter .filter-image .filter-area[data-product="' + filtervalue + '"]').addClass("active").siblings().removeClass("active");
        // $(imageColumn).children('div').filter("." + filtervalue).addClass("active").siblings().removeClass("active");
    });
    // end filter image slider

    // start footer section 
	if ($(window).width() <= 1200) {
		$("li").click(function () {
			// ul in this(li) slider effect
			$("ul", this).slideToggle();
			$(".fa-chevron-down", this).toggleClass("rotate");
			$(this).toggleClass("background");

			//check for other slidetoggle and closed them
			$(this).siblings().find("ul.footer-content").slideUp(function () {
				$(this).siblings(".fa-chevron-down").removeClass("rotate");
				$(this).parents("li.footer-main-item").removeClass("background");
			});
		});
	}
    // start footer section 






















});