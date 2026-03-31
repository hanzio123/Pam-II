import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { COLORS } from "../../../../constants/colors";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 30) / 2; 


export default function MovieCard({ movie, onPress, onDelete }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        width: CARD_WIDTH,
        marginBottom: 16,
        borderRadius: 14,
        overflow: "hidden",
        backgroundColor: COLORS.card,
      }}
    >
      <center><Image
        source={{ uri: movie.img_capa }}
        style={{
          width: "100%",
          height: CARD_WIDTH * 1.5,
        }}
        resizeMode="cover"
      /></center>

    
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: 10,
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <Text
          style={{
            color: COLORS.text,
            fontWeight: "bold",
            fontSize: 14,
          }}
          numberOfLines={1}
        >
          {movie.nome}
        </Text>

        <Text style={{ color: COLORS.textSecondary, fontSize: 12 }}>
          {movie.ano}
        </Text>
      </View>
    </TouchableOpacity>
  );
}