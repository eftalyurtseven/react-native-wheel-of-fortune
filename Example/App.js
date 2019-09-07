import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from "react-native";

import WheelOfFortune from 'react-native-wheel-of-fortune';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null
    }
  }

  _renderPlayButton = () => {
    return (
      <Text style={styles.tapToStart}>TAP TO PLAY</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <WheelOfFortune
          rewards={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          knobSize={20}
          borderWidth={3}
          borderColor={"#FFF"}
          winner={3}
          backgroundColor={"#c0392b"}
          //knoobSource={{ uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' }}
          getWinner={(value, index) => this.setState({ winnerValue: value, winnerIndex: index })}
          playButton={() => this._renderPlayButton()}
        />
        {this.state.winnerValue && (
          <View style={styles.winner}>
            <Text style={styles.winnerText}>Winner: {this.state.winnerValue}</Text>
          </View>
        )}
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E74C3C'
  },
  winner: {
    width: '100%',
    position: 'absolute',
    padding: 10,
    backgroundColor: '#fff',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  winnerText: {
    fontSize: 26,
    color: '#666'
  },
  tapToStart: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold'
  }
});