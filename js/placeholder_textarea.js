
function trim()
{
	return this.replace(/^\s+|\s+$/g, ''); 
}

$(document).ready(function() {
    
$(".placeholder_textarea").on('focus', function() {
  //alert($(this).html().trim());
  var val = 'Введите текст';
  if ($(this).html().trim() == val) {
	$(this).html('');
  } else {
  }
});
$(".placeholder_textarea").on('blur', function() {
  //alert($(this).html().trim());
  var val = '';
  if ($(this).html().trim() == val) 
	$(this).html('Введите текст');
});
});