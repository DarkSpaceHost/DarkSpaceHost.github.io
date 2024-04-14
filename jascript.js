$(document).ready(function () {

    var video = document.getElementById("logo-video");

    video.addEventListener("ended", function () {

        document.getElementById("logo-video-container").style.display = "none";
    });

    $('#pagepiling').pagepiling({
        menu: '#myMenu',
        anchors: ['home', 'specifications', 'gallery', 'contact'],
        afterLoad: function (origin, destination, direction) {

            if (destination.anchor === 'home') {
                $('.main-content').hide();
            } else {
                $('.main-content').show();
            }


            if (destination.anchor === 'contact') {

            }
        }
    });


    $("form").submit(function (event) {
        event.preventDefault();


        if (validateForm()) {

            alert("We will contact you shortly, " + $("#name").val());

            $(this).trigger("reset");
        }
    });

    function validateForm() {

        var name = $("#name").val();
        if (!name) {
            alert("Please enter your name.");
            return false;
        }

        return true; 
    }

    var specificationsContainer = $('.specification-items');

    specifications.forEach(function (specification) {
        var item = $('<div class="specification-item">');
        item.append('<img src="' + specification.image + '" alt="' + specification.text + '">');
        item.append('<p>' + specification.text + '</p>');
        specificationsContainer.append(item);
    });


    var animatedSections = ['.main-section', '.specification-items', '.gallery'];
    var currentAnimatedSection = 0;

    function applyGradientAnimation() {
        $(animatedSections[currentAnimatedSection]).addClass('animated-section');
        setTimeout(function () {
            $(animatedSections[currentAnimatedSection]).removeClass('animated-section');
            currentAnimatedSection = (currentAnimatedSection + 1) % animatedSections.length;
            applyGradientAnimation();
        }, 15000); 
    }


    applyGradientAnimation();


    video.play();
});
