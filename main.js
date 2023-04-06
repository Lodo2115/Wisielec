var przyicski = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ';
var haslo;
var pomylki = 0;

$(document).ready(function () {
  $('#B_Haslo').click(function () {
    haslo = $('#I_Haslo').val();
    haslo = haslo.toUpperCase();
    $('#Div_Haslo').hide();
    $('#Div_Okno_Gry').css('display','inline-block');
    var dlg_haslo = haslo.length;
    var tab_litery = new Array(dlg_haslo);
    console.log(dlg_haslo);
    var litery="";
    var odgadniete_litery=0;
    for (let i = 0; i < dlg_haslo; i++) {
      tab_litery[i] = "_";
      litery+="_";
    }
    $('.przyciski_haslo').append("<p id='litery_haslo'>" + litery + "</p>");

    for (var i = 0; i < przyicski.length; i++) {
      if (i % 7 == 0 && i != 0) $('.przyciski_haslo').append('<br>');
      $('.przyciski_haslo').append('<button class="litera" id="' + przyicski[i] + '" value="'+przyicski[i]+'">' + przyicski[i] + '</button>');
    }

    
    $('.litera').click(function () {
      var litera = $(this).val(); 
      console.log(litera);
      flaga = false;
      for (let i = 0; i < dlg_haslo; i++) {
        if(haslo[i] == litera) {
          flaga = true;
          litery='';
          tab_litery[i] = litera;
          for(let j = 0; j < dlg_haslo; j++) {
            litery+= tab_litery[j];
          }
          $('#litery_haslo').text(litery);
          odgadniete_litery++;
          if(odgadniete_litery==dlg_haslo) {
            KoniecGry('Wygrałeś!');
          }
        } 
      }
      if(flaga == true) {
        $(this).prop( "disabled", true );
        $(this).css("background-color","green");
        
      }
      if(flaga == false) {
        $(this).prop( "disabled", true );
        $(this).css("background-color","red");

        pomylki++;
        console.log('Pomylka:' + pomylki + '/12');
        $('#Img_wisielec').attr('src', './wisielec_' + pomylki + '.png');
      }
      if(pomylki > 11)
      {
        KoniecGry('Przegrałeś :(');
      }
    });
  });

  function KoniecGry(komunikat)
  {
    $('.litera').prop( "disabled", true )
    setTimeout(() => {
      // wyswietlenie komunikatu / przycisk zagraj ponownie / menu
    }, 1500);
  }

});
