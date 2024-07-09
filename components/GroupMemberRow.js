import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const GroupMemberRow = () => {
  return (
    <View style={styles.newMwssagesParent}>
      <View style={styles.newLayout}>
        <Image
          style={[styles.newMwssagesChild, styles.newPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-532919.png")}
        />
        <Image
          style={[styles.newMwssagesItem, styles.newPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-23453.png")}
        />
      </View>
      <View style={styles.user1Wrapper}>
        <Text style={styles.user1}>user1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newPosition: {
    borderRadius: Border.br_21xl,
    top: 0,
    position: "absolute",
  },
  newMwssagesChild: {
    left: 0,
    height: 30,
    width: 30,
  },
  newMwssagesItem: {
    left: 23,
    width: 8,
    height: 8,
  },
  newLayout: {
    height: 30,
    width: 30,
  },
  user1: {
    fontSize: FontSize.smallRegular_size,
    lineHeight: 16,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
    width: 140,
  },
  user1Wrapper: {
    height: 31,
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
    marginLeft: 20,
    width: 140,
  },
  newMwssagesParent: {
    alignSelf: "stretch",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderBottomWidth: 0.2,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_3xs,
  },
});

export default GroupMemberRow;
