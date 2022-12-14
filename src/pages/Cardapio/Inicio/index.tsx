import Cardapio  from 'data/cardapio.json';
import styles from './Inicio.module.scss';

export default function Inicio() {
    let pratosRecomendados = [...Cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
    return (
        <section>
            <h3 className= {styles.titulo} >
                Recomendações da cozinha
            </h3>
            <div className= {styles.recomendados}>
                {pratosRecomendados.map(item => ( <div key={item.id} className= {styles.recomendado}>
                    <div className= {styles.recomendados__imagem}>
                        <img src={item.photo} alt={item.title}  />
                    </div>
                    <button className= {styles.recomendados__botao}> Ver mais</button>
                </div> ))}
            </div>
        </section>
    );
} 