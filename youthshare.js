
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = [
"https://focu.youth.cn/newonehot/20210629?sid=39210982&uid=2010311&timestamp=1625040354&signature=kNXjrme82G3An0wVvWpamvVYRoHYdNv1gq9dJKyL5YRxElM6Zo&share_id=2010311392109821625040360221&scene_id=fire_share&time=1625040360221&uid=2010311&phone_code=c6c8e8eaa34cc4e031f381fdd47c3fd3&time=1625040360&app_version=1.8.2&sign=f2cb4af5bf10fd0af829f416176c5c85",
"https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RX925MF5n9PiO83YrA7ov3Xqel0ngwVyZ6&uid=2010311&phone_code=c6c8e8eaa34cc4e031f381fdd47c3fd3&scid=39214967&time=1625041545&app_version=2.0.2&sign=908102b35143f48aa6f7dfe9d9bf42eb",
"https://focu.youth.cn/newonehot/20210629?sid=39207043&uid=2010311&timestamp=1625041662&signature=z8W62Rvorl9xBbN3dqEax6kN9QuZVRy4pjVLXQDk0GeygYZOJ5&share_id=2010311392070431625041689070&scene_id=fire_share&time=1625041689070&uid=2010311&phone_code=c6c8e8eaa34cc4e031f381fdd47c3fd3&time=1625041689&app_version=1.8.2&sign=3354fc5fc8ebe066b97dd8b23e838684",
"https://focu.youth.cn/newonehot/20210630?sid=39214853&uid=2010311&timestamp=1625041761&signature=OPDAM2LbdQB6J8ljGNZazZPA2LizWwEaKX0mkV39oyW5xrzpYe&share_id=2010311392148531625041763904&scene_id=fire_share&time=1625041763904&uid=2010311&phone_code=c6c8e8eaa34cc4e031f381fdd47c3fd3&time=1625041764&app_version=1.8.2&sign=6ccc82e4bb605fbb6ff17023cbc96110",
"https://focu.youth.cn/newonehot/20210628?sid=39197580&uid=2010311&timestamp=1625042094&signature=X3pjJxr9YwmWqndeOG07N8yXRzIOkxZ1QALRvlPVyZ52g68MDz&share_id=2010311391975801625042096376&scene_id=fire_share&time=1625042096376&uid=2010311&phone_code=c6c8e8eaa34cc4e031f381fdd47c3fd3&time=1625042096&app_version=1.8.2&sign=9257b9ce9a329bcc8916a3f50acf3b9b",
"https://focu.youth.cn/newonehot/20210627?sid=39194172&uid=2010311&timestamp=1625042094&signature=mNqylzJV6MGKj23RQPraW6XByetWK8k7EYOAgBndo9ZkDbepv5&share_id=2010311391941721625042209394&scene_id=fire_share&time=1625042209394&uid=2010311&phone_code=c6c8e8eaa34cc4e031f381fdd47c3fd3&time=1625042209&app_version=1.8.2&sign=caf1451b7407d1959fbe9d575e9acc09",
];
let articles1 = [
	"https://focu.youth.cn/newsixhot/20210630?sid=39217102&uid=47144846&timestamp=1625043317&signature=P9pJjlO2MYzBWndV0kar2ng58Ir8yOWa5bxer3EwLKA6RG8yvX&share_id=47144846392171021625043450612&scene_id=fire_share&time=1625043450612&uid=47144846&phone_code=b97355fa35aba0b064badfcd236c31fa&time=1625043451&app_version=2.0.0.1&sign=5e071f07e7bdd50eab8f21eccf877922",
	"https://focu.youth.cn/newsixhot/20210630?sid=39214853&uid=47144846&timestamp=1625043317&signature=Qg9jzmlY6xZnPq3DGO1dEZoz2twVWoQ4XrLEVMWpRd8Neb0JkA&share_id=47144846392148531625043689500&scene_id=fire_share&time=1625043689501&uid=47144846&phone_code=b97355fa35aba0b064badfcd236c31fa&time=1625043690&app_version=2.0.0.1&sign=f8ea2b3eba93c80f68ae332e9e367c5b",
	"https://focu.youth.cn/newsixhot/20210629?sid=39207175&uid=47144846&timestamp=1625043317&signature=nG63ezAQDowMB0vlYg4k05LKJc3PBw07L8KN5yR9XpjPOxrbdE&share_id=47144846392071751625043795869&scene_id=fire_share&time=1625043795869&uid=47144846&phone_code=b97355fa35aba0b064badfcd236c31fa&time=1625043796&app_version=2.0.0.1&sign=a9a26ced47212799c5d4b072d8d7b925",
	"https://focu.youth.cn/newsixhot/20210630?sid=39214967&uid=47144846&timestamp=1625043317&signature=NXjrme82G3An0wVvWpamvV8AqFqw3mZ1gq9dJKyL5YRxElM6Zo&share_id=47144846392149671625043923630&scene_id=fire_share&time=1625043923630&uid=47144846&phone_code=b97355fa35aba0b064badfcd236c31fa&time=1625043924&app_version=2.0.0.1&sign=adb77e26a488a59504b9032b8431ddeb",
	"https://focu.youth.cn/newsixhot/20210628?sid=39198666&uid=47144846&timestamp=1625043317&signature=vg9Vr5WAX3dJejlq6GaJByrBPH2PvXLawoYk2PpNxbRZEDzmnL&share_id=47144846391986661625044009381&scene_id=fire_share&time=1625044009382&uid=47144846&phone_code=b97355fa35aba0b064badfcd236c31fa&time=1625044009&app_version=2.0.0.1&sign=3f63311145aa999033c095854aadee89",
];
let encodearticles;


let headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Referer": "https://focus.youth.cn/",
    "Host": "script.baertt.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000231) NetType/WIFI Language/zh_CN",
    "Accept-Language": "zh-cn"
};

!(async() => {
    let array = articles.concat(articles1);
    for (let i = 0; i < array.length; i++) {
		encodearticles = encodeURIComponent(encodeURIComponent(array[i]));
        nowTime = new Date().getTime();
        wxck = md5(nowTime);
        $.log(wxck);
		
        await storage();
        await $.wait(3000);

        await visit();
        await $.wait(3000);

        await openpage();
        await $.wait(3000);

        await callback();
        await $.wait(3000);

    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

function storage() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/storage?t=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp2`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function visit() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/visit?type=1&si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp3`;

        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function openpage() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/openpage?referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp5`;
        const request = {
            url: url,
            headers: headers,

        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function callback() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/callback?si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp6`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
             : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
            new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
            this.http = new s(this),
            this.data = null,
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.timeout : r;
                const[o, h] = i.split("@"),
                a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
