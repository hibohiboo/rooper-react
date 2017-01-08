import * as React from 'react';
import { Props, Component} from 'react';

interface IPropsRuleY extends Props<RuleY>{
  name: string;
};
interface IState {};

class RuleY extends React.Component<IPropsRuleY, IState> {
  render(): JSX.Element{
    return (
      <tr>
        <th>
           ルールY
        </th>
        <td>
           {this.props.name}
        </td>
      </tr>
    );
  }
 }

interface IPropsRuleX extends Props<RuleX>{
  name: string;
  num: number;
  maxNum: number;
};

class RuleX extends React.Component<IPropsRuleX, IState> {
  render(): JSX.Element{
    return (
      <tr>
        <th>
          {
            (()=>{ return this.props.maxNum === 1 ? `ルールX` : `ルールX${this.props.num}`})()
          }
        </th>
        <td>
           {this.props.name}
        </td>
      </tr>
    );
  }
 }

interface IRule{
  name: string;
}

interface IProps extends Props<SelectedPlotList>{
  mainPlot?:any;
  subPlotList?: any;
  subPlotNum: number;
};


class SelectedPlotList extends React.Component<IProps, IState> {
  render(): JSX.Element{
    return (
      <table>
        <tbody>
          <RuleY name={this.props.mainPlot && this.props.mainPlot.name} />
          {
            this.props.subPlotList.map((rule, i) =>{
              return <RuleX key={i} name={rule.name} num={i+1} maxNum={this.props.subPlotNum} />;
            }
          )}
        </tbody>
      </table>
    );
  }
 }

 export default SelectedPlotList;