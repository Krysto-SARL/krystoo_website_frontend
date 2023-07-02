import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfil, addLogo } from '../../../features/user/userSlice'
// import { updatePassword } from '../../../features/auth/authSlice'
import Spinner from '../../../components/shared/spinner/Spinner'
import './privateMyProfil.css'
import { toast } from 'react-toastify'
import Modal from '../../../components/shared/modal/Modal'

function PrivateMyProfil() {
  const { profil, isLoading } = useSelector((state) => state.user)

  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false)
  const [isNewPasswordModalOpen, setIsNewPasswordModalOpen] = useState(false)
  const [logoFile, setLogoFile] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfil())
  }, [])

  const openNewProductModal = () => {
    setIsNewProductModalOpen(true)
  }

  const closeNewProductModal = () => {
    setIsNewProductModalOpen(false)
  }

  const openNewPasswordModal = () => {
    setIsNewPasswordModalOpen(true)
  }

  const closeNewPasswordModal = () => {
    setIsNewPasswordModalOpen(false)
  }

  const handleLogoChange = (e) => {
    const file = e.target.files[0]
    setLogoFile(file)
    setPreviewImage(URL.createObjectURL(file))
  }

  const handleLogoSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('logo', logoFile)
    dispatch(addLogo({ userId: profil.data.id, logo: formData }))
      .then(() => {
     
        setIsNewProductModalOpen(false)
      })
      .catch((error) => {
        toast.error(`Une erreur s'est produite, merci de réessayer`)
      })
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    // dispatch(updatePassword({ currentPassword, newPassword }))
    //   .then(() => {
    //     toast.success('Mot de passe mis à jour avec succès')
    //     setIsNewPasswordModalOpen(false)
    //   })
    //   .catch((error) => {
    //     toast.error(`Une erreur s'est produite, merci de réessayer`)
    //   })
  }

  if (isLoading || !profil.data) {
    return <Spinner />
  }

  return (
    <main className="container">
      <header className="profil-header">
        <h2>Bienvenue sur votre profil {profil.data.username}</h2>
        <div className="profil-logo-container">
          <img
            className="profil-logo"
            src={`${process.env.REACT_APP_BASE_API_URL_IMAGE}${profil.data.logo}`}
            alt=""
          />
          <button onClick={openNewProductModal} className="btn">
            Ajouter un logo
          </button>
        </div>
        <Modal
          titleModal="Ajouter ou changer votre logo"
          isOpen={isNewProductModalOpen}
          onClose={closeNewProductModal}
        >
          <div>
            <form className="add-logo-form" onSubmit={handleLogoSubmit}>
              <div className="form-group">
                <p></p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                />
                {previewImage && (
                  <img
                    className="logo-preview"
                    src={previewImage}
                    alt="Preview"
                  />
                )}
              </div>
              <button className="btn" type="submit">
                Ajouter
              </button>
            </form>
          </div>
        </Modal>

      
        <Modal
          titleModal="Modifier le mot de passe"
          isOpen={isNewPasswordModalOpen}
          onClose={closeNewPasswordModal}
        >
          <div>
            <form
              className="update-password-form"
              onSubmit={handlePasswordSubmit}
            >
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Mot de passe actuel"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Nouveau mot de passe"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-danger" type="submit">
                Modifier
              </button>
            </form>
          </div>
        </Modal>
      </header>
      <section className='update-action-container'>

      <button onClick={openNewPasswordModal} className="btn btn-block btn-danger">
          Modifier le mot de passe
        </button>
      </section>

    </main>
  )
}

export default PrivateMyProfil
