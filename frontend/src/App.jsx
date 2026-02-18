import './App.css'
import PageHeading from './components/PageHeading'
import SearchBar from './components/SearchBar'
import DisplayResult from './components/DisplayResult'
import { useState } from 'react'
function App() {
  const [result, setResult] = useState(null);


  return (
    <>
      <PageHeading />
      <SearchBar setResult={setResult} />
      <DisplayResult result={result} />
    </>
  )
}

export default App
