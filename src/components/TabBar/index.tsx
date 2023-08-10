import React  from 'react';
import { View, StyleSheet} from 'react-native';


import TabItem from './TabItem';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Home, Results, Account, Settings } from '../../svg';
import { COLORS } from '../../constants';


export enum BOTTOM_TABS {
    Home = 'Home',
    Results = 'Results',
    Account = 'Account',
    Settings = 'Settings',
};

const TAB_IMAGES: { [key: string]: Element } = {
    [BOTTOM_TABS.Home] : <Home />,
    [BOTTOM_TABS.Results] : <Results />,
    [BOTTOM_TABS.Account] : <Account />,
    [BOTTOM_TABS.Settings] : <Settings />,
}
const TAB_IMAGES_ACTIVE: { [key: string]: Element } = {
    [BOTTOM_TABS.Home] : <Home fillColor={COLORS.BLACK_1} />,
    [BOTTOM_TABS.Results] : <Results fillColor={COLORS.BLACK_1} />,
    [BOTTOM_TABS.Account] : <Account fillColor={COLORS.BLACK_1} />,
    [BOTTOM_TABS.Settings] : <Settings fillColor={COLORS.BLACK_1} />,
}


export default ({ state, descriptors, navigation }: BottomTabBarProps) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const isActive = state.index === index;
                const SvgImage = isActive ? TAB_IMAGES_ACTIVE[route.name] : TAB_IMAGES[route.name];
                return (
                    <TabItem
                        key={route.key}
                        route={route}
                        navigation={navigation}
                        options={descriptors[route.key]?.options}
                        isActive={isActive}
                        imageComponent={SvgImage}
                        titleCode={`TabName_${route.name}`}
                    />
                );
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
