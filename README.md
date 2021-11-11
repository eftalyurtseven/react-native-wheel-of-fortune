# react-native-wheel-of-fortune

[![Maintainability](https://api.codeclimate.com/v1/badges/516712bad4032cba5439/maintainability)](https://codeclimate.com/github/eftalyurtseven/react-native-wheel-of-fortune)
[![Download](https://img.shields.io/npm/dm/react-native-wheel-of-fortune.svg)](https://github.com/eftalyurtseven/react-native-wheel-of-fortune)

Wheel of fortune component for React Native

![React Native Wheel Of Fortune](https://github.com/eftalyurtseven/react-native-wheel-of-fortune/raw/master/assets/images/wof.gif "React Native Wheel Of Fortune")

## Installation

Use the package manager npm and yarn to install react-native-wheel-of-fortune.

```bash
yarn add react-native-wheel-of-fortune
# or using npm
npm i react-native-wheel-of-fortune --save
```

## Dependencies

WheelOfFortune is dependent on [react-native-svg](https://github.com/react-native-community/react-native-svg) and [D3-shape](https://github.com/d3/d3-shape) plugins.

## Import

```js
import WheelOfFortune from "react-native-wheel-of-fortune";
```

## Properties

| Property               | Type                     | Default         | Desc                                     |
| ---------------------- | ------------------------ | --------------- | ---------------------------------------- |
| rewards _(required)_   | `Array`                  | -               | Set Rewards                              |
| winner                 | `Number`                 | random          |  Set winner index                        |
| colors                 | `Array`                  |  Default Colors | Segment background colors                |
| duration _(ms)_        | `Number`                 | 10000           | Completion time (ms)                     |
| getWinner _(required)_ |  `callback(value,index)` |  -              | Winner value and index callback function |
| backgroundColor        | `String`                 | #FFFFFF         |  Wheel background color                  |
| borderWidth            | `Number`                 | 2               | Wheel border width                       |
| borderColor            |  `String`                |  #FFFFFF        | Wheel border color                       |
| textColor              | `String`                 |  #FFFFFF        | Rewards text color                       |
| knobSize               | `Number`                 | 20              | Knob size                                |
| knobSource             | `Path`                   | knob.png        |  Knob source                             |
| playButton             |  `render()`              | example         | Render method for tap to play button     |
| innerRadius            | `Number`                 | 100             | Set inner radius size                    |
| innerRadius            | `Number`                 | 100             | Set inner radius size                    |
| textAngle              | `String`                 | horizontal      | Set angle of reward text                 |

## Usage

```js
const participants = [
  '%10',
  '%20',
  '%30',
  '%40',
  '%50',
  '%60',
  '%70',
  '%90',
  'FREE',
];
const wheelOptions = {
      rewards: participants,
      knobSize: 50,
      borderWidth: 5,
      borderColor: '#000',
      innerRadius: 50,
      duration: 4000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('./assets/images/knob.png'),
      getWinner: (value, index) => {
        this.setState({winnerValue: value, winnerIndex: index});
      },
      onRef: ref => (this.child = ref),
    };
<WheelOfFortune
    options={wheelOptions}
/>
<Button title="Press me" onPress={ () => { this.child._onPress() } } />
```

For more information and test go to [/Example](https://github.com/eftalyurtseven/react-native-wheel-of-fortune/tree/master/Example) folder.

## TODO

- Reset Wheel Functions

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contributors

[![Joaquin Beceiro](https://avatars0.githubusercontent.com/u/10049759?s=50 "Joaquin Beceiro")](https://github.com/JoaquinBeceiro)
[<img src="https://avatars0.githubusercontent.com/u/50332377" width="50"/>](https://github.com/Rubinjo)

## License

[MIT](https://choosealicense.com/licenses/mit/)
