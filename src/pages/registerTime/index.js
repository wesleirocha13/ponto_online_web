import './style.css';
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function RegisterTime() {

  const [entry, setEntry] = useState('');
  const [exit, setExit] = useState('');
  const [dateEntry, setDateEntry] = useState('');
  const [dateExit, setDateExit] = useState('');
  const [visibleAlert, setVisibleAlert] = useState(false);

  function handleSubmit(){
    var filter = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if(!filter.test(entry) || !filter.test(exit)){
      setVisibleAlert(true);
      setEntry('');
      setExit('');
    }
    alert(dateEntry);
  }

  function handleCloseAlert(){
    setVisibleAlert(false);
  }

  return (
    <div class="container">
      <h2 class="center-align">Lançar ponto</h2>
      {visibleAlert ? 
        <div class="row">
          <div class="col s4 offset-s4">  
            <div class="card red">
              <div class="card-content white-text">
                <a onClick={handleCloseAlert} class="btn-small transparent right white-text"><i class="Tiny material-icons">close</i></a>
                <span class="card-title">Erro</span>
                <p>Insira o horário de entrada e de saída no formato "HH:MM".</p>
              </div>
            </div>
          </div>
        </div>
      : ''}
      <div id="registerBlock">
        <form id="register-time">
          <fieldset id="fildset">
            <legend><h6>Dados:</h6></legend>
            <div class="row">
              <div class="input-field col s6">
                <input id="date1" type="date" class="validate" value={dateEntry} onChange={(e) => {setDateEntry(e.target.value)}}/>
                <label htmlfor="date1">Data Entrada:</label>
              </div>
              <div class="input-field col s6">
                <input id="saida" type="text" class="validate" value={entry} onChange={(e) => {setEntry(e.target.value)}}/>
                <label htmlfor="saida">Horário Entrada:</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="date2" type="date" class="validate" value={dateExit} onChange={(e) => {setDateExit(e.target.value)}}/>
                <label htmlfor="date2">Data Saída:</label>
              </div>
              <div class="input-field col s6">
                <input id="saida" type="text" class="validate" value={exit} onChange={(e) => {setExit(e.target.value)}}/>
                <label htmlfor="saida">Horário Saída:</label>
              </div>
            </div>
            <div class="center-align" id="submitButton">
              <Link to="/lancamentos" id="btnCancel" class="waves-effect waves-light btn red">Cancelar</Link>
              <a class="waves-effect waves-light btn" onClick={handleSubmit}>Enviar</a>
            </div>
            
          </fieldset>
        </form>
      </div>
    </div>
  );
}
export default RegisterTime;
