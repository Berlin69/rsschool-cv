$(function () {
   $('.blog__posts').slice(0, 1).show();
   $('#loadMore').on('click', function (e) {
      e.preventDefault();
      $('.blog__posts:hidden').slice(0, 4).slideDown();
   })
})