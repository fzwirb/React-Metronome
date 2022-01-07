import React, { Component } from 'react'
import Play from './play'
import Pause from './pause'
import { View } from 'react-native'
import tempo from './App'
import App from './App'
import { render } from 'react-dom'

let BPM = App.tempo     

class Player extends Component {



constructor(props) {
  super(props)
  this.state = {
    playing: false
  }
}

handlePlayerClick = () => {
    console.log("in handle player click")
    console.log(this.state.playing)

  if (!this.state.playing) {
    this.setState({playing: true})
    console.log("in NOT PLAYING")
    console.log(this.state.playing)

  } else {
    this.setState({playing: false})
  }
  console.log("DONE")
  if(this.state.playing == true){
    this.handlePlayMet(this.state.playin)
  }
//   this.handlePlayMet(this.state.playing)
} 

handlePlayMet = (playing) => {
    console.log("in play met!")
    console.log(playing)
    if(!playing) {
        // console.log("WHERE AM I")
        (function loop() {
            setTimeout(function () {
                console.log("BEEP")
              loop()
            }, 6000); //60000 = 60000ms = 60s / bpm
          }());
    }
}

// handlePlayMet = () => {
//     console.log("loop entered")
//     while(this.state.playing) {
//         (function loop() {
//             setTimeout(function () {
//                 console.log("BEEP")
//               loop()
//             }, 6000); //60000 = 60000ms = 60s / bpm
//           }());
//     }
// }


  render() {
    return (
      <View className="player" >
        {this.state.playing? <Pause onPlayerClick={this.handlePlayerClick} /> : <Play onPlayerClick={this.handlePlayerClick} />}
      </View>
    )
  }
}

export default Player