import React from 'react'
import styles from './CrudQuestion.module.css'
import EditDelQuestionForm from './EditQuestionForm';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

class EditDelQuestion extends React.Component {

deleteQuestion = async () => {
    const id = this.props._id 
    alert("Are you sure you want to delete this question?")
    return fetch(`http://localhost:9999/api/origami/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include'
    })
    .then(toast("Question deleted!"))
    .then(this.props.history.push('/'))
} 

render() {
        return (
            <>
            <div >
                <div>
                    <p className={styles.question}>{this.props.question}</p>
               
               <EditDelQuestionForm {...this.props}></EditDelQuestionForm>
              <button className={styles.button} onClick={this.deleteQuestion}>Delete</button>
              </div> 
              </div> 
            <ToastContainer /> 
            </>
        )
    }
}

export default withRouter(EditDelQuestion);