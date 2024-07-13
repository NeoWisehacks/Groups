import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Poll = () => {
  const initialOptions = [
    { id: 1, text: "Dont miss this!!", count: Math.floor(Math.random() * 10), selected: false },
    { id: 2, text: "IT IS A NO", count: Math.floor(Math.random() * 10), selected: false },
    { id: 3, text: "Could think about it", count: Math.floor(Math.random() * 10), selected: false },
  ];

  const [pollOptions, setPollOptions] = useState(initialOptions);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (optionId) => {
    // Deselect the currently selected option if any
    const updatedOptions = pollOptions.map(option =>
      option.id === selectedOption ? { ...option, selected: false, count: option.count - 1 } : option
    );

    // Toggle selection for the clicked option
    const newOptions = updatedOptions.map(option =>
      option.id === optionId ? { ...option, selected: !option.selected, count: option.count + 1 } : option
    );

    setPollOptions(newOptions);
    setSelectedOption(optionId);

    if (newOptions.find(option => option.id === optionId).selected) {
      Alert.alert('Success', `You voted for Option ${optionId}`);
    } else {
      Alert.alert('Success', `You removed your vote for Option ${optionId}`);
    }
  };

  return (
    <View style={styles.pollContainer}>
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
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#b3e0ff', // Light blue background for selected option
  },
  optionText: {
    fontSize: 12,
  },
  countText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Poll;
