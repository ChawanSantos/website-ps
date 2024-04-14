import { useState } from "react"

import iconVagas from '../../assets/icon-vagas.svg'
import iconLupa from '../../assets/lupa.svg'

import './style.css'
export default function Vagas() {
    const [vagas, setVagas] = useState(
        [
            {
                id: 1, empresa: "Praia Sol", area: "Administrativo", funcao: "Auxiliar de operação", nomeVaga: "Bilhetagem Eletrónica", status: "Aberto",
                requisitos:
                    [
                        "Informática Básica",
                        "Aptidão Física",
                        "Ensino médio completo"
                    ]
            },
            {
                id: 2, empresa: "Praia Sol", area: "Manutenção", funcao: "Servente", nomeVaga: "Servente Interno", status: "Aberto",
                requisitos:
                    [
                        "Aptidão Física",
                        "Ensino fundamental completo"
                    ]
            },
            {
                id: 3, empresa: "Vereda", area: "Manuntenção", funcao: "Servente", nomeVaga: "Servente Pátio", status: "Aberto",
                requisitos:
                    [
                        "Aptidão Física",
                        "Ensino médio completo"
                    ]
            },
            {
                id: 4, empresa: "Praia Sol", area: "Operacional", funcao: "Motorista", nomeVaga: "Motorista", status: "Aberto",
                requisitos:
                    [
                        "Habilitação D ou E",
                        "Experiencia na area com Onibus ou Carreta"
                    ]
            }
        ])

    return (
        <>
            <h1 id="titulo">Trabalhe Conosco</h1>

            <div className="trabalhe-conosco">
                <img src={iconVagas} alt="Icone da image de vagas" />
                <h2>Quer trabalhar conosco?</h2>
            </div>

            <div className="form-nossa-oportunidades">
                <h3>NOSSAS OPORTUNIDADES HOJE</h3>
                <div className="container-campo-pesquisa">
                    <input id="pesquisa-vaga" type="text" placeholder="Digite o nome da vaga" />
                    <button><img src={iconLupa} alt="Icone lupa da imagem" /></button>
                </div>
                <div className="forms-filtro-vagas">
                    <p>Tipo de Vaga</p>
                    <select name="tipoVaga" id="tipoVaga">
                        <option value="todas">Todas</option>
                        <option value="efetivo">Efetivo</option>
                        <option value="estagiario">Estágiario</option>
                        <option value="temporario">Temporário</option>
                    </select>


                    <p>Empresa</p>
                    <select name="empresa" id="empresa">
                        <option value="todas">Todas</option>
                        <option value="praia-sol">Praia Sol</option>
                        <option value="vereda">Vereda</option>
                    </select>


                    <p>Áreas</p>
                    <select name="area" id="area">
                        <option value="todas">Todas</option>
                        <option value="operacional">Operacional</option>
                        <option value="administrativo">Administrativo</option>
                        <option value="manutencao">Manutenção</option>
                    </select>
                </div>
            </div>

            <div className="listagem-vagas">
                {
                    vagas.map((vaga) => {
                        return <div className="item-lista">
                            <div className="conteudo-vaga">
                                <p><sgrong>Função:</sgrong> {vaga.funcao}</p>
                                <p><sgrong>Vaga para:</sgrong> {vaga.nomeVaga}</p>
                                <p><sgrong>Empresa:</sgrong> {vaga.empresa}</p>
                            </div>
                            <div className="botao-candidatar">
                                <button>Inscrever-se</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}