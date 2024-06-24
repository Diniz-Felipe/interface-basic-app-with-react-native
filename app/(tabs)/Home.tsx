import React from 'react';
import { Text } from '@/components/Text';
import axios from 'axios';

interface IUser {
  name: string;
  email: string;
};

interface IHomeScreen {
  fetchPoker: (url: string) => Promise<IUser>
};

const URL = "https://pokeapi.co/api/v2/pokemon";

const handlerFetchAxios = async () => {
  const response = await axios.get(URL)
  return response.data.map((item: IUser)=> <Text>`${item.name}`</Text>);
};

export const HomeScreen = ({ fetchPoker }: IHomeScreen) => {
  return <Text>Home</Text>
}

export const HomeTestScreen = () => {
  return <HomeScreen fetchPoker={handlerFetchAxios} />
}

