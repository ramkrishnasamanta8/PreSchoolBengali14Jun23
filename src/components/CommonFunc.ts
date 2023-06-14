import { Platform} from 'react-native';
var Sound = require('react-native-sound');
let whoosh = null ;
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('ben-IE');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
//Tts.setDefaultLanguage('eng-IE');

export function clickSound() {
  if (whoosh) {
    whoosh.stop(() => {
      whoosh.release();
    });
  }
  whoosh = new Sound(Platform.OS == 'android' ? 'click.mp3' : 'sound/click.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // Play the sound with an onEnd callback

    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });

  });
}
export function playSound(soundName) {
  if(Platform.OS == 'ios' && soundName && soundName.includes('.amr')){ 
    soundName= soundName.replace('.amr','.mp3');
  }
  if (whoosh) {
    whoosh.stop(() => {
      whoosh.release();
    });
  }
  whoosh = new Sound(Platform.OS == 'android' ? soundName : 'sound/'+soundName, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // Play the sound with an onEnd callback

    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });

  });
}
export function txtToSpeak(txt) {
Tts.setDefaultLanguage('ben-IE');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
    Tts.speak(txt);
}
export function txtToSpeakEng(txt) {
  Tts.setDefaultLanguage('eng-IE');
    Tts.speak(txt);
}

