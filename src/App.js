import React from 'react';
import Router from './router/index';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
function App() {
  return (
    <Router />
  );
}

export default App;
