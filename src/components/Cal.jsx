import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'





function Cal() {

const[amount,setamount]=useState("")
const[rate,setrate]=useState("")
const[year,setyear]=useState("")
const[isinvalidamount,setinvalidamount]=useState(false)
const[isinvalidrate,setisinvalidrate]=useState(false)
const[isinvalidyear,setisinvalidyear]=useState(false)
const[sav,setsav]=useState(0)
console.log(amount,rate,year);

const regex=/^[0-9]*.?[0-9]+$/




const validate=(e)=>{



  console.log(e);

  const{name,value}=e.target

  if (name=='principle') {
    setamount(value)
    
  } else if(name=='interest') {
    setrate(value)
    
  }
 else {
  setyear(value)
}
   

if (regex.test(value) || value=="") {
  
  if (name=='principle') {

    setinvalidamount(false)
  } 
  else if(name=='interest'){
    setisinvalidrate(false)
  }
  else if(name=='year')
  {
    setisinvalidyear(false)
  }







}

else{

 
  if (name=='principle') {

    setinvalidamount(true)
  } 
  else if(name=='interest'){
    setisinvalidrate(true)
  }
  else if(name=='year')
  {
    setisinvalidyear(true)
  }









}




  

}




const handlecal=(e)=>{
  e.preventDefault()
  
if (amount&&rate&&year) {
  
 setsav((amount*rate*year)/100)


} else {
  alert("please fill all fields")
}




  

}




const handlereset=(e)=>{
  e.preventDefault()
  setamount("")
  setrate("")
  setyear("")
  setinvalidamount(false)
  setisinvalidrate(false)
  setisinvalidyear(false)
  setsav(0)

}

  return (
  
    
   <>
 <div className="bg-dark  d-flex justify-content-center align-items-center" style={{height:'100vh'}}>



      <div style={{height:'600px'}} className='bg-white text-white p-4 w-25  rounded-4 '>

       <div ><h1 className='text-dark' style={{letterSpacing:'-3px'}}>Simple Interest Calculator</h1></div>
       <div><h4 className='text-dark '>calculate simple interest Easily</h4></div>
       <div className='h-25 w-100 rounded-4' style={{backgroundColor:'yellowgreen'}}>

       <div className='text-white  d-flex justify-content-center align-items-center mt-2 '><h1><i className="fa-solid fa-indian-rupee-sign"></i>{sav}</h1>
       </div>
       <div className='text-white  d-flex justify-content-center align-items-center '><h1  style={{letterSpacing:'-3px'}}> Total Interest </h1>
          </div>

       </div>

       <div className='mt-4'>

       <form >
         <TextField onChange={validate} id="principle_amount" value={amount || ""}  name='principle' label="Amount" variant="outlined" className='w-100 mb-3' />
        { isinvalidamount &&
          <div className='text-danger '>invalid principle amount</div>}
         <TextField onChange={validate} id="interest_rate" value={rate || ""} name='interest' label="Interest" variant="outlined" className='w-100 mb-3'/>
         {
          isinvalidrate &&
          <div className='text-danger '>invalid interest</div>}
         <TextField onChange={validate} id="time_period" value={year || ""} name='year' label="Year" variant="outlined" className='w-100 mb-3'/>
        { isinvalidyear &&
          <div className='text-danger '>invalid year</div>}

       </form>


       

       <form>
      <div>
        <Stack direction="row" spacing={2}>
          <div className='w-50'><button type='submit' onClick={handlecal} disabled={ isinvalidamount || isinvalidrate || isinvalidyear}  className='btn btn-primary w-100'>Calculate</button></div>
          <div  className='w-50' ><button onClick={handlereset} className='btn btn-white border-primary text-dark w-100' >Reset</button></div>
          
        </Stack>
      </div>
    </form>












       </div>




      </div>
      
    </div>
   
   
   
   </>
    
    
 
    
  )
}

export default Cal