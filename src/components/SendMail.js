import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import '../styles/SendMail.css';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from '../features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from '../firebase/firebase';
import firebase from 'firebase/compat/app';

function SendMail() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formData) => {
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" name="to" placeholder="To" ref={register({ required: true })} />

        {errors.to && <p className="sendMail__error">To is required</p>}

        <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })} />

        {errors.subject && <p className="sendMail__error">Subject is required</p>}

        <textarea
          name="message"
          placeholder="Message..."
          className="sendMail__message"
          ref={register({ required: true })}
        />

        {errors.message && <p className="sendMail__error">Message is required</p>}

        <div className="sendMail__options">
          <Button className="sendMail__send" variant="contained" color="primary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
