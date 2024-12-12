import { Text } from "react-native"
import Box from "./base/Box"
import TextBold from "./base/TextBold"

export default function StudentInfo() {
    return (
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
    )
}