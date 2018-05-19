import React from 'react';
import { Root } from './src/navigation';
import { Font, AppLoading } from 'expo';

export default class App extends React.Component {
  state = {
    isReady: false,
  }

  async _loadAssetsAsync() {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }
    return <Root />;
  }
}
