import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import colors from '../../../assets/colors'
import Fonts from '../../../assets/Fonts'
import { IModel } from '../../../data/ModelsData'
import { moderateScale, scale, verticalScale } from '../../../utils/Scaling'

interface ModelItemProps {
    item: IModel,
    componentId: string,
}

const ModelItem = (props: ModelItemProps) => {
    let { item, componentId } = props
    let { modelImage, modelName, navigationRoute } = item

    const handleNavigation = () => {
        Navigation.push(componentId, { component: { name: navigationRoute, passProps: { modelImage } } })
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={handleNavigation} style={styles.container}>
            <View style={styles.Imagecontainer}>
                <Image source={modelImage} style={styles.modalImg} />
            </View>
            <Text style={styles.modalName}>{modelName}</Text>
        </TouchableOpacity>
    )
}

export default ModelItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    Imagecontainer: {
        width: scale(157),
        height: verticalScale(114),
        borderRadius: moderateScale(15),
        backgroundColor: colors.WHITE_COLOR,
        elevation: 4,
        marginVertical: verticalScale(10),
        marginHorizontal: scale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalName: {
        color: colors.BLACK_COLOR,
        fontSize: moderateScale(11),
        fontFamily: Fonts.BOLD_FONT,
        marginBottom: verticalScale(5)
    },
    modalImg: {
        width: scale(137.5),
        height: verticalScale(91.5),
        resizeMode: 'contain'
    }
})
