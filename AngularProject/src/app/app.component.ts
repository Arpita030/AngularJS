import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgUrl = 'https://www.google.com/imgres?q=bridgelabz&imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FC510BAQEYyeT3P0H_mw%2Fcompany-logo_200_200%2Fcompany-logo_200_200%2F0%2F1630611149363%2Fbridgelabz_com_logo%3Fe%3D2147483647%26v%3Dbeta%26t%3DTFgRiaA55f57NqQFnUbnsKu3mQo7c-LOfD8_iNSgtNM&imgrefurl=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fbridgelabz-com&docid=KsuoHlDSFkjFTM&tbnid=qF6c_vcUiKtKHM&vet=12ahUKEwih9dGLvPOLAxUak68BHb6GHOUQM3oECB0QAA..i&w=200&h=200&hcb=2&ved=2ahUKEwih9dGLvPOLAxUak68BHb6GHOUQM3oECB0QAA'; 
}
