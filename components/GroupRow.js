import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";



const GroupRow = ({ rectangle5329, groupName }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.newMwssagesParent}>
      <View style={styles.newLayout}>
        <Image
          style={[styles.newMwssagesChild, styles.newPosition]}
          contentFit="cover"
          source={rectangle5329}
        />
        <Image
          style={[styles.newMwssagesItem, styles.newPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-2345.png")}
        />
      </View>
      <Pressable onPress={() => navigation.navigate("Group")}>
      <View style={styles.groupNameParent}>
        <Text style={[styles.groupName, styles.messagesFlexBox]}>
          {groupName}
        </Text>
        <Text style={[styles.messages, styles.messagesFlexBox]}>
          4+ messages
        </Text>
      </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  newPosition: {
    borderRadius: Border.br_21xl,
    top: 0,
    position: "absolute",
  },
  messagesFlexBox: {
    textAlign: "left",
    color: Color.selected,
  },
  newMwssagesChild: {
    left: 0,
    height: 45,
    width: 45,
  },
  newMwssagesItem: {
    left: 34,
    width: 11,
    height: 11,
  },
  newLayout: {
    height: 45,
    width: 45,
  },
  groupName: {
    fontSize: FontSize.smallRegular_size,
    lineHeight: 16,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 140,
  },
  messages: {
    fontSize: FontSize.size_5xs,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    marginTop: 5,
  },
  groupNameParent: {
    height: 31,
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
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
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_3xs,
  },
});

export default GroupRow;
