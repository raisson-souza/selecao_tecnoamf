import { Tabs } from "expo-router"
import IconFontAwesome from "react-native-vector-icons/FontAwesome"

const TabScreensStyle = {
    /** Cor de fundo da tab ativa */
    tabBarActiveBackgroundColor: "",
    /** Cor de fundo das tabs inativas */
    tabBarInactiveBackgroundColor: "",
    /** Cor de título do header da tab atual */
    headerTintColor: "white",
    /** Cor de fundo do header da tab atual */
    headerStyle: {
        backgroundColor: "darkblue"
    },
    /** Cor de fundo do footer */
    tabBarStyle: {
        backgroundColor: "darkblue",
    },
}

export default function RootLayout() {
    return (
        <Tabs
            initialRouteName='index'
            screenOptions={ TabScreensStyle }
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: "Usuário",
                    tabBarIcon: ({ color, size }) => (<IconFontAwesome name="user-circle-o" color={ color } size={ size } />),
                    headerShown: false,
                }}
            />
        </Tabs>
    )
}