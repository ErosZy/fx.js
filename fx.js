/**
 * Created by mac on 14-6-10.
 */
(function(window,undefined){
    var fx = {},
        timeScale = 1000 / 60;

    /**
     * 缓冲运动
     * @param obj
     * @param cur
     * @param target
     * @param process
     * @param complete
     * @param fs
     */
    fx.buffer = function(obj,cur,target,process,complete,fs){
        var x = 0,
            v = 0,
            scale = 0,
            dist = 100,
            now = {};

        fs = !fs ? 6 : fs;

        if(obj.timer){
            clearInterval(obj.timer);
        }

        obj.timer = setInterval(function(){
            v = (dist - x)/fs;
            x += v;
            scale = x / dist;

            for(var key in cur){
                now[key] = (target[key] - cur[key])*scale + cur[key];
            }

            if(process){
                process.call(obj,now);
            }

            if(Math.abs(v) < 1 && Math.abs(dist - x) < 1){
                clearInterval(obj.timer);
                complete.call(obj,target);
            }

        },timeScale);
    }

    /**
     * 弹性运动
     * @param obj
     * @param cur
     * @param target
     * @param process
     * @param complete
     * @param fs
     * @param ms
     */
    fx.flex = function(obj,cur,target,process,complete,fs,ms){
        var x = 0,
            v = 0,
            scale = 0,
            dist = 100,
            now = {};

        fs = !fs ? 6 : fs;
        ms = !ms ? 0.8 : ms;

        if(obj.timer){
            clearInterval(obj.timer);
        }

        obj.timer = setInterval(function(){
            v += (dist - x)/fs;
            v *= ms;
            x += v;
            scale = x / dist;

            for(var key in cur){
                now[key] = (target[key] - cur[key])*scale + cur[key];
            }

            if(process){
                process.call(obj,now);
            }

            if(Math.abs(v) < 1 && Math.abs(dist - x) < 1){
                clearInterval(obj.timer);
                complete.call(obj,target);
            }

        },timeScale);
    }

    /**
     * 线性匀速运动
     * @param obj
     * @param cur
     * @param target
     * @param process
     * @param complete
     * @param fs
     */
    fx.linear = function(obj,cur,target,process,complete,fs){
        var x = 0,
            v = 0,
            scale = 0,
            dist = 100,
            now = {};

        fs = !fs ? 6 : fs;

        if(obj.timer){
            clearInterval(obj.timer);
        }

        v = (dist - x)/fs;

        obj.timer = setInterval(function(){
            x += v;
            scale = x / dist;

            for(var key in cur){
                now[key] = (target[key] - cur[key])*scale + cur[key];
            }

            if(process){
                process.call(obj,now);
            }

            if(Math.abs(dist - x) < 1){
                clearInterval(obj.timer);
                complete.call(obj,target);
            }

        },timeScale);
    }

    window.fx = fx;

}(window))