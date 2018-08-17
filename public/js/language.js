/**
 * Created by taylor on 2017/9/13.
 */
$(function () {
    $('#chooseLan').html('简体中文')
    if(window.sessionStorage["language"] == 'zh_cn'){
        $('.changeZi>img').attr('src','../../public/images/chinese.png')
        $('#chooseLan').html('简体中文')
        jQuery.i18n.properties({
            name : 'strings_zh_cn', //资源文件名称
            path : '../../public/i18n/', //资源文件路径
            mode : 'map', //用Map的方式使用资源文件中的值
            language : 'zh',
            callback : function() {//加载成功后设置显示内容
                $('#btn').html($.i18n.prop('btn'));
                $('#btn1').html($.i18n.prop('btn1'));
                $('#price').html($.i18n.prop('price'));
                $('#price1').html($.i18n.prop('price1'));
                $('#rePrice').html($.i18n.prop('Recent Price'));
                $('#nowPrice').html($.i18n.prop('Now Price'));
                $('#homePage').html($.i18n.prop('homePage'));
                $('#icoPro').html($.i18n.prop('icoPro'));
                $('#icoCount').html($.i18n.prop('icoCount'));
                $('#push').html($.i18n.prop('push'));
                $('#news').html($.i18n.prop('news'));
                $('#login').html($.i18n.prop('login'));
                $('#register').html($.i18n.prop('register'));
                $('#hitEnter').html($.i18n.prop('hitEnter'));
                $('#release').html($.i18n.prop('release'));
                $('#text').html($.i18n.prop('understand'));
                $('#leadWorld').html($.i18n.prop('icoPro'));
                $('#more').html($.i18n.prop('more'));
                $('.state1').html($.i18n.prop('state1'));
                $('.state2').html($.i18n.prop('state2'));
                $('.state3').html($.i18n.prop('state3'));
                $('#objective').html($.i18n.prop('objective'));
                $('#safe').html($.i18n.prop('safe'));
                $('#faith').html($.i18n.prop('faith'));
                $('#fair').html($.i18n.prop('fair'));
                $('#transparency').html($.i18n.prop('transparency'));
                $('#aim').html($.i18n.prop('aim'));
                $('#suggest').html($.i18n.prop('suggest'));
                $('#advise').html($.i18n.prop('advise'));
                $('.angle').html($.i18n.prop('angle'));
                $('#angleSay').html($.i18n.prop('angleSay'));
                $('#creater').html($.i18n.prop('creater'));
                $('#mokeSay').html($.i18n.prop('mokeSay'));
                $('#name').html($.i18n.prop('name'));
                $('#email').html($.i18n.prop('email'));
                $('#message').html($.i18n.prop('message'));
                $('.contact').html($.i18n.prop('contact'));
                $('#contact').html($.i18n.prop('contact'));
                $('#opinion').html($.i18n.prop('opinion'));
                $('#codeInput').attr('placeholder',$.i18n.prop('codeInput'));
                $('#send').html($.i18n.prop('send'));
                $('#about').html($.i18n.prop('about'));
                $('#aboutUs').html($.i18n.prop('aboutUs'));
                $('#contact').html($.i18n.prop('contact'));
                $('#serverwechat').html($.i18n.prop('serverwechat'));
                $('#serveronline').html($.i18n.prop('serveronline'));
                $('#serverqq').html($.i18n.prop('serverqq'));
                $('#serversuport').html($.i18n.prop('serversuport'));
                $('#qqgroup').html($.i18n.prop('qqgroup'));
                $('#serverEmail').html($.i18n.prop('serverEmail'));
                $('#serverPhone').html($.i18n.prop('serverPhone'));
                $('#agreement').html($.i18n.prop('agreement'));
                $('#risk').html($.i18n.prop('risk'));
                $('#privacy').html($.i18n.prop('privacy'));
                $('#service').html($.i18n.prop('service'));
                $('#technology').html($.i18n.prop('technology'));
                $('#starting').html($.i18n.prop('starting'));
                $('#ongoing').html($.i18n.prop('ongoing'));
                $('#over').html($.i18n.prop('over'));
                $('#proGoing').html($.i18n.prop('proGoing'));
                $('#startTime').html($.i18n.prop('startTime'));
                $('#endTime').html($.i18n.prop('endTime'));
                $('#discussion').html($.i18n.prop('discussion'));
                $('#supporters').html($.i18n.prop('supporters'));
                $('#tarAmount').html($.i18n.prop('tarAmount'));
                $('#ImmeSup').html($.i18n.prop('ImmeSup'));
                $('#proSponsor').html($.i18n.prop('proSponsor'));
                $('#offWeb').html($.i18n.prop('offWeb'));
                $('#whPaper').html($.i18n.prop('whPaper'));
                $('#recommended').html($.i18n.prop('recommended'));
                $('#publicDis').html($.i18n.prop('publicDis'));
                $('#anonymous').html($.i18n.prop('anonymous'));
                $('#publish').html($.i18n.prop('publish'));
                $('#textDis').attr('placeholder',$.i18n.prop('textDis'))
                $('#LogReg').html($.i18n.prop('LogReg'));
                $('#count').html($.i18n.prop('count'));
                $('#nickName').attr('placeholder',$.i18n.prop('nickName'));
                $('#pwd').html($.i18n.prop('pwd'));
                $('#inputPwd').attr('placeholder',$.i18n.prop('inputPwd'));
                $('#forPwd').html($.i18n.prop('forPwd'));
                $('#verCode').html($.i18n.prop('verCode'));
                $('#codeInput').attr('placeholder',$.i18n.prop('codeInput'));
                $('#my_button').html($.i18n.prop('my_button'));
                $('#noCount').html($.i18n.prop('noCount'));
                $('#regNow').html($.i18n.prop('regNow'));
                $('#welReg').html($.i18n.prop('welReg'));
                $('#emailReg').html($.i18n.prop('emailReg'));
                $('#phoneReg').html($.i18n.prop('phoneReg'));
                $('#regEmail').html($.i18n.prop('regEmail'));
                $('#regEmailText').attr('placeholder',$.i18n.prop('regEmailText'));
                $('#regName').html($.i18n.prop('regName'));
                $('.regNameText').attr('placeholder',$.i18n.prop('regNameText'));
                $('#regPwd').html($.i18n.prop('regPwd'));
                $('.regPwdText').attr('placeholder',$.i18n.prop('regPwdText'));
                $('.regPwdSure').html($.i18n.prop('regPwdSure'));
                $('.regSurePwdText').attr('placeholder',$.i18n.prop('regSurePwdText'));
                $('.regGre').html($.i18n.prop('regGre'));
                $('.regProtocol').html($.i18n.prop('regProtocol'));
                $('.reg').html($.i18n.prop('reg'));
                $('#regCountry').html($.i18n.prop('regCountry'));
                $('#regNumber').html($.i18n.prop('regNumber'));
                $('#regMobile').html($.i18n.prop('regMobile'));
                $('.regCode').html($.i18n.prop('regCode'));
                $('#regCodeText').attr('placeholder',$.i18n.prop('regCodeText'));
                $('#regPhoneName').html($.i18n.prop('regPhoneName'));
                $('#regPhonePwd').html($.i18n.prop('regPhonePwd'));
                $('#serviceAgre').html($.i18n.prop('serviceAgre'));
                $('#agreText').html($.i18n.prop('agreText'));
                $('#conditions').html($.i18n.prop('conditions'));
                $('#conditions1').html($.i18n.prop('conditions1'));
                $('#conditions2').html($.i18n.prop('conditions2'));
                $('#conditions3').html($.i18n.prop('conditions3'));
                $('#law').html($.i18n.prop('law'));
                $('#lawText').html($.i18n.prop('lawText'));
                $('#acountSafe').html($.i18n.prop('acountSafe'));
                $('#safe1').html($.i18n.prop('safe1'));
                $('#safe2').html($.i18n.prop('safe2'));
                $('#myPrivacy').html($.i18n.prop('myPrivacy'));
                $('#privacyText').html($.i18n.prop('privacyText'));
                $('#upload').html($.i18n.prop('upload'));
                $('#uploatText').html($.i18n.prop('uploatText'));
                $('#userAct').html($.i18n.prop('userAct'));
                for(var i = 1 ; i < 22 ; i++){
                    $('#action'+i).html($.i18n.prop('action'+i));
                }
                $('#Intellectual').html($.i18n.prop('Intellectual'));
                for(var i = 1 ; i < 5 ; i++){
                    $('#Intellectual'+i).html($.i18n.prop('Intellectual'+i));
                }
                $('#warn').html($.i18n.prop('warn'));
                $('#warnText').html($.i18n.prop('warnText'));
                $('#compensation').html($.i18n.prop('compensation'));
                $('#compensationText').html($.i18n.prop('compensationText'));
                $('#measure').html($.i18n.prop('measure'));
                $('#measureText').html($.i18n.prop('measureText'));
                $('#modification').html($.i18n.prop('modification'));
                $('#modificationText').html($.i18n.prop('modificationText'));
                $('#abort').html($.i18n.prop('abort'));
                $('#transact').html($.i18n.prop('transact'));
                $('#transactText').html($.i18n.prop('transactText'));
                $('#link').html($.i18n.prop('link'));
                $('#linkText').html($.i18n.prop('linkText'));
                $('#forbade').html($.i18n.prop('forbade'));
                $('#forbadeText').html($.i18n.prop('forbadeText'));
                $('#patent').html($.i18n.prop('patent'));
                $('#patentText').html($.i18n.prop('patentText'));
                $('#vouch').html($.i18n.prop('vouch'));
                for(var i = 1 ; i < 10 ; i++){
                    $('#vouch'+i).html($.i18n.prop('vouch'+i));
                }
                $('#responsibility').html($.i18n.prop('responsibility'));
                for(var i = 1 ; i < 7 ; i++){
                    $('#responsibility'+i).html($.i18n.prop('responsibility'+i));
                }
                $('#general').html($.i18n.prop('general'));
                for(var i = 1 ; i < 6 ; i++){
                    $('#general'+i).html($.i18n.prop('general'+i));
                }
                $('#tipOff').html($.i18n.prop('tipOff'));
                $('#tipOff1').html($.i18n.prop('tipOff1'));
                $('#tipOff2').html($.i18n.prop('tipOff2'));
                for(var i = 1 ;i < 7 ; i++){
                    $('#introIco'+i).html($.i18n.prop('introIco'+i));
                }
                for(var i = 0 ; i < 15 ; i++){
                    $('#privacy'+i).html($.i18n.prop('privacy'+i));
                }
                for(var i = 1 ; i < 13 ; i++){
                    $('#statistic'+i).html($.i18n.prop('statistic'+i));
                }
                $('#statistic2').attr('placeholder',$.i18n.prop('statistic2'));
                for(var i = 1 ; i < 23 ; i++){
                    $('#myPush'+i).html($.i18n.prop('myPush'+i));
                }
                for(var i = 1 ; i < 20 ; i++){
                    $('.push'+i).html($.i18n.prop('push'+i));
                }
                $('.myPushAll').html($.i18n.prop('myPushAll'));
                $('.push11').attr('placeholder',$.i18n.prop('push11'));
                $('.push13').attr('placeholder',$.i18n.prop('push13'));
                $('.push16').attr('placeholder',$.i18n.prop('push16'));
                $('.push18').attr('placeholder',$.i18n.prop('push18'));
                for(var i = 1 ; i < 8 ; i++){
                    $('#realName'+i).html($.i18n.prop('realName'+i));
                }

            }
        });
    }else if(window.sessionStorage["language"] == 'en'){
        $('.changeZi>img').attr('src','../../public/images/english.png')
        $('#chooseLan').html('EN')
        jQuery.i18n.properties({
            name : 'strings_en', //资源文件名称
            path : '../../public/i18n/', //资源文件路径
            mode : 'map', //用Map的方式使用资源文件中的值
            language : 'en',
            callback : function() {//加载成功后设置显示内容
                $('#btn').html($.i18n.prop('btn'));
                $('#btn1').html($.i18n.prop('btn1'));
                $('#price').html($.i18n.prop('price'));
                $('#price1').html($.i18n.prop('price1'));
                $('#rePrice').html($.i18n.prop('Recent Price'));
                $('#nowPrice').html($.i18n.prop('Now Price'));
                $('#homePage').html($.i18n.prop('homePage'));
                $('#icoPro').html($.i18n.prop('icoPro'));
                $('#icoCount').html($.i18n.prop('icoCount'));
                $('#push').html($.i18n.prop('push'));
                $('#news').html($.i18n.prop('news'));
                $('#login').html($.i18n.prop('login'));
                $('#register').html($.i18n.prop('register'));
                $('#hitEnter').html($.i18n.prop('hitEnter'));
                $('#release').html($.i18n.prop('release'));
                $('#text').html($.i18n.prop('understand'));
                $('#leadWorld').html($.i18n.prop('icoPro'));
                $('#more').html($.i18n.prop('more'));
                $('.state1').html($.i18n.prop('state1'));
                $('.state2').html($.i18n.prop('state2'));
                $('.state3').html($.i18n.prop('state3'));
                $('#objective').html($.i18n.prop('objective'));
                $('#safe').html($.i18n.prop('safe'));
                $('#faith').html($.i18n.prop('faith'));
                $('#fair').html($.i18n.prop('fair'));
                $('#transparency').html($.i18n.prop('transparency'));
                $('#aim').html($.i18n.prop('aim'));
                $('#suggest').html($.i18n.prop('suggest'));
                $('#advise').html($.i18n.prop('advise'));
                $('.angle').html($.i18n.prop('angle'));
                $('#angleSay').html($.i18n.prop('angleSay'));
                $('#creater').html($.i18n.prop('creater'));
                $('#mokeSay').html($.i18n.prop('mokeSay'));
                $('#name').html($.i18n.prop('name'));
                $('#email').html($.i18n.prop('email'));
                $('#message').html($.i18n.prop('message'));
                $('.contact').html($.i18n.prop('contact'));
                $('#contact').html($.i18n.prop('contact'));
                $('#opinion').html($.i18n.prop('opinion'));
                $('#codeInput').attr('placeholder',$.i18n.prop('codeInput'));
                $('#send').html($.i18n.prop('send'));
                $('#about').html($.i18n.prop('about'));
                $('#aboutUs').html($.i18n.prop('aboutUs'));
                $('#contact').html($.i18n.prop('contact'));
                $('#serverwechat').html($.i18n.prop('serverwechat'));
                $('#serveronline').html($.i18n.prop('serveronline'));
                $('#serverqq').html($.i18n.prop('serverqq'));
                $('#serversuport').html($.i18n.prop('serversuport'));
                $('#qqgroup').html($.i18n.prop('qqgroup'));
                $('#serverEmail').html($.i18n.prop('serverEmail'));
                $('#serverPhone').html($.i18n.prop('serverPhone'));
                $('#agreement').html($.i18n.prop('agreement'));
                $('#risk').html($.i18n.prop('risk'));
                $('#privacy').html($.i18n.prop('privacy'));
                $('#service').html($.i18n.prop('service'));
                $('#technology').html($.i18n.prop('technology'));
                $('#starting').html($.i18n.prop('starting'));
                $('#ongoing').html($.i18n.prop('ongoing'));
                $('#over').html($.i18n.prop('over'));
                $('#proGoing').html($.i18n.prop('proGoing'));
                $('#startTime').html($.i18n.prop('startTime'));
                $('#endTime').html($.i18n.prop('endTime'));
                $('#discussion').html($.i18n.prop('discussion'));
                $('#supporters').html($.i18n.prop('supporters'));
                $('#tarAmount').html($.i18n.prop('tarAmount'));
                $('#ImmeSup').html($.i18n.prop('ImmeSup'));
                $('#proSponsor').html($.i18n.prop('proSponsor'));
                $('#offWeb').html($.i18n.prop('offWeb'));
                $('#whPaper').html($.i18n.prop('whPaper'));
                $('#recommended').html($.i18n.prop('recommended'));
                $('#publicDis').html($.i18n.prop('publicDis'));
                $('#anonymous').html($.i18n.prop('anonymous'));
                $('#publish').html($.i18n.prop('publish'));
                $('#textDis').attr('placeholder',$.i18n.prop('textDis'));
                $('#LogReg').html($.i18n.prop('LogReg'));
                $('#count').html($.i18n.prop('count'));
                $('#nickName').attr('placeholder',$.i18n.prop('nickName'));
                $('#pwd').html($.i18n.prop('pwd'));
                $('#inputPwd').attr('placeholder',$.i18n.prop('inputPwd'));
                $('#forPwd').html($.i18n.prop('forPwd'));
                $('#verCode').html($.i18n.prop('verCode'));
                $('#codeInput').attr('placeholder',$.i18n.prop('codeInput'));
                $('#my_button').html($.i18n.prop('my_button'));
                $('#noCount').html($.i18n.prop('noCount'));
                $('#regNow').html($.i18n.prop('regNow'));
                $('#welReg').html($.i18n.prop('welReg'));
                $('#emailReg').html($.i18n.prop('emailReg'));
                $('#phoneReg').html($.i18n.prop('phoneReg'));
                $('#regEmail').html($.i18n.prop('regEmail'));
                $('#regEmailText').attr('placeholder',$.i18n.prop('regEmailText'));
                $('#regName').html($.i18n.prop('regName'));
                $('.regNameText').attr('placeholder',$.i18n.prop('regNameText'));
                $('#regPwd').html($.i18n.prop('regPwd'));
                $('.regPwdText').attr('placeholder',$.i18n.prop('regPwdText'));
                $('.regPwdSure').html($.i18n.prop('regPwdSure'));
                $('.regSurePwdText').attr('placeholder',$.i18n.prop('regSurePwdText'));
                $('.regGre').html($.i18n.prop('regGre'));
                $('.regProtocol').html($.i18n.prop('regProtocol'));
                $('.reg').html($.i18n.prop('reg'));
                $('#regCountry').html($.i18n.prop('regCountry'));
                $('#regNumber').html($.i18n.prop('regNumber'));
                $('#regMobile').html($.i18n.prop('regMobile'));
                $('.regCode').html($.i18n.prop('regCode'));
                $('#regCodeText').attr('placeholder',$.i18n.prop('regCodeText'));
                $('#regPhoneName').html($.i18n.prop('regPhoneName'));
                $('#regPhonePwd').html($.i18n.prop('regPhonePwd'));
                for(var i = 1 ;i < 7 ; i++){
                    $('#introIco'+i).html($.i18n.prop('introIco'+i));
                }
                for(var i = 0 ; i < 15 ; i++){
                    $('#privacy'+i).html($.i18n.prop('privacy'+i));
                }
                for(var i = 1 ; i < 13  ; i++){
                    $('#statistic'+i).html($.i18n.prop('statistic'+i));
                }
                $('#statistic2').attr('placeholder',$.i18n.prop('statistic2'));
                for(var i = 1 ; i < 23 ; i++){
                    $('#myPush'+i).html($.i18n.prop('myPush'+i));
                }
                for(var i = 1 ; i < 20 ; i++){
                    $('.push'+i).html($.i18n.prop('push'+i));
                }
                $('.myPushAll').html($.i18n.prop('myPushAll'));
                $('.push11').attr('placeholder',$.i18n.prop('push11'));
                $('.push13').attr('placeholder',$.i18n.prop('push13'));
                $('.push16').attr('placeholder',$.i18n.prop('push16'));
                $('.push18').attr('placeholder',$.i18n.prop('push18'));
                for(var i = 1 ; i < 8 ; i++){
                    $('#realName'+i).html($.i18n.prop('realName'+i));
                }
            }
        });
    }else{
        $('.changeZi>img').attr('src','../../public/images/fanti.png')
        $('#chooseLan').html('繁體中文')
        jQuery.i18n.properties({
            name : 'strings_zh_hk', //资源文件名称
            path : '../../public/i18n/', //资源文件路径
            mode : 'map', //用Map的方式使用资源文件中的值
            language : 'zh-hk',
            callback : function() {//加载成功后设置显示内容
                $('#btn').html($.i18n.prop('btn'));
                $('#btn1').html($.i18n.prop('btn1'));
                $('#price').html($.i18n.prop('price'));
                $('#price1').html($.i18n.prop('price1'));
                $('#rePrice').html($.i18n.prop('Recent Price'));
                $('#nowPrice').html($.i18n.prop('Now Price'));
                $('#homePage').html($.i18n.prop('homePage'));
                $('#icoPro').html($.i18n.prop('icoPro'));
                $('#icoCount').html($.i18n.prop('icoCount'));
                $('#push').html($.i18n.prop('push'));
                $('#news').html($.i18n.prop('news'));
                $('#login').html($.i18n.prop('login'));
                $('#register').html($.i18n.prop('register'));
                $('#hitEnter').html($.i18n.prop('hitEnter'));
                $('#release').html($.i18n.prop('release'));
                $('#text').html($.i18n.prop('understand'));
                $('#leadWorld').html($.i18n.prop('icoPro'));
                $('#more').html($.i18n.prop('more'));
                $('.state1').html($.i18n.prop('state1'));
                $('.state2').html($.i18n.prop('state2'));
                $('.state3').html($.i18n.prop('state3'));
                $('#objective').html($.i18n.prop('objective'));
                $('#safe').html($.i18n.prop('safe'));
                $('#faith').html($.i18n.prop('faith'));
                $('#fair').html($.i18n.prop('fair'));
                $('#transparency').html($.i18n.prop('transparency'));
                $('#aim').html($.i18n.prop('aim'));
                $('#suggest').html($.i18n.prop('suggest'));
                $('#advise').html($.i18n.prop('advise'));
                $('.angle').html($.i18n.prop('angle'));
                $('#angleSay').html($.i18n.prop('angleSay'));
                $('#creater').html($.i18n.prop('creater'));
                $('#mokeSay').html($.i18n.prop('mokeSay'));
                $('#name').html($.i18n.prop('name'));
                $('#email').html($.i18n.prop('email'));
                $('#message').html($.i18n.prop('message'));
                $('.contact').html($.i18n.prop('contact'));
                $('#contact').html($.i18n.prop('contact'));
                $('#opinion').html($.i18n.prop('opinion'));
                $('#codeInput').attr('placeholder',$.i18n.prop('codeInput'));
                $('#send').html($.i18n.prop('send'));
                $('#about').html($.i18n.prop('about'));
                $('#aboutUs').html($.i18n.prop('aboutUs'));
                $('#contact').html($.i18n.prop('contact'));
                $('#serverwechat').html($.i18n.prop('serverwechat'));
                $('#serveronline').html($.i18n.prop('serveronline'));
                $('#serverqq').html($.i18n.prop('serverqq'));
                $('#serversuport').html($.i18n.prop('serversuport'));
                $('#qqgroup').html($.i18n.prop('qqgroup'));
                $('#serverEmail').html($.i18n.prop('serverEmail'));
                $('#serverPhone').html($.i18n.prop('serverPhone'));
                $('#agreement').html($.i18n.prop('agreement'));
                $('#risk').html($.i18n.prop('risk'));
                $('#privacy').html($.i18n.prop('privacy'));
                $('#service').html($.i18n.prop('service'));
                $('#technology').html($.i18n.prop('technology'));
                $('#starting').html($.i18n.prop('starting'));
                $('#ongoing').html($.i18n.prop('ongoing'));
                $('#over').html($.i18n.prop('over'));
                $('#proGoing').html($.i18n.prop('proGoing'));
                $('#startTime').html($.i18n.prop('startTime'));
                $('#endTime').html($.i18n.prop('endTime'));
                $('#discussion').html($.i18n.prop('discussion'));
                $('#supporters').html($.i18n.prop('supporters'));
                $('#tarAmount').html($.i18n.prop('tarAmount'));
                $('#ImmeSup').html($.i18n.prop('ImmeSup'));
                $('#proSponsor').html($.i18n.prop('proSponsor'));
                $('#offWeb').html($.i18n.prop('offWeb'));
                $('#whPaper').html($.i18n.prop('whPaper'));
                $('#recommended').html($.i18n.prop('recommended'));
                $('#publicDis').html($.i18n.prop('publicDis'));
                $('#anonymous').html($.i18n.prop('anonymous'));
                $('#publish').html($.i18n.prop('publish'));
                $('#textDis').attr('placeholder',$.i18n.prop('textDis'));
                $('#LogReg').html($.i18n.prop('LogReg'));
                $('#count').html($.i18n.prop('count'));
                $('#nickName').attr('placeholder',$.i18n.prop('nickName'));
                $('#pwd').html($.i18n.prop('pwd'));
                $('#inputPwd').attr('placeholder',$.i18n.prop('inputPwd'));
                $('#forPwd').html($.i18n.prop('forPwd'));
                $('#verCode').html($.i18n.prop('verCode'));
                $('#codeInput').attr('placeholder',$.i18n.prop('codeInput'));
                $('#my_button').html($.i18n.prop('my_button'));
                $('#noCount').html($.i18n.prop('noCount'));
                $('#regNow').html($.i18n.prop('regNow'));
                $('#welReg').html($.i18n.prop('welReg'));
                $('#emailReg').html($.i18n.prop('emailReg'));
                $('#phoneReg').html($.i18n.prop('phoneReg'));
                $('#regEmail').html($.i18n.prop('regEmail'));
                $('#regEmailText').attr('placeholder',$.i18n.prop('regEmailText'));
                $('#regName').html($.i18n.prop('regName'));
                $('.regNameText').attr('placeholder',$.i18n.prop('regNameText'));
                $('#regPwd').html($.i18n.prop('regPwd'));
                $('.regPwdText').attr('placeholder',$.i18n.prop('regPwdText'));
                $('.regPwdSure').html($.i18n.prop('regPwdSure'));
                $('.regSurePwdText').attr('placeholder',$.i18n.prop('regSurePwdText'));
                $('.regGre').html($.i18n.prop('regGre'));
                $('.regProtocol').html($.i18n.prop('regProtocol'));
                $('.reg').html($.i18n.prop('reg'));
                $('#regCountry').html($.i18n.prop('regCountry'));
                $('#regNumber').html($.i18n.prop('regNumber'));
                $('#regMobile').html($.i18n.prop('regMobile'));
                $('.regCode').html($.i18n.prop('regCode'));
                $('#regCodeText').attr('placeholder',$.i18n.prop('regCodeText'));
                $('#regPhoneName').html($.i18n.prop('regPhoneName'));
                $('#regPhonePwd').html($.i18n.prop('regPhonePwd'));
                $('#serviceAgre').html($.i18n.prop('serviceAgre'));
                $('#agreText').html($.i18n.prop('agreText'));
                $('#conditions').html($.i18n.prop('conditions'));
                $('#conditions1').html($.i18n.prop('conditions1'));
                $('#conditions2').html($.i18n.prop('conditions2'));
                $('#conditions3').html($.i18n.prop('conditions3'));
                $('#law').html($.i18n.prop('law'));
                $('#lawText').html($.i18n.prop('lawText'));
                $('#acountSafe').html($.i18n.prop('acountSafe'));
                $('#safe1').html($.i18n.prop('safe1'));
                $('#safe2').html($.i18n.prop('safe2'));
                $('#myPrivacy').html($.i18n.prop('myPrivacy'));
                $('#privacyText').html($.i18n.prop('privacyText'));
                $('#upload').html($.i18n.prop('upload'));
                $('#uploatText').html($.i18n.prop('uploatText'));
                $('#userAct').html($.i18n.prop('userAct'));
                for(var i = 1 ; i < 22 ; i++){
                    $('#action'+i).html($.i18n.prop('action'+i));
                }
                $('#Intellectual').html($.i18n.prop('Intellectual'));
                for(var i = 1 ; i < 5 ; i++){
                    $('#Intellectual'+i).html($.i18n.prop('Intellectual'+i));
                }
                $('#warn').html($.i18n.prop('warn'));
                $('#warnText').html($.i18n.prop('warnText'));
                $('#compensation').html($.i18n.prop('compensation'));
                $('#compensationText').html($.i18n.prop('compensationText'));
                $('#measure').html($.i18n.prop('measure'));
                $('#measureText').html($.i18n.prop('measureText'));
                $('#modification').html($.i18n.prop('modification'));
                $('#modificationText').html($.i18n.prop('modificationText'));
                $('#abort').html($.i18n.prop('abort'));
                $('#transact').html($.i18n.prop('transact'));
                $('#transactText').html($.i18n.prop('transactText'));
                $('#link').html($.i18n.prop('link'));
                $('#linkText').html($.i18n.prop('linkText'));
                $('#forbade').html($.i18n.prop('forbade'));
                $('#forbadeText').html($.i18n.prop('forbadeText'));
                $('#patent').html($.i18n.prop('patent'));
                $('#patentText').html($.i18n.prop('patentText'));
                $('#vouch').html($.i18n.prop('vouch'));
                for(var i = 1 ; i < 10 ; i++){
                    $('#vouch'+i).html($.i18n.prop('vouch'+i));
                }
                $('#responsibility').html($.i18n.prop('responsibility'));
                for(var i = 1 ; i < 7 ; i++){
                    $('#responsibility'+i).html($.i18n.prop('responsibility'+i));
                }
                $('#general').html($.i18n.prop('general'));
                for(var i = 1 ; i < 6 ; i++){
                    $('#general'+i).html($.i18n.prop('general'+i));
                }
                $('#tipOff').html($.i18n.prop('tipOff'));
                $('#tipOff1').html($.i18n.prop('tipOff1'));
                $('#tipOff2').html($.i18n.prop('tipOff2'));
                for(var i = 1 ;i < 7 ; i++){
                    $('#introIco'+i).html($.i18n.prop('introIco'+i));
                }
                for(var i = 0 ; i < 15 ; i++){
                    $('#privacy'+i).html($.i18n.prop('privacy'+i));
                }
                for(var i = 1 ; i < 13  ; i++){
                    $('#statistic'+i).html($.i18n.prop('statistic'+i));
                }
                $('#statistic2').attr('placeholder',$.i18n.prop('statistic2'));
                for(var i = 1 ; i < 23 ; i++){
                    $('#myPush'+i).html($.i18n.prop('myPush'+i));
                }
                for(var i = 1 ; i < 20 ; i++){
                    $('.push'+i).html($.i18n.prop('push'+i));
                }
                $('.myPushAll').html($.i18n.prop('myPushAll'));
                $('.push11').attr('placeholder',$.i18n.prop('push11'));
                $('.push13').attr('placeholder',$.i18n.prop('push13'));
                $('.push16').attr('placeholder',$.i18n.prop('push16'));
                $('.push18').attr('placeholder',$.i18n.prop('push18'));
                for(var i = 1 ; i < 8 ; i++){
                    $('#realName'+i).html($.i18n.prop('realName'+i));
                }
            }
        });
    }
})
