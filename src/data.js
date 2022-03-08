//Funcion para filtrar por rol
export const filterRole = (champions, roles) =>{
   const filterChampions = champions.filter(champion => champion.tags.includes(roles));
   return filterChampions

};

//Función para ordenar usando sort
export const orderAlpha = (champions => {
   return champions.sort((a,b) => { 
      if (a.name > b.name) return -1;
      else if (a.name < b.name) return -1;
   }); 
});

//Saca la dificultad de todos los campeones 
export const filterDifficulty= (champions) => {
      let emptyLow = [];
      let emptyMed = [];
      let emptyHig = [];
      champions.forEach (champion => {
         const getDifficulty = champion.info.difficulty;
         if (getDifficulty <= 4) {
            emptyLow.push(champion);
         }
         else if (getDifficulty > 4  && getDifficulty < 8) {
            emptyMed.push(champion);
         }
         else if (getDifficulty >= 8 && getDifficulty <= 10){
            emptyHig.push(champion);
         }
         });

      return emptyHig

};

