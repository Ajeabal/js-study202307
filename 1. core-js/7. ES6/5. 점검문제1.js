const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
// 거래자 정보(이름, 도시)를 배열에 매핑해주세요
const tradertt = traders
  .filter((trader) => trader.year === 2022)
  .map((inpo) => {
    return {
      name: inpo.trader.name,
      city: inpo.trader.city,
    };
  });
console.log(tradertt);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
const tradersCity = traders.map((c) => c.trader.city);
console.log(tradersCity);
const cities = [...new Set(tradersCity)];
console.log(cities);

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.
const traderInD = traders
  .filter((trader) => trader.trader.city === "대전")
  .map((trader) => trader.trader);
console.log(traderInD);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const allTradersName = traders.map((trader) => trader.trader.name);
console.log(allTradersName);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
// let result = 0;
// const tradersAllValueInS = traders
//   .filter((trader) => trader.trader.city === "서울")
//   .map((trader) => trader.value)
//   .forEach((num) => (result += num));
// console.log(result);

const total = traders
  .filter((trader) => trader.trader.city === "서울")
  .reduce((acc, curr) => acc + curr.value, 0);
console.log(total);
