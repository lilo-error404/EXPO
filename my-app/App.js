import { TouchableOpacity, View } from "react-native";
import {styles} from "./styles.js"

export default function App() {
  function button() {
    const corBotao = 
    alert('Cor de fundo:', corBotao)
  }
  return (
    <View style={styles.container}>
      <View style={styles.ladoALado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity style={styles.botao} onPress={button}></TouchableOpacity>
          </View>

        <View style={styles.container}>
        <TouchableOpacity style={styles.botao2} onPress={button}></TouchableOpacity>
        </View>
      </View>

<View style={styles.ladoALado}>
        <View style={styles.container}>
        <TouchableOpacity style={styles.botao3} onPress={button}></TouchableOpacity>
        </View>

        <View style={styles.container}>
        <TouchableOpacity style={styles.botao4} onPress={button}></TouchableOpacity>
        </View>
</View>

<View style={styles.ladoALado}>
        <View style={styles.container}>
        <TouchableOpacity style={styles.botao5} onPress={button}></TouchableOpacity>
        </View>

        <View style={styles.container}>
        <TouchableOpacity style={styles.botao6} onPress={button}></TouchableOpacity>
        </View>
</View>
    </View>
  )
}