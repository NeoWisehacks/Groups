import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch, Image, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const CommunityPoll = ({ navigation }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ text: "", image: null }]);
  const [allowMultiple, setAllowMultiple] = useState(false);

  const handleAddOption = () => {
    setOptions([...options, { text: "", image: null }]);
  };

  const handleOptionChange = (text, index) => {
    const updatedOptions = [...options];
    updatedOptions[index].text = text;
    setOptions(updatedOptions);
  };

  const handleImagePick = async (index) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const updatedOptions = [...options];
      updatedOptions[index].image = result.assets[0].uri; // Changed from result.uri to result.assets[0].uri
      setOptions(updatedOptions);
    }
  };

  const handleSubmitPoll = () => {
    console.log("Submitted poll:", { question, options, allowMultiple });
    navigation.navigate('PollsPage', { newPoll: { question, options, allowMultiple } });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create a Community Poll</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your poll question"
        value={question}
        onChangeText={(text) => setQuestion(text)}
      />

      {options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          {option.image && <Image source={{ uri: option.image }} style={styles.optionImage} />}
          <TextInput
            style={styles.optionInput}
            placeholder={`Option ${index + 1}`}
            value={option.text}
            onChangeText={(text) => handleOptionChange(text, index)}
          />
          <TouchableOpacity onPress={() => handleImagePick(index)} style={styles.imagePicker}>
            <Text style={styles.imagePickerText}>Pick Image</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={handleAddOption}>
        <Text style={styles.buttonText}>Add Option</Text>
      </TouchableOpacity>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Allow multiple selections</Text>
        <Switch
          value={allowMultiple}
          onValueChange={(value) => setAllowMultiple(value)}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitPoll}>
        <Text style={styles.buttonText}>Submit Poll</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: Color.colorPrimary,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.bodyRegular,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  optionInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: Color.colorPrimary,
    borderRadius: 8,
    padding: 10,
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.bodyRegular,
  },
  imagePicker: {
    backgroundColor: Color.colorPrimary,
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  imagePickerText: {
    color: "black",
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.bodyRegular,
  },
  optionImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: Color.colorPrimary,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.bodyRegular,
  },
  submitButton: {
    backgroundColor: Color.colorSecondary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.bodyRegular,
  },
});

export default CommunityPoll;
