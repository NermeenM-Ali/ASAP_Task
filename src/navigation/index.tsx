import React from 'react'
import { SafeAreaView } from 'react-native'
import { Navigation } from 'react-native-navigation'
import ModelDetailsScreen from '../screens/Models/ModelDetailsScreen'
import ModelScreen from '../screens/Models/ModelScreen'
import PictureCategoriesScreen from '../screens/PictureCategories/PictureCategoriesScreen'
import { AppScreenStack } from './ScreenNames'


// HOC 
const SafeAreaWrapper = (MyComponent: any) => (props: any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MyComponent  {...props} />
        </SafeAreaView>
    )
}


const registerScreens = () => {
    Navigation.registerComponent(AppScreenStack.PICTURE_CATEGORIES_SCREEN, () => SafeAreaWrapper(PictureCategoriesScreen))
    Navigation.registerComponent(AppScreenStack.MODEL_SCREEN, () => SafeAreaWrapper(ModelScreen))
    Navigation.registerComponent(AppScreenStack.MODEL_DETAILS_SCREEN, () => SafeAreaWrapper(ModelDetailsScreen))
}

export default registerScreens

