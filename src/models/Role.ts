export class Role {
  constructor( public id: number,
               public name: string,
               public limit: number, // 0 = 無限 
               public selected:boolean = false){}
}
