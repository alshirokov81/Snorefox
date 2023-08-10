import type {PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { COLORS, DEFAULT_STYLE_NUMBERS } from '../constants';

export default ({children}: PropsWithChildren) => {
    return (
        <SafeAreaView>
          <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.GRAY_4} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}>
                {children}
          </ScrollView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: DEFAULT_STYLE_NUMBERS.horizontalContainerPadding,
        backgroundColor: COLORS.GRAY_4,
    }
});
