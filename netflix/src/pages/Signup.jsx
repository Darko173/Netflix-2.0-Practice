import React, { useState } from 'react'
import styled from "styled-components"
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
export default function Signup() {
    const [showPassword, setShowPassword]= useState(false);
   
  return (
    <Container showPassword={showPassword}> 
      
      <BackgroundImage/>
      
      <div className="content">

      <Header login/>
      <div className="body flex column a-center j-center">
        <div className="text flex column">

          <h1>Unlimited Movies and TV Shows</h1>
          <h4>Watch Anywhere. Cancel Anytime</h4>
          <h6>
            Ready to Watch? Enter your Email to Create or restart Membership
          </h6>
          </div>
            <div className="form">
            <input type='email' placeholder ="Email Address" name= "Email"/>
            {
              showPassword && <input type='password' placeholder ="Password" name= "Password"/>
            }
            
            {
              !showPassword && <button onClick={()=>setShowPassword(true)}>Get Started</button>
            }
            
            
          </div>
        <button>Log In</button>
        </div>
      </div>
      
    </Container>
  )
}


const Container= styled.div`

position: relative;

.content{
position: absolute;
top: 0;
left: 0;
background-color: rgba{0,0,0,5};
height: 100vh;
width: 100vw;
display: grid;
grid-template-rows: 15vh 85vh;

.body{

gap: 1rem;
.text {
  gap: 1rem;
  text-align: center;
  font-size: 2rem;
  h1 {
    padding: 0 20rem;
  }
  
} 
.form {
  display: grid;
  height: 3rem;
  grid-template-columns:${({showPassword})=>showPassword ? "1fr 1fr": "2fr 1fr"};

  width: 60%;
  .input {

    color: black;
    border: none;
    padding: 2.5rem;
    font-size: 2rem;
    border: 1px solid black;
    &:focus {
      outline: none;
    }
  } 
}
button{

  padding: 0.5rem  2rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1.05rem;


}
}
button{

  padding: 0.5rem  1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1.05rem;


}

}
`;
