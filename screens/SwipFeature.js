import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SwipFeature = () => {
  return (
    <View style={styles.swipFeature}>
      <View style={styles.frameParent}>
        <View style={[styles.collectionNameParent, styles.buttonFlexBox]}>
          <Text style={styles.noMoreItemsTypo}>Collection Name</Text>
          <Text style={[styles.text, styles.textTypo]}>4/8</Text>
        </View>
        <View style={styles.noMoreItemsParent}>
          <Text style={[styles.noMoreItems, styles.noMoreItemsTypo]}>
            No more items
          </Text>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Image
              style={styles.plusIconLayout}
              contentFit="cover"
              source={require("../assets/icons/tent.svg")}
            />
            <View style={styles.label}>
              <Text style={styles.label1}>Tap to Exit</Text>
            </View>
            <Image
              style={[styles.plusMiniIcon1, styles.plusIconLayout]}
              contentFit="cover"
              source={require("../assets/icons/tent.svg")}
            />
          </View>
        </View>
        <View style={styles.swipeLeftToDislikeAndRighParent}>
          <Text style={[styles.swipeLeftTo, styles.textTypo]}>
            Swipe Left to dislike and right to like
          </Text>
          <View style={styles.heroiconsMinihandThumbDownParent}>
            <Image
              style={styles.addToCollectionLayout}
              contentFit="cover"
              source={require("../assets/icons/tent.svg")}
            />
            <Image
              style={[styles.addToCollection, styles.addToCollectionLayout]}
              contentFit="cover"
              source={require("../assets/icons/tent.svg")}
            />
            <Image
              style={[styles.addToCollection, styles.addToCollectionLayout]}
              contentFit="cover"
              source={require("../assets/icons/tent.svg")}
            />
          </View>
        </View>
      </View>
      <View style={styles.swip}>
        <Image
          style={[styles.swipChild, styles.swipChildPosition]}
          contentFit="cover"
          source={require("../assets/productswip.png")}
        />
        <LinearGradient
          style={[styles.frameGroup, styles.swipChildPosition]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.4)"]}
        >
          <View style={styles.parent}>
            <Text style={styles.text1}>$69.69</Text>
            <Text style={styles.greenShorts}>Green Shorts</Text>
            <Text style={[styles.brandName, styles.text2Typo]}>Brand Name</Text>
            <Text style={[styles.brandName, styles.text2Typo]}>
              Description lorem ipsum..........................
            </Text>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.heroiconsMinihandThumbUpParent}>
              <Image
                style={styles.heroiconsMinihandThumbUp1}
                contentFit="cover"
                source={require("../assets/icons/tent.svg")}
              />
              <Text style={[styles.text2, styles.text2Typo]}>4</Text>
            </View>
            <View style={styles.heroiconsMinihandThumbDownGroup}>
              <Image
                style={styles.heroiconsMinihandThumbUp1}
                contentFit="cover"
                source={require("../assets/icons/tent.svg")}
              />
              <Text style={[styles.text2, styles.text2Typo]}>{`2 `}</Text>
            </View>
            <View style={styles.heroiconsMinihandThumbDownGroup}>
              <Image
                style={styles.heroiconsMinihandThumbUp1}
                contentFit="cover"
                source={require("../assets/icons/tent.svg")}
              />
              <Text style={[styles.text2, styles.text2Typo]}>{`2 `}</Text>
            </View>
            <View style={styles.heroiconsMinihandThumbDownGroup}>
              <Image
                style={styles.heroiconsMinihandThumbUp1}
                contentFit="cover"
                source={require("../assets/icons/tent.svg")}
              />
              <Text style={[styles.text2, styles.text2Typo]}>{`2 `}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.swip}>
        <Image
          style={[styles.swipChild, styles.swipChildPosition]}
          contentFit="cover"
          source={require("../assets/icons/tent.svg")}
        />
        <LinearGradient
          style={[styles.frameGroup, styles.swipChildPosition]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.4)"]}
        >
          <View style={styles.parent}>
            <Text style={styles.text1}>$69.69</Text>
            <Text style={styles.greenShorts}>Green Shorts</Text>
            <Text style={[styles.brandName, styles.text2Typo]}>Brand Name</Text>
            <Text style={[styles.brandName, styles.text2Typo]}>
              Description lorem ipsum..........................
            </Text>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.heroiconsMinihandThumbUpParent}>
              <Image
                style={styles.heroiconsMinihandThumbUp1}
                contentFit="cover"
                source={require("../assets/icons/tent.svg")}
              />
              <Text style={[styles.text2, styles.text2Typo]}>4</Text>
            </View>
            <View style={styles.heroiconsMinihandThumbDownGroup}>
              <Image
                style={styles.heroiconsMinihandThumbUp1}
                contentFit="cover"
                source={require("../assets/icons/tent.svg")}
              />
              <Text style={[styles.text2, styles.text2Typo]}>{`2 `}</Text>
            </View>
            <View style={styles.heroiconsMinihandThumbDownGroup}>
              <Image
                style={styles.heroiconsMinihandThumbUp1}
                contentFit="cover"
                source={require("../assets/icons/tent.svg")}
              />
              <Text style={[styles.text2, styles.text2Typo]}>{`2 `}</Text>
            </View>
            <View style={styles.heroiconsMinihandThumbDownGroup}>
              <Image
                style={styles.heroiconsMinihandThumbUp1}
                contentFit="cover"
                source={require("../assets/icons/tent.svg")}
              />
              <Text style={[styles.text2, styles.text2Typo]}>{`2 `}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.body_size,
    textAlign: "center",
    fontFamily: FontFamily.body,
    fontWeight: "500",
  },
  noMoreItemsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.body,
    fontWeight: "500",
    fontSize: FontSize.h4_size,
    color: Color.colorGray_100,
  },
  plusIconLayout: {
    display: "none",
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  addToCollectionLayout: {
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  swipChildPosition: {
    left: 0,
    borderRadius: Border.br_xl,
    width: 350,
    position: "absolute",
  },
  text2Typo: {
    lineHeight: 16,
    fontSize: FontSize.small_size,
    color: Color.lightForegroundsFgOnInverted,
    textAlign: "left",
  },
  text: {
    marginTop: 5,
    color: Color.colorGray_100,
    fontSize: FontSize.body_size,
  },
  collectionNameParent: {
    height: 72,
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
  noMoreItems: {
    alignSelf: "stretch",
  },
  label1: {
    fontSize: FontSize.textCompactTextCompactSmallPlus_size,
    lineHeight: 20,
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    color: Color.selected,
    textAlign: "left",
    fontWeight: "500",
  },
  label: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    marginLeft: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  plusMiniIcon1: {
    marginLeft: 4,
  },
  button: {
    shadowColor: "rgba(3, 7, 18, 0.16)",
    shadowOffset: {
      width: 0,
      height: 0.25,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.selected,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    marginTop: 20,
    flexDirection: "row",
    overflow: "hidden",
  },
  noMoreItemsParent: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  swipeLeftTo: {
    color: Color.subText,
    alignSelf: "stretch",
  },
  addToCollection: {
    marginLeft: 40,
  },
  heroiconsMinihandThumbDownParent: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  swipeLeftToDislikeAndRighParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    top: 103,
    height: 641,
    justifyContent: "space-between",
    width: 350,
    left: 20,
    position: "absolute",
  },
  swipChild: {
    top: 0,
    height: 500,
  },
  text1: {
    color: Color.colorMintcream,
    fontSize: FontSize.h5Black_size,
    textAlign: "left",
    fontFamily: FontFamily.body,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  greenShorts: {
    color: Color.lightForegroundsFgOnInverted,
    fontSize: FontSize.h5Black_size,
    textAlign: "left",
    marginTop: 5,
    fontFamily: FontFamily.body,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  brandName: {
    textTransform: "capitalize",
    fontFamily: FontFamily.interRegular,
    marginTop: 5,
    alignSelf: "stretch",
  },
  parent: {
    width: 306,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_3xs,
  },
  heroiconsMinihandThumbUp1: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  text2: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    marginTop: 2,
  },
  heroiconsMinihandThumbUpParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  heroiconsMinihandThumbDownGroup: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  frameContainer: {
    marginLeft: 5,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    justifyContent: "center",
  },
  frameGroup: {
    top: 276,
    height: 224,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.lightButtonsButtonInverted,
    flexDirection: "row",
    justifyContent: "center",
  },
  swip: {
    top: 172,
    height: 500,
    borderRadius: Border.br_xl,
    width: 350,
    left: 20,
    position: "absolute",
  },
  swipFeature: {
    backgroundColor: Color.lightForegroundsFgOnInverted,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SwipFeature;
