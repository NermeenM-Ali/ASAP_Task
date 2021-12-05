import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../../assets/colors'
import Fonts from '../../../assets/Fonts'
import { scale, verticalScale, moderateScale } from '../../../utils/Scaling'

interface ToggleHeaderProps {
    toggleTitle: string,
    isVisible: boolean
    onPressToToggle: () => any
}
const ToggleHeader = (props: ToggleHeaderProps) => {
    let { isVisible, onPressToToggle, toggleTitle } = props
    return (
        <View style={styles.imageInfoToggleSection}>
            <Text style={styles.imgInfotxt}>{toggleTitle}</Text>
            {
                isVisible ?
                    <TouchableOpacity activeOpacity={0.8} style={styles.imageInfoContainer}
                        onPress={onPressToToggle}>
                        <Image source={require('../../../assets/images/arrowUp.png')} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity activeOpacity={0.8} style={styles.imageInfoContainer}
                        onPress={onPressToToggle}>
                        <Image source={require('../../../assets/images/arrowUp.png')} style={[styles.arrowIcon, { transform: [{ rotateX: '180deg' }] }]} />
                    </TouchableOpacity>
            }

        </View>
    )
}

export default React.memo(ToggleHeader)

const styles = StyleSheet.create({
    imageInfoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(25),
        height: verticalScale(25),
        marginRight: scale(-15)
    },

    arrowIcon: {
        width: scale(10),
        height: verticalScale(10),
        resizeMode: 'contain'
    },
    imgInfotxt: {
        fontSize: moderateScale(16),
        color: colors.DARK_GRAY,
        fontFamily: Fonts.BOLD_FONT
    },
    imageInfoToggleSection: {
        width: scale(340),
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})
