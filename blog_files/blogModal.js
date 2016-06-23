$(document).ready(function() {

  function imgSlideSetup(containID){
    var currentIndex = 0;
    var items = $(containID + " div");
    var itemAmt = items.length;

    function cycleItems() {
      var item = $(containID + " div").eq(currentIndex);
      items.hide();
      item.css('display','inline-block');
    }
    /*
    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    }, 3000); */

    $('.next').click(function() {
      //clearInterval(autoSlide);
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    });

    $('.prev').click(function() {
      //clearInterval(autoSlide);
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
      }
      cycleItems();
    });
  } //imgSlideSetup

  imgSlideSetup("#asteroidsContain");
  imgSlideSetup("#bubblemanContain");
  imgSlideSetup("#habitloopContain");
  imgSlideSetup("#punchsystemContain");

});