import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet } from '@angular/router';
import { ROTAS } from 'src/app/avancado/rotas/app.routes';
import { By } from '@angular/platform-browser';
import { HospitalComponent } from 'src/app/intermediario2/hospital/hospital.component';
import { IncrementadorComponent } from 'src/app/intermediario2/incrementador/incrementador.component';
import { MedicosComponent } from 'src/app/intermediario2/medicos/medicos.component';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HospitalComponent,
        IncrementadorComponent,
        MedicosComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(ROTAS),
        FormsModule
      ]
    }).compileComponents();
  }));

  it('deve ter router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.query( By.directive( RouterOutlet) );

    expect(app).not.toBeNull();

  });

  it('deve ter routerLink', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let existe = false;

    for(const ele of elementos) {
      if (ele.attributes['routerLink'] === '/medicos') {
        existe = true;
        break;
      }
    }

    expect(existe).toBeTruthy();
  });

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
