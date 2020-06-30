import moment from 'moment';

export default function makeDataLevel(d, pageIndex, pageSize, index, areaNm, userNm) {
  return {
    rnum: (pageIndex * pageSize) + index + 1,
    areaNm: areaNm,
    userNm: userNm,
    bodyTemp: d.bodyTemp,
    regTime: moment(d.rgstDt).format('YYYY-MM-DD HH:mm:ss')
  }
}
