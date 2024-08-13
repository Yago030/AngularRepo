
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}


interface Details{
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheran",
        year: 2015
    }
}

const dbz: string[] = ['goku', 'vegeta', 'Trunk'];

const [, , p3] = 


const {song, songDuration} = audioPlayer;

const {author} = audioPlayer.details

console.log (' Song', song, songDuration)
console.log ('Author : ',author)
console.log ('Personajes : ')