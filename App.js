import React from 'react';
import { Root } from './src/navigation';
import { Font, AppLoading } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    } else {
      return <Root />;
    }
  }
}
