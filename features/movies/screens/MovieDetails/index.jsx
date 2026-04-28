import React from "react";
import {useRoute} from "@react-navigation/native";
import{useElencoMovies}from "../../hooks/useElencoMovies";
import ActorCard from "../../components/ActorCard";
import {View,Text,Image,Scrollview,FlatList } from "react-native";
import styles from "./styles";

export default function MovieDetails(){
const route = useRoute();
const{movie}=route.params;
const{elenco}=useElencoMovies(movie.id);
return(
<Scrollview style={styles.container}>

<Image source={{uri:movie.img_capa}}style={styles.image}/>
<Text style={styles.title}>{movie.nome}</Text>
<Text style={styles.year}>{movie.ano}</Text>
<Text style={styles.description}>{movie.sinopse}</Text>
<Text style={styles.titleElenco}>Elenco</Text>

<Flatlist
data={elenco}
horizontal
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=><ActorCard actor={item}/>}
/>

</Scrollview>
);
}