import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Poll from "../components/OpinionPoll2";
import Outfit from "../components/Outfit";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import FrameComponent from "../components/FrameComponent";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.group}>
          <View style={styles.chat}>
            <View style={styles.newMessagesParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/new-mwssages.png")}
              />
              <View style={styles.user1Parent}>
                <Text style={styles.user1}>User 1</Text>
                <View style={styles.productWithDetails}>
                  <View style={styles.newMessagesGroup}>
                    <Image
                      style={styles.newMessagesChild}
                      contentFit="cover"
                      source={require("../assets/rectangle-532913.png")}
                    />
                    <Image
                      style={styles.newMessagesItem}
                      contentFit="cover"
                      source={require("../assets/ellipse-23451.png")}
                    />
                  </View>
                  <Text style={styles.brandName}>Brand Name</Text>
                  <Image
                    style={styles.productWithDetailsChild}
                    contentFit="cover"
                    source={require("../assets/rectangle-53282.png")}
                  />
                  <View style={styles.printedYellowKurtaForWomenParent}>
                    <Text style={styles.printedYellowKurta}>
                      Printed Yellow Kurta for Women
                    </Text>
                    <View style={styles.priceContainer}>
                      <Text style={styles.price}>$69.69</Text>
                      <View style={styles.ratingContainer}>
                        <Image
                          style={styles.starIcon}
                          contentFit="cover"
                          source={require("../assets/phstarfill.png")}
                        />
                        <Text style={styles.rating}>4.5</Text>
                        <Text style={styles.ratingSeparator}>|</Text>
                        <Text style={styles.ratingCount}>1040</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Poll />
                <Outfit
                  rectangle5329={require("../assets/rectangle-532916.png")}
                  rectangle53291={require("../assets/rectangle-532917.png")}
                  rectangle53292={require("../assets/rectangle-532918.png")}
                  outfitPosition="unset"
                  outfitMarginTop={1}
                />
              </View>
            </View>
          </View>
          <ModeLightTypeDefault
            notch={require("../assets/notch.png")}
            wifi={require("../assets/wifi2.png")}
            recordingIndicator={require("../assets/recording-indicator.png")}
            leftSide={require("../assets/left-side2.png")}
            modeLightTypeDefaultPosition="absolute"
            modeLightTypeDefaultTop={1}
            modeLightTypeDefaultLeft={0}
            modeLightTypeDefaultWidth={390}
            modeLightTypeDefaultBackgroundColor="#fff"
          />
          <FrameComponent />
        </View>
        <View style={styles.fixedBottom}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.attachIcon}
              source={require("../assets/edit--paperclip-attechment-tilt.png")}
            />
            <Text style={styles.inputText}>Type Something</Text>
            <View style={styles.cameraMicrophoneContainer}>
              <Image
                style={styles.cameraIcon}
                source={require("../assets/firrcamera.png")}
              />
              <Image
                style={styles.microphoneIcon}
                source={require("../assets/microphone21.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Adjust as needed
  },
  group: {
    flex: 1,
    backgroundColor: Color.lightForegroundsFgOnInverted,
    alignItems: "center",
  },
  chat: {
    paddingHorizontal: 16,
    paddingTop: 16,
    width: "100%",
  },
  newMessagesParent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconLayout: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  user1Parent: {
    width: "100%",
    marginLeft: 6,
  },
  user1: {
    fontSize: 16,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDimgray_100,
    marginBottom: 8,
  },
  productWithDetails: {
    backgroundColor: Color.lightForegroundsFgOnInverted,
    borderRadius: Border.br_8xs,
    padding: 16,
    marginBottom: 16,
  },
  newMessagesGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  newMessagesChild: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  newMessagesItem: {
    width: 6,
    height: 6,
  },
  brandName: {
    fontFamily: FontFamily.interSemiBold,
    fontSize: 14,
    color: Color.colorGray_100,
    marginBottom: 8,
  },
  productWithDetailsChild: {
    maxWidth: "100%",
    height: 196,
    alignSelf: "stretch",
    overflow: "hidden",
    borderRadius: Border.br_8xs,
    marginTop: 8,
  },
  printedYellowKurtaForWomenParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  printedYellowKurta: {
    fontFamily: FontFamily.interLight,
    fontSize: 12,
    color: Color.colorDimgray_100,
    width: 200,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontFamily: FontFamily.interSemiBold,
    fontSize: 12,
    color: Color.colorForestgreen,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  rating: {
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    fontSize: 12,
    color: Color.colorDimgray_100,
    marginRight: 4,
  },
  ratingSeparator: {
    fontSize: 12,
    color: Color.colorGainsboro_300,
    marginRight: 4,
  },
  ratingCount: {
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    fontSize: 12,
    color: Color.colorDimgray_100,
  },
  fixedBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: Border.br_81xl,
    paddingHorizontal: 12,
    width:"70%",
  },
  attachIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  inputText: {
    flex: 1,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_100,
    fontSize: 14,
  },
  cameraMicrophoneContainer: {
    flexDirection: "row",
    marginLeft: 8,
  },
  cameraIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  microphoneIcon: {
    width: 20,
    height: 20,
  },
});

export default Group;
