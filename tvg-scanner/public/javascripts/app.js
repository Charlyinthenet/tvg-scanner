/**
 * Application Logic and Behavioral Logic
 */

/**
 * verificaCampiVuoti
 * Verifica che i campi di pagina.html siano popolati e
 * maggiori di 2 caratteri
 * 
 * @return true
 */
function verificaCampiVuoti() {
	
	// Recupero il valore del campo fldNome
	var fldNome = document.getElementById('fldNome').value;
	if(fldNome.length==0)
	{
		mostraAvviso('campo Nome obbligatorio','fldNome');	
	}

	var fldCognome = document.getElementById('fldCognome').value;
	if(fldCognome.length==0)
	{
		mostraAvviso('campo Cognome obbligatorio','fldCognome');		
	}

	var fldEmail = document.getElementById('fldEmail').value;
	if(fldEmail.length==0)
	{
		mostraAvviso('campo Email obbligatorio','fldEmail');
	}

	var fldPassword = document.getElementById('fldPassword').value;
	if(fldPassword.length==0)
	{
		mostraAvviso('campo Password obbligatorio','fldPassword');
	}

	var fldCat = document.getElementById('fldCat').value;
	if(fldPassword.length==0)
	{
		mostraAvviso('campo Categoria obbligatorio','fldCat');
	}

}

/**
 * mostraAvviso 
 * mostra il messaggio di alert per avvirtire l'utente
 * che di tratta di un campo obbligatorio
 * 
 * @param  string frase   frase da mostrare all'utente
 * @param  string fldName attributo id del campo
 * 
 * @return true
 */
function mostraAvviso(frase,fldName)
{
	alert(frase);
	document.getElementById(fldName)
			.classList.add('campoObbligatorio');
	return true;
}

function verificaCorrettezzaPsw(frase,fldName)
{
	alert(frase);
	document.getElementById(fldName)
			.classList.add('campoObbligatorio');
	return true;
}

function entryPoint()
{
	document
		.getElementById('btnInviaDati')
		.addEventListener('click', function(){

			verificaCampiVuoti();
			verificaCorrettezzaPsw();
		});

}

window.addEventListener('load', function() {
	
	// === Inizializzazione Applicativo


	// === Richiamo entryPoint()
	entryPoint();
});


