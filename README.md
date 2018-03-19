### react-native-mosquito-sound
// INSTALL

1. npm install react-native-sound --save

   react-native link react-native-sound

// RESOURCE

2. Add file "yoursound.mp3" to Resources folder in iOS XCode project

// CODE 

3. import Sound from "react-native-sound";

4. constructor(props) {

      super(props); 

      Sound.setCategory("Playback");

      mSound = new Sound("yoursound.mp3", Sound.MAIN_BUNDLE); 

   }

5. _playSound() {

      mSound.play(success => {

         if (success) {

            console.log("Success");

         } else {

            console.log("Failure");

            mSound.reset(); 

         } 

      });

   } 

### About
- Created by HuyHung Dinh
- GitHub: https://github.com/hu2di
- Email: hebitaxy@gmail.com
- Donate: [**paypal.me/hungdh**](https://www.paypal.me/hungdh)
