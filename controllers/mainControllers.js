
const main = async (req,res)=>{
	try{
	res.render('main');	
}catch(error){
console.error(error.message);
res.status(500).send('Error en el servidor');
}

}
module.exports= {
	main
}