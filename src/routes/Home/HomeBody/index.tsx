import './styles.css'
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Index";

export default function HomeBody() {

  return (
    <div className='ds-margin-left'>
      <h1 className="ds-container ds-mt30 ">Desafio Github API!</h1>
      <h3 className="ds-container ds-mt20 subtitle">DevSuperior - Escola de programação</h3>
      <div className="ds-container ds-mt30 ">
        <div className="buttons-align">
          <div>
            <Link to={'/git'}>
              <Button text="Começar" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
