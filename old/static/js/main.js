$(document).ready(function(){
  function setContentSize() {
    var footPos = $(window).height() - $("#footer").offset().top - $("#footer").outerHeight() + 1;
    if (footPos > 0) {
      var footerHeight = $("#footer .fullWidthCtnr").outerHeight();
      $("#footer .fullWidthCtnr").css("height", footPos + footerHeight);
    }
  }
  function backgroundFooter() {
    var backgroundImage = $("#linktobackground").html();
    $("#linktobackground").remove();
    $("#backgroundFooter").removeClass("visuallyhidden").css({'height': $(window).height(), 'width': $(window).width()});
    $("#backgroundFooter").backstretch(backgroundImage);
    /* Add browser window high bottom margin to footer */
    $("#footer").css("margin-bottom", $(window).height());
  }
  function em(input) {
    var emSize = parseFloat($("body").css("font-size"));
    return (emSize * input);
  }
  /* Do not run on narrow layouts */
  if ($(window).width() >= em(40)) {
    setContentSize();
    /* Run only if there is a background to reveal */
    if ($("#linktobackground").length) {
      backgroundFooter();
    }
    $(window).resize(function() {
      setContentSize();
      backgroundFooter();
    });
  }
  //$('#allCtnr').stickyFooter({sticky: '#footer'});
});