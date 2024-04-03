import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { ModalIcons } from './src/pages/passwords/components/modalIcons'

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}