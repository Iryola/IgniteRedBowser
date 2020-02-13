import * as React from "react"
import { observer } from "mobx-react-lite"
import {
  Image,
  ImageStyle,
  Platform,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import { Screen, Text, Wallpaper, Header, Button } from "../../components"
// import { useStores } from "../models/root-store"

//import { NavigationScreenProps } from "react-navigation"
//import { NavigationInjectedProps } from "react-navigation"
import { color, spacing } from "../../theme"
import { useStores } from "../../models/root-store"

//const buttonImage = require("../../theme/images/character.jpg")
const buttonStyle: ImageStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  height: 50,
  width: 300,
}

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.palette.black,
  paddingHorizontal: spacing[4],
}
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const DEMO: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#5D2555",
}
const DEMO_TEXT: TextStyle = {
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const HINT: TextStyle = {
  color: "#BAB6C8",
  fontSize: 12,
  lineHeight: 15,
  marginVertical: spacing[2],
}

export interface HomeScreenProps extends NavigationScreenProps<{}> {}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  //const { navigationStore } = useStores()

  return (
    <View style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="demoScreen.howTo"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />

        <TouchableOpacity
          style={{
            flex: 1,
            height: 150,
            width: undefined,
            margin: 3,
            justifyContent: "center",
            //alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              //alignItems: "center",
              width: undefined,
              height: undefined,
            }}
          >
            <Image
              resizeMethod="scale" //trying something here...
              style={{
                flex: 1,
                height: 150,
                width: undefined,
                resizeMode: "contain", //commented out because of imagebackground
              }}
              source={require("../../theme/images/character.jpg")}
            />
            <Text style={{ flex: 1, position: "absolute" }}>Character</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 150,
            width: undefined,
            margin: 3,
            justifyContent: "center",
            //alignItems: "center",
          }}
        >
          <Image
            style={{
              flex: 1,
              height: undefined,
              width: undefined,
              resizeMode: "cover",
            }}
            source={require("../../theme/images/character.jpg")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
          }}
        >
          <Image
            source={require("../../theme/images/character.jpg")}
            resizeMode="cover"
            style={{ height: 150 }}
          />
          <Text
            style={{
              flex: 1,
              position: "absolute",
              color: "red",
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            Character
          </Text>
        </TouchableOpacity>

        <Text preset="header" tx="homeScreen.header" />
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="homeScreen.buttonPlaceHolder2"
            //onPress={HomeScreen}
          />
          <Text style={HINT} tx={`homeScreen.buttonPlaceHolder`} />
        </View>
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="homeScreen.buttonPlaceHolder2"
            //onPress={HomeScreen}
          />
          <Text style={HINT} tx={`homeScreen.buttonPlaceHolder`} />
        </View>
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="homeScreen.buttonPlaceHolder2"
            //onPress={HomeScreen}
          />
          <Text style={HINT} tx={`homeScreen.buttonPlaceHolder`} />
        </View>
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="homeScreen.buttonPlaceHolder2"
            //onPress={HomeScreen}
          />
          <Text style={HINT} tx={`homeScreen.buttonPlaceHolder`} />
        </View>
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="homeScreen.buttonPlaceHolder2"
            //onPress={HomeScreen}
          />
          <Text style={HINT} tx={`homeScreen.buttonPlaceHolder`} />
        </View>
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="homeScreen.buttonPlaceHolder2"
            //onPress={HomeScreen}
          />
          <Text style={HINT} tx={`homeScreen.buttonPlaceHolder`} />
        </View>
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="homeScreen.buttonPlaceHolder2"
            //onPress={HomeScreen}
          />
          <Text style={HINT} tx={`homeScreen.buttonPlaceHolder`} />
        </View>
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="homeScreen.buttonPlaceHolder2"
            //onPress={HomeScreen}
          />
          <Text style={HINT} tx={`homeScreen.buttonPlaceHolder`} />
        </View>
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="homeScreen.buttonPlaceHolder2"
            //onPress={HomeScreen}
          />
          <Text style={HINT} tx={`homeScreen.buttonPlaceHolder`} />
        </View>
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="homeScreen.buttonPlaceHolder2"
            //onPress={HomeScreen}
          />
          <Text style={HINT} tx={`homeScreen.buttonPlaceHolder`} />
        </View>
      </Screen>
    </View>
  )
}
