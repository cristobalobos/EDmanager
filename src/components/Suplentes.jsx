import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes }) => {
    <section>
        <div className="suplentes">
            {
                suplentes.map(j => (
                    <article className="suplente" key={j.id}>
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
    suplentes: state.suplentes
})


const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)