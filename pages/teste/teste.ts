 import { ViewChild } from '@angular/core'
import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { VgAPI } from 'videogular2/core';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';



@Component({
  selector: 'page-about',
  templateUrl: 'teste.html'
})
export class PaginaMinha {
  
  public versao:string[];
  public outro:string = "YEAHHHH";
  public conteudo:string;
  public ops:string;
  public estilo:any;
 
  @ViewChild(VgHLS) vgHls: VgHLS;


   public items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);

  }


  constructor(public navCtrl: NavController,public plat:Platform,private domSami: DomSanitizer,private alert:AlertController) {

    this.versao = this.plat.platforms();
    this.estilo = true;


    
  }

  deleteLista(indice){
    console.log("vai apagar o " + indice);
    this.items.splice(indice, 1);
  }

  buttonClick(){

    this.versao = ["Clicou no botão abaixo!","oieee","e3r3","66"];

  }

  link(){
  var seila = new DOMParser();
  
  this.outro = 'OIOIOIOOI';
  //this.conteudo ='<ion-icon name="star"></ion-icon>';
 // this.conteudo = "<input type='button' value='Add to favorites'>ssss</input>";
 //this.ops = " <button ion-button round >ROK1</button>";

if(document.getElementById("oi").style.display=="none"){
  document.getElementById("oi").style.display="";
}else{
  document.getElementById("oi").style.display="none";
}

if(document.getElementById("oi2").style.display=="none"){
  document.getElementById("oi2").style.display="";
}else{
  document.getElementById("oi2").style.display="none";
}


this.estilo ="ion-hide";
  }

  estiloA(){
    return this.domSami.bypassSecurityTrustStyle("false");
  }

  presentPrompt() {
  let alert = this.alert.create({
    title: 'Login',
    inputs: [
      {
        name: 'username',
        placeholder: 'Username'
      },
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: data => {
         /* if (User.isValid(data.username, data.password)) {
            // logged in!
          } else {
            // invalid login
            return false;
          }*/
        }
      }
    ]
  });
  alert.present();
}


  async presentAlert() {
    
    
    
    
    const alert = await this.alert.create({
      title: 'Subtitle',
      message: 'This is an alert message.',
     buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}