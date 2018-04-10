const Controller = require('varal').Controller;

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

class IndexController extends Controller {

	index (params) {
		let Params = params ? params : 1;

		let data = this.app.service('UserService').getUserInfo(Params);
		this.app.render('index',data);
	}

	about (params) {
		let Params = params ? params : 1;
		
		let data = this.app.service('UserService').getUserInfo(Params);
		this.app.render('about',data); 
	}

	getUserInfo(params){
		console.log(params);
		let Params = params ? params : 1;

		let data = this.app.service('UserService').getUserInfo(Params);

		this.app.render('about',data);
	}

	updateUserInfo(params){
		let Params = params ? params : 1;
		let data = this.app.service('UserService').getUserInfo(Params);
		this.app.render('about',data);
	}
}

exports = module.exports = IndexController;