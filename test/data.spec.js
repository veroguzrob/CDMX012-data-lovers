import { filterRole, orderAlpha, filterDifficulty } from '../src/data.js';
import { allData, testRole, testNoRole, testOrder, testNoOrder, testDifficulty, testNoDifficulty } from './mockDataLol.js';

describe('Test del filtro por rol', () => {
  test('Filtrando por un rol especifico', ()=>{
    expect (filterRole(Object.values(allData), 'Tank')).toStrictEqual(testRole);
  })
  test('Evitar falsos positivos en filtrado por rol', ()=>{
    expect (filterRole(Object.values(allData), 'Tank')).not.toStrictEqual(testNoRole);
  })
  test('Comprueba cuantos Tanks esta filtrando', ()=>{
    expect (filterRole(Object.values(allData), 'Tank')).toHaveLength(2);
  })
})

describe('Test del ordenado alfabetico', ()=>{
  test('Comprobar que ordena correctamente', ()=>{
    expect (orderAlpha(Object.values(allData))).toStrictEqual(testOrder);
  })
  test('Evitar un falso ordenado', ()=>{
    expect (orderAlpha(Object.values(allData))).not.toStrictEqual(testNoOrder);
  })
  test('Comprueba cuantos campeones esta ordenando', ()=>{
    expect (orderAlpha(Object.values(allData))).toHaveLength(5);
  })
})

describe('Test del filtro por dificultad', ()=>{
  test('Flitrar la dificultad por nivel especifico', ()=>{
    expect (filterDifficulty(Object.values(allData), 'media')).toStrictEqual(testDifficulty);
  })
  test('Evitar falsos positivos en filtrado por nivel', ()=>{
    expect (filterDifficulty(Object.values(allData), 'media')).not.toStrictEqual(testNoDifficulty);
  })
 
});
