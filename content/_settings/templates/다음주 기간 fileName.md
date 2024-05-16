<%*
// 현재 날짜에 일주일을 더합니다.
let nextWeekDate = moment().add(1, 'weeks');

// 다음 주의 월요일 날짜를 구합니다.
let nextMondayDate = nextWeekDate.clone().startOf('isoWeek');
// 다음 주 월요일 날짜를 문자열로 포맷합니다.
let nextMondayDateString = nextMondayDate.format('YYYY-MM-DD');

// 다음 주의 일요일(주의 마지막 날)을 구합니다. 
let nextSundayDate = nextWeekDate.clone().endOf('isoWeek'); 
// 다음 주의 일요일 날짜를 문자열로 포맷합니다. 
let nextSundayDateString = nextSundayDate.format('YYYY-MM-DD'); 

// 다음 주의 주차를 계산합니다.
let nextWeekNumber = nextWeekDate.isoWeek();

let fileName =  "(" + nextWeekNumber + ") "+  nextMondayDateString + " ~ " + nextSundayDateString;

await tp.file.rename(fileName);
%>