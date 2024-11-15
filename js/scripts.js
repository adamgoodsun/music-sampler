let soundlist = document.querySelectorAll('.sound');
///song title
let m1 = "Click on an ablum cover to hear a sample of a song";
let m2 = "2 soon - Keshi";
let m3 = "ANGEL - Keshi";
let m4 = "Soft Spot - Keshi";
let m5 = "War -Keshi";
let message = m1;
document.querySelector("#titlesong").textContent = message;

function hideAll() {
    soundlist.forEach(function(el) {
      el.style.display = 'none';
    });
  };

  hideAll();



let cover = document.querySelectorAll('.cover');
cover.forEach(function(el) {
    el.onclick = (e) => {
        hideAll();
        let players = document.querySelectorAll('audio');
        players.forEach(function(el) {
                el.pause();
                el.currentTime = 0;
            });

        switch (e.target.getAttribute('id')) {
        case 'thereaper':
            document.querySelector('#soon')
        	.style.display = 'block';
            document.querySelector("#titlesong").textContent = m2;
            console.log('soon');
            break;
        case 'gabriel':
            document.querySelector('#ANGEL')
        	.style.display = 'block';
            document.querySelector("#titlesong").textContent = m3;
            console.log('gabriel');
            break;
        case 'requiemss':
            document.querySelector('#SoftSpot')
        	.style.display = 'block';
            document.querySelector("#titlesong").textContent = m4;
            console.log('ANGEL');
            break;
        case 'requiemw':
            document.querySelector('#War')
        	.style.display = 'block';
            document.querySelector("#titlesong").textContent = m5;
            console.log('SoftSpot');
            break;
    };
  }
});
