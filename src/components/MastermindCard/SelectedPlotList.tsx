import * as React from 'react';
import { Props, Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

interface IPropsMainPlot extends Props<MainPlot>{
  name: string;
  rules:any;
};
interface IState {};

class MainPlot extends React.Component<IPropsMainPlot, IState> {
  render(): JSX.Element{
    return (
      <TableRow>
        <TableHeaderColumn>
           ルールY
        </TableHeaderColumn>
        <TableRowColumn>
           {this.props.name}
        </TableRowColumn>
        <TableHeaderColumn>
           ルール
        </TableHeaderColumn>
        <TableRowColumn>
           {this.props.rules.map((rule, i)=>{
             return(
              <dl key={i}>
                <dt>{rule.type}:{rule.timing}</dt>
                <dd>{rule.rule}</dd>
              </dl>
             )
           })}
        </TableRowColumn>
      </TableRow>
    );
  }
 }

interface IPropsSubPlot extends Props<SubPlot>{
  name: string;
  num: number;
  maxNum: number;
  rules:any;
};

const SubPlotHeader = ({maxNum, num}) => (
  <TableHeaderColumn>
    {
      (()=>{ return maxNum === 1 ? `ルールX` : `ルールX${num}`})()
    }
  </TableHeaderColumn>
);

const SubPlotColumn = ({name}) =>(
  <TableRowColumn>
      {name}
  </TableRowColumn>
);

class SubPlot extends React.Component<IPropsSubPlot, IState> {
  render(): JSX.Element{
    return (
      <TableRow>
        <SubPlotHeader maxNum={this.props.maxNum} num={this.props.num} />
        <SubPlotColumn name={this.props.name} />
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
          <MainPlot name={this.props.mainPlot && this.props.mainPlot.name}  rules={this.props.mainPlot && this.props.mainPlot.rules || []}/>
          {
            this.props.subPlotList.map((plot, i) =>{
              return <SubPlot key={i} name={plot.name} num={i+1} maxNum={this.props.subPlotNum}  rules={plot.rules} />;
            }
          )}
        </TableBody>
      </Table>
    );
  }
 }

 export default SelectedPlotList;