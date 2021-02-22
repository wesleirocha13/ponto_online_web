import {Link} from 'react-router-dom';
import './style.css';
import { useState, useEffect } from "react";
import api from '../../services/api';

function Release() {

    const [listReleases, setlistReleases] = useState(['']);
    useEffect(() => {
        api.get('schedules/').then(response => {
            const list = response.data;
            setlistReleases(list);
        }).catch((e) => {
            alert(e.response.data.message);
        })
    }, [])

    return (
        <div class="container">
            <h2 class="center-align">Histório de ponto</h2>
            <div id="table">
                <Link to="/registrar" title="Lançar ponto" class="btn-floating waves-effect waves-light teal lighten-2 right"><i class="material-icons">add</i></Link>
                {listReleases.length !== 0 ?
                    <table class="responsive-table ">
                        <thead>
                            <tr>
                                <th>Data Entrada</th>
                                <th>Hora Entrada</th>
                                <th>Data Saída</th>
                                <th>Hora Saída</th>
                                <th>Horas diurnas</th>
                                <th>Horas noturnas</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listReleases.map(listRelease => {
                                return (
                                    <tr>
                                        <td>{listRelease.dtEntry}</td>
                                        <td>{listRelease.entry}</td>
                                        <td>{listRelease.dtExit}</td>
                                        <td>{listRelease.exit}</td>
                                        <td>{listRelease.daytime_hours}</td>
                                        <td>{listRelease.night_hours}</td>
                                        <td>{listRelease.total_hours}</td>
                                    </tr>
                                );
                            })}                
                        </tbody>
                    </table>
                : 'Não existem lançamentos de ponto ainda!'}
            </div>
        </div>
    );
  }
  export default Release;
  