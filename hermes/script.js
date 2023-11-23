document.getElementById('btnIntro').addEventListener('click', function() {
    showContent('intro', 'Witaj na stronie o psie Hermes. To jest wstępna informacja o tym wspaniałym psie. Hermes ma już 4 lata. Uwielbia kartonowe pudełka, nawet jeśli są od niego dużo mniejsze, to zawsze próbuje się do nich wcisnąć. Jego ulubioną zabawką jest żółta gumowa kostka, a zawsze śpi z poduszką pod głową.');
  });
  
  document.getElementById('btnFacts').addEventListener('click', function() {
    showContent('facts', 'Cane Corso to starożytna włoska rasa psa, znana ze swojej siły i wytrzymałości. Charakteryzuje się spokojnym temperamentem i lojalnością wobec swojej rodziny. Jest to rasa inteligentna i zrównoważona, co sprawia, że doskonale sprawdza się jako pies stróżujący. Cane Corso wymaga konsekwentnego szkolenia i wychowania od młodości. Rasa ta często jest używana jako pies obronny, ze względu na swoją odwagę i determinację w obronie terytorium. Mimo swojego imponującego wyglądu, Cane Corso jest czułym i przyjacielskim psem wobec swojej rodziny. Regularna aktywność fizyczna jest ważna dla utrzymania zdrowia i dobrej kondycji tej rasy. Cane Corso może być doskonałym towarzyszem dla aktywnych rodzin, ale wymaga zaangażowania i uwagi.');
  });
  
  document.getElementById('btnGallery').addEventListener('click', function() {
    showGallery();
  });
  
  function showContent(id, text) {
    var content = document.getElementById(id);
    content.innerHTML = text;
    content.style.opacity = '1';
  }
  
  function showGallery() {
    var gallery = document.getElementById('gallery');
    gallery.innerHTML = '<img src="hermes1.jpg" alt="Hermes 1" onclick="openModal(\'hermes1.jpg\')"><img src="hermes2.jpg" alt="Hermes 2" onclick="openModal(\'hermes2.jpg\')"><img src="hermes3.jpg" alt="Hermes 3" onclick="openModal(\'hermes3.jpg\')"><img src="hermes4.jpg" alt="Hermes 4" onclick="openModal(\'hermes4.jpg\')">';
    gallery.style.opacity = '1';
  }
  
  function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
      closeModal();
    }
  };
  