import React, { useCallback, useMemo, useState } from 'react'
import { Image, ImageRequireSource, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../../assets/colors'
import Fonts from '../../assets/Fonts'
import Strings from '../../assets/strings'
import Header from '../../components/Header'
import TextInputComponent from '../../components/TextInputComponent'
import HistoryNotesData, { IHistoryNotes } from '../../data/HistoryNotesData'
import { moderateScale, scale, verticalScale } from '../../utils/Scaling'
import HistoryNotesItem from './ModelsComponents/HistoryNotesItem'
import ImageInfoRow from './ModelsComponents/ImageInfoRow'
import ToggleHeader from './ModelsComponents/ToggleHeader'

interface ModelDetailsScreenProps {
    componentId: string,
    modelImage: ImageRequireSource
}

const ModelDetailsScreen = (props: ModelDetailsScreenProps) => {
    const { componentId, modelImage } = props
    const [noteText, setNoteText] = useState<string | any>(null)
    const [isImageInfoVisible, setImageInfoVisible] = useState<boolean>(false)
    const [isNotesSectionVisible, setNotesSectionVisible] = useState<boolean>(false)

    const renderModelImageSection = useMemo(() => {
        return (
            <View style={styles.modelImageContainer}>
                <View style={styles.imgWhiteSection}>
                    <Image source={modelImage} style={styles.img} />
                </View>
            </View>
        )
    }, [])

    const renderSeperator = useMemo(() => {
        return (<View style={styles.seperator} />)
    }, [])

    const handleImagInfoToggle = useCallback(() => { setImageInfoVisible(!isImageInfoVisible) }, [isImageInfoVisible])

    const renderImageInfoSection = () => {
        return (
            <>
                <ToggleHeader
                    toggleTitle='Image Info'
                    isVisible={isImageInfoVisible}
                    onPressToToggle={handleImagInfoToggle} />
                {isImageInfoVisible && (
                    <View>
                        <ImageInfoRow infoTitle='Model' infoDescription='GT2000' />
                        <ImageInfoRow infoTitle='Model Name' infoDescription='GT2000' />
                        <ImageInfoRow infoTitle='Model Type' infoDescription='Hello1' />
                        <ImageInfoRow infoTitle='Cost' withDescription={false} />
                        <ImageInfoRow infoTitle='Category' withDescription={false} />
                        <ImageInfoRow infoTitle='Additional Description' withDescription={false} />
                    </View>
                )}
            </>
        )
    }

    const handleNotesToggle = useCallback(() => { setNotesSectionVisible(!isNotesSectionVisible) }, [isNotesSectionVisible])

    const renderNotesSection = () => {
        return (
            <>
                <ToggleHeader
                    toggleTitle='Notes'
                    isVisible={isNotesSectionVisible}
                    onPressToToggle={handleNotesToggle} />
                {isNotesSectionVisible && (
                    <View>
                        {renderNotesInputSection()}
                        {renderNotesHeader}
                        <View style={styles.notesList}>
                            {
                                HistoryNotesData.map((item: IHistoryNotes, index: number) => (
                                    <View key={index.toString()} >
                                        <HistoryNotesItem item={item} />
                                        {index !== HistoryNotesData.length - 1 && (renderNotesListSeperator)}
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                )}
            </>
        )
    }
    const renderNotesHeader = useMemo(() => {
        return (
            <View style={styles.notesHeaderContainer}>
                <Text style={styles.notesHeaderTitle}>{Strings.HistoryNotes}</Text>
            </View>
        )
    }, [])

    const renderNotesListSeperator = useMemo(() => (
        <View style={styles.notesSeparator} />
    ), [])


    const renderNotesInputSection = () => {
        return (
            <View>
                {renderSaveBtn}
                <TextInputComponent
                    hasIcon={false}
                    value={noteText}
                    placeholder={Strings.AddANote}
                    onChangeText={(noteNewText: any | string) => setNoteText(noteNewText)} />
            </View>
        )
    }
    const renderSaveBtn = useMemo(() => (
        <View style={styles.saveBtnContainer}>
            <TouchableOpacity style={styles.saveBtn} activeOpacity={0.8} >
                <Image source={require('../../assets/images/save.png')} style={styles.saveImg} />
                <Text style={styles.saveTxt}>{Strings.Save}</Text>
            </TouchableOpacity>
        </View>
    ), [])
    return (
        <ScrollView style={styles.container}>
            <Header headerTitle={'Model Details'} hasRightIcon isRightIconForDetails goBack={true} componentId={componentId} />
            <View style={styles.DetailsContainer}>
                {renderModelImageSection}
                {renderSeperator}
                {renderImageInfoSection()}
                {renderSeperator}
                {renderNotesSection()}
            </View>
        </ScrollView>
    )
}

export default ModelDetailsScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BACKGROUND_COLOR,
        flex: 1
    },
    DetailsContainer: {
        backgroundColor: colors.LIGHTGRAY_COLOR,
        width: scale(350),
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(20),
        marginVertical: verticalScale(30),
        borderRadius: moderateScale(15),
        elevation: 3,
        alignSelf: 'center'
    },
    modelImageContainer: {
        width: '100%',
        height: verticalScale(200),
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgWhiteSection: {
        width: scale(224),
        height: verticalScale(163),
        backgroundColor: colors.WHITE_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(20),
        elevation: 8
    },
    img: {
        width: scale(196.5),
        height: verticalScale(130),
        resizeMode: 'contain'
    },
    seperator: {
        width: scale(310),
        height: verticalScale(1),
        alignSelf: 'center',
        backgroundColor: colors.BORDER_COLOR,
        borderRadius: moderateScale(2),
        marginVertical: verticalScale(5)
    },
    notesSeparator: {
        width: scale(290),
        height: verticalScale(1),
        alignSelf: 'center',
        backgroundColor: colors.LIGHTGRAY_COLOR,
        borderRadius: moderateScale(2),
        marginVertical: verticalScale(5)
    },
    notesList: {
        backgroundColor: colors.WHITE_COLOR,
        width: scale(312),
        alignSelf: 'center',
        borderRadius: moderateScale(18),
        paddingVertical: verticalScale(10),
        elevation: 5
    },
    notesHeaderContainer: {
        width: scale(295),
        alignSelf: 'center',
        marginVertical: verticalScale(15),
    },
    notesHeaderTitle: {
        color: colors.DARK_GRAY,
        fontFamily: Fonts.REGULAR_FONT,
        fontSize: moderateScale(15)
    },
    saveBtnContainer: {
        width: scale(328),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    saveBtn: {
        paddingHorizontal: scale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    saveImg: {
        width: scale(12.7),
        height: verticalScale(12.7),
        marginRight: scale(5),
        resizeMode: 'contain'
    },
    saveTxt: {
        fontSize: moderateScale(10),
        fontFamily: Fonts.SEMI_BOLD_FONT,
        color: colors.BLACK_COLOR,
    }
})
