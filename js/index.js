
// function navRouter(i) {
//     if (i.text() === "Keith Underwood") {
//       navAnimation('#0');
//       showDefine();
//     } else if (i.text() === "Projects") {
//       navAnimation('#1');
//       showProjects();
//     } else {
//       navAnimation('#2');
//       showAbout();
//     }
//   }
$('.nav-link, .project-btn').click(function() {
    var anchor = $(this).attr("dest");
    // $('.link-wrap').removeClass('visible');

    // $('nav span').removeClass('active');
    $("nav").find('[dest="'+ anchor +'"]').addClass('active');

    $('html, body').animate({
      scrollTop: $('#' + anchor).offset().top
    }, 400);
});

$( document ).ready(function() {
    console.log('ready')
    // $(".nav-link").on("click", function( e ) {
    
    //     e.preventDefault();
    
    //     $("body, html").animate({ 
    //         scrollTop: $( $(this).attr('href') ).offset().top 
    //     }, 600);
    //     console.log('ready')
    
});