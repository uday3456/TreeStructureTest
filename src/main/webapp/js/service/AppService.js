app.service('AppService',function(){
	var appService={};
	appService.postData=function(http,postData){
		return http({
			method:post,
			data:postData,
			url:"rest/postData/data"
		});
	}
	return appService;
});