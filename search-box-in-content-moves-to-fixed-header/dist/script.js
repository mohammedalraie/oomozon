var wrapp = $("#bod");
var mFly = $("#marginFly");
var che  = $("#wrap");
var cfly=$("#cover-fly");
var lfly=$("#nav-links-fly")
che.on("scroll", function() {
    
  if (this.scrollTop > 200) {
   wrapp.addClass("newBody");
   che.addClass("fix-search");
	mFly.addClass("marginFly");
	lfly.addClass("nav-links-fly");
	cfly.addClass("cover-fly");
	
    
  } else {
   che.removeClass("fix-search");
	wrapp.removeClass("newBody");
 mFly.removeClass("marginFly");
lfly.removeClass("nav-links-fly");
cfly.removeClass("cover-fly");
  }
  
});
//
//var b = $("#bod");
//b.on("scroll" , function(){
//	if (this.scrollTop > 500){
//		b.addClass("newBody");
//	}
//		else{
//			b.removeClass("newBody");
//		}
//});