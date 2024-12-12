import { AuthContextProvider } from "@/contexts/AuthContext"
import { CustomImage } from "@/components/customs/CustomImage"
import { Screen } from "@/components/base/Screen"
import AuthRoute from "@/components/auth/Auth"
import Box from "@/components/base/Box"
import CustomButton from "@/components/customs/CustomButton"
import DisciplinesGrid from "@/components/DisciplinesGrid"
import StudentInfo from "@/components/StudentInfo"
import TextBold from "@/components/base/TextBold"

export default function UserScreen() {
    const { logoff } = AuthContextProvider()

    return (
        <AuthRoute>
            <Screen>
                <Box.Column
                    style={{
                        gap: 10,
                        width: "100%",
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
                    <StudentInfo />
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