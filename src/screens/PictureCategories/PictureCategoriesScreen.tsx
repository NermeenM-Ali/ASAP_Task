import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import colors from '../../assets/colors'
import Header from '../../components/Header'
import PictureCategories from '../../data/PictureCategories'
import { verticalScale } from '../../utils/Scaling'
import PictureCategoryItem from './PictureCategoriesComponents/PictureCategoryItem'

interface PictureCategoriesScreenProps {
    componentId: string
}

const PictureCategoriesScreen = (props: PictureCategoriesScreenProps) => {
    let { componentId } = props

    const renderPictureCategories = () => {
        return (
            <FlatList
                data={PictureCategories}
                keyExtractor={(_, idx) => idx.toString()}
                style={styles.categoriesList}
                renderItem={({ item }) => <PictureCategoryItem item={item} componentId={componentId} />} />
        )
    }
    return (
        <View style={styles.container}>
            <Header headerTitle='Pictures' hasRightIcon isRightIconForDetails={false} goBack={false} componentId={componentId} />
            {renderPictureCategories()}
        </View>
    )
}

export default PictureCategoriesScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BACKGROUND_COLOR,
        flex: 1
    },
    categoriesList: {
        marginTop: verticalScale(30),
        flexGrow: 1
    }
})
