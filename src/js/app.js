(function () {
  $(document).ready(function () {
    var options = {
      ovalWidth: 700,
      ovalHeight: 150,
      offsetX: 0,
      offsetY: 0,
      angle: 0,
      activeItem: 0,
      duration: 200,
      easing: 'easeInOutCubic',
      autoCycle: true,
      className: 'item',
    };

    var carousel = $('.carousel').CircularCarousel(options);

    /* Fires when an item is about to start it's activate animation */
    carousel.on('itemBeforeActive', function (e, item) {
      // $(item).css('box-shadow', '0 0 20px blue');
      $(item).addClass('animate_ho_raha_hai');
    });

    /* Fires after an item finishes it's activate animation */
    carousel.on('itemActive', function (e, item) {
      // $(item).css('box-shadow', '0 0 20px green');
      $(item).addClass('bada_wala');
    });

    /* Fires when an active item starts it's de-activate animation */
    carousel.on('itemBeforeDeactivate', function (e, item) {
      // $(item).css('box-shadow', '0 0 20px yellow');
    });

    /* Fires after an active item has finished it's de-activate animation */
    carousel.on('itemAfterDeactivate', function (e, item) {
      $(item).css('box-shadow', '');
      $(item).addClass('chota_wala');
    });

    /* Previous button */
    $('.controls .previous').click(function (e) {
      carousel.cycleActive('previous');
      e.preventDefault();
    });

    /* Next button */
    $('.controls .next').click(function (e) {
      carousel.cycleActive('next');
      e.preventDefault();
    });

    /* Manaully click an item anywhere in the carousel */
    $('.carousel .item').click(function (e) {
      var index = $(this).index('li');
      carousel.cycleActiveTo(index);
      e.preventDefault();
    });
  });
})();
