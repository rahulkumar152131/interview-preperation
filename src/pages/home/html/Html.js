import React, { useEffect, useState } from 'react'
import "./style.scss"
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../../../firebase';
const Html = () => {
    const [allQuestion, setAllQuestion] = useState([]);
    useEffect(() => {

        async function getAllData() {
            const querySnapshot = await onSnapshot(collection(db, "questions"),
                (snapshot) => {
                    // console.log(snapshot);
                    const questions = snapshot.docs.map((question) => {
                        return question.data();
                    });
                    console.log(questions);

                    setAllQuestion(questions.filter((question) => question.type === "HTML"));

                })
        }
        getAllData();
    }, [])
    console.log(allQuestion);
    return (
        <div>
            <div className="js-container">
                <div className="title">
                    <h1> Top 50 Html Questions</h1>
                </div>

                {allQuestion.map((question, index) => (
                    <div key={index} className='quetions'>
                        <div className="question">
                            <div className="title">
                                <strong>{index + 1}.  </strong>
                            </div>
                            <div className="content">
                                {question.quetion}
                            </div>
                        </div>
                        <div className="answer">
                            <div className="title">
                                <strong>Ans:- </strong>
                            </div>
                            <div className="content">
                                {question.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Html