import Table from "../../components/table/Table";
import {Link} from 'react-router-dom';
import './style.css';

function Release() {
    return (
        <div class="container">
            <h2 class="center-align">Histório de ponto</h2>
            <div id="table">
                <Link to="/registrar" title="Lançar ponto" class="btn-floating waves-effect waves-light teal lighten-2 right"><i class="material-icons">add</i></Link>
                <Table/>
            </div>
        </div>
    );
  }
  export default Release;
  