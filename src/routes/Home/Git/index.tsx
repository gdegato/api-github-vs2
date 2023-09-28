/* eslint-disable @typescript-eslint/no-unsafe-argument */
import './styles.css'
import * as profileService from '../../../services/profile-service'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NotFound from '../NotFound';

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

    const [open, setOpen] = useState(false);
    const [openNotFound, setOpenNotFound] = useState(false);

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
    }

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        profileService.findProfile(formData.profile)
            .then(response => {
                setProfile(response.data)
                setOpen(true)
            }).catch(
                () => {
                    navigate('/git/notfound')
                    setOpen(false)
                    setOpenNotFound(true)
                }
            )
    }

    return (
        <>
            <div className="card">
                <h1 className="ds-mb20">Encontre um perfil</h1>
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
            {
                (profile && open &&
                    (
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
                                        <b>Perfil: <a href={profile.url}>{profile.url}
                                        </a></b>
                                    </p>
                                    <p>
                                        <b>Seguidores: {profile.followers}</b>
                                    </p>
                                    <p>
                                        {' '}
                                        <b> Localidade: {profile.location}</b>
                                    </p>
                                    <p>
                                        {' '}
                                        <b>Nome: {profile.name}</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                ) || (
                    openNotFound &&
                    < NotFound />
                )
            }

        </>
    )
}



