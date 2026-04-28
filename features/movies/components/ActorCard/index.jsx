import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ActorCard({ actor }) {
  return (
    <View style={styles.cardBody}>
    <Image source={{ uri: actor.image }} style={styles.image}/>
    <Text numberOfLines={1}>{actor.name}</Text>
    <Text numberOfLines={1} style={styles.personagem}>{actor.personagem}</Text>
    </View>
  );
}