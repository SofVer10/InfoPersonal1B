import React from 'react';

const sofia = ({nombre, edad, especialidad, direccion, codigo, fechaNacimiento, }) => {
    return (
        <div>
            <h3>
                Nombre Completo = {nombre}
                <br />
                Edad = {edad}
                <br />
                Especialidad = {especialidad}
                <br />
                Dirección = {direccion}
                <br />
                Código = {codigo}
                <br />
                Fecha de Nacimiento = {fechaNacimiento}
            </h3>
        </div>
    );
};

export default sofia;