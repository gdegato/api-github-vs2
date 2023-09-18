import './styles.css'
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Index";

/* type FormData = {
  profile: string;
}

type Profile = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
} */

export default function HomeBody() {

  /*  const [profile, setProfile] = useState<Profile>();
   const [formData, setFormData] = useState<FormData>({
     profile: '',
   });
 
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const name = event.target.name;
     const value = event.target.value;
 
     setFormData({ ...formData, [name]: value });
   };
 
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     axios
       .get(`https://api.github.com/users/${formData.profile}`)
       .then((response) => {
         setProfile(response.data);
         console.log(response.data);
       })
       .catch((error) => {
         setProfile(undefined);
         console.log(error);
       });
   };
  */

  return (
    <>
      <h1 className="ds-container ds-mt30 ds-margin-left">Desafio Github API!</h1>
      <h3 className="ds-container ds-mt20 ds-margin-left subtitle">DevSuperior - Escola de programação</h3>
      <div className="ds-container ds-mt30 ds-margin-left">
        <div className="buttons-align">
        <div>
          <Link to={'/git'}>
            <Button text="GIT" />
          </Link>
        </div>

        <div>
          <Link to={'/cep'}>
            <Button text="CEP" />
          </Link>
        </div>
        </div>
      </div>

      {/*
  teste da api
        <button type='submit'>Testar a api</button>    
        colocar um div aqui

      <div className="cep-search-container">
        <h1 className="text-primary">Busca api git</h1>
        <div className="container search-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="profile"
                value={formData.profile}
                className="search-input"
                placeholder="CEP (somente números)"
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-primary search-button">
                Buscar
              </button>
            </div>
          </form>
          {profile && (
            <>
              <p>{profile.name}</p>

            </>
          )}
        </div>
      </div>
      */}

    </>
  )
}
