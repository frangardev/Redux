//Cuando trabajamos con Redux tenemos que tener claro tres cosas: 


// Store -> Es donde se almacena la información (Almacen de una tienda)
// Reducers -> Ordenan la información (Trabajador que ordena los productos. saben que deben de hacer)
// Actions -> Son la acciones (Compar un producto, cambiar uno por otro, etc.)

// CREAR UN STORE: ##################################################
//----- Para React:
const { createStore } = require("redux");
// const store = createStore 
//----- Para Node :
// const store2 = require('redux').createStore()

// CREAR UN REDUCER: ##################################################
// El reducer debe tener un stado incial
const default_state = {
    initialState: '',
    initialNumber: 0
}
// El reducer resibe uns stado y una accion
const reducer = (state = default_state, accion) => {
    // Luego tiene un swhitch case que reparte el trabajo
    switch (accion.type){
        default: return state
    }
}

// CREAR UN STORE: ##################################################
// Le pasamos a nuestro store nuestro reducer
const store = createStore(reducer)
// createStroe tiene muchas funciones utiles como .getState() que nos debuelve el stado inicial
console.log('Estado inicial: ',store.getState())
store.myNewState(()=>{
    console.log('Cambio del stado: ',store.getState())
})
store.dispatch()