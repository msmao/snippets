

// 回调函数
const fn = (err, res) => {
  if (err) {
    console.error(new Error(err));
    return;
  }
  console.log(res);
}

const clear = (call, callback) => {
  if (call) {
    console.log('exec: ' + call);
    callback(null, { state: 'ok', message: '登录成功' });
  } else {
    callback('call error', null);
  }
  
}

// 回调函数写法
clear(true, fn); 
clear(false, fn);

// -----------------

// promise 
const del = call => {
  return new Promise((resolve, reject) => {
    if (call) {
      console.log('exec: ' + call);
      resolve({ state: 'ok', message: '登录成功' });
    } else {
      reject('call error');
    }
  })
}

// Promise 写法
del(false).then(r => {
  console.log(r);
}).catch(e => {
  console.error(new Error(e));
})


// async/await 写法
(async () => {
  try {
    const r = await del(true);
    console.log(r);
  } catch (e) {
    console.error(new Error(e));
  }
})();

