import moment from "moment";
import "moment/locale/sk";
moment.locale("sk");

const Timer = ({ time }) => {
  const relativeTime = moment.unix(time).fromNow();

  return <div>{relativeTime}</div>;
};

export default Timer;
