/*:
 * @plugindesc v1.04 在地图场景中按下特定键盘按键时调用公共事件
 * @author Mugen技术部 衬雨 Mieriki
 *
 * @param ---基础按键---
 * @default
 *
 * @param KeyTilde
 * @parent ---基础按键---
 * @type common_event
 * @text 【~键】公共事件
 * @desc 按下~键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param Key1
 * @parent ---基础按键---
 * @type common_event
 * @text 【1键】公共事件
 * @desc 按下1键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param Key2
 * @parent ---基础按键---
 * @type common_event
 * @text 【2键】公共事件
 * @desc 按下2键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param Key3
 * @parent ---基础按键---
 * @type common_event
 * @text 【3键】公共事件
 * @desc 按下3键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param Key4
 * @parent ---基础按键---
 * @type common_event
 * @text 【4键】公共事件
 * @desc 按下4键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param Key5
 * @parent ---基础按键---
 * @type common_event
 * @text 【5键】公共事件
 * @desc 按下5键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param Key6
 * @parent ---基础按键---
 * @type common_event
 * @text 【6键】公共事件
 * @desc 按下6键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param Key7
 * @parent ---基础按键---
 * @type common_event
 * @text 【7键】公共事件
 * @desc 按下7键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param Key8
 * @parent ---基础按键---
 * @type common_event
 * @text 【8键】公共事件
 * @desc 按下8键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param Key9
 * @parent ---基础按键---
 * @type common_event
 * @text 【9键】公共事件
 * @desc 按下9键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param Key0
 * @parent ---基础按键---
 * @type common_event
 * @text 【0键】公共事件
 * @desc 按下0键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyMinus
 * @parent ---基础按键---
 * @type common_event
 * @text 【-键】公共事件
 * @desc 按下-键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyEqual
 * @parent ---基础按键---
 * @type common_event
 * @text 【=键】公共事件
 * @desc 按下=键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param ---第二排按键---
 * @default
 *
 * @param KeyQ
 * @parent ---第二排按键---
 * @type common_event
 * @text 【Q键】公共事件
 * @desc 按下Q键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyW
 * @parent ---第二排按键---
 * @type common_event
 * @text 【W键】公共事件
 * @desc 按下W键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyE
 * @parent ---第二排按键---
 * @type common_event
 * @text 【E键】公共事件
 * @desc 按下E键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyR
 * @parent ---第二排按键---
 * @type common_event
 * @text 【R键】公共事件
 * @desc 按下R键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyT
 * @parent ---第二排按键---
 * @type common_event
 * @text 【T键】公共事件
 * @desc 按下T键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyY
 * @parent ---第二排按键---
 * @type common_event
 * @text 【Y键】公共事件
 * @desc 按下Y键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyU
 * @parent ---第二排按键---
 * @type common_event
 * @text 【U键】公共事件
 * @desc 按下U键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyI
 * @parent ---第二排按键---
 * @type common_event
 * @text 【I键】公共事件
 * @desc 按下I键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyO
 * @parent ---第二排按键---
 * @type common_event
 * @text 【O键】公共事件
 * @desc 按下O键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyP
 * @parent ---第二排按键---
 * @type common_event
 * @text 【P键】公共事件
 * @desc 按下P键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyBracketOpen
 * @parent ---第二排按键---
 * @type common_event
 * @text 【[键】公共事件
 * @desc 按下[键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyBracketClose
 * @parent ---第二排按键---
 * @type common_event
 * @text 【]键】公共事件
 * @desc 按下]键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyBackslash
 * @parent ---第二排按键---
 * @type common_event
 * @text 【\键】公共事件
 * @desc 按下\键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param ---第三排按键---
 * @default
 *
 * @param KeyA
 * @parent ---第三排按键---
 * @type common_event
 * @text 【A键】公共事件
 * @desc 按下A键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyS
 * @parent ---第三排按键---
 * @type common_event
 * @text 【S键】公共事件
 * @desc 按下S键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyD
 * @parent ---第三排按键---
 * @type common_event
 * @text 【D键】公共事件
 * @desc 按下D键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyF
 * @parent ---第三排按键---
 * @type common_event
 * @text 【F键】公共事件
 * @desc 按下F键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyG
 * @parent ---第三排按键---
 * @type common_event
 * @text 【G键】公共事件
 * @desc 按下G键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyH
 * @parent ---第三排按键---
 * @type common_event
 * @text 【H键】公共事件
 * @desc 按下H键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyJ
 * @parent ---第三排按键---
 * @type common_event
 * @text 【J键】公共事件
 * @desc 按下J键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyK
 * @parent ---第三排按键---
 * @type common_event
 * @text 【K键】公共事件
 * @desc 按下K键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyL
 * @parent ---第三排按键---
 * @type common_event
 * @text 【L键】公共事件
 * @desc 按下L键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeySemicolon
 * @parent ---第三排按键---
 * @type common_event
 * @text 【;键】公共事件
 * @desc 按下;键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyQuote
 * @parent ---第三排按键---
 * @type common_event
 * @text 【'键】公共事件
 * @desc 按下'键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyEnter
 * @parent ---第三排按键---
 * @type common_event
 * @text 【回车键】公共事件
 * @desc 按下回车键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param ---第四排按键---
 * @default
 *
 * @param KeyShift
 * @parent ---第四排按键---
 * @type common_event
 * @text 【Shift键】公共事件
 * @desc 按下Shift键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyZ
 * @parent ---第四排按键---
 * @type common_event
 * @text 【Z键】公共事件
 * @desc 按下Z键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyX
 * @parent ---第四排按键---
 * @type common_event
 * @text 【X键】公共事件
 * @desc 按下X键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyC
 * @parent ---第四排按键---
 * @type common_event
 * @text 【C键】公共事件
 * @desc 按下C键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyV
 * @parent ---第四排按键---
 * @type common_event
 * @text 【V键】公共事件
 * @desc 按下V键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyB
 * @parent ---第四排按键---
 * @type common_event
 * @text 【B键】公共事件
 * @desc 按下B键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyN
 * @parent ---第四排按键---
 * @type common_event
 * @text 【N键】公共事件
 * @desc 按下N键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyM
 * @parent ---第四排按键---
 * @type common_event
 * @text 【M键】公共事件
 * @desc 按下M键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyComma
 * @parent ---第四排按键---
 * @type common_event
 * @text 【,键】公共事件
 * @desc 按下,键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyPeriod
 * @parent ---第四排按键---
 * @type common_event
 * @text 【.键】公共事件
 * @desc 按下.键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeySlash
 * @parent ---第四排按键---
 * @type common_event
 * @text 【/键】公共事件
 * @desc 按下/键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param ---特殊按键---
 * @default
 *
 * @param KeySpace
 * @parent ---特殊按键---
 * @type common_event
 * @text 【空格键】公共事件
 * @desc 按下空格键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyLeft
 * @parent ---特殊按键---
 * @type common_event
 * @text 【左箭头】公共事件
 * @desc 按下左箭头键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyUp
 * @parent ---特殊按键---
 * @type common_event
 * @text 【上箭头】公共事件
 * @desc 按下上箭头键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyRight
 * @parent ---特殊按键---
 * @type common_event
 * @text 【右箭头】公共事件
 * @desc 按下右箭头键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyDown
 * @parent ---特殊按键---
 * @type common_event
 * @text 【下箭头】公共事件
 * @desc 按下下箭头键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyInsert
 * @parent ---特殊按键---
 * @type common_event
 * @text 【Insert键】公共事件
 * @desc 按下Insert键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyDelete
 * @parent ---特殊按键---
 * @type common_event
 * @text 【Delete键】公共事件
 * @desc 按下Delete键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyHome
 * @parent ---特殊按键---
 * @type common_event
 * @text 【Home键】公共事件
 * @desc 按下Home键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyEnd
 * @parent ---特殊按键---
 * @type common_event
 * @text 【End键】公共事件
 * @desc 按下End键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyPageUp
 * @parent ---特殊按键---
 * @type common_event
 * @text 【PageUp键】公共事件
 * @desc 按下PageUp键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyPageDown
 * @parent ---特殊按键---
 * @type common_event
 * @text 【PageDown键】公共事件
 * @desc 按下PageDown键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param ---小键盘按键---
 * @default
 *
 * @param KeyNum0
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘0】公共事件
 * @desc 按下小键盘0键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNum1
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘1】公共事件
 * @desc 按下小键盘1键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNum2
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘2】公共事件
 * @desc 按下小键盘2键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNum3
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘3】公共事件
 * @desc 按下小键盘3键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNum4
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘4】公共事件
 * @desc 按下小键盘4键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNum5
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘5】公共事件
 * @desc 按下小键盘5键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNum6
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘6】公共事件
 * @desc 按下小键盘6键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNum7
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘7】公共事件
 * @desc 按下小键盘7键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNum8
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘8】公共事件
 * @desc 按下小键盘8键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNum9
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘9】公共事件
 * @desc 按下小键盘9键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNumPeriod
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘.】公共事件
 * @desc 按下小键盘.键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNumPlus
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘+】公共事件
 * @desc 按下小键盘+键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNumMinus
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘-】公共事件
 * @desc 按下小键盘-键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNumMultiply
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘*】公共事件
 * @desc 按下小键盘*键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
 * @param KeyNumDivide
 * @parent ---小键盘按键---
 * @type common_event
 * @text 【小键盘/】公共事件
 * @desc 按下小键盘/键时调用的公共事件ID。设为0则禁用。
 * @default 0
 *
  * @help
 * ============================================================================
 * Mugen按钮公共事件插件
 * ============================================================================
 *
 * 这个插件允许您在地图场景中为键盘按键绑定公共事件。
 * 技术支持：Mugen技术部 衬雨
 *
 * 插件命令：
 *   MugenRevertButton [动作]  - 恢复按键默认功能
 *   MugenSwitchButton [动作]  - 启用自定义按键绑定
 *   MugenTriggerButton [动作] - 模拟按键按下
 *   MugenSetKey [按键名] [公共事件ID] - 运行时修改按键配置
 *
 * 可用动作：Ok, Cancel, Dash, PageUp, PageDown, Left, Up, Right, Down, All
 * 可用按键名：q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m,
 *           1, 2, 3, 4, 5, 6, 7, 8, 9, 0, space, enter, shift 等
 *
 * 示例：
 *   MugenSetKey q 10     // 设置Q键触发公共事件10
 *   MugenSetKey space 0  // 禁用空格键功能
 *
 * 本插件由Mugen技术部制作，并遵循AGPL-3.0许可证。
 * 如需授权，请联系Mugen技术部。Mugenacgn@163.com
 *
 * 日志:
 *
 * 1.04 - 新增插件指令绑定按键功能(重启游戏时会失效)
 */
(function () {
    'use strict';

    var Imported = Imported || {};
    Imported.MugenButtonEvents = true;

    class MugenButtonEvents {
        static init() {
            this._imported = true;
            this._version = '1.04';

            this._loadConfig();
            this._setupKeyMapping();
            this._fixInputSystem();
            this._extendCoreSystems();
            this._setupOptimizations();
        }

        static _fixInputSystem() {
            if (typeof Input._isEscapeCompatible !== 'function') {
                Input._isEscapeCompatible = function(keyName) {
                    return keyName === 'escape' || keyName === 'cancel';
                };
            }
        }

        static _loadConfig() {
            const parameters = PluginManager.parameters('MugenButtonEvents');

            this._keyConfig = {};
            const keyNames = [
                'tilde', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
                'minus', 'equal', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
                'foreBrack', 'backBrack', 'backSlash', 'a', 's', 'd', 'f', 'g', 'h',
                'j', 'k', 'l', 'semicolon', 'quote', 'enter', 'keyShift', 'z', 'x',
                'c', 'v', 'b', 'n', 'm', 'comma', 'period', 'foreSlash', 'space',
                'dirLeft', 'dirUp', 'dirRight', 'dirDown', 'ins', 'del', 'home',
                'end', 'pageUp', 'pageDown', 'num0', 'num1', 'num2', 'num3', 'num4',
                'num5', 'num6', 'num7', 'num8', 'num9', 'numPeriod', 'numPlus',
                'numMinus', 'numTimes', 'numDivide'
            ];

            keyNames.forEach(key => {
                const paramName = 'Key' + key.charAt(0).toUpperCase() + key.slice(1);
                this._keyConfig[key] = Number(parameters[paramName] || 0);
            });
        }

        static _setupKeyMapping() {
            const keyCodeMap = {
                tilde: 192, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, 0: 48,
                minus: 189, equal: 187, q: 81, w: 87, e: 69, r: 82, t: 84, y: 89, u: 85, i: 73,
                o: 79, p: 80, foreBrack: 219, backBrack: 221, backSlash: 220, a: 65, s: 83, d: 68,
                f: 70, g: 71, h: 72, j: 74, k: 75, l: 76, semicolon: 186, quote: 222, enter: 13,
                keyShift: 16, z: 90, x: 88, c: 67, v: 86, b: 66, n: 78, m: 77, comma: 188,
                period: 190, foreSlash: 191, space: 32, dirLeft: 37, dirUp: 38, dirRight: 39,
                dirDown: 40, ins: 45, del: 46, home: 36, end: 35, pageUp: 33, pageDown: 34,
                num0: 96, num1: 97, num2: 98, num3: 99, num4: 100, num5: 101, num6: 102, num7: 103,
                num8: 104, num9: 105, numPeriod: 110, numPlus: 107, numMinus: 109, numTimes: 106,
                numDivide: 111
            };

            Object.keys(this._keyConfig).forEach(key => {
                const eventId = this._keyConfig[key];
                const keyCode = keyCodeMap[key];
                if (eventId !== 0 && keyCode) {
                    Input.keyMapper[keyCode] = key;
                }
            });
        }

        static _setupOptimizations() {
            this._activeKeys = [];
            Object.keys(this._keyConfig).forEach(key => {
                if (this._keyConfig[key] > 0) {
                    this._activeKeys.push(key);
                }
            });

            this._lastTriggerTime = 0;
            this._triggerCooldown = 100;
        }

        static _extendCoreSystems() {
            this._extendInputSystem();
            this._extendSceneSystem();
            this._extendInterpreterSystem();
        }

        static _extendInputSystem() {
            const restoreMappings = {
                OK: { 13: 'ok', 32: 'ok', 90: 'ok' },
                CANCEL: { 45: 'escape', 88: 'escape', 96: 'escape' },
                DASH: { 16: 'shift' },
                PAGEUP: { 33: 'pageup', 81: 'pageup' },
                PAGEDOWN: { 34: 'pagedown', 87: 'pagedown' },
                LEFT: { 37: 'left', 100: 'left' },
                UP: { 38: 'up', 104: 'up' },
                RIGHT: { 39: 'right', 102: 'right' },
                DOWN: { 40: 'down', 98: 'down' },
                ALL: {
                    13: 'ok', 32: 'ok', 90: 'ok', 45: 'escape', 88: 'escape', 96: 'escape',
                    16: 'shift', 33: 'pageup', 81: 'pageup', 34: 'pagedown', 87: 'pagedown',
                    37: 'left', 100: 'left', 38: 'up', 104: 'up', 39: 'right', 102: 'right',
                    40: 'down', 98: 'down'
                }
            };

            Input.mugenRestoreDefaultKeys = function(action = 'ALL') {
                const mapping = restoreMappings[action];
                if (mapping) {
                    Object.keys(mapping).forEach(keyCode => {
                        this.keyMapper[keyCode] = mapping[keyCode];
                    });
                }
            };

            const enableMappings = {
                OK: [
                    { key: 'enter', code: 13 },
                    { key: 'space', code: 32 },
                    { key: 'z', code: 90 }
                ],
                CANCEL: [
                    { key: 'ins', code: 45 },
                    { key: 'x', code: 88 },
                    { key: 'num0', code: 96 }
                ],
                DASH: [{ key: 'keyShift', code: 16 }],
                PAGEUP: [
                    { key: 'pageUp', code: 33 },
                    { key: 'q', code: 81 }
                ],
                PAGEDOWN: [
                    { key: 'pageDown', code: 34 },
                    { key: 'w', code: 87 }
                ],
                LEFT: [
                    { key: 'dirLeft', code: 37 },
                    { key: 'num4', code: 100 }
                ],
                UP: [
                    { key: 'dirUp', code: 38 },
                    { key: 'num8', code: 104 }
                ],
                RIGHT: [
                    { key: 'dirRight', code: 39 },
                    { key: 'num6', code: 102 }
                ],
                DOWN: [
                    { key: 'dirDown', code: 40 },
                    { key: 'num2', code: 98 }
                ]
            };

            Input.mugenEnableCustomKeys = function(action = 'ALL') {
                if (action === 'ALL') {
                    Object.keys(enableMappings).forEach(actionKey => {
                        enableMappings[actionKey].forEach(mapping => {
                            if (MugenButtonEvents._keyConfig[mapping.key] !== 0) {
                                this.keyMapper[mapping.code] = mapping.key;
                            }
                        });
                    });
                } else {
                    const mappings = enableMappings[action];
                    if (mappings) {
                        mappings.forEach(mapping => {
                            if (MugenButtonEvents._keyConfig[mapping.key] !== 0) {
                                this.keyMapper[mapping.code] = mapping.key;
                            }
                        });
                    }
                }
            };
        }

        static _extendSceneSystem() {
            const originalSceneBaseStart = Scene_Base.prototype.start;
            const originalSceneMapStart = Scene_Map.prototype.start;
            const originalSceneMapUpdate = Scene_Map.prototype.update;

            Scene_Base.prototype.start = function() {
                originalSceneBaseStart.call(this);
                Input.mugenRestoreDefaultKeys('ALL');
            };

            Scene_Map.prototype.start = function() {
                originalSceneMapStart.call(this);
                Input.mugenEnableCustomKeys('ALL');
            };

            Scene_Map.prototype.update = function() {
                originalSceneMapUpdate.call(this);
                this._mugenCheckButtonEvents();
            };

            Scene_Map.prototype._mugenCheckButtonEvents = function() {
                if (SceneManager.isSceneChanging() || $gameMap.isEventRunning()) return;

                const now = Date.now();
                if (now - this._lastTriggerTime < this._triggerCooldown) return;

                const activeKeys = MugenButtonEvents._activeKeys;
                const keyConfig = MugenButtonEvents._keyConfig;

                for (let i = 0, len = activeKeys.length; i < len; i++) {
                    const key = activeKeys[i];
                    if (Input.isRepeated(key)) {
                        $gameTemp.reserveCommonEvent(keyConfig[key]);
                        this._lastTriggerTime = now;
                        break;
                    }
                }
            };
        }

        static _extendInterpreterSystem() {
            const originalPluginCommand = Game_Interpreter.prototype.pluginCommand;

            const commandMap = {
                'MugenRevertButton': '_mugenRevertButton',
                'MugenSwitchButton': '_mugenSwitchButton',
                'MugenTriggerButton': '_mugenTriggerButton',
                'MugenSetKey': '_mugenSetKey'
            };

            Game_Interpreter.prototype.pluginCommand = function(command, args) {
                originalPluginCommand.call(this, command, args);

                if (!command || !args) return;

                const handlerName = commandMap[command];
                if (handlerName && this[handlerName]) {
                    this[handlerName](args);
                }
            };

            Game_Interpreter.prototype._mugenRevertButton = function(args) {
                if (!args.length) return;
                const action = args[0].toUpperCase();
                Input.mugenRestoreDefaultKeys(action);
            };

            Game_Interpreter.prototype._mugenSwitchButton = function(args) {
                if (!args.length) return;
                const action = args[0].toUpperCase();
                Input.mugenEnableCustomKeys(action);
            };

            Game_Interpreter.prototype._mugenTriggerButton = function(args) {
                if (!args.length) return;
                let button = args[0].toLowerCase();

                const buttonMap = {
                    'ok': 'ok', 'cancel': 'escape', 'dash': 'shift',
                    'pageup': 'pageup', 'pagedown': 'pagedown',
                    'left': 'left', 'up': 'up', 'right': 'right', 'down': 'down'
                };

                button = buttonMap[button] || button;
                Input._latestButton = button;
                Input._pressedTime = 0;
            };

            Game_Interpreter.prototype._mugenSetKey = function(args) {
                if (args.length < 2) {
                    console.warn('MugenButtonEvents: MugenSetKey需要2个参数: 按键名 公共事件ID');
                    return;
                }

                const keyName = args[0].toLowerCase();
                const eventId = parseInt(args[1]);

                if (isNaN(eventId)) {
                    console.warn(`MugenButtonEvents: 无效的公共事件ID: ${args[1]}`);
                    return;
                }

                // 按键名映射表，支持更友好的按键名称
                const keyNameMap = {
                    'shift': 'keyShift',
                    'space': 'space',
                    'enter': 'enter',
                    'left': 'dirLeft',
                    'right': 'dirRight',
                    'up': 'dirUp',
                    'down': 'dirDown',
                    'insert': 'ins',
                    'delete': 'del',
                    'home': 'home',
                    'end': 'end',
                    'pageup': 'pageUp',
                    'pagedown': 'pageDown'
                };

                const internalKeyName = keyNameMap[keyName] || keyName;

                if (!MugenButtonEvents._keyConfig.hasOwnProperty(internalKeyName)) {
                    console.warn(`MugenButtonEvents: 未知的按键名: ${keyName}`);
                    return;
                }

                // 更新配置
                MugenButtonEvents._keyConfig[internalKeyName] = eventId;

                // 重新设置按键映射
                const keyCodeMap = {
                    tilde: 192, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, 0: 48,
                    minus: 189, equal: 187, q: 81, w: 87, e: 69, r: 82, t: 84, y: 89, u: 85, i: 73,
                    o: 79, p: 80, foreBrack: 219, backBrack: 221, backSlash: 220, a: 65, s: 83, d: 68,
                    f: 70, g: 71, h: 72, j: 74, k: 75, l: 76, semicolon: 186, quote: 222, enter: 13,
                    keyShift: 16, z: 90, x: 88, c: 67, v: 86, b: 66, n: 78, m: 77, comma: 188,
                    period: 190, foreSlash: 191, space: 32, dirLeft: 37, dirUp: 38, dirRight: 39,
                    dirDown: 40, ins: 45, del: 46, home: 36, end: 35, pageUp: 33, pageDown: 34,
                    num0: 96, num1: 97, num2: 98, num3: 99, num4: 100, num5: 101, num6: 102, num7: 103,
                    num8: 104, num9: 105, numPeriod: 110, numPlus: 107, numMinus: 109, numTimes: 106,
                    numDivide: 111
                };

                const keyCode = keyCodeMap[internalKeyName];

                if (eventId === 0) {
                    // 禁用按键：从映射中移除
                    if (Input.keyMapper[keyCode] === internalKeyName) {
                        delete Input.keyMapper[keyCode];
                    }
                } else {
                    // 启用按键：添加到映射
                    Input.keyMapper[keyCode] = internalKeyName;
                }

                // 重新构建活动按键列表
                MugenButtonEvents._setupOptimizations();

                console.log(`MugenButtonEvents: 已设置按键 ${keyName} -> 公共事件 ${eventId}`);
            };
        }

        // 向后兼容的方法
        static updateKeyConfig(key, eventId) {
            if (this._keyConfig.hasOwnProperty(key)) {
                this._keyConfig[key] = eventId;
                this._setupOptimizations();
                return true;
            }
            return false;
        }

        static getKeyConfig(key) {
            return this._keyConfig[key] || 0;
        }

        static getAllActiveKeys() {
            return this._activeKeys.slice();
        }
    }

    MugenButtonEvents.init();
}());