import { TextInput } from "react-native";
import { View, Text } from "react-native";

import { api } from '../libs/axios'



export default function Home() {

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <Text>Home</Text>
            <TextInput placeholder="Search any city"/>
        </View>
    )
}