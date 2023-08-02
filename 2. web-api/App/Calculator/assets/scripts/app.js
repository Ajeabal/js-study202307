// index.html에서 활용할 이벤트처리, 핸들러...

//계산 이력을 모아둘 배열
const logEntries = [];

// 현재 계산기에 그려질 숫자.(currentResult)
let currentResult = 0;

// 로그 이력을 만드는 함수 
const writeToLog = (operation, prevResult, number, result) => {
    const logObject = {
        operation,
        prevResult,
        number,
        result
    };
    logEntries.push(logObject);
    console.log(logEntries);
};

// 사용자의 입력값을 읽어오는 함수
const getUserNumberInput = () => parseInt($userInput.value);

// 계산 로그를 만들고 화면에 렌더링하는 함수
const createLogAndRenderOutput = (operateMark, originResult, calcNumber) => {
  const calcDescriptionLog = `${originResult} ${operateMark} ${calcNumber}`;
  outputResult(originResult, calcDescriptionLog);
};

// 더하기 버튼 이벤트 핸들러
const addHandler = () => {
  console.log("+ button.click");
  // 입력창에 입력한 숫자를 읽어오기.
  const enteredNumber = getUserNumberInput();
  // 계산전 값 백업
  const originResult = currentResult;
  // 계산 결과 반영
  currentResult += enteredNumber;
  createLogAndRenderOutput("+", originResult, enteredNumber);
  writeToLog('ADD', originResult, enteredNumber, currentResult);
};
// substractHandler
const substractHandler = () => {
  console.log("- button.click");
  // 입력창에 입력한 숫자를 읽어오기.
  const enteredNumber = getUserNumberInput();
  const originResult = currentResult;
  currentResult -= enteredNumber;
  createLogAndRenderOutput("-", originResult, enteredNumber);
  writeToLog('SUB', originResult, enteredNumber, currentResult);
};
// multiplyHandler
const multiplyHandler = () => {
  console.log("x multiplyHandler");
  // 입력창에 입력한 숫자를 읽어오기.
  const enteredNumber = getUserNumberInput();
  // 로그 생성
  // 계산 결과 반영
  const originResult = currentResult;
  currentResult *= enteredNumber;
  // 화면에 렌더링
  createLogAndRenderOutput("*", originResult, enteredNumber);
  writeToLog('MULTI', originResult, enteredNumber, currentResult);
};
// divideHandler
const divideHandler = () => {
  console.log("/ divideHandler");
  // 입력창에 입력한 숫자를 읽어오기.
  const enteredNumber = getUserNumberInput();
  // 로그 생성
  const originResult = currentResult;
  // 계산 결과 반영
  currentResult /= enteredNumber;
  // 화면에 렌더링
  createLogAndRenderOutput("/", originResult, enteredNumber);
  writeToLog('DIVIDE', originResult, enteredNumber, currentResult);
};

$addBtn.addEventListener("click", addHandler);
$subtractBtn.addEventListener("click", substractHandler);
$multiplyBtn.addEventListener("click", multiplyHandler);
$divideBtn.addEventListener("click", divideHandler);
