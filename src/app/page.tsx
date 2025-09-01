"use client";

import ProjectBox  from "./Components/ProjectBox/ProjectBox";
import Header from "./Components/Header/Header";
import { useState, useEffect } from 'react';

let nameIndex = 0;
let timer = 1500;

export default function Home() {

  const [text, setText] = useState("Luke Boylan");
  const [mangle, setMangle] = useState(false);
  const myName = "Luke Boylan";

  // creates char array given ascii value integer range
  function range(lower : number, higher : number){
    const chars = [];
    for(let i = lower; i<= higher; i++)
    {
      chars.push(String.fromCharCode(i));
    }
    return chars;
  }

  // create characters array
  const lowercase = range(97, 122); // 'a' -> 'z'
  const uppercase = range(65, 90);  // 'A' -> 'Z'
  const digits = range(48, 57);     // '0' -> '9'
  const symbols = ["!", "@", "#", "$", "%", "&", "*", "?", "+", "-", "_", "=", "/", "~"];
  const characters = [...lowercase, ...uppercase, ...digits, ...symbols];

  // useEffect function to slowly show my name
  useEffect(() =>
  {
    setTimeout(() => {
      if(!mangle){
        nameIndex=nameIndex+1;
        timer = 100;
      }
    }, timer);
  }, [nameIndex]);


  // useEffect function to change the characters in my name
  useEffect(() =>
  {
    setTimeout(() => {
      const newString: string[] = [];
      for(let i = 0; i<myName.length ; i++)
      {
        if( i == 4)
        {
          newString.push(" ");
          continue;
        }
        let randomIndex = Math.round(Math.random() * characters.length);

        // catch the case where the new index is the last element in the array
        if(text === characters[randomIndex])
        {
          if (randomIndex == characters.length - 1)
            randomIndex--;
          else
            randomIndex++;
        }

        newString.push(characters[randomIndex]);
      }
      // turns the string array into a string
      setText(myName.substring(0, nameIndex) + newString.join("").substring(nameIndex));
    }, 75);
  }, [text, mangle]);


  return (
    <div className="grid justify-items-center pb-20 gap-16 font-[family-name:var(--font-geist-sans)] w-screen md:w-full">
      <Header></Header>
      <div className="statusBlock absolute rounded-3xl p-8 top-8 left-8">
        <div className= "bottom-4">
        <span className="font-bold">
          Dev status:
        </span>
        </div>
        <span>
          Hello 👋👷, I&apos;m currently building this website!!!
        </span>
      </div>

      <div className="relative justify-self-center">
          <h1 className="text-6xl absolute text-nowrap" 

            onMouseEnter={()=>{
              // 11 is the length of my name. nameIndex will surpass this. this prevents fucking with the initial site name animation
              if(nameIndex > 11)
              {
                nameIndex = 0; 
                setMangle(true); 
              }
              }} 
            
            onMouseLeave={()=>{
              if(mangle === true)
              {
                nameIndex = 20; 
                setMangle(false);
              }
              }}>
              
            {text}
          </h1>
          <h3 className="pt-16">
            4th year CS student @ Trinity College Dublin
          </h3>
      </div>

      <div className="border rounded bg-sky-200/25 p-4 relative">
        <span className="underline text-2xl font-bold">
          Projects
        </span>
        <span className=""> The good stuff...</span>
        <ProjectBox title="Genesys Student chatbot Timetable app" image="/GenesysProject.png" description ="A student timetable app with built in chatbot created for my Software Engineering Project. A collaboration with Genesys cloud." link="https://github.com/luke-boylan/Genesys-assistant-app"/>
        <ProjectBox title="Proxy Web Server" image="/WebProxy.png" description ="A Multithreaded HTTP/HTTPS web Proxy server built in C to handle client requests between a web browser and the requested origin server for my Advanced Computer Networks class." link="https://github.com/luke-boylan/proxy-web-server"/>
        <ProjectBox title="Munich Re Life Insurance platform" image="/MunichProject.png" description ="A Life Insurance Risk assessment Platform to evaluate risk factors for life insurance underwriters for my Software Engineering Project. A collaboration with Munich Re." link="https://github.com/luke-boylan/SwEngGroup30"/>
        <ProjectBox title="Morse Code Microcontroller Game" image="/MorseCode.png" description ="An interactive educational Morse Code game playable on the RP2040 microcontroller written in Arm Assembly and C for my Microprocessor Systems class." link="https://github.com/luke-boylan/Morse-Code-Microcontroller-Game"/>
        <ProjectBox title="StarGazer: see the stars" image="/StarGazer.png" description ="A website for viewing a map of the stars and the current Moon Phase based on the users inputted location and date/time." link="https://github.com/luke-boylan/StarGazer"/>
        <ProjectBox title="Secure Cloud Computing drive" image="/SecureComputing.png" description ="A Command Line Interface tool that lets the user create and add encrypted files to a cloud drive using the AES and RSA cryptographic methods along with an X.509 certificate for verification" link="https://github.com/luke-boylan/secure-cloud-storage"/>
      </div>
    </div>
  );
}
