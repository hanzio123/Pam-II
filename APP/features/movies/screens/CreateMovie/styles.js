import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },

  form: {
    marginTop: 10,
  },

  label: {
    color: COLORS.text,
    marginBottom: 5,
  },

  input: {
    backgroundColor: COLORS.card,
    color: COLORS.text,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  textArea: {
    height: 100,
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: "#9a27bdff",
    fontWeight: "bold",
  },
});