import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

const Poll = () => {
  const initialOptions = [
    { id: 1, text: "Don't miss this!!", count: Math.floor(Math.random() * 10), selected: false },
    { id: 2, text: "IT IS A NO", count: Math.floor(Math.random() * 10), selected: false },
    { id: 3, text: "Could think about it", count: Math.floor(Math.random() * 10), selected: false },
  ];

  const [pollOptions, setPollOptions] = useState(initialOptions);
  const [selectedOption, setSelectedOption] = useState(null);
  const [newOpinion, setNewOpinion] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (optionId) => {
    const updatedOptions = pollOptions.map(option =>
      option.id === selectedOption ? { ...option, selected: false, count: option.count - 1 } : option
    );

    const newOptions = updatedOptions.map(option =>
      option.id === optionId ? { ...option, selected: !option.selected, count: option.selected ? option.count - 1 : option.count + 1 } : option
    );

    setPollOptions(newOptions);
    setSelectedOption(optionId);

    const selected = newOptions.find(option => option.id === optionId).selected;
    Alert.alert('Success', selected ? `You voted for Option ${optionId}` : `You removed your vote for Option ${optionId}`);
  };

  const handleAddOpinion = () => {
    if (newOpinion.trim()) {
      const newOption = {
        id: pollOptions.length + 1,
        text: newOpinion.trim(),
        count: 0,
        selected: false
      };
      setPollOptions([...pollOptions, newOption]);
      setNewOpinion('');
      Alert.alert('Success', `Your opinion "${newOpinion}" has been added.`);
    } else {
      Alert.alert('Error', 'Opinion cannot be empty.');
    }
  };

  const maxVotedOption = pollOptions.reduce((max, option) => option.count > max.count ? option : max, pollOptions[0]);

  return (
    <View style={styles.pollContainer}>
      {/* Dropdown Button */}
      <TouchableOpacity onPress={() => setIsDropdownOpen(!isDropdownOpen)} style={styles.dropdownButton}>
        <Text style={styles.dropdownButtonText}>{isDropdownOpen ? "Close Polls" : "Open Polls"}</Text>
      </TouchableOpacity>

      {/* Conditional Rendering */}
      {isDropdownOpen && (
        <>
          <Text style={styles.headerText}>Poll</Text>
          {pollOptions.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionContainer,
                option.selected ? styles.selectedOption : null
              ]}
              onPress={() => handleOptionSelect(option.id)}
            >
              <Text style={styles.optionText}>{option.text}</Text>
              <Text style={styles.countText}>{option.count}</Text>
            </TouchableOpacity>
          ))}
          <TextInput
            style={styles.input}
            placeholder="Enter your opinion"
            value={newOpinion}
            onChangeText={setNewOpinion}
          />
          <Button title="Add Opinion" onPress={handleAddOpinion} />
          <Animated.View 
            entering={FadeIn} 
            exiting={FadeOut} 
            layout={Layout.springify()} 
            style={styles.resultContainer}
          >
            <Text style={styles.resultHeader}>Most Voted Option</Text>
            <Text style={styles.resultText}>{maxVotedOption.text}</Text>
            <Text style={styles.resultCount}>{maxVotedOption.count} votes</Text>
          </Animated.View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pollContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: 'white',
    width:"70%", // Light pink background
  },
  dropdownButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#9B9AFF', // Coral color for header text
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 12,
    backgroundColor: '#fff', // White background for options
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8FE1F5', // Gold border color
  },
  selectedOption: {
    backgroundColor: '#F8F9FA', // Light peach background for selected option
  },
  optionText: {
    fontSize: 12,
    color: '#9B9AFF', // Coral color for option text
  },
  countText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#55CCEC', // Coral color for count text
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
    marginTop: 16,
    backgroundColor: '#fff', // White background for input
    color: 'black', // Coral color for input text
  },
  resultContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: 'light-pink', // Light orange background for result container
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white', // Coral border color
    alignItems: 'center',
  },
  resultHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'light-black', // White color for result header text
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // White color for result text
  },
  resultCount: {
    fontSize: 14,
    color: 'darkblue', // White color for result count text
  },
});

export default Poll;
