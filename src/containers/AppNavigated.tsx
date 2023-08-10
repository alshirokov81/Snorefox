import { NavigationContainer, createNavigationContainerRef, NavigationContainerRefWithCurrent } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useAppSelector } from '../hooks/useAppSelector';
import { OnboardingStackParamList, HomeStackParamList } from '../types';
import TabBar, { BOTTOM_TABS } from '../components/TabBar';
import { NoTabBarOptions, TabBarOptions, TabBarMedOptions } from '../components/TopBar';
import {
    ChooseSleepMode,
    PairPartnersDevice,
    ScanPartnersCode,
    HomeOptionsScreen,
    HomeMeasurementScreen,
} from '../screens';
import { usePopUp } from '../hooks/usePopUp';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();
export const navigationRef = createNavigationContainerRef<OnboardingStackParamList | HomeStackParamList>();

type TabAppProps = {
    initialTab: BOTTOM_TABS
};

const Tab = createBottomTabNavigator();
const EmptyComponent = () => null;
//TODO create real components

export enum SCREEN_NAMES_ONBOARDING {
    OnboardingChooseScreen = 'OnboardingChooseScreen',
    OnboardingPairScreen = 'OnboardingPairScreen',
    OnboardingScanScreen = 'OnboardingScanScreen',
}


export enum SCREEN_NAMES_HOME_TAB {
    HomeOptionsScreen = 'HomeOptionsScreen',
    HomeMeasurementScreen = 'HomeMeasurementScreen',
}

const  TabApp = ({initialTab = BOTTOM_TABS.Home}: TabAppProps) => (
    <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        initialRouteName={initialTab}
    >
        <Tab.Screen
            name={BOTTOM_TABS.Home}
            component={HomeStack}
            options={NoTabBarOptions}
        />
        <Tab.Screen
            name={BOTTOM_TABS.Results}
            component={EmptyComponent}
            options={{
                headerShown: false
            }}
        />
        <Tab.Screen
            name={BOTTOM_TABS.Account}
            component={EmptyComponent}
            options={{
                headerShown: false
            }}
        />
        <Tab.Screen
            name={BOTTOM_TABS.Settings}
            component={EmptyComponent}
            options={{
                headerShown: false
            }}
        />
    </Tab.Navigator>
);

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SCREEN_NAMES_HOME_TAB.HomeOptionsScreen}
                component={HomeOptionsScreen}
                options={TabBarMedOptions}
            />
            <Stack.Screen
                name={SCREEN_NAMES_HOME_TAB.HomeMeasurementScreen}
                component={HomeMeasurementScreen}
                options={TabBarMedOptions}
            />
        </Stack.Navigator>
    );
}

export const OnboardingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SCREEN_NAMES_ONBOARDING.OnboardingChooseScreen}
                component={ChooseSleepMode}
                options={TabBarMedOptions}
            />
            <Stack.Screen
                name={SCREEN_NAMES_ONBOARDING.OnboardingPairScreen}
                component={PairPartnersDevice}
                options={TabBarOptions}
            />
            <Stack.Screen
                name={SCREEN_NAMES_ONBOARDING.OnboardingScanScreen}
                component={ScanPartnersCode}
                options={TabBarOptions}
            />
        </Stack.Navigator>
    );
}

export const AppNavigated = () => {
    const displayOnboarding = useAppSelector(state => state.appData.displayOnboarding);
    const initialTabBarTab = useAppSelector(state => state.appData.initialTabBarTab);
    usePopUp();
    return (
        <NavigationContainer ref={navigationRef}>
            {displayOnboarding
                ? <OnboardingStack />
                : <TabApp 
                    initialTab={initialTabBarTab}
                  />
            }
        </NavigationContainer>
    );
}
