
import './App.css';
import { Drawer } from '@mui/material'
import {useState} from "react"
import PanToolIcon from '@mui/icons-material/PanTool';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ContrastIcon from '@mui/icons-material/Contrast';

function App() {
  const[flagdrawer,setFlagdrawer]=useState(false)
  const[txtcolor,setTextcolor]=useState("")
  const[titlecolor,setTitlecolor]=useState("")
  const[backcolor,setBackcolor]=useState("")


  const changetextcolor_fun=(event)=>{
    setTextcolor(event.target.id)
   
  }
  const changetitlecolor_fun=(event)=>{
    setTitlecolor(event.target.id)
  }

  const changebackcolor_fun=(event)=>{
    setBackcolor(event.target.id)

  }
  const darkmode=()=>{
    setBackcolor("#000000")
    setTextcolor("#ffffff")
    setTitlecolor("#ffffff")
    document.getElementById("main_div_id").style.filter="saturate(200%)";

  }
  const lightmode=()=>{
    setBackcolor("#ffffff")
    setTextcolor("#000000")
    setTitlecolor("#000000")
    document.getElementById("main_div_id").style.filter="saturate(50%)";
    
  }
  const highmode=()=>{
    // setBackcolor("#000000")
    // setTextcolor("#ffffff")
    // setTitlecolor("#ffffff")
    document.getElementById("main_div_id").style.filter="saturate(300%)";
    
  }
  return (
    <div className="App">
      <button onClick={()=>setFlagdrawer(true)} id="btn"><PanToolIcon/></button>
      <div id="main_div_id" style={{backgroundColor:backcolor}}>
        <h3 style={{color:titlecolor}}>This is heading</h3>
        <p style={{color:txtcolor}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <Drawer
         open={flagdrawer}
         anchor='right'
         onClose = {()=>setFlagdrawer(false)}
        >
          <div id="main_drawer_div_id">
            <div className="inner_div">
            <h3>Adjust text colors</h3>
             <input type="button" style={{backgroundColor:"#006BAD"}} id="#006BAD" onClick={changetextcolor_fun}/>
             <input type="button" style={{backgroundColor:"#88399B"}} id="#88399B" onClick={changetextcolor_fun}/>
             <input type="button" style={{backgroundColor:"#D10031"}} id="#D10031" onClick={changetextcolor_fun}/>
             <input type="button" style={{backgroundColor:"#D96320"}} id="#D96320" onClick={changetextcolor_fun}/>
             <input type="button" style={{backgroundColor:"#008C8C"}} id="#008C8C" onClick={changetextcolor_fun}/>
             <input type="button" style={{backgroundColor:"#2A7E2F"}} id="#2A7E2F" onClick={changetextcolor_fun}/>
             <input type="button" style={{backgroundColor:"#F1F1F1"}} id="#F1F1F1" onClick={changetextcolor_fun}/>
             <input type="button" style={{backgroundColor:"#000000"}} id="#000000" onClick={changetextcolor_fun}/>
            </div>
            <div className="inner_div">
            <h3>Adjust Title colors</h3>
             <input type="button" style={{backgroundColor:"#006BAD"}} id="#006BAD" onClick={changetitlecolor_fun}/>
             <input type="button" style={{backgroundColor:"#88399B"}} id="#88399B" onClick={changetitlecolor_fun}/>
             <input type="button" style={{backgroundColor:"#D10031"}} id="#D10031" onClick={changetitlecolor_fun}/>
             <input type="button" style={{backgroundColor:"#D96320"}} id="#D96320" onClick={changetitlecolor_fun}/>
             <input type="button" style={{backgroundColor:"#008C8C"}} id="#008C8C" onClick={changetitlecolor_fun}/>
             <input type="button" style={{backgroundColor:"#2A7E2F"}} id="#2A7E2F" onClick={changetitlecolor_fun}/>
             <input type="button" style={{backgroundColor:"#F1F1F1"}} id="#F1F1F1" onClick={changetitlecolor_fun}/>
             <input type="button" style={{backgroundColor:"#000000"}} id="#000000" onClick={changetitlecolor_fun}/>
            </div>
            <div className="inner_div">
            <h3>Adjust background colors</h3>
             <input type="button" style={{backgroundColor:"#006BAD"}} id="#006BAD" onClick={changebackcolor_fun}/>
             <input type="button" style={{backgroundColor:"#88399B"}} id="#88399B" onClick={changebackcolor_fun}/>
             <input type="button" style={{backgroundColor:"#D10031"}} id="#D10031" onClick={changebackcolor_fun}/>
             <input type="button" style={{backgroundColor:"#D96320"}} id="#D96320" onClick={changebackcolor_fun}/>
             <input type="button" style={{backgroundColor:"#008C8C"}} id="#008C8C" onClick={changebackcolor_fun}/>
             <input type="button" style={{backgroundColor:"#2A7E2F"}} id="#2A7E2F" onClick={changebackcolor_fun}/>
             <input type="button" style={{backgroundColor:"#F1F1F1"}} id="#F1F1F1" onClick={changebackcolor_fun}/>
             <input type="button" style={{backgroundColor:"#000000"}} id="#000000" onClick={changebackcolor_fun}/>
            </div>
          </div>
          <div id="all_contrast_div">
            <div className="contrast_div" id="c1" onClick={darkmode}>
            <DarkModeIcon/>
            <p className="p_contrast">Dark Contrast</p>
            </div>
            <div className="contrast_div" id="c2" onClick={lightmode}>
            <LightModeIcon/>
            <p className="p_contrast">Light Contrast</p>

            </div>
            <div className="contrast_div" id="c3" onClick={highmode}>
            <ContrastIcon/>
            <p className="p_contrast">High Contrast</p>

            </div>
          </div>
            
        </Drawer >
    </div>
  );
}

export default App;
