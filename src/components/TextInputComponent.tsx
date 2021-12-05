import React from 'react'
import { Image, Keyboard, StyleSheet, TextInput, View } from 'react-native'
import colors from '../assets/colors'
import Fonts from '../assets/Fonts'
import { scale, verticalScale } from '../utils/Scaling'

interface TextInputComponentProps {
    value: string | any
    onChangeText: (txt: any) => any
    placeholder: string
    hasIcon: boolean
}

const TextInputComponent = (props: TextInputComponentProps) => {
    let { onChangeText, placeholder, value, hasIcon } = props
    return (
        <View style={[styles.inputContainer, {
            backgroundColor: hasIcon ? colors.LIGHTGRAY_COLOR : colors.WHITE_COLOR,
            width: hasIcon ? scale(335) : scale(312),
            marginTop: hasIcon ? verticalScale(20) : verticalScale(7)
        }]}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={() => Keyboard.dismiss()}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor={colors.SEARCH_GRAY_COLOR} />

            {hasIcon && (<View style={styles.barCodeContainer}>
                <Image source={require('../assets/images/barCode.png')} style={styles.barCodeImg} />
            </View>)}
        </View>
    )
}

export default React.memo(TextInputComponent)

const styles = StyleSheet.create({
    inputContainer: {
        width: scale(335),
        height: verticalScale(49),
        marginTop: verticalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        borderColor: colors.BORDER_COLOR,
        backgroundColor: colors.LIGHTGRAY_COLOR,
        borderRadius: scale(25),
        elevation: 5

    },
    input: {
        alignSelf: 'center',
        borderWidth: scale(0.5),
        width: scale(290),
        height: verticalScale(49),
        borderColor: 'transparent',
        color: colors.DARK_GRAY,
        fontFamily: Fonts.ITALIC_FONT,
        paddingLeft: scale(20)
    },
    barCodeContainer: {
        width: scale(45),
        height: verticalScale(49),
        borderRadius: scale(25),
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: scale(10)
    },
    barCodeImg: {
        width: scale(26.17),
        height: verticalScale(18),
        resizeMode: 'contain',
        alignSelf: 'center'
    }
})
