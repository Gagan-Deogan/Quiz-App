import React from "react"
type Buttontype = {
  varient:string;
  children?: React.ReactNode;
  clickHandler?:Function;
  disabled?:boolean;
}

export const Button = ({ varient, children, clickHandler, disabled }: Buttontype) : any  =>{
  const isdisabled = disabled || false;
  const bgBtn = "h-12 px-6 m-2 text-lg transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline"
  const btnFil = "hover:bg-indigo-800 text-white"
  switch(varient){
    case "FILLED":
      return (
      <>
        <button 
          onClick={ ()=> clickHandler ? clickHandler() : null } 
          className={bgBtn + btnFil} >{children}</button>
      </>);
    case "OUTLINED":
      return(
      <>
        <button 
          onClick={ ()=> clickHandler ? clickHandler() : null } 
          className="h-12 px-6 m-2 text-lg text-indigo-600 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-indigo-200 border-2 border-indigo-600" >{children}</button>
      </>)
    default:
      return (<></>)
  }
}