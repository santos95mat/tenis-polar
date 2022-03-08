function tenisPolar(){
	const frase = prompt("Frase para ser codificada: ");

	let t = ["t","e","n","i","s","p","o","l","a","r"];
	let p = ["p","o","l","a","r","t","e","n","i","s"];
	let fraseCripto = "";

  for(f=0; f<frase.length; f++){
    for(i=0; i<t.length; i++){
      if(frase[f] === t[i]){
        fraseCripto += p[i];
      }
    }
    if (fraseCripto.length != f+1){
      fraseCripto += frase[f];
    }
  }
    
	console.log(`Frase codificada: ${fraseCripto}`);
	console.log(" ");
  const q = prompt("deseia fechar o programa? [s] ou [n] ");
  if(q === "n") { 
	  console.clear();
	  tenisPolar();
  }

}
tenisPolar();