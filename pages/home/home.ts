import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
  public valor:string;



  constructor(public navCtrl: NavController) {
    this.valor = "";
  }

outracoisa(e){
  this.valor = "outro zeh dagua!";

  var parametros = {

  };

  axios.post('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
  .then(function(response){
    console.log('salvo com sucesso')
  });  
}

teste(e){
  alert('dfdfdfd');
  
  this.criarConta();
  this.retornavalor();

}
criarConta(){
try{
  var tagDate;
tagDate = "Josaga" + new Date().getTime();
var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 ) {
      alert(this.responseText);}
 }; 

 var args = "acao=salvar&k=9ADVXhVOVVmaSt2VzhWbh9EdtdFdxATYXFzVUdXTtVmTGRVUxxmROpmUrRlc1AjUhBXbUhUNFVmSKR1V&"+"nome="+tagDate+"&email="+tagDate+"@uber-mail.com"+"&plano=8";
   xhttp.open("POST", "http://cliente.kudaplay.tv/gerador", true);
   xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
   xhttp.send(args);
   
   }catch(e){
alert(e.message);
}
     
  }
 


retornavalor(){
  this.valor= "YEAHHH";
}

}
