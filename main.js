// ハンバーガーメニュー
$(function() {
  $('.menu-btn').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.gnavi__sp-style').addClass('active');
      } else {
          $('.gnavi__sp-style').removeClass('active');
      }
  });
});

// swiper設定
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
  breakpoints: {
    640: {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: true
    },
    }
    }
});

// 右下コンタクトボタン途中から表示する
$(function() {
  // 変数にクラスを入れる
  var btn = $('.contact_btn');
  
  //スクロールしてページトップから600に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 600) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});