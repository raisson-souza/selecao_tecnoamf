import { CustomImage } from "@/components/customs/CustomImage"
import { Screen } from "../components/base/Screen"
import Box from "@/components/base/Box"
import Loading from "../components/base/Loading"
import React, { createContext, useContext, useEffect, useState } from "react"
import TextBold from "@/components/base/TextBold"

type InitialContextProps = {
    children: JSX.Element | JSX.Element[]
}

type InitialContext = {}

const InitialContext = createContext<InitialContext | null>(null)

/** Context especializado no tratamento / carregamento de dados iniciais da aplicação */
export default function InitialContextComponent({ children }: InitialContextProps) {
    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    if (loading) {
        return (
            <Screen flex>
                <Box.Column
                    style={{
                        gap: 3,
                    }}
                >
                    <CustomImage.Local filePathByRequire={ require("@/assets/images/logo_amf.png") } />
                    <TextBold>Carteira Digital do Estudante</TextBold>
                    <Loading />
                </Box.Column>
            </Screen>
        )
    }

    return (
        <InitialContext.Provider value={{}}>
            { children }
        </InitialContext.Provider>
    )
}

export function InitialContextProvider() {
    const context = useContext(InitialContext)
    if (!context) throw new Error("InitialContext chamado fora do provider.")
    return context
}