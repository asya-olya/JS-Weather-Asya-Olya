var basil	=	require('../../node_modules/basil.js/build/basil');
basil	=	new	basil();
exports.get =	function(key)	{
    return	basil.get(key);
};
exports.set =	function(key,	value)	{
    return	basil.set(key,	value);
};