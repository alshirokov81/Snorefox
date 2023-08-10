import { View, StyleSheet } from 'react-native';
import { NativeStackNavigationOptions  } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions  } from '@react-navigation/bottom-tabs';

import { SnorefoxLogoMed, SnorefoxLogo } from '../svg';


export const TopBar = () => (
    <View style={styles.container} >
        <SnorefoxLogo/>
    </View>
)

export const TopBarMed = () => (
    <View style={styles.container} >
        <SnorefoxLogoMed />
    </View>
);

export const TabBarMedOptions: NativeStackNavigationOptions = {
    headerTitle: TopBarMed,
    headerTitleAlign: 'center'
};

export const TabBarOptions: NativeStackNavigationOptions = {
    headerTitle: TopBar,
    headerTitleAlign: 'center'
};

export const NoTabBarOptions: BottomTabNavigationOptions = {
    headerShown: false,
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        paddingBottom: 15,
    }
});
