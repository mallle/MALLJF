"use strict";

console.log('\'Allo \'Allo!');
// self made swiper

// $('.swiper-button-next').click(function() {

//   // $(.swiper-wrapper).css(background) "Handler for .click() called." );
// });

// $('.swiper-button-prev').click(function() {
// 	alert( "Handler for .click() called." );
// });

// $(function () {
// 	$('#addNext').on("click", function(){
// 		$('.swiper-slide').html()
// 	});
// });

// jQuery(document).ready(function ($) {

// 	var slideCount = $('#slider ul li').length;
// 	var slideWidth = $('#slider ul li').width();
// 	var slideHeight = $('#slider ul li').height();
// 	var sliderUlWidth = slideCount * slideWidth;

// 	$('#slider').css({ width: slideWidth, height: slideHeight });

// 	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

//     $('#slider ul li:last-child').prependTo('#slider ul');

//     function moveLeft() {
//         $('#slider ul').animate({
//             left: + slideWidth
//         }, 200, function () {
//             $('#slider ul li:last-child').prependTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };

//     function moveRight() {
//         $('#slider ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('#slider ul li:first-child').appendTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };

//     $('a.control_prev').click(function () {
//         moveLeft();
//     });

//     $('a.control_next').click(function () {
//         moveRight();
//     });

// });     


// var indicador = 0;
// $(document).on('ready', function() {
//   $('.swiper-button-prev').click(
//   	$('.slider').css(width: "-1000px"); 
//   });
//  });


$(".swiper-button-prev").click(function () {
	// $(".slide-container").css("width", "1000px");
	$(".slide-container").css("width", "-=4000");
});

// $('.control_right').on('click', function(e) {
//   e.preventDefault();
// });
//# sourceMappingURL=main.js.map
