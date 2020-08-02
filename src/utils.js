export const getLocation = (num) => {
  switch (true) {
    case num >= 0 && num < 30:
      return 0;
    case num >= 30 && num < 60:
      return 30;
    case num >= 60 && num < 90:
      return 60;
    case num >= 90 && num < 120:
      return 90;
    case num >= 120 && num < 150:
      return 120;
    case num >= 150 && num < 180:
      return 150;
    case num >= 180 && num < 210:
      return 180;
    case num >= 210 && num <= 240:
      return 210;
    default:
      return 0;
  }
};
