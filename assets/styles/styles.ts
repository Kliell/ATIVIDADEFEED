import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    padding: 10,
  },

  header: {
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  avatarSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#bfbfbf",
    marginRight: 8,
  },

  username: {
    fontWeight: "bold",
  },

  mainInput: {
    backgroundColor: "#666",
    borderRadius: 6,
    padding: 10,
    color: "#fff",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 8,
    marginBottom: 8,
  },

  publishButton: {
    backgroundColor: "#1877f2",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
  },

  publishText: {
    color: "#fff",
    fontWeight: "bold",
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actionBox: {
    width: "22%",
    height: 35,
    backgroundColor: "#bfbfbf",
    borderRadius: 8,
  },

  card: {
    backgroundColor: "#bfbfbf",
    borderRadius: 20,
    marginBottom: 15,
    padding: 10,
  },

  postImage: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 10,
  },

  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8c8c8c",
    marginRight: 10,
  },

  textContainer: {
    flex: 1,
  },

  postText: {
    fontSize: 14,
    color: "#333",
  },

  actionButton: {
    width: 60,
    height: 30,
    backgroundColor: "#8c8c8c",
    borderRadius: 15,
  },
});

export default styles;