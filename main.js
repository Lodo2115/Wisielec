var przyicski = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ';
var haslo;
var pomylki = 0;

$(document).ready(function () {

  function init() { 
    $('#Div_Okno_Gry').hide();

    for (var i = 0; i < przyicski.length; i++) {
      if (i % 7 == 0 && i != 0) $('.przyciski_haslo').append('<br>');
      $('.przyciski_haslo').append('<button class="litera" id="' + przyicski[i] + '" value="'+przyicski[i]+'">' + przyicski[i] + '</button>');
    }
   }
   init();

  $('#B_Haslo').click(function () {
    haslo = $('#I_Haslo').val();

    if(haslo.length === 0) haslo = 'haslo'; // cos z tym zrobic jakis komuniakt + zeby litery znajdowaly sie w tablicy przyciski

    haslo = haslo.toUpperCase();
    $('#Div_Haslo').hide();
    $('#Div_Okno_Gry').show();
    var dlg_haslo = haslo.length;
    var tab_litery = new Array(dlg_haslo);
    var litery="";
    var odgadniete_litery=0;
    for (let i = 0; i < dlg_haslo; i++) {
      tab_litery[i] = "_";
      litery+="_";
    }
    $('.przyciski_haslo').prepend("<p id='litery_haslo'>" + litery + "</p>");
    
    $('.litera').click(function () {
      var litera = $(this).val(); 
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
            KoniecGry('Zgadłeś!');
          }
        } 
        console.log(pomylki);
      }
      if(flaga === true) {
        $(this).prop( "disabled", true );
        $(this).css("background-color","green");
        
      }
      if(flaga === false) {
        $(this).prop( "disabled", true );
        $(this).css("background-color","red");

        pomylki++;
        $('#Img_wisielec').attr('src', './wisielce/wisielec_' + pomylki + '.png');
      }
      if(pomylki > 11)
      {
        KoniecGry('Nie zgadłeś :(');
      }
    });
  });

  function KoniecGry(komunikat)
  {
    $('.litera').prop( "disabled", true )
    setTimeout(() => {
      $('#Div_Okno_Gry').hide();

      $('section').append(`
      <div id="Wynik_Gry">
      <p id="P_Haslo">${komunikat}</p>
      <button class="litera" id="Zagraj_Ponownie">Zagraj Ponownie</button>
      </div>
      `);

      $('#Zagraj_Ponownie').click(function () { 
        $('#Wynik_Gry').remove();
        $('#litery_haslo').remove();
        $('.litera').prop( "disabled", false).css('background-color', 'black');
        pomylki = 0;
        $('.litera, .przyciski_haslo').unbind('click');
        $('#Img_wisielec').attr('src', './wisielce/wisielec_0.png');
        $("#Div_Haslo").show() 
      });
    }, 1500);
  }

});
