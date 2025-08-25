  const Phonk = [
    { sname: "Night Drive", url: "Phonk\\alex-productions-night-drive.mp3" },
    { sname: "Phxntxm", url: "Phonk\\mehul-choudhary-phxntxm.mp3" },
    { sname: "Phonk Execution", url: "Phonk\\alex-productions-phonk-execution.mp3" },
    { sname: "Brasilian Funk", url: "Phonk\\alex-productions-brazilian-phonk.mp3" },
    { sname: "Aura Power", url: "Phonk\\walen-aura-power.mp3" },
    { sname: "SLAY", url: "Phonk\\alex-productions-slay.mp3" },
    { sname: "Badly", url: "Phonk\\alex-productions-badly.mp3" },
    { sname: "Demons (Slowed)", url: "Phonk\\alex-productions-demons-slowed-version.mp3" }
    ];

    //playlist part
    const playlistSongs = document.getElementById('Phonk');
    let currentIndex = 0;
    Phonk.forEach((song, index) => {
        const songDiv = document.createElement('div');
        songDiv.textContent = song.sname;
        songDiv.style.cursor = 'pointer';
        songDiv.addEventListener('click', () => {
            currentIndex = index;
            playSong(currentIndex);
        });
        playlistSongs.appendChild(songDiv);
    });
    //play/pause stuff
    const audio = document.getElementById('MinimalistPlayer');

    //.play() used natively to run audio/video files in HTML
    function playSong(index) {
        audio.src = Phonk[index].url;
        audio.play();
        document.getElementById('playndpause').textContent = 'Pause';
        currentIndex = index;
        alert(`Playing ${Phonk[currentIndex].sname} now!`);
    }
            
    function randintrange(a,b) {
        return Math.floor(Math.random()*(a-b+1)) + a;
    }
    const playndpause = document.getElementById('playndpause');

    playndpause.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playndpause.textContent = 'Pause';
            alert(`Playing ${Phonk[currentIndex].sname} now!`);
        }
        else {
            audio.pause();
            playndpause.textContent = 'Play';
            alert(`Paused the song`);
        }
    });

    //next/back stuff
    const next = document.getElementById('next');
    const back = document.getElementById('back');

    next.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % Phonk.length; // pointer goes to first song if you were at last
      playSong(currentIndex); 
    });

    back.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + Phonk.length) % Phonk.length; 
      playSong(currentIndex);
    });

    //repeat and shuffle stuff
    const shuffle = document.getElementById('shuffle');
    const repeat = document.getElementById('repeat');
    shuffle.addEventListener('click', () => {
        currentIndex = randintrange(0, Phonk.length - 1);
        playSong(currentIndex);
    });

    const REPEAT_NONE = 0;
    const REPEAT_ALL = 1;
    const REPEAT_ONE = 2;
    let repeatMode = REPEAT_NONE;

    repeat.addEventListener('click', () => {
      repeatMode = (repeatMode + 1) % 3; //0,1,2

      switch(repeatMode) {
        case REPEAT_NONE:
          repeat.textContent = 'Repeat: Off';
          break;
        case REPEAT_ALL:
          repeat.textContent = 'Repeat: All';
          break;
        case REPEAT_ONE:
          repeat.textContent = 'Repeat: One';
          break;
      }
    });

    audio.addEventListener('ended', () => {
      if (repeatMode === REPEAT_ONE) {
        playSong(currentIndex);  //repeats current song once
      } else if (repeatMode === REPEAT_ALL) {
        currentIndex = (currentIndex + 1) % Phonk.length; //loops playlist
        playSong(currentIndex);
      } else {
        // REPEAT_NONE
        if (currentIndex < Phonk.length - 1) {
          currentIndex++;
          playSong(currentIndex);
        } else {
          playndpause.textContent = 'Play';  //stops at last song
        }
      }
    });

    //ProgressBar
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');

    audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progressPercent + '%';
    });

    progressContainer.addEventListener('click', (e) => {
      const width = progressContainer.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
    });

    //playtime and total duration
    const playtimeElem = document.getElementById('Playtime');
    const songDuration = document.getElementById('songDuration');

    function timedisplay(s){
        const mins = Math.floor(s / 60);
        const secs = Math.floor(s % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        //add 0 if single digit in secs 
    }
            
    audio.addEventListener('timeupdate', () => {
        playtimeElem.textContent = timedisplay(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
        songDuration.textContent = timedisplay(audio.duration);
        console.log('Metadata loaded, duration:', audio.duration);
    });

    audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
    });

    //vol slider
    const volSlider = document.getElementById('volumeControl');
    audio.volume = volSlider.value; //initial
    volSlider.addEventListener('input', () => {
        audio.volume = volSlider.value;
    });