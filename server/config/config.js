//========
//puerto
//=====
process.env.PORT = process.env.PORT || 3000;

//========
//Entorno
//=====

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

//if (process.env.NODE_ENV === 'dev') {
//urlDB = 'mongodb://localhost:27017/cafe';
//} else {
urlDB = 'mongodb://user-cafe:Daniel123456@ds147233.mlab.com:47233/cafe';
//}

process.env.URLDB = urlDB;