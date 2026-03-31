import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard";
import { ROUTES } from "../../../../constants/routes";
import styles from "./styles";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export default function MovieList() {
  const { movies, loading, refresh } = useMovies();
  const navigation = useNavigation();
 
useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  ); 

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#BB86FC" />
        <Text style={styles.loadingText}>Carregando filmes...</Text>
      </View>
    );
  }

  

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate(ROUTES.CREATE_MOVIE)}
      >
        <Text style={styles.addButtonText}>+ Adicionar Filme</Text>
      </TouchableOpacity>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate(ROUTES.MOVIE_DETAILS, {
                movie: item,
              })
            }
          />
        )}
      />
    </View>
  );
}