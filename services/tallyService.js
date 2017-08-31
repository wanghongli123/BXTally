var records = [
  {
    'id': 0,
    'money': '2000.00',
    'detail': '买书100、买电脑1900',
    'time': '2017/08/31 16:50:55'
  }
]
import {formatTime} from '../utils/util.js'

function addNewRecord({money, detail}, callback) {
  let id = records.length
  let time = formatTime(new Date())
  let record = {id, money, detail, time}
  records.push(record)

  if (typeof callback === 'function') {
    callback(true)
  }
}

function loadAllRecord(callback) {
  if (typeof callback === 'function') {
    callback(records)
  }
}

module.exports = {
  addNewRecord,
  loadAllRecord
}