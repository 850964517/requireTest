/* 
* @Author: Anle
* @Date:   2015-09-16 09:35:02
* @Last Modified by:   Anle
* @Last Modified time: 2015-09-16 14:59:42
*/

'use strict';
/*配置requirejs选项*/
requirejs.config({
   /*baseUrl用于设置文件加载的基础目录，如果没有设置，默认会以引入requirejs的页面为根目录*/
   baseUrl: 'js/',
	/*设置别名*/
	paths : {
       jquery:'lib/jquery',//这里的文件名不需要使用.js结尾
       test:'app/test',//test文件别名
       validate:'app/validate', //validate文件别名
       test2:'app/test2'
	}

});
//定义模块(第一个代表需要引入的模块(建议使用模块的别名),第二个参数表示引入模块后的回调函数)
requirejs(['jquery','test','validate','test2'],function($,test,validate,test2){
    //alert(test.test());
   //test2.test2();
    //校验密码
    $("#userName").blur(function(){
    	//验证用户名是否为空
    	//使用validate模块中的验证为空方法
    	var msg=validate.isEmpty($(this).val());
    	alert(msg);
    });
    
    $("#userPsw").blur(function(event) {
    	/*验证密码长度*/
    	var msg=validate.checkLength($(this).val());
    	alert(msg);

    	/*判断两次密码是否一致*/

    	var msgText=validate.isEqual(1,1);
    	alert(msgText);
    });


});