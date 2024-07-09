import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import { useNavigation } from "@react-navigation/native";
import GroupMemberRow from "../components/GroupMemberRow";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Members = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.members, styles.iconLayout]}>
      <ModeLightTypeDefault
        notch={require("../assets/notch.png")}
        wifi={require("../assets/wifi2.png")}
        recordingIndicator={require("../assets/recording-indicator.png")}
        leftSide={require("../assets/left-side1.png")}
        modeLightTypeDefaultPosition="absolute"
        modeLightTypeDefaultTop={1}
        modeLightTypeDefaultLeft={0}
        modeLightTypeDefaultWidth={390}
        modeLightTypeDefaultBackgroundColor="#fff"
      />
      <View style={styles.frameParent}>
        <View
          style={[styles.arrowChevronLeftParent, styles.toggleGroupFlexBox]}
        >
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
          <View style={styles.newMwssagesParent}>
            <Image
              style={styles.newMwssagesIcon}
              contentFit="cover"
              source={require("../assets/new-mwssages1.png")}
            />
            <View style={[styles.groupNameWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.groupName, styles.groupTypo]}>
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
          <Text style={[styles.groupName, styles.groupTypo]}>Description</Text>
          <Text style={[styles.loremIpsum, styles.groupTypo]}>lorem ipsum</Text>
        </View>
        <View>
          <View style={[styles.toggleGroup, styles.toggleGroupFlexBox]}>
            <View style={[styles.membersWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.members1, styles.groupTypo]}>Members</Text>
            </View>
            <Pressable
              style={[styles.outfitsWrapper, styles.wrapperFlexBox]}
              onPress={() => navigation.navigate("GroupOutfit")}
            >
              <Text style={[styles.members1, styles.groupTypo]}>Outfits</Text>
            </Pressable>
            <Pressable
              style={[styles.outfitsWrapper, styles.wrapperFlexBox]}
              onPress={() => navigation.navigate("GroupWishlist")}
            >
              <Text style={[styles.members1, styles.groupTypo]}>Wishlist</Text>
            </Pressable>
          </View>
          <View style={styles.frameGroup}>
            <GroupMemberRow />
            <GroupMemberRow />
            <GroupMemberRow />
            <GroupMemberRow />
          </View>
        </View>
        <View
          style={[
            styles.communicationShareIosExpoParent,
            styles.wrapperFlexBox,
          ]}
        >
          <Image
            style={[styles.menuMoreVertical, styles.arrowChevronLeftLayout]}
            contentFit="cover"
            source={require("../assets/communication--share-ios-export.png")}
          />
          <View style={styles.leaveGroupWrapper}>
            <Text style={[styles.leaveGroup, styles.groupTypo]}>
              Leave Group
            </Text>
          </View>
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
  toggleGroupFlexBox: {
    flexDirection: "row",
    width: 390,
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  groupTypo: {
    textAlign: "left",
    fontSize: FontSize.smallRegular_size,
  },
  arrowChevronLeftLayout: {
    height: 24,
    width: 24,
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
  newMwssagesIcon: {
    width: 100,
    height: 100,
  },
  groupName: {
    color: Color.colorDimgray_100,
    textAlign: "left",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  groupNameWrapper: {
    marginTop: 3,
    justifyContent: "center",
  },
  newMwssagesParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuMoreVertical: {
    overflow: "hidden",
  },
  arrowChevronLeftParent: {
    justifyContent: "space-between",
    padding: Padding.p_mini,
  },
  loremIpsum: {
    fontFamily: FontFamily.interRegular,
    marginTop: 7,
    color: Color.colorDimgray_100,
    textAlign: "left",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
  },
  descriptionParent: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 0.1,
    borderBottomWidth: 0.1,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mini,
    borderStyle: "solid",
    justifyContent: "center",
    width: 390,
  },
  members1: {
    fontWeight: "500",
    fontFamily: FontFamily.small,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.smallRegular_size,
  },
  membersWrapper: {
    borderColor: Color.colorCrimson,
    borderBottomWidth: 2,
    borderStyle: "solid",
    justifyContent: "center",
    flex: 1,
  },
  outfitsWrapper: {
    justifyContent: "center",
    flex: 1,
  },
  toggleGroup: {
    borderColor: Color.colorDarkgray_200,
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    alignItems: "center",
  },
  frameGroup: {
    width: 390,
  },
  leaveGroup: {
    color: Color.lightForegroundsFgOnInverted,
    width: 140,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.smallRegular_size,
  },
  leaveGroupWrapper: {
    height: 31,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
    marginLeft: 20,
    width: 140,
    justifyContent: "center",
    overflow: "hidden",
  },
  communicationShareIosExpoParent: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    backgroundColor: Color.colorIndianred,
    width: 390,
  },
  frameParent: {
    top: 56,
    left: 0,
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
  members: {
    backgroundColor: Color.lightForegroundsFgOnInverted,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Members;
