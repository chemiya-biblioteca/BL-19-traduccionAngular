import { Component } from '@angular/core';
import { GoogleTranslationService } from './google.translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  targetLanguage:string='';
  inputText:string='';
  transalatedText='';
  title = 'ng-google-translate';
  constructor(private googleTranslationService: GoogleTranslationService){

  }
  translate(){
    let model={
      "q": [this.inputText],
      "target": this.targetLanguage
    };
     this.googleTranslationService.translate(model).subscribe((response:any)=>{
      this.transalatedText=response.data.translations[0].translatedText
    })
  }
}
