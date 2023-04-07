import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const languages = [
  { id: 'en', name: 'English' },
  { id: 'fr', name: 'French' },
  { id: 'es', name: 'Spanish' },
  { id: 'de', name: 'German' },
];

const LanguageSelectScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleSelectLanguage = (id) => {
    setSelectedLanguage(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Language</Text>
      {languages.map((language) => (
        <TouchableOpacity
          key={language.id}
          onPress={() => handleSelectLanguage(language.id)}
          style={[
            styles.languageButton,
            selectedLanguage === language.id && styles.selectedLanguageButton,
          ]}
        >
          <Text style={styles.languageButtonText}>{language.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  languageButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  selectedLanguageButton: {
    backgroundColor: '#007aff',
  },
  languageButtonText: {
    fontSize: 18,
    color: '#333',
  },
});

export default LanguageSelectScreen;
