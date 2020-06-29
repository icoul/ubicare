import moment from 'moment';

export default function makeDataLevel(d, pageIndex, pageSize, index) {
  return {
    rnum: (pageIndex * pageSize) + index + 1,
    modelNm: d.module.modelNm,
    bodyTemp: d.bodyTemp,
    battery: d.battery,
    regTime: moment(d.rgstDt).format('YYYY-MM-DD HH:mm:ss')
  }
}
