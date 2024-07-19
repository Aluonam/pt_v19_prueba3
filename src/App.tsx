
import './App.css'
import ActualDate from './components/ActualDate'
import ChangeBackground from './components/ChangeBackground'
// import DataModal from './components/dataModal/DataModal'
import DeleteFirstWord from './components/DeleteFirstWord'

function App() {

  return (
    <>
      <div>
      <ActualDate></ActualDate>
      <br></br>
      <ChangeBackground></ChangeBackground>
      <br></br>
      {/* <DataModal></DataModal> */}
      <br></br>
      <DeleteFirstWord></DeleteFirstWord>
      </div>
      </>
  )
}

export default App
