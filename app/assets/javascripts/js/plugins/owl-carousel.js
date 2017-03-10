var OwlCarousel = function () {

    return {

        //Owl Carousel
        initOwlCarousel: function () {
            //Owl Slider v1
            jQuery(".owl-slider").owlCarousel({
                itemsDesktop: [1000,5],
                itemsDesktopSmall: [900,4],
                itemsTablet: [600,3],
                itemsMobile: [479,2]
            });

            //Owl Slider v2
            jQuery(".owl-slider-v2").owlCarousel({
                itemsDesktop : [1000,5],
                itemsDesktopSmall : [900,4],
                itemsTablet: [600,3],
                itemsMobile: [479,2],
                slideSpeed: 1000
            });
            // Custom Navigation Events
            jQuery(".next-v2").click(function(){
                owl.trigger('owl.next');
            })
            jQuery(".prev-v2").click(function(){
                owl.trigger('owl.prev');
            })

            //Owl Slider v3
            jQuery(".owl-slider-v3").owlCarousel({
                items: 9,
                autoPlay: 5000,
                itemsDesktop: [1000,5],
                itemsDesktopSmall: [900,4],
                itemsTablet: [600,3],
                itemsMobile: [300,2]
            });


            //Owl Slider v4
            jQuery(".owl-slider-v4").owlCarousel({
                items: 3,
                itemsDesktop: [1000,3],
                itemsTablet: [600,2],
                itemsMobile: [479,1]
            });

            //Owl Twitter v1
            jQuery(".owl-twitter-v1").owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 10000
            });

            //Owl Testimonials v1
            jQuery(".owl-ts-v1").owlCarousel({
                slideSpeed: 600,
                singleItem: true,
                navigation: true,
                navigationText: ["",""]
            });

            //Owl Clients v1
            jQuery(".owl-clients-v1").owlCarousel({
                items: 7,
                autoPlay: 5000,
                itemsDesktop: [1000,5],
                itemsDesktopSmall: [900,4],
                itemsTablet: [600,3],
                itemsMobile: [300,2]
            });

            //Owl Clients v2
            jQuery(".owl-clients-v2").owlCarousel({
                items: 5,
                autoPlay: 10000,
                itemsDesktop: [1000,5],
                itemsDesktopSmall: [900,4],
                itemsTablet: [600,3],
                itemsMobile: [479,1]
            });

            jQuery(".owl-services").owlCarousel({
                singleItem: true,
                navigation: true,
                pagination: false,
                slideSpeed : 800,
                autoPlay: 2000,
                stopOnHover: true,
                navigationText: ['<i class="fa fa-chevron-left fa-2x"></i>',
                    '<i class="fa fa-chevron-right fa-2x"></i>']
            });

            jQuery(".owl-team").owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 3000,
                pagination: false,
                transitionStyle: "fade"
            });
        }

    };

}();

/*
jQuery(".owl-next").click(function(){
    $('.owl-services').trigger('owl.next');
})
jQuery(".owl-prev").click(function(){
    $('.owl-services').trigger('owl.prev');
})
*/
