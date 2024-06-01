import Button from "../common/Button";
import "./CalWrapper.css";

const CalWrapper = (props) => {

  
  const{allBtnArr,operationBtnArr}=props;
  // const{operationBtnArr} = props;
  const allBtn = allBtnArr.map((btObj) => {
    return <Button key={btObj.value} btnName={btObj.value} btFun={btObj.btFun} />;
  });

  const operationBtn = operationBtnArr.map((btObj)=>{
    return <Button key={btObj.value} btnName={btObj.value} btFun={btObj.btFun} />
  })

  return (
      <div className="container">
        {allBtn}
        {operationBtn}
    </div>
  );
};

export default CalWrapper;
