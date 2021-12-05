import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import colors from '../../../assets/colors'
import Fonts from '../../../assets/Fonts'
import { IPictureCategory } from '../../../data/PictureCategories'
import { moderateScale, scale, verticalScale } from '../../../utils/Scaling'

interface PictureCategoryItemProps {
    item: IPictureCategory,
    componentId: string
}

const PictureCategoryItem = (props: PictureCategoryItemProps) => {
    let { componentId, item } = props
    let { categoryName, navigationRoute, image } = item

    const handleNavigation = () => { Navigation.push(componentId, { component: { name: navigationRoute, passProps: { categoryName } } }) }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={handleNavigation} style={styles.container}>
            <Image source={image} style={styles.itemImg} />
            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.categoryName}>{categoryName}</Text>
            </View>
            <Image source={require('../../../assets/images/arrowGreen.png')} style={styles.arrowImg} />
        </TouchableOpacity>
    )
}

export default PictureCategoryItem

const styles = StyleSheet.create({
    container: {
        width: scale(284),
        height: verticalScale(49),
        backgroundColor: colors.LIGHTGRAY_COLOR,
        marginVertical: verticalScale(10),
        borderRadius: moderateScale(25),
        alignSelf: 'center',
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(15),
        borderColor: colors.BORDER_COLOR,
        borderWidth: scale(0.5)
    },
    itemImg: {
        width: scale(26),
        height: verticalScale(22),
        resizeMode: 'contain'
    },
    arrowImg: {
        width: scale(19.19),
        height: verticalScale(12.63),
        resizeMode: 'contain'
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: scale(15)
    },
    categoryName: {
        fontFamily: Fonts.BOLD_FONT,
        fontSize: moderateScale(18),
        color: colors.BLACK_COLOR,
        textAlign: 'left'
    }
})
