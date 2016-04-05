/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View
} from 'react-native';

class First extends Component {
  constructor(props) {
    super(props);
  }

  _handleNav () {
    console.log('props %o', this.props);
    this.props.navigator.push({
      title: 'Second',
      component: Second,
      passProp: {
        data: 'dummy from First'
      }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>First Scene</Text>
        <TouchableWithoutFeedback onPress={this._handleNav.bind(this)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Go To Second Scene
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

class Second extends Component {
  constructor(props) {
    super(props);
  }

  _handleNav () {
    this.props.navigator.push({
      title: 'First',
      component: First,
      passProp: {
        data: 'dummy from Scond'
      }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Second Scene</Text>
        <TouchableWithoutFeedback onPress={this._handleNav.bind(this)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Go To First Scene
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

class Curensea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.nav}
        itemWrapperStyle={styles.navWrap}
        initialRoute={{
          title: 'First Scene',
          component: First,
        }}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  nav: {
    flex: 1,
  },
  navWrap: {
    flex: 1,
    marginTop: 70,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 80,
  },
  button: {
    backgroundColor: '#009DDD',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
  }
});

AppRegistry.registerComponent('Curensea', () => Curensea);
