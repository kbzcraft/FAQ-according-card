
import React from 'react'
import "./faq.css"
// import { useState } from "react";
// import {useEffect} from 'react'
export default function Faq() {
    // const [status, setStatus] = useState("none");
    function toogleQNA(e){
        // setStatus("block")
        let Parent = "";
        if (e.target.localName === "img"){
            console.log(e.target)
            Parent = e.target.parentElement.parentElement.parentElement
        } else {
            Parent = e.target.parentElement.parentElement

        }
        // e.target.parentElement.nextElementSibling.style.display = "block";
        // e.target.parentElement.lastChild.style.transform = "rotate(180deg)"
        // console.log(Parent)
        const button = Parent.querySelector("button")
        const answer = Parent.querySelector("p:last-child")
        const question = Parent.querySelector("p:first-child>span")
        if(document.querySelector("button.rotate")){
            document.querySelector("button.rotate").classList.remove("rotate")
        }
        if(document.querySelector("#active-font")){
            document.querySelector("#active-font").setAttribute("id","")
        }
        if(document.querySelector("#active")){
            document.querySelector("#active").setAttribute("id","")
        }
        if(answer.classList=="active"){
            answer.setAttribute("id","")
            answer.classList.remove("active")
            button.classList.remove("rotate")
            return
        }
        console.log(answer)
        // console.log(button) 
        button.classList.add("rotate")
        
        answer.setAttribute("id","active")
        answer.classList.add("active")
        question.setAttribute("id","active-font")
    }    

  return (
    <>
        <section className='faq-card'>
            <div className="bg">
                {/* <img className='women-illustration' src="images/illustration-woman-online-desktop.svg" alt='illustration woman online'/> */}
                <img loading='lazy' src="images/illustration-woman-online-mobile.svg" alt="illustration-woman-online-mobile" className="mobile-illustration" />
                <div className='box-image'>
                    <img  className='box' src="https://raw.githubusercontent.com/kbzcraft/FAQ-according-card/7d57d32a492493d24c42b5f00d549017a1e71568/public/images/illustration-box-desktop.svg" alt='' />
                </div>
            </div>
            <div className="faqs">
                <h1>FAQ</h1>
                <div className="qna">
                    <p onClick={toogleQNA}>
                        <span>How many team members can I invite?</span>
                        <button><img src="https://raw.githubusercontent.com/kbzcraft/FAQ-according-card/2eeaac4a00f857cd8bfe62c534ec79f0e28d3b64/public/images/icon-arrow-down.svg" alt="&#8964;" /></button>
                    </p>
                    <p>
                        <span>
                        You can invite up to 2 additional users on the Free plan. There is no limit on 
                        tea m members for the Premium plan.
                        </span>
                    </p>
                </div>
                <div className="qna">
                <p onClick={toogleQNA}>
                        <span id='active-font'>What is the maximum file upload size?</span>
                        <button className='rotate'><img src="https://raw.githubusercontent.com/kbzcraft/FAQ-according-card/2eeaac4a00f857cd8bfe62c534ec79f0e28d3b64/public/images/icon-arrow-down.svg" alt="&#8964;" /></button>
                    </p>
                    <p id='active'>
                        <span>
                        No more than 2GB. All files in your account must fit your allotted storage space.
                        </span>
                    </p>
                </div>
                <div className="qna">
                    <p onClick={toogleQNA}>
                        <span>
                        How do I reset my password?
                        </span>
                        <button><img src="https://raw.githubusercontent.com/kbzcraft/FAQ-according-card/2eeaac4a00f857cd8bfe62c534ec79f0e28d3b64/public/images/icon-arrow-down.svg" alt="&#8964;" /></button>
                    </p>
                    <p>
                        <span>
                        Click “Forgot password” from the login page or “Change password” from your profile page.
                        A reset link will be emailed to you.
                        </span>
                    </p>
                </div>       
                <div className="qna">
                    <p onClick={toogleQNA}>
                        <span>
                        Can I cancel my subscription?
                        </span>
                        <button><img src="https://raw.githubusercontent.com/kbzcraft/FAQ-according-card/2eeaac4a00f857cd8bfe62c534ec79f0e28d3b64/public/images/icon-arrow-down.svg" alt="&#8964;" /></button>
                    </p>
                    <p>
                        <span>
                        Yes! Send us a message and we’ll process your request no questions asked.
                        </span>
                    </p>
                </div>
                <div className="qna">
                    <p onClick={toogleQNA}>
                        <span>
                        Do you provide additional support?
                        </span>
                        <button><img src="https://raw.githubusercontent.com/kbzcraft/FAQ-according-card/2eeaac4a00f857cd8bfe62c534ec79f0e28d3b64/public/images/icon-arrow-down.svg" alt="&#8964;" /></button>
                    </p>
                    <p>
                        <span>
                        Chat and email support is available 24/7. Phone lines are open during normal business hours.
                        </span>
                    </p>
                </div>
            </div>
        </section>
        
    </>
  )
}


