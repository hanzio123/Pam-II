import React from "react";
import {View, FlatList, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard";
import {Routes} from "../../../../constants/routes";

export default function MovieList(){
    const {movies, loading} = useMovies();
    const navigation = useNavigation();

    if (loading){return <text>Carregando...</text>;}

    return(
        <view style={{padding: 16, flex:1}}>
            <FlatList style={{flex:1}}
            data={movies}
            keyExtractor={(item)=>item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{justifyContent:"space-around"}}
            renderItem={({item})=>(
                <MovieCard
                movie={item}
                onPress={() => navigation.navigate(Routes.MOVIE_DETAILS, {
                        movie: item,
                    })
                }
            />)}
            ></FlatList>
        </view>

    )

}