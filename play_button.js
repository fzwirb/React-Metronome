import React, { Component } from 'react'
import Play from './play'
import Pause from './pause'
import { View } from 'react-native'
import tempo from './App.js'
import App from './App.js'
import { render } from 'react-dom'


let BPM = App.tempo     
class Player extends Component {



constructor(props) {
  super(props)
  let playbool = false
  this.state = {
    playing: false
  }
  this.startAndStop = this.startAndStop.bind(this) //bind the state to the play method so that it can be used
}

handlePlayerClick = () => {
    console.log("in handle player click")
    console.log(this.state.playing)

  if (!this.state.playing) {
    console.log("IN FIRST IF")
    this.setState({playing: true}, 
      () => {this.handlePlayMet()});
    // console.log(this.state.playing)
    // this.handlePlayMet()

  } else {
    console.log("IN ELSE")
    this.setState({playing: false}, 
      () => {this.handlePlayMet()});  
    console.log("DONE")
    return
  }
//   this.handlePlayMet(this.state.playing)
} 

returnFunct = () => {
  console.log("RETURN")
  return
}
updatePlayingInLoop = () => {
    console.log("updatePLAYINGLOOP CALLED")
    return inner = this.state.playing
}

playClick = () => {
  // this.click1.play();
  console.log("BEEPppp")
}

startAndStop = () =>{ 
  if(this.state.playing) {
    console.log("HERE")
    clearInterval(this.timer);
    this.setState({playing: false});
  }    
  else {
    console.log(BPM)
    this.timer = setInterval(this.playClick, (60 / App.tempo) * 1000);
    this.setState({playing: true}, this.playClick);
  }
}



handlePlayMet = () => {
    console.log("in play met!")
    console.log(this.state.playing)
    this.playbool = this.state.playing
    let inner = this.playbool
    console.log("PLAYBOOL: " + this.playbool)
    this.startAndStop()
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
        {this.state.playing? <Pause onPlayerClick={this.startAndStop} /> : <Play onPlayerClick={this.startAndStop} />}
      </View>
    )
  }
}

export default Player