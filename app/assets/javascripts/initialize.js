jQuery(document).ready(function() {
    App.init();
    App.initCounter();
    App.initParallaxBg();
    LoginForm.initLoginForm();
    ContactForm.initContactForm();
    OwlCarousel.initOwlCarousel();
    StyleSwitcher.initStyleSwitcher();
    RevolutionSlider.initRSfullScreen();
    CubePorfolioObj.initCubePortfolio();
    ProgressBar.initProgressBarHorizontal();

    var wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       false,       // default
            live:         true        // default
        }
    )
    wow.init();


    var myCanvas = $('#myCanvas');
    myCanvas[0].width = $('#myCanvasContainer').width();
    myCanvas[0].height = $('#myCanvasContainer').height();
    if(!myCanvas.tagcanvas({
            textColour: '#ff0000',
            outlineColour: '#fab31c',
            wheelZoom: false,
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.07
        },'tags')) {
        // something went wrong, hide the canvas container
        $('#myCanvasContainer').hide();
    }
});