import { TragedySet } from './TragedySet';
import { Character, CharacterType }  from './character';
import { SelectedPlot } from './Plot';
import {Role} from './Role';

interface ICharacterRoleAssociate{
  roleKey:number;
  characterId:number;
}

export interface ICharacterWithRole{
  id:number;
  name:string;
  selected:boolean;
  role:Role;
}

/**
 * シナリオ情報を管理するクラス
 */
export class Scenario {
  constructor(
               public characterList:Character[] = [],
               public selectedSet: TragedySet = new TragedySet(),
               public selectedPlotList:SelectedPlot[] = [],
               public selectedRoleList:Role[] = [],
               public characterRoleList:ICharacterRoleAssociate[] = [],
              //  public selectedCharacterList: Character[] = [],
               public selectedIncidentLists:any = [],
               public dayList=[],
               public numberOfLoops:number = 4,
               public daysPerLoop: number = 6,
               ){
  }
  /**
   * 選択中のキャラクターと役職を紐付けたリストを返す
   */
  get selectedCharacterList():ICharacterWithRole[]{
    const {characterWithRoleList} = this;
    const selectedCharacterList = 
      characterWithRoleList.filter(char=>char.selected === true);
    return selectedCharacterList;
  }

  get characterWithRoleList():ICharacterWithRole[]{
    const {characterList, selectedRoleList, characterRoleList, selectedSet} = this;
    
    return characterList.map(char=>{
      const charRole = characterRoleList.find(charRole=>char.id === charRole.characterId);
      let role = charRole && selectedRoleList.find(role => role.key === charRole.roleKey);

      // イレギュラーの場合、セットの役職から選択
      if(char.id === CharacterType.mysteryBoy){
        role = charRole && selectedSet.roleList.find(role => role.key === charRole.roleKey);
      }
      return {
        id: char.id,
        name: char.name,
        selected:char.selected,
        role: role
      }
    });

  }

  /**
   * 未割り当ての役職一覧を返す
   */
  get unallocatedRoleList(){
      const {selectedRoleList, characterRoleList} = this;
      const unallocatedRoleList = 
        selectedRoleList.filter(
          role=>characterRoleList.findIndex(
            cr=>cr.roleKey === role.key) === -1);

      return unallocatedRoleList;
  }

  /**
   * 選択されていない役職を選択する
   */
  get unselectedRoleList(){
    const {selectedSet, selectedRoleList} = this;
    const roleList = selectedSet.roleList;
    const filter = role => selectedRoleList.findIndex(r=>r.id === role.id) === -1;
    return roleList.filter(filter);
  }
}

export default Scenario;