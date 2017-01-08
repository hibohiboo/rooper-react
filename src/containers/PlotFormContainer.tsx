import * as React from 'react';
import { connect } from 'react-redux';
import PlotForm from '../components/InputForm/PlotForm';
// import { selectTragedySet  } from '../actions/index';
// import { getTragedySet } from '../services/TragedySetService';
// import { TragedySetType, TragedySet } from '../models/TragedySet';

interface IState{}

interface IProps{}

interface IStateToProps{
  mainPlotList:any;
  subPlotLists:any;
  selectedPlotList:any;
}

interface IDispatchToProps{
  // onChange: any
}

const mapStateToProps = (store):IStateToProps => {
  const scenario = store.scenario;
  let mainPlotList = [];
  let subPlotLists = [];
  let selectedPlotList = [];
  if(scenario && scenario.selectedSet){
    const selectedSet = scenario.selectedSet;
    const plotList = selectedSet.plotList;
    mainPlotList = plotList.filter(plot=>plot.type==='M');
    const subPlotList = plotList.filter(plot=>plot.type==='S');
    for(let i=0;i<selectedSet.subplotNum;i++){
      subPlotLists.push(subPlotList);
    }
    if(plotList[0]){ 
      selectedPlotList.push(plotList[0]);
      selectedPlotList.push(plotList[7]); 
      selectedPlotList.push(plotList[8]); 
    }

  }
  console.log(selectedPlotList);
  return { 
    mainPlotList,
    subPlotLists,
    selectedPlotList
  }
}

const mapDispatchToProps = (dispatch):IDispatchToProps => {
  return {
    // onChange: (id:TragedySetType = TragedySetType.basic) => {
    //   (async ()=>{
    //     const res = await getTragedySet(id);
    //     const data:any = res.data;
    //     dispatch(selectTragedySet(data));
    //   })();
    // }
  }
}

const PlotFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlotForm);

export default PlotFormContainer;