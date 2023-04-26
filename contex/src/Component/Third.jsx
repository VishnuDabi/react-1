import React from 'react'
import { Fname,Lname } from '../App'
const Third = () => {
  return (
    <>
        <h1>Third component is running</h1>
        {/* <Fname.Consumer>
            {(fnm)=>{
                return (<Lname.Consumer>
                    {(lnm)=>{
                        return <h2>{fnm} {lnm} </h2>
                    }}
                </Lname.Consumer>)
            }}
        </Fname.Consumer> */}
        <Fname.Consumer>
            {(fname)=>{
                return (<Lname.Consumer>
                    {(Lname)=>{
                        return <h1>{fname} {Lname} </h1>
                    }}
                </Lname.Consumer>)
            }}
        </Fname.Consumer>
    </>
  )
}

export default Third