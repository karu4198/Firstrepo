(function($) {
    $(window).load(function() {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent.toLowerCase());
        function adjustStyle(viewPort) {
            var viewPort = $(window).width();
            if (viewPort >= 320 && viewPort <= 480) {
                $('.inner-labels').bxSlider({startSlide: 0, slideWidth: 120, minSlides: 2, maxSlides: 2, pager: false, slideMargin: 25, moveSlides: 1, preloadImages: 'visible', onSliderLoad: function() {
                        $('.home-labels .bx-viewport').css('height', '120px');
                        $('.inner-labels').fadeIn('slow');
                        //$(".home-labels .labels-logo").each(function() { centerImages(this); });
                    }});
                $('.inner-vid').bxSlider({slideWidth: 257, minSlides: 1, maxSlides: 1, pager: false, slideMargin: 25, moveSlides: 1, preloadImages: 'visible', onSliderLoad: function() {
                        $('.feat-vid .bx-viewport').css('height', '171px');
                        $('.inner-vid').fadeIn('slow');
                    }});
                $('.slide-inner').bxSlider({
                    mode: 'fade', slideWidth: 480, minSlides: 1, maxSlides: 1, pager: true, preloadImages: 'all', auto: true, pause: '4000', onSliderLoad: function() {
                        $('#sliderblock .bx-viewport').css('height', '225px');
                        $('#sliderblock .slide-inner').fadeIn('slow');
                    }
                });

            } else if (viewPort >= 481 && viewPort <= 767) {
                $('.inner-labels').bxSlider({startSlide: 0, slideWidth: 120, minSlides: 2, maxSlides: 2, pager: false, slideMargin: 10, moveSlides: 1, preloadImages: 'visible', onSliderLoad: function() {
                        $('.home-labels .bx-viewport').css('height', '120px');
                        $('.inner-labels').fadeIn('slow');
                        //$(".home-labels .labels-logo").each(function() { centerImages(this); });
                    }});
                $('.inner-vid').bxSlider({slideWidth: 257, minSlides: 1, maxSlides: 1, pager: false, slideMargin: 20, moveSlides: 1, preloadImages: 'visible', pause: '5000', onSliderLoad: function() {
                        $('.feat-vid .bx-viewport').css('height', '171px');
                        $('.inner-vid').fadeIn('slow');
                    }});
                $('.slide-inner').bxSlider({
                    mode: 'fade', slideWidth: 600, minSlides: 1, maxSlides: 1, pager: true, preloadImages: 'all', auto: true, pause: '4000', onSliderLoad: function() {
                        $('#sliderblock .bx-viewport').css('height', '325px');
                        $('#sliderblock .slide-inner').fadeIn('slow');
                    }
                });


            } else if (viewPort == 768) {
                $('.inner-vid').css('display', 'block');
                $('.inner-labels').css('display', 'block');
                $('.inner-labels').bxSlider({startSlide: 0, slideWidth: 120, minSlides: 3, maxSlides: 3, pager: false, slideMargin: 10, moveSlides: 1, preloadImages: 'visible', infiniteLoop: false, hideControlOnEnd: true, onSliderLoad: function() {
                        $('.home-labels .bx-viewport').css('height', '120px');
                        $('.inner-labels').fadeIn('slow');
                        //$(".home-labels .labels-logo").each(function() { centerImages(this); });
                    }});
                $('.inner-vid').bxSlider({slideWidth: 257, minSlides: 2, maxSlides: 2, pager: false, slideMargin: 15, moveSlides: 1, preloadImages: 'visible', infiniteLoop: false, hideControlOnEnd: true, onSliderLoad: function() {
                        $('.feat-vid .bx-viewport').css('height', '171px');
                        $('.inner-vid').fadeIn('slow');
                    }});

                $('.slide-inner').bxSlider({
                    mode: 'fade', slideWidth: 1100, minSlides: 1, maxSlides: 1, pager: true, preloadImages: 'all', auto: true, pause: '4000', onSliderLoad: function() {
                        $('#sliderblock .bx-viewport').css('height', '325px');
                        $('#sliderblock .slide-inner').fadeIn('slow');
                    }
                });

            } else if (viewPort > 768) {
                $('.inner-labels').css('display', 'block');
                $('.inner-labels').bxSlider({
                    startSlide: 0,
                    slideWidth: 120,
                    minSlides: 6,
                    maxSlides: 6,
                    pager: false,
                    slideMargin: 20,
                    moveSlides: 1,
                    preloadImages: 'visible',
                    infiniteLoop: false,
                    hideControlOnEnd: true,
                    onSliderLoad: function() {
                        $('.home-labels .bx-viewport').css('height', '120px');
                        //$('.inner-labels').fadeIn('slow');
                        $(".home-labels .labels-logo").each(function() {
                            centerImages(this);
                        });
                    }
                });
                $('.inner-vid').css('display', 'block');
                $('.inner-vid').bxSlider({
                    slideWidth: 257,
                    minSlides: 3,
                    maxSlides: 3,
                    pager: false,
                    slideMargin: 15,
                    moveSlides: 1,
                    preloadImages: 'visible',
                    infiniteLoop: false,
                    hideControlOnEnd: true,
                    onSliderLoad: function() {
                        $('.feat-vid .bx-viewport').css('height', '171px');
                        $('.inner-vid').fadeIn('slow');
                    }
                });

                $('.slide-inner').bxSlider({
                    mode: 'fade',
                    slideWidth: 1340,
                    minSlides: 1,
                    maxSlides: 1,
                    pager: true,
                    auto: true, pause: '5000',
                    preloadImages: 'visible',
                    onSliderLoad: function() {
                        if (viewPort > 768 && viewPort <= 1024) {
                            $('#sliderblock .bx-viewport').css('height', '357px');
                        } else if (viewPort > 1024 && viewPort <= 1280) {
                            $('#sliderblock .bx-viewport').css('height', '440px');
                        } else {
                            $('#sliderblock .bx-viewport').css('height', '475px');
                        }
                        $('#sliderblock .slide-inner').fadeIn('slow');
                    }
                });
            }
        }
        adjustStyle($(this).width());


        var sliderHeight = 100;

        function moreSlider(current) {
            $('.rss-item .text').each(function() {
                var current = $(this);
                current.attr("data-height", current.height());
                if (current.height() > sliderHeight) {
                    current.css("height", sliderHeight);
                    current.parent().find(".rss-button a").html('Read More &raquo;');
                    current.parent().find(".rss-button").click(function(e) {
                        e.preventDefault();
                        openSlider(current);
                    });
                }
            });
        }
        moreSlider();

        function openSlider(slide) {
            var open_height = slide.attr("data-height") + "px";
            slide.animate({"height": open_height}, {duration: "normal"}).css('margin', '0 0 20px');
            slide.parent().find(".rss-button a").html('Close').addClass('active');
            slide.parent().children(".rss-button").click(function(e) {
                e.preventDefault();
                closeSlider(slide);
            });
        }

        function closeSlider(slide) {
            slide.animate({"height": sliderHeight + "px"}, {duration: "normal"}).css('margin', '0');
            slide.parent().find(".rss-button a").html('Read More &raquo;').removeClass('active');
            slide.parent().children(".rss-button").click(function(e) {
                e.preventDefault();
                openSlider(slide);
            });
        }
        if (dontHide != "true")
            $('#feed .rssfeed .rss-item, #news-content .rssfeed .rss-item ').hide();
        $('#feed .rssfeed .rss-item').slice(0, 5).show();
        $('#news-content .rssfeed .rss-item').slice(0, 5).show();
        $('.loadmore').click(function(e) {
            e.preventDefault();
            $('#feed .rssfeed .rss-item:hidden').slice(0, 5).fadeIn();
            $('#news-content .rssfeed .rss-item:hidden').slice(0, 5).fadeIn();
            if ($('#feed .rssfeed .rss-item:hidden').length == 0) {
                $('#feed .loadmore a').html('No More News.');
            }
            if ($('#news-content .rssfeed .rss-item:hidden').length == 0) {
                $('#news-content .loadmore a').html('No More News.');
            }
        });

        $('#tab-container').easytabs();

        $('.vid-container').fitVids();

        function centerImages(image) {
            var parent_height = $(image).parent().height();
            var image_height = $(image).height();
            var top_margin = (parent_height - image_height) / 2;
            $(image).css('margin-top', top_margin);
        }

        if (window.location.href.indexOf("?open=true&thankyou") > -1) {
            $.fancybox.open([{href: '.th', type: 'inline'}], {padding: 5, afterClose: function() {
                    $('.th').remove();
                }});
        }

        function toTop() {
            var toTop = $('#totop').css({opacity: 0});
            $(window).on('scroll', function() {
                if (($(window).scrollTop() + $(window).height()) == $(document).height()) {
                    toTop.stop(true).animate({opacity: 1}, 250);
                } else if ($(window).width() === 320 && isMobile) {
                    $("#totop").css({opacity: 1});
                } else {
                    toTop.stop(true).animate({opacity: 0}, 250);
                }
            });
        }
        $(window).load(toTop());

        $('#totop .active').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(".socials a").each(function() {
            $(this).on("mouseenter", function() {
                console.log('over');
                $(this).addClass('over');
                $(this).siblings().addClass('grey');
            });
        })
        $(".socials a").each(function() {
            $(this).on("mouseleave", function() {
                $(this).removeClass('over');
                $(this).siblings().removeClass('grey');
            });
        })
    });

    $('.nav-menu>li.drop>a').on('click', function(e) {
        e.preventDefault();
        $(this).parent('li').toggleClass('open');
    });

    $(".nav-menu>li:not(.drop)>a").focus(function() {
        $('.nav-menu li.drop').removeClass('open');
    });

	// ADA
	$(window).on('load', function() {
		var slides = $('#sliderblock .slide');
		slides.each(function(index) {
			var title = $(this).find('.entry-title').text();
			var new_index = index + 1;
			$('#sliderblock .bx-pager .bx-pager-item:nth-child('+new_index+') a').text(title);
		});
	});

})(jQuery);

/*var fr = document.createElement('script');
fr.setAttribute("type", "text/javascript");
fr.setAttribute("src", "http" + (document.location.protocol === "https:" ? "s://s" : "://") + "assets.sonymusicd2c.com/crm/scripts/sFV.js");
if (typeof fr != "undefined") {
    document.getElementsByTagName("head")[0].appendChild(fr);
}*/

function getIEV() {
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).

    var rv = 9; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

if (getIEV() >= 10) {

    $('#header-block').css({'height': '475px'});
    $('#sliderblock').css({'position': 'absolute', 'top': '0px', 'margin-top': '0px'});
}
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=270065846467161";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

