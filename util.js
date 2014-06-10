/**
 * Created by mac on 14-6-10.
 */
(function(window,undefined){
    var util = {};

    /**
     * 设置属性
     * @param obj dom对象
     * @param json 数形集合
     */
    util.setStyle = function(obj,json){
        var self = this;

        if(obj.length)
            for(var i=0;i<obj.length;i++) {
                self.setStyle(obj[i], json);
            }

        else{
            if(arguments.length == 2){
                for(var i in json){
                    obj.style[i] = json[i];
                }
            }
            else{
                var key = arguments[1],
                    value = arguments[2];

                obj.style[key] = value;
            }
        }
    }

    /**
     * 设置CSS3属性
     * @param obj dom节点
     * @param attr 属性
     * @param value 值
     */
    util.setStyle3 = function(obj,attr,value){
        var self = this,
            key = attr.charAt(0).toUpperCase() + attr.slice(1),
            prefix = ["Webkit","Moz","ms","O",""];

        for(var i = 0,len = prefix.length; i < len; i++){
            obj.style[prefix[i]+key]=value;
        }
    }

    /**
     * 获得[n,m]范围的随机数
     * @param n
     * @param m
     * @returns {*}
     */
    util.rnd = function(n,m){
        return Math.random() * (m - n) + n ;
    }

    window.util = util;

}(window))