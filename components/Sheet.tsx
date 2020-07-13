import * as React from 'react';
import { Animated } from 'react-native';

const DEFAULT_BOTTOM = -300;
const DEFAULT_ANIMATE_TIME = 300;

export type SheetProps = {
  visible: boolean;
};

export type SheetState = {
  bottom: Animated.Value;
};

class Sheet extends React.Component<SheetProps, SheetState> {
  state = {
    bottom: new Animated.Value(DEFAULT_BOTTOM),
  };

  UNSAFE_componentWillReceiveProps(newProps: SheetProps) {
    return Animated.timing(this.state.bottom, {
      toValue: newProps.visible ? 0 : DEFAULT_BOTTOM,
      duration: DEFAULT_ANIMATE_TIME,
      useNativeDriver: false,
    }).start();
  }

  render() {
    return (
      <Animated.View style={{ bottom: this.state.bottom }}>{this.props.children}</Animated.View>
    );
  }
}

export default Sheet;
