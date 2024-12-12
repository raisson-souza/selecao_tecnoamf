import { Text } from "react-native"
import Box from "./base/Box"
import React from "react"
import TextBold from "./base/TextBold"

export default function DisciplinesGrid() {
    const disciplines = [
        { name: "Teoria Geral da Administração", day: "Segunda", time: 60 },
        { name: "Matemática Aplicada", day: "Terça", time: 60 },
        { name: "Macroeconomia ", day: "Quinta", time: 60 },
        { name: "Contabilidade Geral", day: "Sexta", time: 60 },
    ]

    return (
        <Box.Column
            style={{
                width: "100%",
            }}
        >
            <Box.Row
                style={{
                    width: "100%",
                    justifyContent: "space-between"
                }}
            >
                <TextBold>Disciplina</TextBold>
                <TextBold>Dia</TextBold>
                <TextBold>Carga Horária</TextBold>
            </Box.Row>
            <Box.Column
                style={{
                    gap: 3,
                }}
            >
                {
                    disciplines.map((discipline, i) => (
                        <Box.Row
                            key={ i }
                            style={{
                                width: "100%",
                                justifyContent: "space-between"
                            }}
                        >
                            <Text>{ discipline.name }</Text>
                            <Text>{ discipline.day }</Text>
                            <Text>{ discipline.time }</Text>
                        </Box.Row>
                    ))
                }
            </Box.Column>
        </Box.Column>
    )
}