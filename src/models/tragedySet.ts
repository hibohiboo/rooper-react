// import { Rule } from `./rule`;
export class TragedySet {
  constructor( public name: string = "",
               public plotList: any = [],
               public subplotNum: number = 2,
               public roleList:any = [],
               public incidentList:any = []){}
}

export enum TragedySetType {
  first, basic, midnight, mystery, haunted  
} 

export const tragedySetList = [
  {id:TragedySetType.first,    name: `First Steps`,   fileName: `firstSteps.json`},
  {id:TragedySetType.basic,    name: `Basic Tragedy`, fileName: `basicTragedy.json`},
  {id:TragedySetType.midnight, name: `Midnight Zone`, fileName: `midnightZone.json`},
];