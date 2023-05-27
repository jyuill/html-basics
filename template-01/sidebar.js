
$(document).ready(function() {
    $('.category-btn').click(function() {
      $('.category-btn').removeClass('selected');
      $(this).addClass('selected');
      $(this).next('.subcategories').toggleClass('active');
    });
  
    $('.subcategory-btn').click(function() {
      $('.subcategory-btn').removeClass('selected');
      $(this).addClass('selected');
    });
  });
  