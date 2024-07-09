import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Navbar = ({ vuesaxlinearvideoCircle, vuesaxlinearbag2 }) => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.image123Parent, styles.parentFlexBox]}>
        <Image
          style={styles.image123Icon}
          contentFit="cover"
          source={require("../assets/image-123.png")}
        />
        <Text style={[styles.fwd, styles.fwdTypo]}>fwd</Text>
      </View>
      <View style={[styles.image123Parent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxlinearvideoCircleIconLayout}
          contentFit="cover"
          source={vuesaxlinearvideoCircle}
        />
        <Text style={[styles.fwd, styles.fwdTypo]}>Minis</Text>
      </View>
      <View
        style={[styles.heroiconsSolidglobeAmericasParent, styles.parentFlexBox]}
      >
        <Image
          style={[
            styles.heroiconsSolidglobeAmericas,
            styles.vuesaxlinearvideoCircleIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/heroiconssolidglobeamericas.png")}
        />
        <Text style={[styles.fwd, styles.fwdTypo]}>Groups</Text>
      </View>
      <View style={[styles.image123Parent, styles.parentFlexBox]}>
        <Text style={[styles.text, styles.fwdTypo]}>#</Text>
        <Text style={[styles.fwd, styles.fwdTypo]}>Trends</Text>
      </View>
      <View style={[styles.image123Parent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxlinearvideoCircleIconLayout}
          contentFit="cover"
          source={vuesaxlinearbag2}
        />
        <Text style={[styles.fwd, styles.fwdTypo]}>Bag</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  fwdTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.small,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  vuesaxlinearvideoCircleIconLayout: {
    height: 24,
    width: 24,
  },
  image123Icon: {
    width: 25,
    height: 21,
  },
  fwd: {
    fontSize: FontSize.xSMALL_size,
    height: 12,
    marginTop: 3,
  },
  image123Parent: {
    height: 60,
    width: 75,
    justifyContent: "center",
  },
  heroiconsSolidglobeAmericas: {
    overflow: "hidden",
  },
  heroiconsSolidglobeAmericasParent: {
    borderStyle: "solid",
    borderColor: Color.colorCrimson,
    borderTopWidth: 2,
    height: 60,
    width: 75,
    justifyContent: "center",
  },
  text: {
    fontSize: FontSize.h4_size,
    display: "flex",
    height: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    top: 784,
    left: 0,
    backgroundColor: Color.lightForegroundsFgOnInverted,
    width: 390,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Navbar;
