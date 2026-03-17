import react from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function MovieCard({movie, onPress, width}){
    return(
        <TouchableOpacity onPress={onPress}>
<view style={[style.container, {width: width}]}>
        <image
        source={{uri: movie.img_capa}}
        style={styles.image}
        />
        <text style={styles.title}>
            {movie.nome}
        </text>
        <text style={styles.year}>
            {movie.ano}
        </text>
</view>

        </TouchableOpacity>
    );
}