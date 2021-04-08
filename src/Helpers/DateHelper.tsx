import moment from "moment";
import "moment/locale/pt-br";

const DateHelper = (date: Date) => {
  return moment(date).format("L");
};

export default DateHelper;
