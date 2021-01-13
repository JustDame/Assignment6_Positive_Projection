import { Block } from "@material-ui/icons";

export default function Footer(){
    let style ={
        
        // textAlign: "center",
        // position: "fixed",
        border: "5px solid black",
        // border_style:"outset",
        padding:"2%",
        height:"100%",
        width:"100%",
        margins:"1%",
        display:"flex",
      
    };
    let ulStyle ={
        listStyleType: "none",
        
    };
    let separate ={
        display:"flex",
        flexAlign:"left"
    };
    let copyStyle = {
        display:"flex",
        flexAlign:"right"
    };
    return (
<div style ={style}>
    <div style = {separate}>
        
        
        <ul style={ulStyle}>
        <li>Created by:</li>
            <li><span>Sean Wilson</span></li>
            <li><span>Damian Pascal</span></li>
            <li><span>Jordane Allen</span></li>
            <li><span>Jade Marte</span></li>
            
        </ul>
        
    </div>
        <div style={copyStyle}>
            <p>CopyRight.</p>
        </div>
    </div>);
}
