/* 
* @Author: Anle
* @Date:   2015-09-16 13:52:16
* @Last Modified by:   Anle
* @Last Modified time: 2015-09-16 14:55:43
*/

'use strict';
/*定义验证模块模块*/
define(['jquery'],function(){
     /*返回模块中方法*/
     return {
     	isEmpty:function(str){
              if(str==null || str.length<=0 || str== undefined){
                     return "数据为空";
              }else{
              	return "数据不为空";
              }
     	},
     	checkLength:function(str){
             if(str.length<6 || str.length>20){
                 return "长度不合法";
             }else{
             	return "长度合法";
             }
     	},
     	isEqual:function(str1,str2){
             if(str1 ===str2){
             	return "密码一致";
             }else{
             	return "两次密码不一致";
             }
     	}
     }
});