import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import Tollbar from "../../componets/toolbar"

export function Home() {

    function handleParticipantAdd() {
        console.log("Você clicou no botão de adicionar")
    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}
            >Nome do Evento
            </Text>

            <Text style={styles.eventDate}
            >Terça 01 de Agosto de 2023
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participantes"
                    placeholderTextColor='#6B6B6B'
                //keyboardType = seleionar o tipo de teclado exemplo o numerico //
                />

                {/* TouchableOpacity funcion como se oq tiver dentro dele vai ser clicavel */}
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.toolbar} >
            </View>
        </View>

    )
} 
