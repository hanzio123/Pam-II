import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 10,
  },

  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },

  addButtonText: {
    color: "#000",
    fontWeight: "bold",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  loadingText: {
    color: COLORS.text,
    marginTop: 10,
  },
});