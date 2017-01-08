
export class Plot {
  id: number;
  name: string;
  type: string; // M:ルールY, S:ルールX
  roles:Array<string>;
  rules:any;
}

export class SelectedPlot extends Plot {
  num: number;
}