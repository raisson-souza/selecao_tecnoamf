import { AuthContextProvider } from "../../contexts/AuthContext"
import { Redirect } from "expo-router"

type AuthProps = {
    children: JSX.Element | JSX.Element[]
}

export default function AuthRoute({ children }: AuthProps) {
    const { isLogged } = AuthContextProvider()

    if (!isLogged)
        return <Redirect href={"/login"} />

    return children
}