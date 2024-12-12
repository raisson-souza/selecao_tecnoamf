import { Link, Redirect } from "expo-router"
import { Screen } from "@/components/base/Screen"
import Box from "@/components/base/Box"
import TextBold from "@/components/base/TextBold"

export default function LoginScreen() {
    return (
        <Screen>
            <Box.Column>
                <TextBold>TELA DE LOGIN</TextBold>
                {/* <Link href={{ pathname: "/" }}></Link> */}
            </Box.Column>
        </Screen>
    )
}