import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PollsPage = ({ route }) => {
  const { newPoll } = route.params;

  // Initialize options with random initial counts
  const initialOptions = newPoll.options.map(option => ({ ...option, count: Math.floor(Math.random() * 20) }));

  const [updatedPoll, setUpdatedPoll] = useState({ ...newPoll, options: initialOptions });
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  // Function to handle option selection
  const handleOptionSelect = (index) => {
    if (selectedOptionIndex !== null) {
      const updatedOptions = [...updatedPoll.options];
      updatedOptions[selectedOptionIndex].count -= 1; // Decrease count for previously selected option
      updatedOptions[index].count += 1; // Increase count for newly selected option
      setUpdatedPoll({ ...updatedPoll, options: updatedOptions });
    } else {
      const updatedOptions = updatedPoll.options.map((option, i) => ({
        ...option,
        count: i === index ? option.count + 1 : option.count
      }));
      setUpdatedPoll({ ...updatedPoll, options: updatedOptions });
    }
    setSelectedOptionIndex(index); // Update selected option index
  };

  // Function to find the option with maximum count
  const getMaxResponseOption = () => {
    let maxCount = -1;
    let maxOptionIndex = -1;

    updatedPoll.options.forEach((option, index) => {
      if (option.count > maxCount) {
        maxCount = option.count;
        maxOptionIndex = index;
      }
    });

    return maxOptionIndex;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Community Polls</Text>

      {updatedPoll && (
        <View style={styles.pollContainer}>
          <Text style={styles.question}>{updatedPoll.question}</Text>
          {updatedPoll.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionContainer,
                index === getMaxResponseOption() && styles.highlightedOption // Apply highlighting style
              ]}
              onPress={() => handleOptionSelect(index)}
            >
              {option.image && <Image source={{ uri: option.image }} style={styles.optionImage} />}
              <Text style={styles.optionText}>{option.text}</Text>
              <Text style={styles.countText}>Count: {option.count}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Color.lightForegroundsFgOnInverted,
    padding: Padding.p_3xs,
  },
  title: {
    fontSize: FontSize.h3_size,
    fontFamily: FontFamily.h3,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  pollContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: Color.colorPrimary,
    borderRadius: 8,
  },
  question: {
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.bodyRegular,
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    padding: 10,
    borderRadius: 8,
  },
  optionImage: {
    width: 30, // Adjust size as needed
    height: 30, // Adjust size as needed
    marginRight: 10,
    borderRadius: 15, // Adjust for rounded images
  },
  optionText: {
    flex: 1,
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.bodyRegular,
    marginRight: 10,
  },
  countText: {
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.bodyRegular,
    color: Color.colorSecondary,
  },
  highlightedOption: {
    backgroundColor: "#ffd700", // Highlight color (e.g., gold)
  },
});

export default PollsPage;
