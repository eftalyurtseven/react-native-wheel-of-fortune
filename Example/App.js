import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button
} from "react-native";

import WheelOfFortune from 'react-native-wheel-of-fortune';

const participants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const rewards = participants.map(e => ({ uri: `https://i.pravatar.cc/300?$1` }))

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null
    }
    this.child = null
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
          onRef={ref => (this.child = ref)}
          rewards={participants}
          knobSize={20}
          borderWidth={3}
          borderColor={"#FFF"}
          innerRadius={30}
          duration={5000}
          backgroundColor={"#c0392b"}
          textAngle={"vertical"}
          getWinner={(value, index) => this.setState({ winnerValue: value, winnerIndex: index })}
        />
        <Button title="Press me" onPress={() => { this.child._onPress() }} />
       
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