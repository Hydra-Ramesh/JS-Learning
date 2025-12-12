// Immediately Invoked Function Expression (IIFE)
(function coffee(){
    console.log(`COFFEE DB CONNECTED`);
})();

// SERVER
// Immidiatly DB Should be connected when server starts

((name)=>{
    console.log(`DB CONNECTED FOR ${name}`);
})("Ramesh's SERVER");