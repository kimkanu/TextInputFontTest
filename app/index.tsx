import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";

export default function Page() {
  const [text, setText] = useState("");

  const fontFamily = !text ? "ZenMaruGothic" : "IMHyemin";

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <TextInput
          multiline
          defaultValue={text}
          onChangeText={setText}
          placeholder="フォントテスト"
          style={[styles.textInput, { fontFamily }]}
        />
        <TextInput
          multiline
          defaultValue="한글 테스트"
          onChangeText={setText}
          style={[styles.textInput, { fontFamily: "IMHyemin" }]}
        />
        <TextInput
          multiline
          defaultValue="日本語テスト"
          onChangeText={setText}
          style={[styles.textInput, { fontFamily: "ZenMaruGothic" }]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    rowGap: 12,
  },
  textInput: {
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#cbd5e1",
    backgroundColor: "#f1f5f9",
    paddingVertical: 10,
    paddingHorizontal: 16,
    height: 100,
    fontSize: 20,
  },
});
