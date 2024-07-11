import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import { useNavigation } from "@react-navigation/native";
import ToggleGroup from "../components/ToggleGroup";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";
import Wishlist from "../components/Wishlist";

const GroupWishlist = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupWishlist, styles.iconLayout]}>
      <ModeLightTypeDefault
        notch={require("../assets/notch.png")}
        wifi={require("../assets/wifi1.png")}
        recordingIndicator={require("../assets/recording-indicator.png")}
        leftSide={require("../assets/left-side1.png")}
        modeLightTypeDefaultPosition="absolute"
        modeLightTypeDefaultTop={1}
        modeLightTypeDefaultLeft={0}
        modeLightTypeDefaultWidth={390}
        modeLightTypeDefaultBackgroundColor="#fff"
      />
      <View style={styles.frameParent}>
        <View style={[styles.arrowChevronLeftParent, styles.parentFlexBox1]}>
          <Pressable
            style={styles.arrowChevronLeftLayout}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/arrow--chevron-left.png")}
            />
          </Pressable>
          <View
            style={[styles.newMwssagesParent, styles.groupNameWrapperFlexBox]}
          >
            <Image
              style={styles.newMwssagesIconLayout}
              contentFit="cover"
              source={require("../assets/new-mwssages1.png")}
            />
            <View
              style={[styles.groupNameWrapper, styles.groupNameWrapperFlexBox]}
            >
              <Text style={[styles.groupName, styles.groupNameTypo]}>
                Group Name
              </Text>
            </View>
          </View>
          <Image
            style={[styles.menuMoreVertical, styles.arrowChevronLeftLayout]}
            contentFit="cover"
            source={require("../assets/menu--more-vertical.png")}
          />
        </View>
        <View style={styles.descriptionParent}>
          <Text style={[styles.groupName, styles.groupNameTypo]}>
            Description
          </Text>
          <Text style={[styles.loremIpsum, styles.groupNameTypo]}>
            lorem ipsum
          </Text>
        </View>
        <View style={styles.toggleGroupParent}>
          <ToggleGroup />
          <ScrollView>
          <View style={[styles.wishlistParent, styles.parentFlexBox]}>
            
          <Wishlist/>
            <Wishlist/>
            <Wishlist/>
            <Wishlist/><Wishlist/>
           
            
          </View></ScrollView>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentFlexBox1: {
    justifyContent: "space-between",
    width: 390,
  },
  groupNameWrapperFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  groupNameTypo: {
    textAlign: "left",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
    color: Color.colorDimgray_100,
  },
  arrowChevronLeftLayout: {
    height: 24,
    width: 24,
  },
  parentFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  nameTypo: {
    fontFamily: FontFamily.smallRegular,
    alignSelf: "stretch",
    textAlign: "left",
    textTransform: "capitalize",
    lineHeight: 16,
  },
  homePosition: {
    height: 5,
    width: 134,
    left: "50%",
    marginLeft: -67,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  newMwssagesIconLayout: {
    height: 100,
    width: 100,
  },
  groupName: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  groupNameWrapper: {
    padding: Padding.p_3xs,
    marginTop: 3,
    justifyContent: "center",
    flexDirection: "row",
  },
  newMwssagesParent: {
    justifyContent: "center",
  },
  menuMoreVertical: {
    overflow: "hidden",
  },
  arrowChevronLeftParent: {
    padding: Padding.p_mini,
    flexDirection: "row",
  },
  loremIpsum: {
    fontFamily: FontFamily.interRegular,
    marginTop: 7,
  },
  descriptionParent: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 0.1,
    borderBottomWidth: 0.1,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    width: 390,
  },
  frameChild: {
    width: 50,
    height: 50,
  },
  rectangleParent: {
    borderRadius: Border.br_8xs,
    height: 100,
    width: 100,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
  name: {
    fontSize: FontSize.xSMALL_size,
    color: Color.colorBlack,
  },
  user1: {
    fontSize: FontSize.size_5xs,
    marginTop: 2,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.smallRegular,
    alignSelf: "stretch",
  },
  nameParent: {
    width: 80,
    padding: Padding.p_11xs,
    marginTop: 1,
    justifyContent: "center",
  },
  wishlistParent: {
    padding: Padding.p_base,
    justifyContent: "space-between",
    width: 390,
  },
  toggleGroupParent: {
    height: 544,
  },
  frameParent: {
    top: 56,
    left: 0,
    height: 761,
    position: "absolute",
  },
  homeIndicator1: {
    bottom: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    bottom: 7,
  },
  groupWishlist: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
});

export default GroupWishlist;
