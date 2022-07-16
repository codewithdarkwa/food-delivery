import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RootNavigation from './navigation';

export default function App() {
  return (
    <>
    <RootNavigation />
    <StatusBar style='dark'/>
    </>
  );
}

