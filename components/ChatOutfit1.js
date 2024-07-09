import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ModeLightTypeDefault from "./ModeLightTypeDefault";
import HeaderWardrobe from "./HeaderWardrobe";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const ChatOutfit1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatOutfit}>
      <View style={styles.def}>
        <View style={[styles.homeIndicator, styles.homePosition]}>
          <View style={[styles.homeIndicator1, styles.homePosition]} />
        </View>
        <ModeLightTypeDefault
          notch={require("../assets/notch.png")}
          wifi={require("../assets/wifi1.png")}
          recordingIndicator={require("../assets/recording-indicator.png")}
          leftSide={require("../assets/left-side1.png")}
          modeLightTypeDefaultPosition="absolute"
          modeLightTypeDefaultTop={0}
          modeLightTypeDefaultLeft={0}
          modeLightTypeDefaultWidth={375}
          modeLightTypeDefaultBackgroundColor="unset"
        />
      </View>
      <View style={styles.frameParent}>
        <HeaderWardrobe previousWardrobe="Collaborative Wadrobe" />
        <View style={styles.tripsParent}>
          <Pressable
            style={styles.tripsSpaceBlock}
            onPress={() => navigation.navigate("GroupTrip")}
          >
            <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
              <Text style={styles.tripName}>Trip Name</Text>
            </View>
            <Image
              style={styles.tripsChild}
              contentFit="cover"
              source={require("../assets/rectangle-53297.png")}
            />
            <View style={[styles.forParent, styles.forParentFlexBox]}>
              <Text style={[styles.for, styles.forTypo]}>For</Text>
              <Text style={[styles.description, styles.forTypo]}>
                Description
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.trips1, styles.tripsSpaceBlock]}
            onPress={() => navigation.navigate("GroupTrip")}
          >
            <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
              <Text style={styles.tripName}>Trip Name</Text>
            </View>
            <Image
              style={styles.tripsChild}
              contentFit="cover"
              source={require("../assets/rectangle-53298.png")}
            />
            <View style={[styles.forParent, styles.forParentFlexBox]}>
              <Text style={[styles.for, styles.forTypo]}>For</Text>
              <Text style={[styles.description, styles.forTypo]}>
                Description
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.trips1, styles.tripsSpaceBlock]}
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
              <Text style={[styles.description, styles.forTypo]}>
                Description
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.trips1, styles.tripsSpaceBlock]}
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
              <Text style={[styles.description, styles.forTypo]}>
                Description
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.addCircleIcon}
        contentFit="cover"
        source={require("../assets/addcircle1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    height: 5,
    width: 134,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  forParentFlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  forTypo: {
    height: 6,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    textTransform: "capitalize",
    lineHeight: 8,
    alignSelf: "stretch",
  },
  tripsSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    width: 100,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
  homeIndicator1: {
    marginLeft: -67,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    marginLeft: -66.5,
  },
  def: {
    marginLeft: -188,
    bottom: 7,
    width: 375,
    height: 836,
    left: "50%",
    position: "absolute",
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
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row",
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
  trips1: {
    marginLeft: 20,
  },
  tripsParent: {
    flexWrap: "wrap",
    paddingHorizontal: 25,
    paddingVertical: Padding.p_3xs,
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    top: 45,
    left: 0,
    height: 774,
    position: "absolute",
    width: 390,
  },
  addCircleIcon: {
    top: 779,
    left: 328,
    width: 40,
    height: 40,
    position: "absolute",
  },
  chatOutfit: {
    height: 844,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
});

export default ChatOutfit1;
