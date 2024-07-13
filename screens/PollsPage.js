// PollsPage.js
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { PollsContext } from "../context/PollsContext";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PollItem = ({ poll, updatePoll ,communityName}) => {
  const initialOptions = poll.options.map(option => ({ ...option, count: Math.floor(Math.random() * 20) }));

  const [updatedPoll, setUpdatedPoll] = useState({ ...poll, options: initialOptions });
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const handleOptionSelect = (index) => {
    const updatedOptions = [...updatedPoll.options];
    if (selectedOptionIndex !== null) {
      updatedOptions[selectedOptionIndex].count -= 1;
    }
    updatedOptions[index].count += 1;
    setUpdatedPoll({ ...updatedPoll, options: updatedOptions });
    setSelectedOptionIndex(index);
    updatePoll(updatedPoll);
  };

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
    <View style={styles.pollContainer}>
      <Text style={styles.question}>{updatedPoll.question}</Text>
      <Text style={styles.communityName}>Community:{communityName}</Text>
      {updatedPoll.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionContainer,
            index === getMaxResponseOption() && styles.highlightedOption
          ]}
          onPress={() => handleOptionSelect(index)}
        >
          {option.image && <Image source={{ uri: option.image }} style={styles.optionImage} />}
          <Text style={styles.optionText}>{option.text}</Text>
          <Text style={styles.countText}>Count: {option.count}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const PollsPage = () => {
  const { polls, setPolls } = useContext(PollsContext);

    // Function to generate a random community name
    const getRandomCommunityName = () => {
        const communityNames = [
          "Neowise",
          "GenWorld",
          "Roadster",
          "fashioneazy",
          "barnboys",
          // Add more community names as needed
        ];
        const randomIndex = Math.floor(Math.random() * communityNames.length);
        return communityNames[randomIndex];
      };
    
      // Assign random community names to polls
      const pollsWithCommunityNames = polls.map(poll => ({
        ...poll,
        communityName: getRandomCommunityName(),
      }));

  const updatePoll = (updatedPoll) => {
    const updatedPolls = polls.map(poll => poll.question === updatedPoll.question ? updatedPoll : poll);
    setPolls(updatedPolls);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Polls</Text>
      <FlatList
        data={pollsWithCommunityNames}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <PollItem poll={item} updatePoll={updatePoll} communityName={item.communityName}/>}
      />
    </View>
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
  communityName: {
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.bodyRegular,
    marginBottom: 5,
    color: Color.colorSecondary,
  },
  optionImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 15,
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
    backgroundColor: "#ffd700",
  },
});

export default PollsPage;
