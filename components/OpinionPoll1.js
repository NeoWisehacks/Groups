import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, Alert } from "react-native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const OpinionPoll1 = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [opinions, setOpinions] = useState([]);
  const [submissionCount, setSubmissionCount] = useState(0);

  const handleViewAllClick = () => {
    setExpanded(!expanded); // Toggle expanded state on View All click
  };

  const handleOptionSelect = (option) => {
    // Store the submitted opinion
    const newOpinion = { id: Date.now(), user: "You", text: option };
    setOpinions([...opinions, newOpinion]);
    setSubmissionCount(submissionCount + 1);

    // Reset selected option
    setSelectedOption("");

    // Expand view after 2 submissions
    if (submissionCount + 1 === 2) {
      setExpanded(true);
    }

    Alert.alert("Success", "Your opinion has been submitted!");
  };

  const handleDeleteOpinion = (id) => {
    // Filter out the opinion with the given id
    const updatedOpinions = opinions.filter(opinion => opinion.id !== id);
    setOpinions(updatedOpinions);
  };

  return (
    <View style={styles.opinionPoll}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Opinion</Text>
          <TouchableOpacity onPress={handleViewAllClick}>
            <View style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>
                {expanded ? "Close" : "View all"}
              </Text>
              <Image
                style={styles.arrowIcon}
                source={require("../assets/arrow--caret-circle-down.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Conditional rendering based on expanded state */}
        {expanded && (
          <View style={styles.opinionsContainer}>
            {/* Render all opinions */}
            {opinions.map((opinion) => (
              <View key={opinion.id} style={styles.opinionItem}>
                <Text style={styles.opinionText}>{opinion.user}: {opinion.text}</Text>
                <TouchableOpacity onPress={() => handleDeleteOpinion(opinion.id)}>
                  <Image
                    style={styles.deleteIcon}
                    source={require("../assets/splash.png")}
                  />
                </TouchableOpacity>
                <View style={styles.opinionBar} />
              </View>
            ))}
          </View>
        )}
        
        {/* Options for user's opinion */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => handleOptionSelect("Great")} style={styles.optionButton}>
            <Text style={styles.optionText}>Great</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect("Didn't like it")} style={styles.optionButton}>
            <Text style={styles.optionText}>Didn't like it</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect("Buy it!!!")} style={styles.optionButton}>
            <Text style={styles.optionText}>Buy it!!!</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  opinionPoll: {
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderRadius: Border.br_8xs,
    padding: Padding.p_8xs,
    width: "100%",
    alignSelf: "center",
  },
  container: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Padding.p_8xs,
  },
  headerText: {
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: FontSize.small_size,
    color: Color.colorDimgray_200,
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewAllText: {
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: FontSize.small_size,
    color: Color.colorDarkgray_100,
    marginRight: 5,
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  opinionsContainer: {
    marginTop: Padding.p_8xs,
    marginBottom: Padding.p_8xs,
  },
  opinionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Padding.p_3xs,
  },
  opinionText: {
    flex: 1,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.small_size,
    color: Color.colorDimgray_200,
    marginRight: 10,
  },
  deleteIcon: {
    width: 50,
    height: 30,
    tintColor: Color.colorIndianred,
  },
  opinionBar: {
    width: "100%",
    height: 8,
    backgroundColor: Color.colorIndianred,
    borderRadius: Border.br_3xs,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: Padding.p_8xs,
  },
  optionButton: {
    backgroundColor: Color.colorBlueviolet,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_8xs,
    borderRadius: Border.br_3xs,
  },
  optionText: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.small_size,
    color: Color.colorWhite_100,
  },
});

export default OpinionPoll1;
