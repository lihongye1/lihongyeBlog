$(function () {
    // 初始化语言
    if(window.sessionStorage["language"] == ''){
        $('#service').hide()
    }
    myLan();
    // 初始化页面高度
    var w = $('.chong').css('height');
    $('.chonge').css('width',w)
    var w1 = document.body.clientWidth;
    var h1 = document.body.clientHeight;
    $('#error1,#logPage').css({'height':h1,'width':w1})
    //初始化fullpage
    $('#fullpage').fullpage({
        //配置项介绍
        //sectionsColor为每个section设置background-color属性
        sectionsColor:['transparent','transparent','transparent','transparent'],
        //controlArrows定义是否通过箭头来控制slide,默认true
        controlArrows:false,
        //verticalCentered定义每一页的内容是否垂直居中，默认true
        verticalCentered:false,
        //resize字体是否随窗口缩放而缩放，默认false
        resize:true,
        //scrollingSpeed设置滚动速度，单位毫秒，默认700
        scrollingSpeed:1000,
        //anchors定义锚链接，默认为[],定义锚链接时，值不要和页面中的任何ID或name相同，且不需要加#
        anchors:['page1','page2','page3','page4','page5'],
        fixedElements:"#header",
        recordHistory: false,
        menu: '#myMenu',
        setAutoScrolling:false,
        afterLoad: function(anchorLink, index){
            //using anchorLink
            if(anchorLink == 'page4'){
                if(!window.sessionStorage['coinquUid']){
                    $('#logPage').show()
                    $.fn.fullpage.setAllowScrolling(false)
                }else{
                    $('.sectionContainer3').show()
                }
            }
            if(anchorLink == 'page3'){
                $('#codeIntro>img').attr('src','./public/images/coinqu_03.png')
                $('#banben').show()
            }
        },
    });
    $.fn.fullpage.setAllowScrolling(false);
    $('.button').click(function () {
        $.fn.fullpage.setAllowScrolling(true);
    })
    window.location.href = './index.html#page1'
    //获取图片验证码
    getImgCode();
    if(window.sessionStorage['coinquUid']){
        $('#Logout').show()
        $('#Login').hide()
    }

    //第四屏翻转效果
    $('.nameRight').each(function (index,element) {
        $(this).bind('click',function () {
            // time_range ("9:00", "18:00")
            $(this).parent().parent().parent().parent().parent().addClass('flipperTrans')
        })
    });
    $('.back').each(function (index,element) {
        $(this).bind('click',function () {
            // time_range ("9:00", "18:00")
            $(this).parent().removeClass('flipperTrans')
        })
    })
    $('.copy').each(function (index,element) {
        $(this).bind('click',function (e) {
            var emailList = $('.email');
            var len = emailList.length;
            for(var i = 0 ; i < len ; i++){
                if(i == index){
                    var $temp = $("<input  >");
                    $("body").append($temp);
                    $temp.val(emailList[i].innerHTML).select();
                    document.execCommand("copy");
                    $temp.remove();
                    window.event ? window.event.cancelBubble = true : e.stopPropagation();
                }
            }
        })
    })
    //切换导航
    $(".navbar-nav li.navLi").on("click",function(){
        $(".navbar-nav li.navLi").removeClass("active");
        $(this).addClass("active")
    })
	//语言切换动画
    $(".changeZi").click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).next().slideUp();
            $("#flexBox").on("click",function(){
                $(this).slideUp();
                $(this).prev().addClass("on");
            })
        }else{
            $(this).addClass("on");
            $(this).next().slideDown();
            $("#flexBox").on("click",function(){
                $(this).slideUp();
                $(this).prev().removeClass("on");
            })
        }
    })
})
    let mycodeid,mypwd,myuname,myvercode;
    let slot = 'dig?F*ckDang5PaSsWOrd&%(12lian0160630).'
    //窗口改变大小
    $(window).resize(function(){
        var w = $('.chong').css('height');
        $('.chonge').css('width',w);
		var w1 = document.body.clientWidth;
		var h1 = document.body.clientHeight;
        $('#logPage').css({'height':h1,'width':w1})
        $('#error1').css({'height':h1,'width':w1})
    })
	//将语言传入sessionStorage中
	function myLan() {
        if(window.sessionStorage["language"] == 'zh_cn'){
            $('.changeZi>img').attr('src','./public/images/chinese.png')
            $('#chooseLan').html('简体中文')
            $('.chong').removeClass('chong1')
            jQuery.i18n.properties({
                name : 'strings_zh_cn', //资源文件名称
                path : './public/i18n/', //资源文件路径
                mode : 'map', //用Map的方式使用资源文件中的值
                language : 'zh_cn',
                callback : function() {//加载成功后设置显示内容
                    $('#homePage').html($.i18n.prop('homePage'));
                    $('#icoPro').html($.i18n.prop('icoPro'));
                    $('#icoCount').html($.i18n.prop('icoCount'));
                    $('#push').html($.i18n.prop('push'));
                    $('#news').html($.i18n.prop('news'));
                    $('#teach').html($.i18n.prop('teach'));
                    $('#release').html($.i18n.prop('release'));
                    $('#text').html($.i18n.prop('understand'));
                    $('#codeIntro').html($.i18n.prop('codeIntro'));
                    $('#codeIntroText1').html($.i18n.prop('codeIntroText1'));
                    $('#codeIntroText2').html($.i18n.prop('codeIntroText2'));
                    $('#codeIntroText3').html($.i18n.prop('codeIntroText3'));
                    $('#address').html($.i18n.prop('address'));
                    $('#nav').attr('value',$.i18n.prop('nav'));
                    $('#weCode1').html($.i18n.prop('weCode1'));
                    $('#weCode2').html($.i18n.prop('weCode2'));
                    $('#name1').html($.i18n.prop('name1'));
                    $('#name2').html($.i18n.prop('name2'));
					$('#name3').html($.i18n.prop('name3'));
					$('#name4').html($.i18n.prop('name4'));
					$('#name5').html($.i18n.prop('name5'));
                    $('.name1').html($.i18n.prop('name1'));
                    $('.name2').html($.i18n.prop('name2'));
                    $('.name3').html($.i18n.prop('name3'));
                    $('.name4').html($.i18n.prop('name4'));
                    $('.name5').html($.i18n.prop('name5'));
                    $('.server').html($.i18n.prop('server'));
                    $('.address').html($.i18n.prop('address'));
                    $('.copy').html($.i18n.prop('copy'));
                    $('#nav1').attr('value',$.i18n.prop('nav1'));
                    $('#cardIntro').html($.i18n.prop('cardIntro'));
                    $('.contant').html($.i18n.prop('contant'))
	                $('.nameRight').html($.i18n.prop('address1'))
	                $('.logWarn').html($.i18n.prop('logWarn'))
	                $('.kycText').html($.i18n.prop('kycText'))
	                $('.kyc').html($.i18n.prop('kyc'))
					$('.logIp1').attr('placeholder',$.i18n.prop('logIp1'));
					$('.logIp2').attr('placeholder',$.i18n.prop('logIp2'));
					$('.logIp3').attr('value',$.i18n.prop('logIp3'));
					$('.errorText').html($.i18n.prop('errorText'));
					$('.errorText1').html($.i18n.prop('errorText1'));
					$('.errorText2').html($.i18n.prop('errorText2'));
					$('.errorText3').html($.i18n.prop('errorText3'));
					$('.relogBtn').attr('value',$.i18n.prop('login'));
					$('#Login').html($.i18n.prop('login'));					
                    $('#Logout').html($.i18n.prop('Logout'));		
                    $('#certification').html($.i18n.prop('certification'))				
                }
            });
        }else if(window.sessionStorage["language"] == 'en'){
			$('.changeZi>img').attr('src','./public/images/english.png')
            $('#chooseLan').html('&nbsp;English &nbsp;&nbsp;')
            $('.chong').addClass('chong1')
            jQuery.i18n.properties({
                name : 'strings_en', //资源文件名称
                path : './public/i18n/', //资源文件路径
                mode : 'map', //用Map的方式使用资源文件中的值
                language : 'en',
                callback : function() {//加载成功后设置显示内容
                    $('#homePage').html($.i18n.prop('homePage'));
                    $('#icoPro').html($.i18n.prop('icoPro'));
                    $('#icoCount').html($.i18n.prop('icoCount'));
                    $('#push').html($.i18n.prop('push'));
                    $('#news').html($.i18n.prop('news'));
                    $('#teach').html($.i18n.prop('teach'));
                    $('#release').html($.i18n.prop('release'));
                    $('#text').html($.i18n.prop('understand'));
                    $('#codeIntro').html($.i18n.prop('codeIntro'));
                    $('#codeIntroText1').html($.i18n.prop('codeIntroText1'));
                    $('#codeIntroText2').html($.i18n.prop('codeIntroText2'));
					$('#codeIntroText3').html($.i18n.prop('codeIntroText3'));
                    $('#address').html($.i18n.prop('address'));
                    $('#nav').attr('value',$.i18n.prop('nav'));
                    $('#weCode1').html($.i18n.prop('weCode1'));
                    $('#weCode2').html($.i18n.prop('weCode2'));
                    $('#name1').html($.i18n.prop('name1'));
                    $('#name2').html($.i18n.prop('name2'));
					$('#name3').html($.i18n.prop('name3'));
					$('#name4').html($.i18n.prop('name4'));
					$('#name5').html($.i18n.prop('name5'));
                    $('.server').html($.i18n.prop('server'));
                    $('.address').html($.i18n.prop('address'));
                    $('.copy').html($.i18n.prop('copy'));
                    $('#nav1').attr('value',$.i18n.prop('nav1'));
                    $('#cardIntro').html($.i18n.prop('cardIntro'));
                    $('.contant').html($.i18n.prop('contant'))
                    $('.nameRight').html($.i18n.prop('address1'))
                    $('.name1').html($.i18n.prop('name1'));
                    $('.name2').html($.i18n.prop('name2'));
                    $('.name3').html($.i18n.prop('name3'));
                    $('.name4').html($.i18n.prop('name4'));
                    $('.name5').html($.i18n.prop('name5'));
					$('.logWarn').html($.i18n.prop('logWarn'))
	                $('.kycText').html($.i18n.prop('kycText'))
	                $('.kyc').html($.i18n.prop('kyc'))
					$('.logIp1').attr('placeholder',$.i18n.prop('logIp1'));
					$('.logIp2').attr('placeholder',$.i18n.prop('logIp2'));
					$('.logIp3').attr('value',$.i18n.prop('logIp3'));
					$('.errorText').html($.i18n.prop('errorText'));
					$('.errorText1').html($.i18n.prop('errorText1'));
					$('.errorText2').html($.i18n.prop('errorText2'));
					$('.errorText3').html($.i18n.prop('errorText3'));
					$('.relogBtn').attr('value',$.i18n.prop('login'));
					$('#Login').html($.i18n.prop('login'));	
                    $('#Logout').html($.i18n.prop('Logout'));	
                    $('#certification').html($.i18n.prop('certification'))	
                }
            });
		}else{
            $('.changeZi>img').attr('src','./public/images/fanti.png')
            $('#chooseLan').html('繁體中文')
            $('.chong').removeClass('chong1')
            jQuery.i18n.properties({
                name : 'strings_zh_hk', //资源文件名称
                path : './public/i18n/', //资源文件路径
                mode : 'map', //用Map的方式使用资源文件中的值
                language : 'zh_hk',
                callback : function() {//加载成功后设置显示内容
                    $('#homePage').html($.i18n.prop('homePage'));
                    $('#icoPro').html($.i18n.prop('icoPro'));
                    $('#icoCount').html($.i18n.prop('icoCount'));
                    $('#push').html($.i18n.prop('push'));
                    $('#news').html($.i18n.prop('news'));
                    $('#teach').html($.i18n.prop('teach'));
                    $('#release').html($.i18n.prop('release'));
                    $('#text').html($.i18n.prop('understand'));
                    $('#codeIntro').html($.i18n.prop('codeIntro'));
                    $('#codeIntroText1').html($.i18n.prop('codeIntroText1'));
                    $('#codeIntroText2').html($.i18n.prop('codeIntroText2'));
					$('#codeIntroText3').html($.i18n.prop('codeIntroText3'));
                    $('#address').html($.i18n.prop('address'));
                    $('#nav').attr('value',$.i18n.prop('nav'));
                    $('#weCode1').html($.i18n.prop('weCode1'));
                    $('#weCode2').html($.i18n.prop('weCode2'));
                    $('#name1').html($.i18n.prop('name1'));
                    $('#name2').html($.i18n.prop('name2'));
					$('#name3').html($.i18n.prop('name3'));
					$('#name4').html($.i18n.prop('name4'));
					$('#name5').html($.i18n.prop('name5'));
                    $('.server').html($.i18n.prop('server'));
                    $('.address').html($.i18n.prop('address'));
                    $('.copy').html($.i18n.prop('copy'));
                    $('#nav1').attr('value',$.i18n.prop('nav1'));
                    $('#cardIntro').html($.i18n.prop('cardIntro'));
                    $('.contant').html($.i18n.prop('contant'))
                    $('.nameRight').html($.i18n.prop('address1'))
                    $('.name1').html($.i18n.prop('name1'));
                    $('.name2').html($.i18n.prop('name2'));
                    $('.name3').html($.i18n.prop('name3'));
                    $('.name4').html($.i18n.prop('name4'));
                    $('.name5').html($.i18n.prop('name5'));
					$('.logWarn').html($.i18n.prop('logWarn'))
	                $('.kycText').html($.i18n.prop('kycText'))
	                $('.kyc').html($.i18n.prop('kyc'))
					$('.logIp1').attr('placeholder',$.i18n.prop('logIp1'));
					$('.logIp2').attr('placeholder',$.i18n.prop('logIp2'));
					$('.logIp3').attr('value',$.i18n.prop('logIp3'));
					$('.errorText').html($.i18n.prop('errorText'));
					$('.errorText1').html($.i18n.prop('errorText1'));
					$('.errorText2').html($.i18n.prop('errorText2'));
					$('.errorText3').html($.i18n.prop('errorText3'));
					$('.relogBtn').attr('value',$.i18n.prop('login'));
					$('#Login').html($.i18n.prop('login'));	
                    $('#Logout').html($.i18n.prop('Logout'));
                    $('#certification').html($.i18n.prop('certification'))	
                }
            });
        }
    }
    //获取图片验证码
    function getImgCode(){
        $.ajax({
			// url : 'http://www.coinqu.com/12lian/quote/realTime',
			// url:'http://60.205.200.93:82/12lian/user/getimg',
			url:'/12lian/user/getimg',
			type : 'post',
			success : function(data){
				$("#imgSrc").attr("src",'data:image/png;base64,' + data.attachment.IMGCode);
				mycodeid = data.attachment.codeUUID
			}
		});
    }
	// 点击改变图片验证码
	function changePic(){
		getImgCode()
    }
    //获取登录状态
	function checkLog(){
		if(!window.sessionStorage['coinquUid']){
			$('#logPage').show()
			$('#news').attr({'href':'javascript:void(0)','target':''})
			$('#teach').attr({'href':'javascript:void(0)','target':''})
			$('#teach1').attr({'href':'javascript:void(0)','target':''})
			$.fn.fullpage.setAllowScrolling(false)
		}
    }
    //登出
	function logOut(){
		window.sessionStorage['coinquUid'] = ''
		history.go(0)
	}
	// 登陆
	function logIn(){
		myuname = $('#logIp1').val()
		mypwd = md5($('#logIp2').val()+slot)
		myvercode = $('#logIp3').val()
		let lan
		if(!window.sessionStorage["language"]){
			lan = 'zh_TW'
		}else if(window.sessionStorage["language"]=='zh_cn'){
			lan = 'zh_CN'
		}else if(window.sessionStorage["language"]=='en'){
			lan = 'en_US'
        }
        if((!myuname)||(!mypwd)){
            getImgCode()
            if(window.sessionStorage["language"] == 'zh_cn'){
                $('#errorReason').html('账号密码不能为空。')
            }else if(window.sessionStorage["language"] == 'en'){
                $('#errorReason').html('The account or the password cannot be empty.')
            }else{
                $('#errorReason').html('賬號密碼不能為空。')
            }
        }else{
            $.ajax({
                // url : 'http://www.coinqu.com/12lian/quote/realTime',
                // url:'http://60.205.200.93:82/12lian/user/login',
                url:'/12lian/user/login',
                type : 'post',
                data:{codeid:mycodeid,pwd:mypwd,email:myuname,vercode:myvercode,source:1,local:lan},
                success : function(data){
                    if(data.status !=200 && data.status != 405 && data.status != 0){
                        getImgCode()
                        $('#errorReason').html(data.message)
                    }else if(data.status == 0){
                        getImgCode()
                        if(window.sessionStorage["language"] == 'zh_cn'){
                            $('#errorReason').html('验证码不能为空。')
                        }else if(window.sessionStorage["language"] == 'en'){
                            $('#errorReason').html('The verification code cannot be empty.')
                        }else{
                            $('#errorReason').html('驗證碼不能為空。')
                        }
                    }else if(data.status == 405){
                        getImgCode()
                        $('#logPage').hide()
                        $('#error1').show();
                        $('#errorText1').show()
                        $('#errorText2').hide()
                        $('#certification').hide()
                        $('#toLog').show()
                    }else{
                        let token = data.attachment.token;
                        let uid = data.attachment.uid;
                        $.ajax({
                            // url:'http://60.205.200.93:82/12lian/user/selectAuthLevel',
                            url:'/12lian/user/selectAuthLevel',
                            type:'post',
                            data:{token:token,uid:uid},
                            success:function(data){
                                if(data.attachment.gradeVal == 3){
                                    $('#logPage').hide()
                                    $('.sectionContainer3').show()
                                    window.sessionStorage['coinquUid'] = data.attachment.uid
                                    $('#Login').hide()
                                    $('#Logout').show()
                                    $.fn.fullpage.setAllowScrolling(true)
                                    $('#news').attr({'href':"http://explorer.coinqu.com/cn/",'target':'_blank'})
                                    $('#teach').attr({'href':"teach.html",'target':'_blank'})
                                    $('#teach1').attr({'href':"http://explorer.coinqu.com/cn/",'target':'_blank'})
                                }else{
                                    getImgCode()
                                    $('#logPage').hide()
                                    $('#error1').show();
                                    $('#errorText2').show()
                                    $('#errorText1').hide()
                                    $('#certification').show()
                                    $('#toLog').hide()
                                }
                            }
                        })
                    }
                }
            });
        }
	}

	//回车登陆
	function keyLogin(){
		if (event.keyCode==13)  //回车键的键值为13
		$('#Log').click(); //调用登录按钮的登录事件
	}
	
	//关闭错误提示框
	function closeError(){
		$('#error1').hide();
		$.fn.fullpage.setAllowScrolling(true)
	}

	// 重新登陆
	function toLog(){
		$('#error1').hide();
		$('#logPage').show()
		$.fn.fullpage.setAllowScrolling(false)
	}
	//关闭登陆弹窗
	function closeLog(){
		$('#logPage').hide()
		$.fn.fullpage.setAllowScrolling(true)
	}
	// 写入语言
    function writeSession(lan){
        window.sessionStorage["language"] = lan;
        location.reload()
        myLan()
    }

    //获取QQ登陆状态
    
    //第四屏翻转效果调用此方法

    
    // var time_range = function (beginTime, endTime) {
    //     var strb = beginTime.split (":");
    //     if (strb.length != 2) {
    //         return false;
    //     }

    //     var stre = endTime.split (":");
    //     if (stre.length != 2) {
    //         return false;
    //     }

    //     var b = new Date ();
    //     var e = new Date ();
    //     var n = new Date ();

    //     b.setHours (strb[0]);
    //     b.setMinutes (strb[1]);
    //     e.setHours (stre[0]);
    //     e.setMinutes (stre[1]);

    //     if (n.getTime () - b.getTime () > 0 && n.getTime () - e.getTime () < 0) {
    //         for (var i = 0; i < 5; i++) {
    //             $(".qqIcon img").eq(i).attr("src","./public/images/qqIcon.png");
    //             if(window.sessionStorage["language"] == 'zh_cn'){
    //                 $('.line').eq(i).text('(在线)')
    //             }else if(window.sessionStorage["language"] == 'en'){
    //                 $('.line').eq(i).text('(Online)')
    //             }else{
    //                 $('.line').eq(i).text('(在線)')
    //             }
    //         }
    //         return true;
    //     } else {
    //         for (var i = 1; i < 5; i++) {
    //             $(".qqIcon img").eq(i).attr("src","./public/images/offLine.png");
    //             if(window.sessionStorage["language"] == 'zh_cn'){
    //                 $('.line').eq(i).text('(离线)')
    //             }else if(window.sessionStorage["language"] == 'en'){
    //                 $('.line').eq(i).text('(Offline)')
    //             }else{
    //                 $('.line').eq(i).text('(離線)')
    //             }
    //             $('.contact a').eq(i).attr('href','javascript:void(0)')
    //         }
    //         return false;
    //     }
    // }
    // setInterval('time_range ("9:00", "18:00")',1000)

//    for (var i = 0; i < online.length; i++) {
//        if (online[i] == 0) {
//            $(".qqIcon img").eq(i).attr("src","./public/images/offLine.png");
//            if(window.sessionStorage["language"] == 'zh_cn'){
//                $('.line').eq(i).text('离线')
//            }else{
//                $('.line').eq(i).text('離線')
//            }
//	        $('.contact a').eq(i).attr('href','javascript:void(0)')
//        } else {
//            $(".qqIcon img").eq(i).attr("src","./public/images/qqIcon.png");
//            if(window.sessionStorage["language"] == 'zh_cn'){
//                $('.line').eq(i).text('在线')
//            }else{
//                $('.line').eq(i).text('在線')
//            }
//        }
//    }