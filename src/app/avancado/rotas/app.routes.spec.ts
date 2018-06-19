import { ROTAS } from "src/app/avancado/rotas/app.routes";
import { HospitalComponent } from "src/app/intermediario2/hospital/hospital.component";



describe('rotas', () => {

  it('dever verificar se existe a rota', () => {
    expect(ROTAS).toContain({
      path: 'hospital',
      component: HospitalComponent
    });
  });










});
