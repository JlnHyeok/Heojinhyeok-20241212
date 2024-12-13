import dayjs from "dayjs";

export const calculateTimeDifference = (date1: string, date2: string) => {
  // 두 날짜의 차이를 밀리초 단위로 계산
  const diffInMilliseconds = dayjs(date2).diff(dayjs(date1));

  // 만약 날짜가 지났다면 빈 문자열 반환
  if (diffInMilliseconds < 0) return "";

  // 밀리초를 시간, 분, 초로 변환
  const totalSeconds = Math.floor(diffInMilliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours == 0) return `${minutes}분 ${seconds}초`;
  if (hours == 0 && minutes == 0) return `${seconds}초`;

  return `${hours}시간 ${minutes}분 ${seconds}초`;
};

export const getCurrentTime: () => {
  hour: number;
  min: number;
  sec: number;
} = () => {
  const now = dayjs();
  return {
    hour: now.hour(),
    min: now.minute(),
    sec: now.second(),
  };
};
