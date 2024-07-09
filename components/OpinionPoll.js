import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const OpinionPoll = () => {
  return (
    <View style={styles.opinionPoll}>
      <View style={[styles.frameParent, styles.groupChildPosition]}>
        <View style={styles.opinionParent}>
          <Text style={[styles.opinion, styles.opinionTypo]}>Opinion</Text>
          <View style={styles.viewAllParent}>
            <Text style={[styles.viewAll, styles.opinionTypo]}>View all</Text>
            <Image
              style={styles.arrowCaretCircleDown}
              contentFit="cover"
              source={require("../assets/arrow--caret-circle-down.png")}
            />
          </View>
        </View>
        <View style={styles.list}>
          <View>
            <Text style={[styles.average, styles.averageTypo]}>AVERAGE</Text>
            <View style={[styles.opinionInner, styles.opinionInnerFlexBox]}>
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={styles.opinion2}>
            <Text style={[styles.yourOpinion, styles.averageTypo]}>
              your opinion
            </Text>
            <View style={[styles.opinionInner, styles.opinionInnerFlexBox]}>
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
              </View>
            </View>
          </View>
          <View style={[styles.submitWrapper, styles.opinionInnerFlexBox]}>
            <Text style={styles.submit}>Submit</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  opinionTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.smallRegular_size,
  },
  averageTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  opinionInnerFlexBox: {
    marginTop: 3,
    flexDirection: "row",
    width: 200,
    alignItems: "center",
  },
  groupChildLayout: {
    height: 8,
    width: 129,
  },
  opinion: {
    color: Color.colorDimgray_200,
  },
  viewAll: {
    color: Color.colorDarkgray_100,
  },
  arrowCaretCircleDown: {
    width: 16,
    height: 16,
    marginLeft: 9,
    overflow: "hidden",
  },
  viewAllParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  opinionParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 200,
  },
  average: {
    display: "flex",
    width: 49,
    height: 7,
    lineHeight: 20,
    alignItems: "center",
  },
  groupChild: {
    backgroundColor: Color.colorIndianred,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  opinionInner: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
  },
  list: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
  },
  yourOpinion: {
    lineHeight: 10,
  },
  opinion2: {
    paddingBottom: Padding.p_5xs,
  },
  submit: {
    fontFamily: FontFamily.smallRegular,
    color: Color.lightForegroundsFgOnInverted,
    textAlign: "center",
    width: 109,
    lineHeight: 20,
    fontSize: FontSize.smallRegular_size,
  },
  submitWrapper: {
    borderRadius: Border.br_9xs,
    height: 17,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.colorIndianred,
    overflow: "hidden",
    justifyContent: "center",
  },
  frameParent: {
    backgroundColor: Color.lightForegroundsFgOnInverted,
    padding: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_8xs,
  },
  opinionPoll: {
    width: 210,
    height: 105,
    marginTop: 1,
    borderRadius: Border.br_8xs,
  },
});

export default OpinionPoll;
