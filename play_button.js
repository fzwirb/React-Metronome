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
  let playbool = false
  this.state = {
    playing: false
  }
  this.handlePlayMet = this.handlePlayMet.bind(this) //bind the state to the play method so that it can be used
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
startAndStop(bool) { 
    // var playBoolInner = this.playbool
    (function loop()  {
        
              setTimeout(function () {
                  console.log("BEEP")
                  if(!bool) {
                    console.log("RETURNED")
                    return
                  }
                loop()
              }, 6000); //60000 = 60000ms = 60s / bpm
            }());
}


handlePlayMet = () => {
    console.log("in play met!")
    console.log(this.state.playing)
    this.playbool = this.state.playing
    let inner = this.playbool
    console.log("PLAYBOOL: " + this.playbool)
    this.startAndStop(inner)
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