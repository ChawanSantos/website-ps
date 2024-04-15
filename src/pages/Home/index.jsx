import './style.css'


import fotoNoticia1 from '../../assets/noticia1.jpg'
import fotoAntiga from '../../assets/praiasol-old.jpg'


export default function Home() {
    return (
        <>
            <div className='container-topo'>
                <img src={fotoNoticia1} alt="Foto noticia 1" />
            </div>


            <div className='sobre'>
                <h2>SOBRE A VIAÇÃO PRAIA SOL</h2>
                <h3>CONHEÇA A VIAÇÃO<br/>PRAIA SOL</h3>
                <img src={fotoAntiga} alt="foto antiga" />


                <div className='conteudo-historia-ps'>
                    <p>A VIAÇÃO PRAIA SOL NASCEU DA VIAÇÃO ALVORADA, QUANDO ESTA QUE OPERAVA NO TRANSPORTE RODOVIÁRIO DE PASSAGEIROS, DECIDIU OPERAR TAMBÉM NO TRANSPORTE COLETIVO INTERMUNICIPAL DA GRANDE VITÓRIA.  ASSIM, FOI CRIADA A VIAÇÃO PRAIA SOL, VOLTADA INTEIRAMENTE AO TRANSPORTE COLETIVO INTERMUNICIPAL DE PASSAGEIROS EM 01 DE JANEIRO 1989.
                    <br /><br />
                    TRABALHAMOS PARA OFERECER SEGURANÇA, CONFORTO, PONTUALIDADE E CORDIALIDADE NO TRANSPORTE COLETIVO DE PASSAGEIROS
                    </p>
                </div>
            </div>
        </>
    )
}