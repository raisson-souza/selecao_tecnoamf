import { createContext, useContext, useEffect, useState } from "react"
import { Credentials } from "@/types/credentials"
import { Screen } from "../components/base/Screen"
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from "../components/base/Loading"

type AuthContextProps = {
    children: JSX.Element | JSX.Element[]
}

type AuthContext = {
    isLogged: boolean
    login: (credentials: Credentials) => Promise<void>
    logoff: () => Promise<void>
    setCredentials: (credentials: Credentials) => Promise<void>
}

const AuthContext = createContext<AuthContext | null>(null)

/** Context de autenticação, realiza o refresh do token de autenticação e valida credenciais no localStorage */
export default function AuthContextComponent({ children }: AuthContextProps) {
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ isLogged, setIsLogged ] = useState<boolean>(false)

    const manageAuth = async (): Promise<void> => {
        const credentials = await getCredentials()

        if (credentials) {
            setIsLogged(true)
        }

        setLoading(false)
    }

    useEffect(() => {
        manageAuth()
    }, [])

    const getCredentials = async (): Promise<Credentials | null> => {
        const credentials = await AsyncStorage.getItem("credentials")
        return credentials != null
            ? JSON.parse(credentials) as Credentials
            : credentials
    }

    const setCredentials = async (credentials: Credentials): Promise<void> => {
        await AsyncStorage.setItem("credentials", JSON.stringify(credentials))
    }

    const login = async (credentials: Credentials): Promise<void> => {
        await setCredentials(credentials)
        setIsLogged(true)
    }

    const logoff = async (): Promise<void> => {
        setLoading(true)
        await AsyncStorage.removeItem("credentials")
        setIsLogged(false)
        setLoading(false)
    }

    if (loading) {
        return (
            <Screen>
                <Loading />
            </Screen>
        )
    }

    return (
        <AuthContext.Provider value={{
            isLogged,
            login,
            logoff,
            setCredentials,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export function AuthContextProvider() {
    const context = useContext(AuthContext)
    if (!context) throw new Error("AuthContext chamado fora do provider.")
    return context
}