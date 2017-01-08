import * as React from 'react';
import { Props, Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

interface IPropsRuleY extends Props<RuleY>{
  name: string;
};
interface IState {};

class RuleY extends React.Component<IPropsRuleY, IState> {
  render(): JSX.Element{
    return (
      <TableRow>
        <TableHeaderColumn>
           ルールY
        </TableHeaderColumn>
        <TableRowColumn>
           {this.props.name}
        </TableRowColumn>
      </TableRow>
    );
  }
 }

interface IPropsRuleX extends Props<RuleX>{
  name: string;
  num: number;
  maxNum: number;
};

const RuleXHeader = ({maxNum, num}) => (
  <TableHeaderColumn>
    {
      (()=>{ return maxNum === 1 ? `ルールX` : `ルールX${num}`})()
    }
  </TableHeaderColumn>
);

const RuleXColumn = ({name}) =>(
  <TableRowColumn>
      {name}
  </TableRowColumn>
);

class RuleX extends React.Component<IPropsRuleX, IState> {
  render(): JSX.Element{
    return (
      <TableRow>
        <RuleXHeader maxNum={this.props.maxNum} num={this.props.num} />
        <RuleXColumn name={this.props.name} />
      </TableRow>
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
      <Table>
        <TableBody>
          <RuleY name={this.props.mainPlot && this.props.mainPlot.name} />
          {
            this.props.subPlotList.map((rule, i) =>{
              return <RuleX key={i} name={rule.name} num={i+1} maxNum={this.props.subPlotNum} />;
            }
          )}
        </TableBody>
      </Table>
    );
  }
 }

 export default SelectedPlotList;