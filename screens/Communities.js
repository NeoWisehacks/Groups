import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import Toggle from "../components/Toggle";
import GroupRow from "../components/GroupRow";
import Navbar from "../components/Navbar";
import CommunityPoll from "./CommunityPoll";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";


const CommunitiesList = ({ navigation }) => {
  const handleAddCommunityPoll = () => {
    navigation.navigate('CommunityPoll'); // Navigate to the screen where you will add a community poll
  };
  const AllCommunityPoll = () => {
    navigation.navigate('PollsPage'); // Navigate to the screen where you will add a community poll
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.communitiesList}>
        <View style={styles.def}>
          <View style={[styles.homeIndicator, styles.homePosition]}>
            <View style={[styles.homeIndicator1, styles.homePosition]} />
          </View>
          <ModeLightTypeDefault
            notch={require("../assets/notch.png")}
            wifi={require("../assets/wifi.png")}
            recordingIndicator={require("../assets/recording-indicator.png")}
            leftSide={require("../assets/left-side1.png")}
            modeLightTypeDefaultPosition="absolute"
            modeLightTypeDefaultTop={0}
            modeLightTypeDefaultLeft={0}
            modeLightTypeDefaultWidth={375}
            modeLightTypeDefaultBackgroundColor="unset"
          />
        </View>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={[styles.ioncartOutlineParent, styles.parentFrameFlexBox]}>
            <Image
              style={[styles.ioncartOutlineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ioncartoutline.png")}
            />
            <Text style={styles.search}>Search</Text>
          </View>
          <View
            style={[
              styles.heroiconsOutlinecameraParent,
              styles.parentFrameFlexBox,
            ]}
          >
            <Image
              style={[styles.ioncartOutlineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/heroiconsoutlinecamera.png")}
            />
            <Image
              style={[styles.microphone2Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/microphone2.png")}
            />
          </View>
        </View>
        <View style={[styles.frameGroup, styles.parentFrameFlexBox]}>
          <View style={styles.parentFrameFlexBox}>
            <View style={[styles.fwdParent, styles.parentFrameFlexBox]}>
              <Text style={styles.fwd}>fwd</Text>
              <Image
                style={[styles.arrowCaretDownMd, styles.addCircleIconLayout]}
                contentFit="cover"
                source={require("../assets/arrow--caret-down-md.png")}
              />
            </View>
            <View style={styles.becomeParent}>
              <Text style={[styles.become, styles.newTypo]}>BECOME</Text>
              <View style={styles.insiderParent}>
                <Text style={[styles.insider, styles.newTypo]}>INSIDER</Text>
                <Image
                  style={styles.arrowChevronRight}
                  contentFit="cover"
                  source={require("../assets/arrow--chevron-right.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.parentFrameFlexBox}>
            <Image
              style={[styles.arrowCaretDownMd, styles.addCircleIconLayout]}
              contentFit="cover"
              source={require("../assets/communication--bell.png")}
            />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Image
              style={styles.avatarIcon}
              contentFit="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
        </View>
        <Toggle />
        
        
      
        <View style={styles.list}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddCommunityPoll}>
        <Image 
          style={styles.buttonImage} 
          source={require("../assets/addcircle.png")} // replace with your image path
        />
        <Text style={styles.buttonText}>Add Community Poll</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={AllCommunityPoll}>
      <Image 
          style={styles.buttonImage} 
          source={require("../assets/notch1.png")} // replace with your image path
        />
        <Text style={styles.buttonText}>View All Polls</Text>
      </TouchableOpacity>
          <GroupRow
            rectangle5329={require("../assets/rectangle-5329.png")}
            groupName="Community"
          />
          <GroupRow
            rectangle5329={require("../assets/rectangle-53292.png")}
            groupName="Community"
          />
          <GroupRow
            rectangle5329={require("../assets/rectangle-53292.png")}
            groupName="Community"
          />
          <GroupRow
            rectangle5329={require("../assets/rectangle-53292.png")}
            groupName="Community"
          />
          <GroupRow
            rectangle5329={require("../assets/rectangle-53292.png")}
            groupName="Community"
          />
          <GroupRow
            rectangle5329={require("../assets/rectangle-53292.png")}
            groupName="Community"
          />
          <GroupRow
            rectangle5329={require("../assets/rectangle-53292.png")}
            groupName="Community"
          />
          <GroupRow
            rectangle5329={require("../assets/rectangle-53292.png")}
            groupName="Community"
          />
          <GroupRow
            rectangle5329={require("../assets/rectangle-53292.png")}
            groupName="Community"
          />
          <GroupRow
            rectangle5329={require("../assets/rectangle-53292.png")}
            groupName="Community"
          />
        </View>
        <Navbar
          vuesaxlinearvideoCircle={require("../assets/vuesaxlinearvideocircle.png")}
          vuesaxlinearbag2={require("../assets/vuesaxlinearbag2.png")}
        />
        <View style={[styles.newParent, styles.parentFlexBox]}>
          <Text style={[styles.new, styles.newTypo]}>New</Text>
          <Image
            style={[styles.addCircleIcon, styles.addCircleIconLayout]}
            contentFit="cover"
            source={require("../assets/addcircle.png")}
          />
        </View>
        {/* <TouchableOpacity style={styles.plusButton} onPress={handleAddCommunityPoll}>
          <Image
            style={styles.plusIcon}
            source={require("../assets/addcircle.png")} // Replace with your plus icon image source
          />
          <Text style={styles.plusLabel}>Add a Community Poll</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonImage:{
    width: 20,
    height: 20,
    resizeMode: "contain",

  },
  addButton: {
   // Adjust as needed
    // alignSelf: 'flex-start', // To align the button to the top-left corner
    backgroundColor: Color.colorPrimary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: Border.br_11xl,
    flexDirection:'row',
  },
  buttonText: {
    color: "black",
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.bodyRegular,
    marginLeft:10,
  },
  // plusLabel: {
  //   color: "#fff", // Replace with your desired text color
  //   fontFamily: FontFamily.interRegular,
  //   fontSize: FontSize.body_size,
  // },
  homePosition: {
    height: 5,
    width: 134,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  parentFlexBox: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
  },
  parentFrameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  addCircleIconLayout: {
    height: 24,
    width: 24,
  },
  newTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
    textAlign: "left",
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
  ioncartOutlineIcon: {
    overflow: "hidden",
  },
  search: {
    fontSize: FontSize.smallRegular_size,
    fontFamily: FontFamily.smallRegular,
    color: Color.colorDarkgray_200,
    marginLeft: 10,
    textAlign: "left",
    flex: 1,
  },
  ioncartOutlineParent: {
    flex: 1,
  },
  microphone2Icon: {
    marginLeft: 15,
  },
  heroiconsOutlinecameraParent: {
    marginLeft: 10,
  },
  frameParent: {
    top: 103,
    left: 17,
    borderColor: Color.colorDarkgray_200,
    width: 360,
    height: 35,
    borderWidth: 1,
  },
  fwd: {
    fontSize: FontSize.h5_size,
    fontWeight: "900",
    fontFamily: FontFamily.h5_size,
    color: Color.colorBlack,
    textAlign: "left",
  },
  arrowCaretDownMd: {
    overflow: "hidden",
  },
  fwdParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorFloralwhite,
    borderColor: Color.colorAntiquewhite,
    width: 90,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    height: 35,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
  },
  become: {
    fontSize: FontSize.xSMALL_size,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  insider: {
    color: Color.colorBurlywood,
    fontSize: FontSize.xSMALL_size,
    fontWeight: "500",
  },
  arrowChevronRight: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  insiderParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  becomeParent: {
    marginLeft: 40,
  },
  vectorIcon: {
    height: 22,
    marginLeft: 21,
    width: 24,
  },
  avatarIcon: {
    borderRadius: Border.br_9980xl,
    width: 32,
    height: 32,
    marginLeft: 21,
  },
  frameGroup: {
    top: 56,
    left: 7,
    width: 370,
    justifyContent: "space-between",
    position: "absolute",
  },
  list: {
    top: 184,
    left: 0,
    width: 390,
    height: 600,
    position: "absolute",
  },
  new: {
    fontSize: FontSize.body_size,
    color: Color.lightForegroundsFgOnInverted,
  },
  addCircleIcon: {
    marginLeft: 10,
  },
  newParent: {
    top: 733,
    left: 282,
    backgroundColor: Color.selected,
    borderColor: Color.lightForegroundsFgOnInverted,
    borderWidth: 1.5,
    height: 38,
  },
  communitiesList: {
    backgroundColor: Color.lightForegroundsFgOnInverted,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
  scrollViewContainer: {
    paddingBottom: 100, // Adjust this value to ensure the button is fully visible
  },
});

export default CommunitiesList;

