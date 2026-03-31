import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  poster: {
    width: "100%",
    height: 300,
  },

  content: {
    padding: 16,
  },

  title: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: "bold",
  },

  year: {
    color: COLORS.textSecondary,
    marginBottom: 10,
  },

  sectionTitle: {
    color: COLORS.primary,
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
  },

  synopsis: {
    color: COLORS.textSecondary,
    marginTop: 5,
    lineHeight: 20,
  },

  deleteButton: {
    marginTop: 20,
    backgroundColor: COLORS.danger,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },

  actorContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },

  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  actorName: {
    color: COLORS.text,
    fontWeight: "bold",
  },

  actorRole: {
    color: COLORS.textSecondary,
  },
});