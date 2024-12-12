import { Link, Redirect, useRouter } from "expo-router"
import { Screen } from "@/components/base/Screen"
import Box from "@/components/base/Box"
import TextBold from "@/components/base/TextBold"
import CustomInput from "@/components/customs/CustomInput"
import { CustomImage } from "@/components/customs/CustomImage"
import { AuthContextProvider } from "@/contexts/AuthContext"
import CustomButton from "@/components/customs/CustomButton"
import { useEffect, useState } from "react"

export default function LoginScreen() {
    const { login, isLogged } = AuthContextProvider()
    const [ academicRecord, setAcademicRecord ] = useState<string | undefined>(undefined)
    const [ password, setPassword ] = useState<string | undefined>(undefined)
    const router = useRouter()

    useEffect(() => {
        if (isLogged) {
            router.navigate("/")
        }
    }, [])

    const handleLogin = async () => {
        if (academicRecord === undefined || password === undefined) {
            alert("Preencha o registro acadêmico e a senha corretamente.")
            return
        }

        await login({
            academicRecord: academicRecord,
            password: password,
        })

        router.navigate("/")
    }

    return (
        <Screen

        >
            <Box.Center
                style={{
                    gap: 10,
                }}
            >
                <Box.Center>
                    <CustomImage.Local filePathByRequire={ require("@/assets/images/logo_amf.png") } />
                    <TextBold>Realize seu Login</TextBold>
                </Box.Center>
                <Box.Column
                    style={{
                        gap: 5,
                    }}
                >
                    <CustomInput
                        label="Registro Acadêmico"
                        onChange={ (e) => { setAcademicRecord(e) }}
                    />
                    <CustomInput
                        label="Senha"
                        onChange={ (e) => { setPassword(e) }}
                    />
                    <Box.Center
                        style={{
                            padding: 10,
                        }}
                    >
                        <CustomButton
                            title="Entrar"
                            onPress={ async () => { await handleLogin() } }
                        />
                    </Box.Center>
                </Box.Column>
            </Box.Center>
        </Screen>
    )
}