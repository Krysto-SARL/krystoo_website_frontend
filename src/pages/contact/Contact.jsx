import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './contact.css';
import handLids from '../../assets/hands_lids.jpeg';
import { postMessage } from '../../features/message/messageSlice';

function Contact() {
  const [formState, setFormState] = useState({
    subject: '',
    firstName: '',
    lastName: '',
    company: '',
    fonction: '',
    email: '',
    message: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postMessage(formState));

    setFormState({
      object: '',
      name: '',
      lastName: '',
      compagny: '',
      fonction: '',
      email: '',
      message: ''
    });
  };

  return (
    <main className='contact-container'>
      <div className="image-contact-container">
        <img src={handLids} alt="" />
      </div>
      <form className='form contact-form' onSubmit={handleSubmit}>
        <h1 className='contact-title'>Une question ? Un projet ? <br /> Contactez-nous !</h1>
        <div className="form-group">
          <select name="object" value={formState.object} onChange={handleChange}>
            <option value="">Objet de votre message</option>
            <option value="Collecte de vos déchets">Collecte de vos déchets</option>
            <option value="Devenir revendeur">Devenir revendeur</option>
            <option value="Sensibilisations">Sensibilisations</option>
            <option value="Atelier de recyclage">Atelier de recyclage</option>
            <option value="Team buildings">Team buildings</option>
            <option value="Autres sujets">Autres sujets</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Votre nom</label>
          <input type="text" id="firstName" name="name" value={formState.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Votre prénom</label>
          <input type="text" id="lastName" name="lastName" value={formState.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="company">Entreprise</label>
          <input type="text" id="compagny" name="company" value={formState.compagny} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="fonction">Votre fonction dans l'entreprise</label>
          <input type="text" id="fonction" name="fonction" value={formState.fonction} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Votre email</label>
          <input type="text" id="email" name="email" value={formState.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Votre message</label>
          <textarea id="message" name="message" cols="30" rows="10" value={formState.message} onChange={handleChange}></textarea>
        </div>
        <button className='btn btn-block btn-danger' type='submit'>Envoyer votre message</button>
      </form>
    </main>
  );
}

export default Contact;
