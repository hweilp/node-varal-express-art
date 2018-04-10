const express = require('express');
const path = require('path');
let app = express();


// 设置静态资源路径为public
app.use('/public',express.static(path.join(__dirname, '/public')));
//
// app.engine('art', require('express-art-template'));
// app.set('view options', {
// 	debug: process.env.NODE_ENV !== 'production'
// });


const varal = require('varal');
const server = new varal();

const $user = {
	user : '小敏',
	age :' 18',
	list : [
		{name:'晓科',address : '浙江杭州滨江1',email : '2222@163.com',tel : '18600055332',qq : '18600055332'},
		{name:'明轩',address : '浙江杭州滨江2',email : '2222@163.com',tel : '18600055332',qq : '18600055332'},
		{name:'光栎',address : '浙江杭州滨江3',email : '2222@163.com',tel : '18600055332',qq : '18600055332'},
		{name:'肖霞',address : '浙江杭州滨江4',email : '2222@163.com',tel : '18600055332',qq : '18600055332'},
	]
};

server.get('/', app => {

  // app.text('hello world');
	app.render('index',$user);
});

server.get('/about', app => {
	// app.text('hello world');
	app.render('about',$user);
});


console.log('server is start on 8888');
server.run();
