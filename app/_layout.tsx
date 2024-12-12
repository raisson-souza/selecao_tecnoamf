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
          <Stack.Screen name='post' options={{ title: "Post" }} />
          <Stack.Screen name='credits' options={{ title: "Créditos" }} />
        </Stack>
      </AuthContextComponent>
    </InitialContextComponent>
  )
}
