import React, { useState } from 'react'
import "./style.scss";
// import Question from './question/Question';
import Question from './html/Html';
// import Navbar from '../../components/header/navbar/Navbar';
// import Footer from '../../components/footer/Footer';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
const Home = () => {
    const [type, setType] = useState("HTML");
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();



    // Add a new document with a generated id.
    function handleSubmit(e) {
        e.preventDefault();
        // console.log("type", type, question, answer);
        async function addData() {
            const docRef = await addDoc(collection(db, "questions"), {
                type: type,
                quetion: question,
                answer: answer
            });
            console.log("Document written with ID: ", docRef.id);
        }
        addData();
        // setType("HTML");
        setQuestion("");
        setAnswer("");

    }
    return (
        <div className='post-container'>
            <form action="" onSubmit={handleSubmit}>
                <div className="dropdown">
                    <select name="" id="" onChange={(e) => setType(e.target.value)} value={type}>
                        <option value="HTML" >HTML</option>
                        <option value="REACT"  >REACT</option>
                        <option value="JAVA" >JAVA</option>
                        <option value="CSS"  >CSS</option>
                        <option value="JS" >Js</option>
                    </select>
                </div>
                <div className="question">
                    <textarea rows="3" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder='Write your question here ...' />
                </div>
                <div className="answer">
                    <textarea rows="6" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='Write your answer here ...' />
                </div>
                <div className="btn">
                    <button>Submit</button>
                </div>
            </form>

            {/* <Question /> */}

        </div>
    )
}

export default Home