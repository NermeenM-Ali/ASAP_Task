import { ImageRequireSource } from "react-native"
import { AppScreenStack } from "../navigation/ScreenNames"

export interface IModel {
    id: number,
    modelName: string,
    navigationRoute: AppScreenStack,
    modelImage: ImageRequireSource
}

const ModelsData: IModel[] = [
    {
        id: 1,
        modelName: 'Printer HS',
        navigationRoute: AppScreenStack.MODEL_DETAILS_SCREEN,
        modelImage: require('../assets/images/printer.png')
    },
    {
        id: 2,
        modelName: 'LCD XS',
        navigationRoute: AppScreenStack.MODEL_DETAILS_SCREEN,
        modelImage: require('../assets/images/lcd.png')
    },
    {
        id: 3,
        modelName: 'Laptops',
        navigationRoute: AppScreenStack.MODEL_DETAILS_SCREEN,
        modelImage: require('../assets/images/lapTop.png')
    },
    {
        id: 4,
        modelName: 'Printer Inc',
        navigationRoute: AppScreenStack.MODEL_DETAILS_SCREEN,
        modelImage: require('../assets/images/inc.png')
    },
]

export default ModelsData