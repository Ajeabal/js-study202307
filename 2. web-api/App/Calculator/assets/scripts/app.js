
// index.html에서 활용할 이벤트처리, 핸들러...

// 현재 계산기에 그려질 숫자.(currentResult)
let currentResult = 0;

// 더하기 버튼 이벤트 핸들러
const addHandler = () => {
    console.log('+ button.click');
    // 입력창에 입력한 숫자를 읽어오기.
    const enteredNumber = +$userInput.value;
    // 로그 생성
    const calcDescriptionLog = `${currentResult} + ${enteredNumber}`;
    // 계산 결과 반영
    currentResult += enteredNumber;
    // 화면에 렌더링
    outputResult(currentResult, calcDescriptionLog);
};
// substractHandler
const substractHandler = () => {
    console.log('- button.click');
    // 입력창에 입력한 숫자를 읽어오기.
    const enteredNumber = +$userInput.value;
    // 로그 생성
    const calcDescriptionLog = `${currentResult} - ${enteredNumber}`;
    // 계산 결과 반영
    currentResult -= enteredNumber;
    // 화면에 렌더링
    outputResult(currentResult, calcDescriptionLog);
};
// multiplyHandler
const multiplyHandler = () => {
    console.log('x multiplyHandler');
    // 입력창에 입력한 숫자를 읽어오기.
    const enteredNumber = +$userInput.value;
    // 로그 생성
    const calcDescriptionLog = `${currentResult} * ${enteredNumber}`;
    // 계산 결과 반영
    currentResult *= enteredNumber;
    // 화면에 렌더링
    outputResult(currentResult, calcDescriptionLog);
}
// divideHandler
divideHandler = () => {
    console.log('/ divideHandler');
    // 입력창에 입력한 숫자를 읽어오기.
    const enteredNumber = +$userInput.value;
    // 로그 생성
    const calcDescriptionLog = `${currentResult} / ${enteredNumber}`;
    // 계산 결과 반영
    currentResult /= enteredNumber;
    // 화면에 렌더링
    outputResult(currentResult, calcDescriptionLog);
}


$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', substractHandler);
$multiplyBtn.addEventListener('click', multiplyHandler);
$divideBtn.addEventListener('click', divideHandler);
