var przyicski = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ';
var haslo;
var pomylki = 0;
var slowa = ["Krokodyl", "Piesek", "Ołtarz", "Księżniczka", "Pająk", "Pianina", "Tarcza", "Łuk", "Pogoda", "Rondo", "Flet", "Przepis", "Róża", "Skalpel", "Włos", "Dziób", "Hokej", "Kowal", "Ktoś", "Opona", "Kropka", "Ksiądz", "Biskup", "Pomarańcza", "Rosół", "Mucha", "Stemple", "Kaczor", "Krem", "Myszka", "Ramie", "Fala", "Podróż", "Żaluzja", "Bukiet", "Wino", "Brzoskwinia", "Jednorożec", "Szczypta", "Biżuteria", "Ołówek", "Stacja", "Plakat", "Kwiaty", "Lodowisko", "Łajno", "Kolano", "Płaszcz", "Sok", "Zegar", "Grzyb", "Parka", "Przykład", "Akrobata", "Młot", "Mrówka", "Harmonijka", "Kryzys", "Osioł", "Posag", "Zrąb", "Łyżka", "Anioł", "Szalik", "Walec", "Błoto", "Domofon", "Złoty", "Księżyc", "Muzyka", "Rumak", "Kociołek", "Ptaszek", "Ptasior", "Tarcza", "Ptasznik", "Słoik", "Słoń", "Słój", "Taksówka", "Żeglowanie", "Zwrot", "Bakłażan", "Fasolka", "Gąbka", "Kamper", "Tornister", "Głębia", "Prądnica", "Słomka", "Tęczowy", "Zderzenie", "Koncert", "Pistolet", "Jabłko", "Szczypior", "Zawodnik", "Bułka", "Złoto", "Kaktus", "Trawa", "Rynek", "Kwiat", "But", "Dzwonek", "Ucho", "Plaża", "Wiertarka", "Książka", "Gąsienica", "Lampa", "Kostka", "Maska", "Farba", "Okulary", "Ser", "Wino", "Słuchawki", "Drabina", "Słońce", "Śmieci", "Pociąg", "Kłos", "Koncert", "Wąż", "Kabel", "Pilnik", "Zamek", "Pingwin", "Gruszka", "Ołówek", "Smok", "Czekolada", "Samolot", "Ząb", "Płot", "Rower", "Chleb", "Guma", "Nóż", "Ludzie", "Woda", "Dłoń", "Dzwig", "Radio", "Dom", "Kamień", "Kocioł", "Słonecznik", "Szyba", "Skrzydło", "Koszyk", "Serce", "Ananas", "Drzewo", "Księżyc", "Hulajnoga", "Sklep", "Gwiazda", "Rakieta", "Pianino", "Łosoś", "Kula", "Okręt", "Kino", "Ogród", "Wędka", "Delfin", "Wiatrak", "Światło", "Stół", "Toster", "Śmigło", "Szampan", "Torba", "Deska", "Staw", "Grzejnik", "Balon", "Tłumik", "Stawka", "Kijek", "Taksówka", "Dusza", "Lustrzanka", "Ręcznik", "Zapałki", "Ksiądz", "Czarny", "Truskawka", "Jaskółka", "Kociołek", "Niedźwiedź", "Kieszeń", "Ogórek", "Kaczka", "Biurko", "Pochodnia", "Jezioro", "Ślimak", "Płaszcz", "Serpentyna", "Lodówka", "Tapeta", "Sówka", "Lampart", "Szafka", "Słuchacz", "Walizka", "Czołg", "Kotwica", "Skok", "Przegub", "Koniec", "Niedziela", "Łucznik", "Ośmiornica"];
var sklepOtwarty = false;
var punkty = 100;
var zablokowaneTla = ['bg_1', 'bg_2', 'bg_3', 'bg_4', 'bg_5'];

$(document).ready(function () {

  function init() { 
    $('#Div_Okno_Gry').hide();

    for (var i = 0; i < przyicski.length; i++) {
      if (i % 7 == 0 && i != 0) $('.przyciski_haslo').append('<br>');
      $('.przyciski_haslo').append('<button class="litera" id="' + przyicski[i] + '" value="'+przyicski[i]+'">' + przyicski[i] + '</button>');
    }
   }
   init();

   function Gra(haslo) { 
    $('#I_Haslo').val('');
    $('#Puste_Haslo').hide();
    $('#Sklep_Ikona').hide();
    haslo = haslo.toUpperCase();
    $('#Div_Haslo').hide();
    $('#Div_Okno_Gry').show();
    var dlg_haslo = haslo.length;
    var tab_litery = new Array(dlg_haslo);
    var litery="";
    var odgadniete_litery=0;
    for (let i = 0; i < dlg_haslo; i++) {

      if(haslo[i]==' ') 
      {
        tab_litery[i] = ' ';
        litery+=" ";
        odgadniete_litery++;
      }
      else
      {
        tab_litery[i] = "_";
        litery+="_";
      }

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
            KoniecGry('Zgadłeś!<p style="font-size: 17.5px;">+50 puntków</p>');
            punkty += 50;
          }
        } 
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
        KoniecGry(`Nie zgadłeś :(<br>Hasło to: ${haslo.toLowerCase()}`);
      }
    });
    }

   $('#I_Haslo').on('keydown', function(event) {
    // sprawdzenie czy wprowadzony znak jest znakiem specjalnym lub cyfrą
    if ((event.keyCode < 65 || event.keyCode > 90) && event.keyCode !== 8 && event.keyCode !== 32) {
      // blokowanie wprowadzenia znaku specjalnego lub cyfry
      event.preventDefault();
    }
  });

  $('#B_Haslo').click(function () {
    haslo = $('#I_Haslo').val();

    if(haslo.trim().length !== 0)
    {
      Gra(haslo);
    } 
    else
    {
      $('#Puste_Haslo').show();
    }

  });
  $('#L_Haslo').click(function () { 
    haslo = slowa[Math.floor(Math.random() * slowa.length+1)];
    Gra(haslo);
  });

  $('#Sklep_Ikona').click(function () { 

    if(!sklepOtwarty) 
    {
      $('#Sklep').show();
      sklepOtwarty = true;
      $('#Punkty').html("Punkty: " + punkty + "<br>(Koszt tła: 100 punktów)");
    }
    else 
    {
      $('#Sklep').hide();
      sklepOtwarty = false;
    }

    $('.bg_sklep').click(function () { 
      if(jQuery.inArray($(this).attr('id'), zablokowaneTla) === -1)
      {
        $('body').css('background-image',`url(./tla/${$(this).attr('id')}.jpg`);
        $(this).css('border','solid red 5px');
        $('.bg_sklep').not(this).css('border','solid black 5px');
      }
      else if(punkty >= 100)
      {
        zablokowaneTla.splice( $.inArray($(this).attr('id'), zablokowaneTla), 1);
        punkty -= 100;
        $('#Punkty').html("Punkty: " + punkty + "<br>(Koszt tła: 100 punktów)");
        $(this).css('opacity','100%');
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
        $('#Sklep_Ikona').show();
        $('.litera, .przyciski_haslo').unbind('click');
        $('#Img_wisielec').attr('src', './wisielce/wisielec_0.png');
        $("#Div_Haslo").show() 
      });
    }, 1500);
  }

});
