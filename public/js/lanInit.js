/**
 * Created by taylor on 2017/9/13.
 */
$(function () {
    //默认为中文
    jQuery.i18n.properties({
        name : 'strings_zh_cn', //资源文件名称
        path : './public/i18n/', //资源文件路径
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
        }
    });
})