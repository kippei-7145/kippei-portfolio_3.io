$(function () {
  // swiper
var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  autoplay: {
      delay: 4000,
  },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
      crossFade: true
  },
})
// header
function FixedAnime() {
  var headerH = $('.header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= 10 ) {
    $('.header').addClass('fixed');
    $('.header-ttl').addClass('change-logo');
    $('.nav-item').addClass('black');
    $('.header-ttl').addClass('black');
    $('.burger-btn').addClass('black');

  }else{
    $('.header').removeClass('fixed');
    $('.header-ttl').removeClass('change-logo');
    $('.nav-item').removeClass('black');
    $('.header-ttl').removeClass('black');
    $('.burger-btn').removeClass('black'); 
  }
}
$(window).on('scroll', function(){
    FixedAnime();
});
    
// ハンバーガーメニュー
$('.burger-btn').on('click',function(){
  $('.header-nav-wrapper').fadeToggle(300);
  $(this).toggleClass('cross');
  $(this).toggleClass('white');
  $('.nav-item').toggleClass('white');
  $(body).toggleClass('noscroll');
});
// クリック後のlist非表示の解消
window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
  if(!e.matches) $('.header-nav-wrapper').attr('style' , null);
});
AOS.init({
  // アニメーションの開始位置
  offset: 200,
  // どのくらい時間をかけてアニメー読んするか
  duration: 2000,
  // アニメーションの仕方
  easing: 'ease',
  // アニメーション起動の時間をどれだけ遅らせるか
  delay: 300,
  once: false,
  anchorPlacement: 'bottom-center',
});
$(function () {
  $('.modal-open').click(function () {
    $('#overlay, .modal-window').fadeIn();
  });

  $('.js-close').click(function () {
    $('#overlay, .modal-window').fadeOut();
  });
});

// タブメニューエリア
$('.js-tab-trigger').on('click' ,function () {
  // 一旦全ての「is-active」を取り除く
  $('.js-tab-trigger').removeClass('is-active');
  $('.js-tab-target').removeClass('is-active');
  // クリックされたIDを取得し、「is-active」クラスをつける
  $(this).addClass('is-active');
  let getId = $(this).data('id');
  // クリックされたdata-idと等しいIDにis-activeをつける
  $('#' + getId).addClass('is-active');
});
});