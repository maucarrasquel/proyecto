
let texto = '¡Bienvenidos a nuestra ferretería!';
let index = 0;
let title = document.getElementById('title');

const funcionalidad = ()=>{
	if(index < texto.length){
    title.textContent+= texto.charAt(index);
    index++;
	}
	setTimeout(funcionalidad,150)
}
funcionalidad();
