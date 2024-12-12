import { DataTable } from 'react-native-paper'
import React from "react"

export default function DisciplinesGrid() {
    const disciplines = [
        { name: "Teoria Geral da Administração", day: "Segunda", time: 60 },
        { name: "Matemática Aplicada", day: "Terça", time: 60 },
        { name: "Macroeconomia ", day: "Quinta", time: 60 },
        { name: "Contabilidade Geral", day: "Sexta", time: 60 },
    ]

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Disciplina</DataTable.Title>
                <DataTable.Title>Dia</DataTable.Title>
                <DataTable.Title>Carga Horária</DataTable.Title>
            </DataTable.Header>
            {
                disciplines.map((discipline, i) => (
                    <DataTable.Row key={ i }>
                        <DataTable.Cell>{ discipline.name }</DataTable.Cell>
                        <DataTable.Cell>{ discipline.day }</DataTable.Cell>
                        <DataTable.Cell>{ discipline.time }</DataTable.Cell>
                    </DataTable.Row>
                ))
            }
        </DataTable>
    )
}