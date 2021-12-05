import { ImageRequireSource } from "react-native"
import { AppScreenStack } from "../navigation/ScreenNames"

export interface IPictureCategory {
    id: number,
    categoryName: string,
    navigationRoute: AppScreenStack,
    image: ImageRequireSource
}

const PictureCategories: IPictureCategory[] = [
    {
        id: 1,
        categoryName: 'Asset Inventory',
        navigationRoute: AppScreenStack.MODEL_SCREEN,
        image: require('../assets/images/stock.png')
    },
    {
        id: 2,
        categoryName: 'Model',
        navigationRoute: AppScreenStack.MODEL_SCREEN,
        image: require('../assets/images/vendor.png')
    },
    {
        id: 3,
        categoryName: 'Person',
        navigationRoute: AppScreenStack.MODEL_SCREEN,
        image: require('../assets/images/vendor.png')
    },
]

export default PictureCategories