  function play(element){
     var audio = document.getElementById(element);
     audio.currentTime = 0;
     audio.play();
   }

  var sounds = {
     72 : 'audio6',
     74 : 'audio7',
     65 : 'audio1',
     83 : 'audio2',
     68 : 'audio3',
     70 : 'audio4',
     71 : 'audio5',
     89 : 'audio11',
     85 : 'audio12',
     69 : 'audio08',
     82 : 'audio09',
     84 : 'audio10',
  };
  document.onkeydown = function(e) {
      var soundId = sounds[e.keyCode];
      if (soundId) {
        document.getElementById(soundId).play();
      }
      else {
        console.log("key not mapped : code is", e.keyCode);
      }
  }

  $('#key1').click(function(){
    $('#key1').fadeOut(500).fadeIn(500);
  });
  $('#key2').click(function(){
    $('#key2').fadeOut(500).fadeIn(500);
  });
  $('#key3').click(function(){
    $('#key3').fadeOut(500).fadeIn(500);
  });
  $('#key4').click(function(){
    $('#key4').fadeOut(500).fadeIn(500);
  });
  $('#key5').click(function(){
    $('#key5').fadeOut(500).fadeIn(500);
  });
  $('#key6').click(function(){
    $('#key6').fadeOut(500).fadeIn(500);
  });
  $('#key7').click(function(){
    $('#key7').fadeOut(500).fadeIn(500);
  });
  $('#key8').click(function(){
    $('#key8').fadeOut(500).fadeIn(500);
  });
  $('#key9').click(function(){
    $('#key9').fadeOut(500).fadeIn(500);
  });
  $('#key10').click(function(){
    $('#key10').fadeOut(500).fadeIn(500);
  });
  $('#key11').click(function(){
    $('#key11').fadeOut(500).fadeIn(500);
  });
  $('#key12').click(function(){
    $('#key12').fadeOut(500).fadeIn(500);
  });


  /*  -----BROKEN LOOP FOR TARGETING SOUND FILES-----

  var notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  var extensions = ['.mp3', '.ogg', '.wav'];
  var suffix = ["_note"];
  var myNote;


      for (i = 0; i < notes.length; i++){
        for (j = 0; j < extensions.length; ++j) {
            var myNote = document.createElement('div');
            myNote.textContent = notes[i] + suffix + extensions[j];
            myNote.className="pianoKey";
            document.body.appendChild(myNote);
        }
      }
      for (k = 0; k < (notes.length * extensions.length); k++) {
      document.getElementsByTagName('div')[k].onclick = function play(element) {
        for (m = 0; m < (notes.length * extensions.length); m++) {
        var audio = document.getElementsByClassName('pianoKey')[m];
        audio.play('pianoKey'.textContent);
      };
      }
    }
    TRY THIS
    function addAndRemoveClass(element, classname, timer) {
        element.className += ' ' + classname;
        var t = setTimeout(function () {
            element.className = element.className.replace(classname, '');
            t = 0;
        }, timer);
    }
    */

/* -----TARGETING ARRAY ELEMENTS TO ASSIGN RANDOM COLORS-----

  var colorArray = ["red", "blue", "orange", "green", "purple", "yellow"];
  var button = document.getElementsByClassName('button');
  function myFunction(button) {
    button.onclick = function () {
      button.style.backgroundColor = colorArray[Math.floor(Math.random()*colorArray.length)];
    };
  }
  */
