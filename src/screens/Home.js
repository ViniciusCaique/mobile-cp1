import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, ImageBackground, TextInput } from "react-native";
import { View, Text } from "react-native";

import { api } from '../libs/axios'

const image = { uri: 'https://w.wallhaven.cc/full/6o/wallhaven-6okojq.jpg' }
const image2 = { uri: 'https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg' }

export default function Home({ navigation }) {

    const [ location, setLocation ] = useState('')
    const [ getWeatherData, setWeatherData ] = useState([])


    // {
    //     params: { nameUser: name }
    // }

    const getData = () => {
        api.get()
            .then(response => {
                const data = response.data
                const locWeather = {
                    nome: data.name,
                    temp: data.main.temp,
                    cond: data.weather[0].description,
                }
                setWeatherData(locWeather)
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Erro', 'Não foi possível carregar os dados');
             })
    }

    useEffect(() => {
        getData()
    }, [])


    return(
        <ImageBackground
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            source={ image }
            blurRadius={3}
        >
            <View
                style={{ 
                    alignItems: 'center',
                    padding: 5,
                }}
            >
                <Text
                    style={{
                        fontSize: 40,
                        color: '#ebebeb',
                        padding: 5,
                    }}
                >
                    {getWeatherData.nome}
                </Text>
                <Text
                    style={{
                        textTransform: "capitalize",
                        fontSize: 25,
                        color: '#ebebeb',
                        padding: 5,
                    }}
                >
                    {getWeatherData.cond}
                </Text>
                <Text
                    style={{
                        fontSize: 25,
                        color: '#ebebeb',
                        padding: 5,
                    }}
                >
                    {parseInt(getWeatherData.temp)}°
                </Text>
            </View>
            <TextInput  
                style={{
                    color: 'white',
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: '#8c8c8c',
                    backgroundColor: '#8c8c8c',
                    borderRadius: 5,
                    marginTop: 10,
                    padding: 10,
                    paddingHorizontal: 50,
                }}
                placeholder="Search any city"
                placeholderTextColor="#FFF"
                value={location}
                onChangeText={(value) => setLocation(value)}
            />
        </ImageBackground>
    )
}