import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const Toggle = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.toggle}>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.home}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("Home1")}
      >
        <Text style={styles.home}>Wardrobe</Text>
      </Pressable>
      <View style={[styles.communitiesWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.home}>Communities</Text>
      </View>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("GroupsList")}
      >
        <Text style={styles.home}>Group</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  home: {
    fontSize: FontSize.smallRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.small,
    color: Color.colorBlack,
    textAlign: "left",
  },
  communitiesWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorCrimson,
    borderBottomWidth: 2,
  },
  toggle: {
    position: "absolute",
    top: 150,
    left: 0,
    width: 390,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Toggle;
