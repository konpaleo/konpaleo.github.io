(function ($) {
  'use strict';

  var modal = $('#project-image-modal');
  var preview = modal.find('.project-image-preview');
  var caption = modal.find('.project-image-preview-caption');

  modal.on('show.bs.modal', function (event) {
    var trigger = $(event.relatedTarget);
    var imageCaption = trigger.attr('data-caption');

    preview.attr({
      src: trigger.attr('data-image'),
      alt: trigger.attr('data-alt')
    });

    caption.text(imageCaption || '');
    caption.prop('hidden', !imageCaption);
  });

  modal.on('hidden.bs.modal', function () {
    preview.attr({ src: '', alt: '' });
    caption.text('').prop('hidden', true);
  });
}(jQuery));
