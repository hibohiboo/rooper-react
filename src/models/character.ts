export enum CharacterType {
  illeguler=11  
} 

export class Character {
  constructor(public id:number, 
               public name:string, 
               public paranoiaLimit:number, 
               public selected:boolean=false){
  }
}
// export default Character;

// export class IllegularCharacter extends Character{
//   constructor(public id, 
//               public name, 
//               public paranoiaLimit:number, 
//               public selected=false,
//               public roleList:any=[],
//               public isIllegular = true){
//     super(id, name, paranoiaLimit, selected);
//   }

//   // /**
//   //  * オーバーロード
//   //  * イレギュラー用の役職リストを作成。
//   //  * 役職のリセット。役職リストの1つ目の役職を選択。
//   //  */
//   // initRole(scenario){
//   //   super.initRole();
//   //   this.roleList = scenario
//   //                   .selectedSet
//   //                   .role_list
//   //                   .filter(role => -1 === scenario
//   //                                         .selectedRoleList
//   //                                         .findIndex(r=>r.id === role.id));
//   //   this.role = this.roleList[0];
//   //   this.role.selected = true;
//   // }
// }