(function(window, undefined) {

  function scroll() {

    $(window).on('scroll', function() {
      var wst = $(window).scrollTop() + $(window).height() / 2;
      var length = $('main > h2').length;
      var h3length = $('main >h3').length;
      // console.log(wst);
      for (var i = 0; i < length - 1; i++) {
        if ($('main > h2').eq(i).offset().top < wst && $('main > h2').eq(i + 1).offset().top > wst) {
          $('#markdown-toc >li').removeClass('active');
          $('#markdown-toc >li').eq(i).addClass('active');
          break;
        }
        if ($('main > h2').eq(length - 1).offset().top < wst) {
          $('#markdown-toc >li').removeClass('active');
          $('#markdown-toc >li').eq(length - 1).addClass('active');
        }
      }
      for (var i = 0; i < h3length - 1; i++) {
        if ($('main > h3').eq(i).offset().top < wst && $('main > h3').eq(i + 1).offset().top > wst) {
          $('#markdown-toc >li ul li').removeClass('active');
          $('#markdown-toc >li ul li').eq(i).addClass('active');
          break;
        }
        if ($('main > h3').eq(length - 1).offset().top < wst) {
          $('#markdown-toc >li ul li').removeClass('active');
          $('#markdown-toc >li ul li').eq(length - 1).addClass('active');
        }
      }




    });
  }
  scroll()
  var markdownli = $('#markdown-toc > li')
  markdownli.on('click', function() {
    markdownli.removeClass('active');
    $(this).addClass('active')
  })


  

})(window, undefined)
