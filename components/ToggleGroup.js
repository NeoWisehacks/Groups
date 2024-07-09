import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const ToggleGroup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.toggleGroup}>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("Members")}
      >
        <Text style={styles.members}>Members</Text>
      </Pressable>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("GroupOutfit")}
      >
        <Text style={styles.members}>Outfits</Text>
      </Pressable>
      <View style={[styles.wishlistWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.members}>Wishlist</Text>
      </View>
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
  members: {
    fontSize: FontSize.smallRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.small,
    color: Color.colorBlack,
    textAlign: "left",
  },
  wishlistWrapper: {
    borderColor: Color.colorCrimson,
    borderBottomWidth: 2,
    borderStyle: "solid",
    padding: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
  },
  toggleGroup: {
    borderColor: Color.colorDarkgray_200,
    borderBottomWidth: 0.5,
    width: 390,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
});

export default ToggleGroup;
