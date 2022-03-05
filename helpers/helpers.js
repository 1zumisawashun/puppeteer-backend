const formatDistanceToNow = require('date-fns/formatDistanceToNow');
const ja = require('date-fns/locale/ja');

const testFunction = (data) => {
  return 'hello ' + data;
};

const formatDateTime = (timestamp) => {
  const result = formatDistanceToNow(timestamp.toDate(), {
    addSuffix: true,
    locale: ja,
  });
  return result;
};

module.exports = { testFunction, formatDateTime };