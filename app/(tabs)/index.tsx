import { AuthContextProvider } from "@/contexts/AuthContext"
import { CustomImage } from "@/components/customs/CustomImage"
import { Screen } from "@/components/base/Screen"
import { Text } from "react-native"
import AuthRoute from "@/components/auth/Auth"
import Box from "@/components/base/Box"
import CustomButton from "@/components/customs/CustomButton"
import DisciplinesGrid from "@/components/DisciplinesGrid"
import TextBold from "@/components/base/TextBold"

export default function UserScreen() {
    const { logoff } = AuthContextProvider()

    return (
        <AuthRoute>
            <Screen>
                <Box.Column
                    style={{
                        gap: 10,
                    }}
                >
                    <Box.Center
                        style={{
                            gap: 5,
                        }}
                    >
                        <CustomImage.Local
                            filePathByRequire={ require("@/assets/images/user_image.png") }
                            style={{
                                borderRadius: 30,
                                paddingBottom: 50,
                            }}
                        />
                        <TextBold>João da Silva</TextBold>
                    </Box.Center>
                    <Box.Column
                        style={{
                            gap: 3,
                        }}
                    >
                        <Box.Row>
                            <TextBold>Registro Acadêmico:&nbsp;</TextBold>
                            <Text>007154</Text>
                        </Box.Row>
                        <Box.Row>
                            <TextBold>Curso:&nbsp;</TextBold>
                            <Text>Ciências Contábeis</Text>
                        </Box.Row>
                        <Box.Row>
                            <TextBold>Período Letivo:&nbsp;</TextBold>
                            <Text>2024/2</Text>
                        </Box.Row>
                    </Box.Column>
                    <CustomButton
                        title="Emitir atestado de matrícula"
                        onPress={ () => {} }
                    />
                    <DisciplinesGrid />
                    <CustomButton
                        title="Sair"
                        onPress={ async () => { await logoff() } }
                    />
                </Box.Column>
            </Screen>
        </AuthRoute>
    )
}