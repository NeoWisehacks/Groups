import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const Wishlist = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={()=>navigation.navigate("SwipScreen")}>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-53293.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-53293.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-53293.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-53293.png")}
        />
      </View>
      <View style={styles.nameParent}>
        <Text style={[styles.name, styles.nameTypo]}>name</Text>
        <Text style={[styles.user1, styles.nameTypo]}>user1</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.smallRegular,
    textTransform: "capitalize",
    lineHeight: 16,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 50,
    height: 50,
  },
  rectangleParent: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.lightForegroundsFgOnInverted,
    width: 100,
    height: 100,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  name: {
    fontSize: FontSize.xSMALL_size,
    color: Color.colorBlack,
  },
  user1: {
    fontSize: FontSize.size_5xs,
    color: Color.colorDimgray_100,
    marginTop: 2,
  },
  nameParent: {
    width: 80,
    justifyContent: "center",
    padding: Padding.p_11xs,
    marginTop: 1,
  },
});

export default Wishlist;
