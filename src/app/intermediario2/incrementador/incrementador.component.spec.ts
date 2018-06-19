import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('deve mostrar a legendaa', () => {

      component.leyenda = 'progresso';

      fixture.detectChanges();

      const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
      expect(elem.innerHTML).toContain('progresso');

      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h3').textContent).toContain('progresso');


    });

    it('should verify the input value', () => {
      component.cambiarValor(5);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('input').value).toBe('55');
      });

    });

    it('should decrement value when to click on button', () => {
      const buttons = fixture.debugElement.nativeElement.querySelectorAll('.btn-primary');

      buttons[0].click();

      expect(component.progreso).toEqual(45);
    });

});
