import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function MovieCard({ movie, onPress, width }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { width: width }]}>        
        <Image
        
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}}
          style={styles.image}
        />
        <Text style={styles.title}>
          {movie.title}
        </Text>
        <Text style={styles.year}>
          {movie.release_date}
        </Text>

      </View>
    </TouchableOpacity>
  );
}

/*
O componente MovieCard é responsável por exibir as informações de um filme específico, como a imagem de capa, o nome e o ano de lançamento. 
Ele recebe as informações do filme através da prop movie e uma função onPress para lidar com o toque na tela. 
Quando o usuário toca no card, a função onPress é chamada, permitindo que a tela MovieList possa navegar para a tela de detalhes do filme ou realizar qualquer outra ação necessária.
*/