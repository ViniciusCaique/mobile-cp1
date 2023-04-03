
import { useEffect, useState } from "react";
import { ImageBackground, TextInput } from "react-native";
import { View, Text } from "react-native";

import { api } from '../libs/axios'
import { apiKey } from '../libs/axios'
 
const image = { uri: 'https://w.wallhaven.cc/full/6o/wallhaven-6okojq.jpg' }

export default function Home() {

    const [ location, setLocation ] = useState('')
    const [ getWeatherData, setWeatherData ] = useState([])

    const getData = async (url) => {
        await api.get(url, {
            params: {
                q: location,
                units: "metric",
                appid: apiKey
            }
        })
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
                // n e a melhor forma que eu fiz, mas assim o erro 404 passa e eu consigo pegar os dados das cidades que eu quero,
                // se eu deixasse vazio o array do useEffect, eu teria que fazer um botao pra atualizar a pagina e renderizar os novos dados
            })
    }

    useEffect(() => {
        getData()
    }, [location])


    return(
        <ImageBackground
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            source={ image }
            blurRadius={3}
        >
            {getWeatherData == '' ? null : 
                <View
                    style={{ 
                        alignItems: 'center',
                        padding: 5,
                        marginBottom: 10,
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
                            fontSize: 60,
                            color: '#ebebeb',
                            padding: 5,
                        }}
                    >
                        {Math.round(getWeatherData.temp)}°
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
                </View>
            } 
        
            <TextInput  
                style={{
                    color: 'white',
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: '#8c8c8c',
                    backgroundColor: '#8c8c8c',
                    borderRadius: 5,
                    marginBottom: 150,
                    padding: 10,
                    width: 200,
                }}
                placeholder="Search any city"
                placeholderTextColor="#FFF"
                keyboardAppearance="dark"
                value={location}
                onChangeText={(value) => setLocation(value)}
            />
        </ImageBackground>
    )
}