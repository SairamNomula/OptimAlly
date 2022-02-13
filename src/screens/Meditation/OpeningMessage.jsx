import './OpeningMessage.css';
import Sound from 'react-sound';
import audio from '../Meditation/sound/voice.mp3';
const OpeningMessage = () => {
    return (  
        <div className="message">
              <Sound
                url={audio}
                playStatus={Sound.status.PLAYING}
                />
            Play a song, Set the timer and Relax!
        </div>
    );
}
 
export default OpeningMessage;