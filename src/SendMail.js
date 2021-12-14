import React from 'react'
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { closeSendMessage } from "./features/mailSlice"
import { db } from './firebase';
import firebase from "firebase/compat/app";


function SendMail() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        console.log(formData)
        db.collection("email").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch(closeSendMessage())
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={()=> dispatch(closeSendMessage())} className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    type="email"
                    placeholder="To"
                    {...register("to", { required: true })}
                />
                {errors.to && <p className="sendMail__error">To is required</p>}


                <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                />
                {errors.subject && <p className="sendMail__error">Subject is required</p>}


                <input
                    name="message"
                    type="text"
                    placeholder="Message..."
                    className="sendMail__message"
                    {...register("message", { required: true })}
                />
                {errors.message && <p className="sendMail__error">Message is required</p>}


                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail
