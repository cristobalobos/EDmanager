import React from "react"
import { connect } from "react-redux";


const Jugadores = ({ jugadores, agregarTitular }) => (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(j => (
                    <article className="jugador" key={j.id}>
                        <img src={j.foto} alt={j.nombre} />
                        <h3>{j.nombre}</h3>
                        <div>
                            <button onClick={() => agregarTitular(j)}>Titular</button>
                            <button>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

// esta funcion convierte los atributos del estado en propiedades
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

// funciones que se pasan por propiedades
const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador) {
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    }
})

// componente de orden superior
export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)
