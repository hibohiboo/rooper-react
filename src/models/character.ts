export class Character {
  constructor(public id:number, 
               public name:string, 
               public paranoiaLimit:number, 
               public selected:boolean=false,
               public role:any=null){
  }

  /**
   * 役職を初期化する。
   * 継承用に引数を一つ設定。
   */
  initRole(scenario = null):void{
    if (this.role) {
      this.role.selected = false;
    }
    this.role = null;
  }

  /**
   * 役職を追加する。
   */
  addRole(role):void{

    // パーソンを選択した場合は役職リセット
    this.role = null;    
    if(role.selected){
      this.role = role;
    }
  }
}

export class IllegularCharacter extends Character{
  constructor(public id, 
              public name, 
              public paranoiaLimit:number, 
              public selected=false,
              public role=null, 
              public roleList:any=[],
              public isIllegular = true){
    super(id, name, paranoiaLimit, selected, role);
  }

  /**
   * オーバーロード
   * イレギュラー用の役職リストを作成。
   * 役職のリセット。役職リストの1つ目の役職を選択。
   */
  initRole(scenario){
    super.initRole();
    this.roleList = scenario
                    .selectedSet
                    .role_list
                    .filter(role => -1 === scenario
                                          .selectedRoleList
                                          .findIndex(r=>r.id === role.id));
    this.role = this.roleList[0];
    this.role.selected = true;
  }
}