import React from 'react';
// import { memo } from 'react';

/*
    Memo le dice a React
    memoriza este componente 
    por eso esta todo englobado
    con parentesis ().
    Solo cuando las props cambian 
    se vuelve a renderizar todo 
    el componente en parentesis.
*/
export const Small = React.memo(({ value }) => {

    console.log(' Me volví a dibujar :( ');

    return (
        <small>{ value }</small>
    )
})
