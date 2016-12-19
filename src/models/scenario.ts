import { TragedySet } from './TragedySet';
import { Character, IllegularCharacter }  from './character';

export class Scenario {
  constructor( public selectedSet: TragedySet = new TragedySet(),
               public numberOfLoops:number = 4,
               public daysPerLoop: number = 6,
               public selectedPlotList:any = [],
               public selectedCharacters: Character[] = [],
               public selectedRoleList:any = [],
               public selectedIncidentLists:any = [],
               public dayList=[]
               ){
  }
}

export default Scenario;