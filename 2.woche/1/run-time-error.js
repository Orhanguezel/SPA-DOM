try {
    document.querySelector('');
} catch (e) {
    console.log(e);
    console.log('mesaj:',e.message);
    console.log('name:',e.name);
    console.log('stack:',e.stack);
    console.log('toString:',e.toString());
    console.log('constructor:',e.constructor);
    console.log('prototype:',e.prototype); 
}

const tier = document.getElementById('.tier');
if (!tier) {
    const newError = new Error('Kein tier gefunden!');
    throw newError;
}