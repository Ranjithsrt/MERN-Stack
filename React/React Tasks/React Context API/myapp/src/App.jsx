 
import './App.css'
import { ThemeProvider } from './components/ThemeContext'
import ThemeContextExample from './components/ThemeContextExample'

function App() {
 
  return (
    <>
    <ThemeProvider>
      <ThemeContextExample />
    </ThemeProvider>
    </>
  )
}

export default App
