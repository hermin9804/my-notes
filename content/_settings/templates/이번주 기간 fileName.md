<%*
// 현재 날짜를 가져옵니다.
let currentDate = moment();

// 해당 주의 월요일을 찾기 위해 주의 시작을 설정합니다.
// 'isoWeek'는 ISO 8601 표준을 따르며, 월요일을 한 주의 첫 날로 간주합니다.
let mondayDate = currentDate.startOf('isoWeek');
// 월요일 날짜를 문자열로 포맷합니다.
let mondayDateString = mondayDate.format('YYYY-MM-DD');

// 해당 주의 일요일(주의 마지막 날)을 구합니다. 
let sundayDate = currentDate.endOf('isoWeek'); 
// 일요일 날짜를 문자열로 포맷합니다. 
let sundayDateString = sundayDate.format('YYYY-MM-DD'); 

// 현재 날짜의 주차를 계산합니다.
let currentWeekNumber = currentDate.isoWeek();

let fileName =  "(" + currentWeekNumber + ") "+  mondayDateString + " ~ " + sundayDateString;

await tp.file.rename(fileName);
%>
