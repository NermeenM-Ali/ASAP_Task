import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../assets/colors'
import Fonts from '../../../assets/Fonts'
import { IHistoryNotes } from '../../../data/HistoryNotesData'
import { moderateScale, scale, verticalScale } from '../../../utils/Scaling'

interface HistoryNotesItemProps {
    item: IHistoryNotes
}

const HistoryNotesItem = (props: HistoryNotesItemProps) => {
    let { item } = props
    let { userName, date, noteDetails } = item
    return (
        <View style={styles.container}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.details}>{noteDetails}</Text>
        </View>
    )
}

export default HistoryNotesItem

const styles = StyleSheet.create({
    container: {
        width: scale(340),
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: scale(20),
        marginVertical: verticalScale(7)
    },
    userName: {
        fontSize: moderateScale(12),
        color: colors.BLACK_COLOR,
        fontFamily: Fonts.SEMI_BOLD_FONT
    },
    date: {
        fontSize: moderateScale(8),
        color: colors.BLACK_COLOR,
        fontFamily: Fonts.ITALIC_FONT,
        marginVertical: verticalScale(2)
    },
    details: {
        fontSize: moderateScale(12),
        color: colors.BLACK_COLOR,
        fontFamily: Fonts.REGULAR_FONT
    }
})
