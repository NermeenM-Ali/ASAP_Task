import React, { useMemo, useState } from 'react'
import { StyleSheet, FlatList, View, TextInput, Keyboard, Image, Text } from 'react-native'
import colors from '../../assets/colors'
import Fonts from '../../assets/Fonts'
import Strings from '../../assets/strings'
import Header from '../../components/Header'
import TextInputComponent from '../../components/TextInputComponent'
import ModelsData, { IModel } from '../../data/ModelsData'
import { moderateScale, scale, verticalScale } from '../../utils/Scaling'
import ModelItem from './ModelsComponents/ModelItem'

interface ModelScreenProps {
    componentId: string
    categoryName: string
}

const ModelScreen = (props: ModelScreenProps) => {
    let { componentId, categoryName } = props
    const [filteredData, setFilteredData] = useState<IModel[]>(ModelsData)
    const [searchText, setSearchText] = useState<string | any>(null)

    const renderPictureCategories = () => {
        return (
            <FlatList
                data={filteredData}
                numColumns={2}
                keyExtractor={(_, idx) => idx.toString()}
                style={[styles.modelList, { alignSelf: searchText ? 'flex-start' : 'center', paddingHorizontal: searchText ? scale(10) : 0 }]}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
                renderItem={({ item }) => <ModelItem item={item} componentId={componentId} />} />
        )
    }

    const renderSearchInput = () => {
        return (
            <TextInputComponent
                hasIcon
                value={searchText}
                placeholder={Strings.TypeToSearch}
                onChangeText={(newSearchTxt: any | string) => applySearch(newSearchTxt)} />
        )
    }

    const applySearch = (searchVal: any) => {
        let data: any[] = [];
        let filteredName = searchVal ? searchVal.toLowerCase() : null
        if (filteredName) {
            data = ModelsData.filter((item: any) => item.modelName.toLowerCase().match(filteredName));
            setFilteredData(data)
            setSearchText(filteredName)
        } else {
            setFilteredData(ModelsData)
            setSearchText(null)
        }
    }

    const renderEmptyView = useMemo(() => {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.notFoundTxt}>{Strings.NotFound}</Text>
            </View>
        )
    }, [])

    return (
        <View style={styles.container}>
            <Header headerTitle={categoryName} hasRightIcon={false} isRightIconForDetails={false} goBack={true} componentId={componentId} />
            {renderSearchInput()}
            {filteredData.length ? renderPictureCategories() : renderEmptyView}
        </View>
    )
}

export default ModelScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BACKGROUND_COLOR,
        flex: 1
    },
    modelList: {
        marginTop: verticalScale(15),
        flexGrow: 1,
        alignSelf: 'center'
    },
    seperator: {
        width: scale(330),
        alignSelf: 'center',
        marginVertical: verticalScale(10),
        height: verticalScale(1),
        backgroundColor: colors.BORDER_COLOR
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notFoundTxt: {
        color: colors.BORDER_COLOR,
        fontSize: moderateScale(16)
    }
})
