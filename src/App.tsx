
import { useState } from 'react'
import './App.css'
import ActualDate from './components/ActualDate'
import ChangeBackground from './components/ChangeBackground'
import DataModal from './components/dataModal/DataModal'
import DeleteFirstWord from './components/DeleteFirstWord'
import AppStyles from "./App.module.css"

function App() {
  const [colorParent, setColorParent] = useState("aliceblue")

  return (
    <>
      <div style={{backgroundColor:`${colorParent}`}} className={AppStyles.divContainer}>
        <ActualDate></ActualDate>
        <br></br>
        <ChangeBackground changeColor={setColorParent}></ChangeBackground>
        <br></br>
        <DataModal></DataModal>
        <br></br>
        <DeleteFirstWord></DeleteFirstWord>
      </div>
    </>
  )
}

export default App
