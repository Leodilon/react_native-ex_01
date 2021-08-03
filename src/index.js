import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import medic_img_01 from './images/medic_01.jpg';

const App = () => {

  const style_div_01 = {
    margin: 'auto', 
    width: 900, 
    backgroundColor: '#EEE', 
    padding: 12,
    paddingTop: 32,
    borderRadius: 8,
    border: '1px solid rgb(0, 0, 0)',
    textAlign: 'center'
  }

  const style_lavel_01 = {
    fontWeight: 'bold',
    fontSize: 18,
  }

  const medic_01 = "Maria"
  const medic_02 = "Carla"
  const medic_03 = "Bianca"

  return (
    <div style = {style_div_01}>
      <text style = {style_lavel_01}>Profissionais da Saúde</text>
      <div style = {{ margin: 'auto', marginTop: 12, backgroundColor: '#EEE', 
                      padding: 12, borderRadius: 2, border: '1px solid rgba(0, 0, 0, 0.2)',
                      display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

        <div class='style'>
          <img src={medic_img_01} alt="medic_ibm_01" style={{width: 100}}/>
          <text style={{marginTop: 10}}>{medic_01}</text>
        </div>
        <div class='style' >
          <img src={process.env.PUBLIC_URL + '/medic_02.jpg'} alt="medic_ibm_02" style={{width: 100}}/>
          <text style={{marginTop: 10}}>{medic_02}</text>
        </div>
        <div class='style' >
          <img src="https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg" alt="medic_ibm_03" style={{width: 100}}/>
          <text style={{marginTop: 10}}>{medic_03}</text>
        </div>
      </div>
    </div>
  )
}

// const App = () => {
//   return (
//     <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 12}}>
//       <label htmlFor='nome' style={{display: 'block', marginBottom: 4, }}>Nome:</label>
//       <input type = 'text' id = 'nome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', borderRadius: 8, 
//         outline: 'none', width: '100%'}}/>
//       <button style={{marginTop: 8, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', 
//         border: 'none', borderRadius: 8, width: '100%'}}>Enviar</button>
//     </div>
//   )
// }

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)