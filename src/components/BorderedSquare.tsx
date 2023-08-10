import { ReactElement } from 'react';
import { View, StyleSheet} from 'react-native';

import { COLORS } from '../constants';

export const BorderedSquare = ({children = null}: {children?: ReactElement | ReactElement[] | null}) => {
    return (
        <View style={styles.centeredItem}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    centeredItem: {
        width: 160,
        height: 160,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: COLORS.GRAY_2,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: COLORS.WHITE_1,
    }
});
