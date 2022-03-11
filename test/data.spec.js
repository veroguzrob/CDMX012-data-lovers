import { filterRole, orderAlpha, filterDifficulty, /*filterStats*/ } from '../src/data.js';
import { allData, testRole, testNoRole, testOrderZ, testNoOrder, testDiffiLow, testDiffiMed, testDiffiHig, testNoDifficulty, /*testAdCarry*/} from './mockDataLol.js';

describe('Test del filtro por rol', () => {
  test('Filtrar por rol Tank', ()=>{
    expect (filterRole(Object.values(allData), 'Tank')).toStrictEqual(testRole);
  })
  test('Evitar falsos positivos en filtro por Tank', ()=>{
    expect (filterRole(Object.values(allData), 'Tank')).not.toStrictEqual(testNoRole);
  })
  test('Comprueba cuantos Tanks esta filtrando', ()=>{
    expect (filterRole(Object.values(allData), 'Tank')).toHaveLength(2);
  })
})

describe('Test del ordenado alfabetico', ()=>{
  test('Comprobar que ordena de la Z a la A', ()=>{
    expect (orderAlpha(Object.values(allData), 'ztoa')).toStrictEqual(testOrderZ);
  })
    test('Evitar un falso ordenado', ()=>{
    expect (orderAlpha(Object.values(allData), 'ztoa')).not.toStrictEqual(testNoOrder);
  })
  test('Comprueba cuantos campeones esta ordenando', ()=>{
    expect (orderAlpha(Object.values(allData))).toHaveLength(6);
  })
})

describe('Test del filtro por dificultad', ()=>{
  test('Flitrar la dificultad por nivel Low', ()=>{
    expect (filterDifficulty(Object.values(allData), 'low')).toStrictEqual(testDiffiLow);
  })
  test('Flitrar la dificultad por nivel Media', ()=>{
    expect (filterDifficulty(Object.values(allData), 'media')).toStrictEqual(testDiffiMed);
  })
  test('Flitrar la dificultad por nivel High', ()=>{
    expect (filterDifficulty(Object.values(allData), 'high')).toStrictEqual(testDiffiHig);
  })
  test('Evitar falsos positivos en filtrado por nivel Media', ()=>{
    expect (filterDifficulty(Object.values(allData), 'media')).not.toStrictEqual(testNoDifficulty);
  })
 
});

/*describe('Test del filtro Stats para tener el Top', ()=>{
    test('Filtrar por el stat attackdamage', ()=>{
      console.log (filterStats(Object.values(allData)));
    })
})*/
