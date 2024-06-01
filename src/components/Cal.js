import CalWrapper from "./CalWrapper";
import { useState } from "react";
import './Cal.css'

const Cal = () => {
  const [inputVal, setInputVal] = useState(0);
  const [operationValue,setOperationValue] = useState(0);
  const [currentOperation,setCurrentOperation] = useState('');

  const allBtnArr = [
    {
      value: 0,
      btFun: () => {
        setInputVal((prevValue) => parseInt(prevValue.toString() + 0));
        
      },
    },
    {
      value: 1,
      btFun: () => {
        setInputVal((prevValue) => parseInt(prevValue.toString() + 1));
        // what is happening here is the previous value has the value which input value holds 
        // before we click on any number, when we click on any number the prevValue is converted
        // to string and the presse key value is added to it and parsed value is stored in the 
        // inputVal through setInputVal. Hence Previous value is used.   
      },
    },
    {
      value: 2,
      btFun: () => {
        setInputVal((prevValue) => parseInt(prevValue.toString() + 2));
        // for example when 2 is clicked after 1 the prevVal holds 1 in it which is converted
        // to string and when 2 it added it gets concated and it becomes "12" and which
        // is parsed to 12 and stored in inputVal through setInputVal.
      },
    },
    {
      value: 3,
      btFun: () => {
        setInputVal((prevValue) => parseInt(prevValue.toString() + 3));
      },
    },
    {
      value: 4,
      btFun: () => {
        setInputVal((prevValue) => parseInt(prevValue.toString() + 4));
      },
    },
    {
      value: 5,
      btFun: () => {
        setInputVal((prevValue) => parseInt(prevValue.toString() + 5));
      },
    },
    {
      value: 6,
      btFun: () => {
        setInputVal((prevValue) => parseInt(prevValue.toString() + 6));
      },
    },
    {
      value: 7,
      btFun: () => {
        setInputVal((prevValue) => parseInt(prevValue.toString() + 7));
      },
    },
    {
      value: 8,
      btFun: () => {
        setInputVal((prevValue) => parseInt(prevValue.toString() + 8));
      },
    },
    {
      value: 9,
      btFun: () => {
        setInputVal((prevValue) => parseInt(prevValue.toString() + 9));
      },
    },
  ];

  const operationBtnArr = [
    {
      value: "+",
      btFun: () => {
        setCurrentOperation('+');
        setOperationValue(inputVal);
        setInputVal(0);
        setOperationValue(operationValue+inputVal);
      },
    },
    {
      value: "-",
      btFun: () => {
        setCurrentOperation('-');
        setOperationValue(inputVal);
        setInputVal(0);
        setOperationValue(inputVal-operationValue);
      },
    },
    {
      value: "*",
      btFun: () => {
        setCurrentOperation('*');
        setOperationValue(inputVal);
        setInputVal(0);
        // setOperationValue(operationValue*inputVal);
      },
    },
    {
      value: "/",
      btFun: () => {
        setCurrentOperation('/');
        setOperationValue(inputVal);
        setInputVal(0);
        // setOperationValue(operationValue/inputVal);
      },
    },
    {
      value:"=",
      btFun:()=>{
        if (currentOperation === "+") {
            setInputVal((prevValue)=>{
              console.log(prevValue);
              return prevValue+operationValue;
            })
        }
        else if(currentOperation === '-'){
          setInputVal((prevValue)=>{
            return operationValue-prevValue;
          })

        }
        else if(currentOperation === '*'){
          setInputVal((prevValue)=>{
            return prevValue*operationValue;
          })

        }
        else if(currentOperation === '/'){
          setInputVal((prevValue)=>{
            return prevValue/operationValue;
          })

        }
      }
    }
  ];

  return (
    <div className="cal-box">
      <h3>{operationValue}{currentOperation}</h3>
      <h3>{inputVal}</h3>
      <CalWrapper allBtnArr={allBtnArr} operationBtnArr={operationBtnArr} />
    </div>
  );
};

export default Cal;
