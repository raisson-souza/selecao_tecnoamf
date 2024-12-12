import { Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar'
import AuthContextComponent from "@/contexts/AuthContext"
import InitialContextComponent from "@/contexts/InitialContext"
import React from "react"

const StackScreensStyle = {
  /** Cor do header */
  headerStyle: { backgroundColor: "darkblue" },
  /** Cor do título do header */
  headerTintColor: "white",
}

/**
 * Caso não logado, redirecionar para login;
 * Opção de sair da conta;
 */

export default function RootLayout() {
  return (
    <InitialContextComponent>
      <StatusBar />
      <AuthContextComponent>
        <Stack
          initialRouteName='(tabs)'
          screenOptions={ StackScreensStyle }
        >
          <Stack.Screen name='(tabs)' options={{ title: "Tabs", headerShown: false }} />
          <Stack.Screen name='login' options={{ title: "Login", headerShown: false }} />
        </Stack>
      </AuthContextComponent>
    </InitialContextComponent>
  )
}
