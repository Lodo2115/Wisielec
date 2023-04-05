var przyicski = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ';
var haslo;

$(document).ready(function () {
  $('#B_Haslo').click(function () {
    haslo = $('#I_Haslo').val();
    $('#Div_Haslo').hide();

    var dlg_haslo = haslo.length;
    var litery = "";
    console.log(dlg_haslo);
    for (let i = 0; i < dlg_haslo; i++) {
      litery += "_";
    }
    $('body').append("<p id='litery_haslo'>" + litery + "</p>");

    for (var i = 0; i < przyicski.length; i++) {
      if (i % 5 == 0 && i != 0) $('body').append('<br>');
      $('body').append('<button class="litera" id="' + przyicski[i] + '" value="'+przyicski[i]+'">' + przyicski[i] + '</button>');
    }

    
    $('.litera').click(function () {
      var litera = $(this).val(); 
      console.log(litera); 
    });
  });
});
