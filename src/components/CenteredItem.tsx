import { ReactElement } from 'react';
import { View, StyleSheet} from 'react-native';

export const CenteredItem = ({children}: {children: ReactElement | ReactElement[]}) => {
    return (
        <View style={styles.centeredItem}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    centeredItem: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    }
});
