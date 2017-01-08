import { TragedySet } from './TragedySet';
import { Character, IllegularCharacter }  from './character';
import { SelectedPlot } from './Plot';

export class Scenario {
  constructor( public selectedSet: TragedySet = new TragedySet(),
               public selectedPlotList:SelectedPlot[] = [],
               public selectedCharacters: Character[] = [],
               public selectedRoleList:any = [],
               public selectedIncidentLists:any = [],
               public dayList=[],
               public numberOfLoops:number = 4,
               public daysPerLoop: number = 6,
               ){
  }
}

export default Scenario;