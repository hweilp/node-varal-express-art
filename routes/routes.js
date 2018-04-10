const varal = require('varal');
const server = new varal();

// 路由方法中不使用回调，而是传入一个符合约定格式的字符串，来调用控制器中的方法：

server.get('/', 'IndexController@index');

server.get('/about', 'IndexController@about');

// server.get('/',app => {
//   app.render('index',$user);
// });
// server.get('/about',app => {
//   app.render('about',$user);
// });

server.get('/UserInfo/', (app, id) => {
	let responseData = {};
	responseData.code = 400;
	responseData.msg = '用户ID丢失！';
	app.json(responseData);
});

server.get('/UserInfo/{id}', (app, id) => {
	console.log('用户id = '+id);
	let responseData = {};
	responseData.code = 200;
	responseData.msg = '获取用户数据成功';
	responseData.data = {
		id : id,
		name : '西门',
		age : '22'
	};

	app.json(responseData);
});


server.post('/updateUserInfo', async app => {

	const username = app.fields.username;
	const password = app.fields.password;

	console.log(username,password);
	let Data = {
		username : username,
		password : password
	};

	// const mysql = app.make('app.mysql');
	// const res = await mysql.table('user').get();

	app.json(Data);
});


module.exports = server;
