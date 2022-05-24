export const compareWithToday = (targetDate: Date) => {
  const today = new Date();
  const diffTime = today.getTime() - targetDate.getTime();

  const diffDay = diffTime / (1000 * 3600 * 24);
  return Math.floor(diffDay);
};

export const hourSystem = (targetDate: Date) => {
  let hour = targetDate.getHours() % 12;
  hour = hour || 12;
  const minute = targetDate.getMinutes() >= 10 ? targetDate.getMinutes() : `0${targetDate.getMinutes()}`;
  const AMPM = targetDate.getHours() > 12 ? 'PM' : 'AM';

  return `${AMPM} ${hour}:${minute}`;
};

export const compareYear = (targetDate: Date) => {
  const thisYear = new Date().getFullYear();
  const targetYear = targetDate.getFullYear();

  return thisYear - targetYear;
};

export const dateTimeCalc = (targetDate: string) => {
  const datetime = new Date(targetDate);
  const resultCompare = compareWithToday(datetime);
  if (resultCompare === 0) {
    return hourSystem(datetime);
  }
  if (resultCompare === 1) {
    return 'yesterday';
  }
  if (compareYear(datetime) !== 0) {
    return `${datetime.getFullYear()}/${datetime.getMonth() + 1}/${datetime.getDate()}`;
  }
  return `${datetime.getMonth() + 1}/${datetime.getDate()}`;
};
