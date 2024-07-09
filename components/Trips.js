import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Trips = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.trips}
      onPress={() => navigation.navigate("GroupTrip")}
    >
      <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
        <Text style={styles.tripName}>Trip Name</Text>
      </View>
      <Image
        style={styles.tripsChild}
        contentFit="cover"
        source={require("../assets/rectangle-53299.png")}
      />
      <View style={[styles.forParent, styles.forParentFlexBox]}>
        <Text style={[styles.for, styles.forTypo]}>For</Text>
        <Text style={[styles.description, styles.forTypo]}>Description</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  forParentFlexBox: {
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  forTypo: {
    height: 6,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    textTransform: "capitalize",
    lineHeight: 8,
    alignSelf: "stretch",
  },
  tripName: {
    flex: 1,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    textTransform: "capitalize",
    lineHeight: 8,
    color: Color.colorGray_100,
    fontSize: FontSize.size_5xs,
  },
  tripNameWrapper: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_9xs,
  },
  tripsChild: {
    height: 100,
    marginTop: 3,
    width: 100,
  },
  for: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_5xs,
    height: 6,
    fontFamily: FontFamily.interRegular,
  },
  description: {
    fontSize: FontSize.size_7xs,
    color: Color.colorDarkgray_100,
    marginTop: 3,
  },
  forParent: {
    paddingHorizontal: Padding.p_8xs,
    marginTop: 3,
  },
  trips: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.lightForegroundsFgOnInverted,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    width: 100,
  },
});

export default Trips;
