import React from "react";
import { connect } from "react-redux";

const Titulares = ({ titulares }) => {
    <section>
        <div className="cancha">
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}></img>
                            <button>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
}

const mapStateToProps = state => ({
    titulares: state.titulares
})


const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)