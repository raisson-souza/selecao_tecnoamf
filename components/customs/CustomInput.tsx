import { KeyboardTypeOptions, TextInput, View, TextInputProps, StyleSheet, Text, StyleProp, TextStyle, DimensionValue } from "react-native"
import { useState } from "react"

type CustomInputProps = {
    /** Label do campo */
    label?: string
    labelStyle?: StyleProp<TextStyle>
    placeHolder?: string
    active?: boolean
    defaultValue?: string
    /** Propriedades do TextInput (irão sobrepor todas as outras) */
    innerProps?: TextInputProps
    inputStyle?: StyleProp<TextStyle>
    /** Tipo de teclado do input */
    keyboardType?: KeyboardTypeOptions
    onChange?: (e: string) => any
    width?: DimensionValue
    /** Pinta a label e a borda do input quando em foco */
    animationOnFocus?: boolean
    animationOnFocusStyle?: {
        color: string
    }
}

/** Componente customizado para input */
export default function CustomInput({
    label = undefined,
    labelStyle = {},
    placeHolder = undefined,
    active = true,
    defaultValue = undefined,
    innerProps = {},
    inputStyle = {},
    keyboardType = "ascii-capable",
    onChange = (_: string) => {},
    width = 150,
    animationOnFocus = true,
    animationOnFocusStyle = {
        color: "darkblue",
    },
}: CustomInputProps): JSX.Element {
    const [ onFocus, setOnFocus ] = useState<boolean>(false)

    const input = <TextInput
            defaultValue={ defaultValue }
            editable={ active }
            multiline
            keyboardType={ keyboardType }
            onChangeText={ (e) => { onChange(e) } }
            placeholder={ placeHolder }
            style={{
                borderWidth: 1,
                borderRadius: 30,
                width: width,
                borderColor: animationOnFocus
                    ? onFocus ? animationOnFocusStyle.color : '#38B4E1'
                    : '#38B4E1',
                paddingVertical: 3,
                paddingHorizontal: 8,
                ...inputStyle as any,
            }}
            onFocus={ () => { setOnFocus(true) } }
            onBlur={ () => { setOnFocus(false) } }
            { ...innerProps }
        />

    if (label) {
        return (
            <View style={ styles.container }>
                <Text style={{
                    fontSize: 14,
                    color: animationOnFocus
                        ? onFocus ? animationOnFocusStyle.color : 'black'
                        : 'black',
                    ...labelStyle as any
                }}>{ label }</Text>
                { input }
            </View>
        )
    }

    return input
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
})