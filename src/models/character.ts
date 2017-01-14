export enum CharacterType {
  boyStudent=1, 
  girlStudent,
  richMansDaughter,
  shrineMaiden,
  policeOfficer,
  officeWorker,
  informer,
  doctor,
  patient,
  classRep,
  mysteryBoy,
  alien,
  godlyBeing,
  popIdol,
  journalist,
  boss,
  nurse,
  henchman,
  illusion,
  scholar,
  examinver,
  AI,
  teacher,
  transferStudent,
  military,
  blackCat
} 

export class Character {
  constructor( public id:number, 
               public name:string, 
               public paranoiaLimit:number, 
               public selected:boolean=false){
  }
}
