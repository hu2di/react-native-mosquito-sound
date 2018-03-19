"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Sound from "react-native-sound";

var mSound;

export default class Mosquito extends Component {

  constructor(props) {
    super(props);

    Sound.setCategory("Playback");
    mSound = new Sound("mosquito.wav", Sound.MAIN_BUNDLE);

    this.state = {
      isPlaying: false,
      status: "PLAY"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this._click()}>
          <Text style={styles.text}>{this.state.status}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _click() {
    if (this.state.isPlaying) {
      this._pause();
    } else {
      this._play();
    }
  }

  _play() {
    mSound.setNumberOfLoops(-1);
    mSound.play(success => {
      if (success) {
        console.log("Success");
      } else {
        console.log("Failure");
        mSound.reset();
      }
    });

    this.setState({
      isPlaying: true,
      status: "PAUSE"
    });
  }

  _pause() {
    mSound.stop();

    this.setState({
      isPlaying: false,
      status: "PLAY"
    });
  }

  componentWillUnmount() {
    mSound.release();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#ff0000",
    height: 80,
    width: 160,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold"
  }
});
