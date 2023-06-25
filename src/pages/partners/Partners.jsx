import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../features/user/userSlice';
import './partners.css'
import Spinner from '../../components/shared/spinner/Spinner';

function Partners() {
  const { users, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(users);

  if (isLoading || !users.data) {
    return (
    <main className="main">
        
    <Spinner/>
    </main>
    );
  }

  // Filtrer les utilisateurs ayant un rôle différent de "admin"
  const filteredUsers = users.data.filter((user) => user.role !== 'admin');

  return (
    <>
      <main className="container">
        <h1>Nos partenaires</h1>
        <div className="partners-container">

        {filteredUsers.map((user) => (
            <article key={user.id} className='partner-card'>
            <img src={`${process.env.REACT_APP_BASE_API_URL_IMAGE}${user.logo}`} alt="" />
            </article>
        ))}
        </div>
      </main>
    </>
  );
}

export default Partners;
