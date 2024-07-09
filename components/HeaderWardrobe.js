import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const HeaderWardrobe = ({ previousWardrobe }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.arrowChevronLeftParent}>
      <Pressable
        style={styles.arrowChevronLeftLayout}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
      </Pressable>
      <View style={styles.previousWardrobeWrapper}>
        <Text style={styles.previousWardrobe}>{previousWardrobe}</Text>
      </View>
      <Image
        style={[styles.menuMoreVertical, styles.arrowChevronLeftLayout]}
        contentFit="cover"
        source={require("../assets/menu--more-vertical.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowChevronLeftLayout: {
    height: 24,
    width: 24,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  previousWardrobe: {
    fontSize: FontSize.h5_size,
    fontWeight: "500",
    fontFamily: FontFamily.small,
    color: Color.colorDimgray_100,
    textAlign: "left",
  },
  previousWardrobeWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuMoreVertical: {
    overflow: "hidden",
  },
  arrowChevronLeftParent: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhitesmoke_200,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Padding.p_mini,
    alignItems: "center",
  },
});

export default HeaderWardrobe;
