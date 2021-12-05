import { LayoutRoot } from "react-native-navigation"
import { AppScreenStack } from "./ScreenNames"

export const AppStack: LayoutRoot = {
    root: {
        stack: {
            id: 'AppStack',
            children: [
                { component: { name: AppScreenStack.PICTURE_CATEGORIES_SCREEN } },
            ],

        },
    }
}
