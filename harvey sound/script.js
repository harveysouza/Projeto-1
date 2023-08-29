// aqui estão as referencias do html

const songName = document.getElementById("song-name");
const song = document.getElementById("audio");
const play = document.getElementById("play");
const cover = document.getElementById("cover");
const artistName = document.getElementById("artist-name");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const likeButton = document.getElementById("like");
const currentProgress = document.getElementById("current-progress");
const progressContainer = document.getElementById("progress-container");
const shuffleButton = document.getElementById("shuffle");
const repeatButton = document.getElementById("repeat")
const songTime = document.getElementById("song-time")
const  totalTime = document.getElementById("total-time")


// variaveis que estou criando!
const novoBalanco = {
  songName: 'Novo Balanço',
  artist: 'Veigh',
  file: '1. VEIGH - NOVO BALANÇO (Dos Prédios Deluxe) (192 kbps)',
  album: 'deluxe-OK',
  liked: false
};
const enganaDizendo = {
  songName: "Engana Dizendo Que Ama",
  artist: "Veigh",
  file: "2.  VEIGH - ENGANA DIZENDO QUE AMA FT. TZ DA CORONEL (Dos Prédios Deluxe) (192 kbps)",
  album: 'deluxe-OK',
  liked: false
};
const bolsaDeOmbro = {
  songName: "Bolsa de Ombro ft. G.A",
  artist: "Veigh",
  file: "3.  VEIGH - BOLSA DE OMBRO FT. G.A (Dos Prédios Deluxe) (192 kbps)",
  album: 'deluxe-OK',
  liked: false
};
const horaErrada = {
  songName: 'Hora errada',
  artist: 'Veigh',
  file: '8. VEIGH - HORA ERRADA FT. CAIO LUCCAS (Dos Prédios Deluxe) (192 kbps)',
  album: 'deluxe-OK',
  liked: false
};
const anoQueVem = {
  songName: "Ano que vem Voce Descobre",
  artist: "MC Cebezinho",
  file: "Ano Que Vem Você Descobre MC Cebezinho (Clipe Oficial) DJ Boy (192 kbps)",
  album: 'cebezinho',
  liked: false
};
const giroLoucoPh = {
  songName: "Giro Louco",
  artist: "MC PH",
  file: "GIRO LOUCO - MC PH (GR6 Explode) DJ Murillo e LT No Beat (192 kbps)",
  album: 'girolouco',
  liked: false
};

const malokeragem = {
  songName: "MALOKERAGEM",
  artist: "MC GP",
  file: "MC GP - MALOKERAGEM (CLIPE OFICIAL) DJ KAIO MIX (192 kbps)",
  album: 'GPm-OK',
  liked: false
};
const umBeijoNaMinhaNega = {
  songName: 'Um Beijo na Minha Nega Tchau amor',
  artist: 'MC GP',
  file: 'MC GP - Um Beijo Na minha nega tchau amor (Prod DJ Felipe do CDC - Áudio oficial ) (192 kbps)',
  album: 'GPm-OK',
  liked: false
};
const osBicosTaoSePerguntando = {
  songName: "Os Bico Tão Se Perguntando",
  artist: "MC PH",
  file: "MC PH - Os Bico Tão Se Perguntando (Clipe Oficial) (GR6 Explode) (192 kbps)",
  album: 'osbico',
  liked: false
};
const vulgoFK = {
  songName: "Ballena",
  artist: "VulgoFK, Veigh, MC PH",
  file: "Vulgo FK, MC PH, Veigh - Ballena (Clipe Oficial) (192 kbps)",
  album: 'ballena',
  liked: false
};


const astronautaAstro = {
  songName: 'Astronauta Astro',
  artist: 'MC Livinho, Cjota',
  file: 'Astronauta Astro - MC Livinho feat. Cjota (Prod. Ecologyk) (192 kbps)',
  album: 'livinho',
  liked: false
};
const elemento = {
  songName: "Elemento",
  artist: "MC Livinho,",
  file: "Elemento - MC Livinho (Prod. Caio Passos, Guiggow) (192 kbps)",
  album: 'livinho',
  liked: false
};
const jamaisMeApaguei = {
  songName: "Jamais Me Apeguei",
  artist: "MC Livinho, Menor",
  file: "Jamais me apeguei - MC Livinho feat. Menor (Prod. Martinnz, Thermo) (192 kbps)",
  album: 'livinho',
  liked: false
};
const linhaDoTempo= {
  songName: 'Linha do Tempo',
  artist: 'MC Livinho,',
  file: 'Linha do Tempo - MC Livinho (Prod. Long Beatz) (192 kbps)',
  album: 'livinho',
  liked: false
};
const bichoSolto = {
  songName: "Bicho Solto",
  artist: "MC Livinho",
  file: "MC Livinho - Bicho Solto (Clipe Oficial) (192 kbps)",
  album: 'livinho',
  liked: false
};
const novidadeNaArea = {
  songName: "Novidade na Área",
  artist: "MC Livinho",
  file: "MC LIVINHO - NOVIDADE NA ÁREA (PROD. DJ MATT D) SUMMER DANCE FUNK (192 kbps)",
  album: 'novidadenaarea',
  liked: false
};

const cheirosoEArtista = {
  songName: "Cheiroso e Artista",
  artist: "MC Livinho, Ryan Realcria",
  file: "MC Livinho feat. Ryan Realcria - Cheiroso e Artista (clipe oficial) (192 kbps)",
  album: 'livinho',
  liked: false
};
const escorpiana = {
  songName: 'Escorpiana',
  artist: 'MC Livinho',
  file: 'MC Livinho, Pedro Sampaio e DJ Matt-D - Escorpiana (áudio oficial) (192 kbps)',
  album: 'escorpiana',
  liked: false
};
const pecaRara= {
  songName: "Peça Rara",
  artist: "MC Livinho,",
  file: "Peça Rara (Tapa Tapa) (192 kbps)",
  album: 'livinho',
  liked: false
};
const pontoG = {
  songName: "Ponto G",
  artist: "MC Livinho, Ryan Realcria",
  file: "Ponto G - MC Livinho e Ryan Realcria (Prod. Martinnz e Thesnow) (192 kbps)",
  album: 'livinho',
  liked: false
};
const primeiraClasse= {
  songName: "Primeira Classe",
  artist: "MC Livinho",
  file: "Primeira Classe - MC Livinho (Prod. Fesant) (192 kbps)",
  album: 'livinho',
  liked: false
};
const pocoto = {
  songName: "Pocotó",
  artist: "MC Livinho",
  file: "SUMMER DANCE FUNK - POCOTÓ VOL.2 DJ MATTD (192 kbps)",
  album: 'pocoto',
  liked: false
};
const umFioDeCabelo = {
  songName: "Um Fio De Cabelo",
  artist: "MC Livinho",
  file: "Um Fio De Cabelo - MC Livinho (Prod. Donatto, Martinnz, 6ee, Juko) (192 kbps)",
  album: 'livinho',
  liked: false
};

let isPlaying = false;
let isShuffle = false;
let repeatOn = false;


const playList = [novoBalanco, enganaDizendo, bolsaDeOmbro, horaErrada, anoQueVem, giroLoucoPh, malokeragem, umBeijoNaMinhaNega,
osBicosTaoSePerguntando, vulgoFK, astronautaAstro, elemento, jamaisMeApaguei, linhaDoTempo, bichoSolto, novidadeNaArea, cheirosoEArtista, escorpiana, pecaRara, pontoG,
primeiraClasse, pocoto, umFioDeCabelo] ?? JSON.parse(localStorage.getItem('playlist'));

//const playList = [novoBalanco, enganaDizendo, bolsaDeOmbro, horaErrada, anoQueVem, giroLoucoPh, malokeragem, umBeijoNaMinhaNega,
//  osBicosTaoSePerguntando, vulgoFK]; // isso é um array [] é uma estrutura de dados que armazena uma coleção de elementos,cada um dos elementos possa ser identificado por, um índice ou uma chave
let sortedPlaylist = [...playList]; // '...' sinal de espalhar 
playList[0];

let index = 0;

// aqui estão as funçoes 

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle')
    play.querySelector('.bi').classList.add('bi-pause-circle')
  song.play()
  isPlaying = true;
}


function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle')
    play.querySelector('.bi').classList.remove('bi-pause-circle')
  song.pause()
  isPlaying = false;
}


function playPause() {
    if(isPlaying === true){
        pauseSong();
    }
    else {
        playSong()

    }
}

function likeButtonRender(){
  if (sortedPlaylist[index].liked === true){
    likeButton.querySelector('.bi').classList.remove('bi-heart');
    likeButton.querySelector('.bi').classList.add('bi-heart-fill');
    likeButton.classList.add('button-active');
  }
  else {
    likeButton.querySelector('.bi').classList.add('bi-heart');
    likeButton.querySelector('.bi').classList.remove('bi-heart-fill');
    likeButton.classList.remove('button-active');
  }
}

function inicializeSong(){
  cover.src = `/imagens/${sortedPlaylist[index].album}.jpg`
  songName.innerText = sortedPlaylist[index].songName;
  artistName.innerText = sortedPlaylist[index].artist;
  song.src = `songs/${sortedPlaylist[index].file}.mp3`;
  likeButtonRender();
  localStorage.setItem('playlist', JSON.stringify(playList))
}

function previousSong(){
  if(index === 0) {
    index = sortedPlaylist.length;
  }
  else {
  index = index - 1;
  }
  inicializeSong();
  playSong();
}
function nextSong(){
  if(index === sortedPlaylist.length - 1) {
    index = 0;
  }
  else {
  index = index + 1;
  }
  inicializeSong();
  playSong();
}

function progressBar(){
  const barWidth = (song.currentTime/song.duration)*100;
  currentProgress.style.setProperty('--progress', `${barWidth}%`);
  songTime.innerText = toHHMMSS(song.currentTime);

}

function jumpTo(event){
  const width = progressContainer.clientWidth; //clienteWidth é a largura total do elemento
  const clickPosition = event.offsetX; // offsetX é a largura onde eu cliquei 
  const jumpToTime = (clickPosition/width)* song.duration;
  song.currentTime = jumpToTime;
  
}

function shuffleArray(preShuffleArray){

  let size = preShuffleArray.length;
  let currentIndex = size - 1;
  while(currentIndex > 0){
    let randomIndex = Math.floor(Math.random()* size);
    let aux = preShuffleArray[currentIndex];
    preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
    preShuffleArray[randomIndex] = aux;
    currentIndex -= 1;


  }
}

function shuffleButtonClick(){
  if( isShuffle === false){
    isShuffle = true;
    shuffleArray(sortedPlaylist)
    shuffleButton.classList.add('button-active');
    
  } else {
    isShuffle = false;
    sortedPlaylist = [...playList];
    shuffleButton.classList.remove('button-active');

  }
}

function repeatButtonClick() {
  if(repeatOn === false) {
    repeatOn = true;
    repeatButton.classList.add('button-active');
  }else {
    repeatOn = false;
    repeatButton.classList.remove('button-active');
  }

}

function nextOrRepeat(){
  if (repeatOn === false){
    nextSong();
  }
  else {
    playSong();
  }
}
function toHHMMSS( originalNumber){
  let hours = Math.floor(originalNumber / 3600);
  let min = Math.floor((originalNumber - hours * 3600) / 60);
  let secs = Math.floor(originalNumber - hours * 3600 - min * 60);

  return `${hours.toString().padStart(2, '0')}:${min
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

}


function updateTotalTime (){
  totalTime.innerText = toHHMMSS(song.duration);
}

function likeButtonClick(){
  if (sortedPlaylist[index].liked === false) {
    sortedPlaylist[index].liked = true;
  } else {
    sortedPlaylist[index].liked === true;
    sortedPlaylist[index].liked = false;
    
  }
  likeButtonRender();
}
// execuçoes de funcoes 

inicializeSong();

//evento listen .addEventListener

play.addEventListener('click', playPause);
previous.addEventListener('click', previousSong);
next.addEventListener('click' ,nextSong);
song.addEventListener('timeupdate', progressBar)
song.addEventListener('ended', nextOrRepeat);
song.addEventListener('loadedmetadata', updateTotalTime);
progressContainer.addEventListener('click', jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClick)
repeatButton.addEventListener('click', repeatButtonClick)
likeButton.addEventListener('click', likeButtonClick)

