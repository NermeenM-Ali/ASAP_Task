import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../assets/colors'
import Fonts from '../../../assets/Fonts'
import { moderateScale, scale, verticalScale } from '../../../utils/Scaling'

interface ImageInfoRowProps {
    infoTitle: string
    infoDescription?: string
    withDescription?: boolean
}

const ImageInfoRow = (props: ImageInfoRowProps) => {
    let { infoTitle, infoDescription, withDescription = true } = props
    return (
        <View style={styles.infoRowContainer}>
            <Text style={styles.infoTitle}>{infoTitle}</Text>
            {withDescription && (<Text style={styles.infoDescription}>{infoDescription}</Text>)}
        </View>
    )
}

export default React.memo(ImageInfoRow)

const styles = StyleSheet.create({
    infoRowContainer: {
        width: scale(310),
        paddingVertical: verticalScale(8),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    infoTitle: {
        fontFamily: Fonts.REGULAR_FONT,
        fontSize: moderateScale(15),
        color: colors.DARK_GRAY
    },
    infoDescription: {
        fontFamily: Fonts.BOLD_FONT,
        fontSize: moderateScale(15),
        color: colors.DARK_GRAY
    }
})
