import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { Navigation } from 'react-native-navigation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../assets/colors'
import Fonts from '../assets/Fonts'
import Strings from '../assets/strings'
import { moderateScale, scale, verticalScale } from '../utils/Scaling'


interface HeaderProps {
    componentId: string
    headerTitle: string,
    hasRightIcon: boolean
    isRightIconForDetails: boolean
    goBack?: boolean
    RouteName?: string
}

const WIDTH = Dimensions.get('screen').width

const Header = (props: HeaderProps) => {
    let { hasRightIcon, headerTitle, isRightIconForDetails, goBack, componentId } = props
    return (
        <View style={styles.container}>
            <View style={styles.leftSectionContainer}>
                <View style={styles.backBtnContainer}>
                    <TouchableOpacity style={styles.backBtn} activeOpacity={0.8} onPress={() => { goBack ? Navigation.pop(componentId) : null }}>
                        <Image source={require('../assets/images/arrowGreen.png')} style={styles.arrowImg} />
                    </TouchableOpacity>
                    <Text style={styles.btnTxt}>{Strings.Back}</Text>
                </View>
                <Text style={styles.headerTitle}>{headerTitle}</Text>
            </View>

            {hasRightIcon && !isRightIconForDetails ?
                (<View style={styles.transactionBtnContainer}>
                    <TouchableOpacity style={styles.transactionBtn} activeOpacity={0.8} >
                        <AntDesign name='check' style={styles.checkIcon} />
                    </TouchableOpacity>
                    <Text style={styles.btnTxt}>{Strings.Proccess}</Text>
                </View>) :
                hasRightIcon && isRightIconForDetails ?
                    (
                        <TouchableOpacity style={styles.editBtn} activeOpacity={0.8} >
                            <Feather name='edit-2' style={styles.editIcon} />
                            <Text style={styles.editText}>{Strings.Edit}</Text>
                        </TouchableOpacity>
                    ) : null
            }
        </View>
    )
}

export default React.memo(Header)

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: verticalScale(60),
        backgroundColor: colors.HEADER_COLOR,
        justifyContent: 'space-between',
        paddingHorizontal: scale(20),
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 7
    },
    leftSectionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backBtnContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    transactionBtnContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(5)
    },
    backBtn: {
        width: scale(26),
        height: scale(26),
        borderRadius: scale(26) / 2,
        backgroundColor: colors.WHITE_COLOR,
        borderColor: colors.BLACK_COLOR,
        borderWidth: scale(0.5),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    arrowImg: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
        transform: [{ rotateY: '180deg' }],
        tintColor: colors.BLACK_COLOR
    },
    transactionBtn: {
        width: scale(26),
        height: scale(26),
        borderRadius: scale(26) / 2,
        backgroundColor: colors.WHITE_COLOR,
        borderColor: colors.GREEN_COLOR,
        borderWidth: scale(0.5),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    checkIcon: {
        fontSize: moderateScale(12),
        color: colors.GREEN_COLOR,
    },
    btnTxt: {
        fontSize: moderateScale(6),
        fontFamily: Fonts.BOLD_FONT,
        color: colors.BLACK_COLOR,
        marginTop: verticalScale(3)
    },
    headerTitle: {
        fontSize: moderateScale(18),
        fontFamily: Fonts.BOLD_FONT,
        color: colors.BLACK_COLOR,
        marginHorizontal: scale(15),
        marginBottom: verticalScale(5)
    },
    editBtn: {
        borderColor: colors.BLACK_COLOR,
        borderWidth: scale(0.5),
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: moderateScale(15),
        backgroundColor: colors.WHITE_COLOR,
        elevation: 5
    },
    editIcon: {
        fontSize: moderateScale(11),
        color: colors.BLACK_COLOR,
        marginRight: scale(5)
    },
    editText: {
        fontSize: moderateScale(10),
        fontFamily: Fonts.SEMI_BOLD_FONT,
        color: colors.BLACK_COLOR,
    }
})
