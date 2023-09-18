/* eslint-disable @typescript-eslint/no-unsafe-argument */
import './styles.css'
import * as profileService from '../../../services/profile-service'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

type FormData = {
    profile: string;
}

type Profile = {
    avatar_url: string;
    url: string;
    followers: string;
    location: string;
    name: string;
}

export default function Git() {

    const navigate = useNavigate();
    const [profile, setProfile] = useState<Profile>(
        {
            avatar_url: '',
            url: '',
            followers: '',
            location: '',
            name: ''
        }
    )

    const [formData, setFormData] = useState<FormData>({
        profile: '',
    })

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        const name = event.target.name
        setFormData({ ...formData, [name]: value })
        console.log('ouviu input', setFormData({ ...formData, [name]: value }))
    }
    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log('ouviu formulario', formData)
        event.preventDefault()
        profileService.findProfile(formData.profile)
            .then(response => {
                setProfile(response.data)

            }).catch(
                () => {
                    navigate('*')
                }
            )
    }

    return (
        <>
            <div className="card">
                <h2 className="ds-mb20">Encontre um perfil</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            type="text"
                            className="input-profile"
                            placeholder="Digite o perfil"
                            name="profile"
                            value={formData.profile}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="dflex ds-mt30">
                        <button

                            type='submit' className="button">Encontrar</button>
                    </div>
                </form>
            </div>

            {profile && (
                <div className="after-container">
                    <div className='img-avatar'>
                        <img
                            src={profile.avatar_url}
                            alt=""
                        />
                    </div>
                    <div className="after-container-info">
                        <h5>Informações</h5>
                        <div className="after-container-info-paragraph">
                            <p>
                                {' '}
                                <b>Perfil: {profile.url}</b>
                            </p>
                            <p>
                                <b>Seguidores: {profile.followers}</b>
                            </p>
                            <p>
                                {' '}
                                <b> Localidade:{profile.location}</b>
                            </p>
                            <p>
                                {' '}
                                <b>Nome:{profile.name}</b>
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}



