import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FrameComponent = () => {
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
          source={require("../assets/arrow--chevron-left1.png")}
        />
      </Pressable>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/rectangle-53291.png")}
      />
      <Pressable
        style={styles.groupNameParent}
        onPress={() => navigation.navigate("Members")}
      >
        <Text style={styles.groupName}>Group Name</Text>
        <Text style={styles.user1User2}>user1, user 2, user3</Text>
      </Pressable>
      <Image
        style={[styles.menuMoreVertical, styles.arrowChevronLeftLayout]}
        contentFit="cover"
        source={require("../assets/menu--more-vertical1.png")}
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
  frameChild: {
    borderRadius: Border.br_21xl,
    width: 45,
    height: 45,
    marginLeft: 10,
  },
  groupName: {
    fontSize: FontSize.smallRegular_size,
    lineHeight: 16,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray_100,
    width: 140,
    textAlign: "left",
  },
  user1User2: {
    fontSize: FontSize.size_5xs,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_200,
    marginTop: 5,
    textAlign: "left",
  },
  groupNameParent: {
    alignSelf: "stretch",
    flex: 1,
    marginLeft: 10,
    overflow: "hidden",
    justifyContent: "center",
  },
  menuMoreVertical: {
    marginLeft: 10,
    overflow: "hidden",
  },
  arrowChevronLeftParent: {
    position: "absolute",
    top: 45,
    left: 0,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 390,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
});

export default FrameComponent;
