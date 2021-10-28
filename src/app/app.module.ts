import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatosComponent } from './components/datos/datos.component';
import { PaisComponent } from './components/paisComponent/pais.component';
import { PeruComponent } from './components/peruComponent/peru.component';
import { PostComponent } from './components/postComponent/post.component';
import { RightComponent } from './components/right/right.component';
import { JsonService } from './services/json.service';
import { HttpClientModule } from '@angular/common/http';
import { MyproyectoComponent } from './components/myproyecto/myproyecto.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    DatosComponent,
    PaisComponent,
    PeruComponent,
    PostComponent,
    RightComponent,
    MyproyectoComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
