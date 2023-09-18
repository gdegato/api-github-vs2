/* eslint-disable @typescript-eslint/no-unsafe-argument */
import './styles.css'
import * as profileService from '../../../services/profile-service'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


type FormData = {
    searchCep: string;
}

type Cep = {
    cep: string;
    logradouro: string;
    localidade: string;
    bairro: string;
    uf: string;
}

export default function Cep() {

    const navigate = useNavigate();

    const [cep, setCep] = useState<Cep>()

    const [formData, setFormData] = useState<FormData>({
        searchCep: '',
    })

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        const name = event.target.name
        setFormData({ ...formData, [name]: value })
        console.log('ouviu input do cep', setFormData({ ...formData, [name]: value }))
    }
    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log('ouviu formulario', formData)
        event.preventDefault()
        profileService.findCEP(formData.searchCep)
            .then(response => {
                setCep(response.data)
            }).catch(
                () => {
                    navigate('*')
                }
            )
    }

    return (
        <>
            <div className="card">
                <h2 className="ds-mb20">Encontre um CEP</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            type="text"
                            className="input-profile"
                            placeholder="Digite o perfil"
                            name="searchCep"
                            value={formData.searchCep}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="dflex ds-mt30">
                        <button type='submit' className="button">Encontrar</button>
                    </div>
                </form>
            </div>

            {cep && (
                <div className="after-container">
                    <div className="after-container-info">
                        <h5>CEP encontrado</h5>
                        <div className="after-container-info-paragraph">
                            <p>
                                {' '}
                                <b>Logradouro: {cep.logradouro}</b>
                            </p>
                            <p>
                                <b>Bairro: {cep.bairro}</b>
                            </p>
                            <p>
                                {' '}
                                <b> Cidade:{cep.localidade}</b>
                            </p>
                            <p>
                                {' '}
                                <b>Estado:{cep.uf}</b>
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}



