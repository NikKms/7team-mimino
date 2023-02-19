import $ from 'jquery';
window.$ = $;

$(function () {
  function modal() {
    $('.open_modal').on('click', function (e) {
      e.preventDefault();
      console.log('open_modal');
      const modal_id = $(this).attr('data-modal-id');
      $(modal_id).addClass('active_modal');
    });
    $('.modal, .modal_close').on('click', function (e) {
      e.preventDefault();
      const el = e.target;
      if (
        el.classList.contains('modal') ||
        el.classList.contains('modal_close')
      ) {
        $(this).removeClass('active_modal');
      }
    });
  }
  modal();
});
