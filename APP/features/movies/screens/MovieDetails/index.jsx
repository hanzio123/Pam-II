import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { deleteMovie } from "../../services/movieService";
import styles from "./styles";

export default function MovieDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { movie } = route.params;

 const handleDelete = async () => {
    try {

      await deleteMovie(movie.id);
      navigation.goBack(); 
    } catch (error) {
      console.error("Erro ao deletar:", error);
    
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.img_capa }} style={styles.poster} />

      <View style={styles.content}>
        <Text style={styles.title}>{movie.nome}</Text>
        <Text style={styles.year}>{movie.ano}</Text>

        <Text style={styles.sectionTitle}>Sinopse</Text>
        <Text style={styles.synopsis}>{movie.sinopse}</Text>

        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteText}>🗑️ Deletar Filme</Text>
        </TouchableOpacity>

        {movie.elenco?.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Elenco</Text>

            <FlatList
              scrollEnabled={false}
              data={movie.elenco}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.actorContainer}>
                  <Image source={{ uri: item.imagem }} style={styles.actorImage} />
                  <View>
                    <Text style={styles.actorName}>{item.nome}</Text>
                    <Text style={styles.actorRole}>{item.personagem}</Text>
                  </View>
                </View>
              )}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
}