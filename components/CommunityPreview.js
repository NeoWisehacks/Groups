import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CommunityPreview = ({ propMarginLeft }) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.groupNameWrapperFlexBox, frameViewStyle]}>
      <Image
        style={styles.newMwssagesIcon}
        contentFit="cover"
        source={require("../assets/new-mwssages.png")}
      />
      <View style={[styles.groupNameWrapper, styles.groupNameWrapperFlexBox]}>
        <Text style={styles.groupName}>Group Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupNameWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  newMwssagesIcon: {
    width: 75,
    height: 75,
  },
  groupName: {
    fontSize: FontSize.smallRegular_size,
    lineHeight: 16,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
  },
  groupNameWrapper: {
    width: 73,
    flexDirection: "row",
    padding: Padding.p_3xs,
    marginTop: 3,
  },
});

export default CommunityPreview;
