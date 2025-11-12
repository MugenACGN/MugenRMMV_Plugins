/*:
 * @plugindesc v1.03 在地图场景中按下特定键盘按键时调用公共事件
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
 *
 *
 * 可用动作：Ok, Cancel, Dash, PageUp, PageDown, Left, Up, Right, Down, All
 *
 * 本插件由Mugen技术部制作，并遵循AGPL-3.0许可证。
 * 如需授权，请联系Mugen技术部。Mugenacgn@163.com
 */
(function () {
    'use strict';

    var Imported = Imported || {};
    Imported.MugenButtonEvents = true;

    class MugenButtonEvents {
        static init() {
            this._imported = true;
            this._version = '1.02';

            this._loadConfig();
            this._setupKeyMapping();
            this._fixInputSystem(); // 修复Input系统
            this._extendCoreSystems();

            // 性能优化：预计算有效按键
            this._setupOptimizations();
        }

        static _fixInputSystem() {
            // 修复：确保Input对象有必要的兼容性方法
            if (typeof Input._isEscapeCompatible !== 'function') {
                Input._isEscapeCompatible = function(keyName) {
                    return keyName === 'escape' || keyName === 'cancel';
                };
            }
        }

        static _loadConfig() {
            const parameters = PluginManager.parameters('MugenButtonEvents');

            // 使用对象字面量一次性创建配置，避免多次属性赋值
            this._keyConfig = {
                tilde: Number(parameters['KeyTilde'] || 0),
                1: Number(parameters['Key1'] || 0),
                2: Number(parameters['Key2'] || 0),
                3: Number(parameters['Key3'] || 0),
                4: Number(parameters['Key4'] || 0),
                5: Number(parameters['Key5'] || 0),
                6: Number(parameters['Key6'] || 0),
                7: Number(parameters['Key7'] || 0),
                8: Number(parameters['Key8'] || 0),
                9: Number(parameters['Key9'] || 0),
                0: Number(parameters['Key0'] || 0),
                minus: Number(parameters['KeyMinus'] || 0),
                equal: Number(parameters['KeyEqual'] || 0),
                q: Number(parameters['KeyQ'] || 0),
                w: Number(parameters['KeyW'] || 0),
                e: Number(parameters['KeyE'] || 0),
                r: Number(parameters['KeyR'] || 0),
                t: Number(parameters['KeyT'] || 0),
                y: Number(parameters['KeyY'] || 0),
                u: Number(parameters['KeyU'] || 0),
                i: Number(parameters['KeyI'] || 0),
                o: Number(parameters['KeyO'] || 0),
                p: Number(parameters['KeyP'] || 0),
                foreBrack: Number(parameters['KeyBracketOpen'] || 0),
                backBrack: Number(parameters['KeyBracketClose'] || 0),
                backSlash: Number(parameters['KeyBackslash'] || 0),
                a: Number(parameters['KeyA'] || 0),
                s: Number(parameters['KeyS'] || 0),
                d: Number(parameters['KeyD'] || 0),
                f: Number(parameters['KeyF'] || 0),
                g: Number(parameters['KeyG'] || 0),
                h: Number(parameters['KeyH'] || 0),
                j: Number(parameters['KeyJ'] || 0),
                k: Number(parameters['KeyK'] || 0),
                l: Number(parameters['KeyL'] || 0),
                semicolon: Number(parameters['KeySemicolon'] || 0),
                quote: Number(parameters['KeyQuote'] || 0),
                enter: Number(parameters['KeyEnter'] || 0),
                keyShift: Number(parameters['KeyShift'] || 0),
                z: Number(parameters['KeyZ'] || 0),
                x: Number(parameters['KeyX'] || 0),
                c: Number(parameters['KeyC'] || 0),
                v: Number(parameters['KeyV'] || 0),
                b: Number(parameters['KeyB'] || 0),
                n: Number(parameters['KeyN'] || 0),
                m: Number(parameters['KeyM'] || 0),
                comma: Number(parameters['KeyComma'] || 0),
                period: Number(parameters['KeyPeriod'] || 0),
                foreSlash: Number(parameters['KeySlash'] || 0),
                space: Number(parameters['KeySpace'] || 0),
                dirLeft: Number(parameters['KeyLeft'] || 0),
                dirUp: Number(parameters['KeyUp'] || 0),
                dirRight: Number(parameters['KeyRight'] || 0),
                dirDown: Number(parameters['KeyDown'] || 0),
                ins: Number(parameters['KeyInsert'] || 0),
                del: Number(parameters['KeyDelete'] || 0),
                home: Number(parameters['KeyHome'] || 0),
                end: Number(parameters['KeyEnd'] || 0),
                pageUp: Number(parameters['KeyPageUp'] || 0),
                pageDown: Number(parameters['KeyPageDown'] || 0),
                num0: Number(parameters['KeyNum0'] || 0),
                num1: Number(parameters['KeyNum1'] || 0),
                num2: Number(parameters['KeyNum2'] || 0),
                num3: Number(parameters['KeyNum3'] || 0),
                num4: Number(parameters['KeyNum4'] || 0),
                num5: Number(parameters['KeyNum5'] || 0),
                num6: Number(parameters['KeyNum6'] || 0),
                num7: Number(parameters['KeyNum7'] || 0),
                num8: Number(parameters['KeyNum8'] || 0),
                num9: Number(parameters['KeyNum9'] || 0),
                numPeriod: Number(parameters['KeyNumPeriod'] || 0),
                numPlus: Number(parameters['KeyNumPlus'] || 0),
                numMinus: Number(parameters['KeyNumMinus'] || 0),
                numTimes: Number(parameters['KeyNumMultiply'] || 0),
                numDivide: Number(parameters['KeyNumDivide'] || 0)
            };
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

            const keys = Object.keys(this._keyConfig);
            for (let i = 0, len = keys.length; i < len; i++) {
                const key = keys[i];
                const eventId = this._keyConfig[key];
                const keyCode = keyCodeMap[key];

                if (eventId !== 0 && keyCode) {
                    Input.keyMapper[keyCode] = key;
                }
            }
        }

        static _setupOptimizations() {
            this._activeKeys = [];
            const keys = Object.keys(this._keyConfig);

            for (let i = 0, len = keys.length; i < len; i++) {
                const key = keys[i];
                if (this._keyConfig[key] > 0) {
                    this._activeKeys.push(key);
                }
            }

            // 修复：不要缓存Input方法，因为它们依赖于this上下文
            // 只缓存不需要上下文的方法
            this._gameTempReserveCommonEvent = $gameTemp.reserveCommonEvent.bind($gameTemp);
        }

        static _extendCoreSystems() {
            this._extendInputSystem();
            this._extendSceneSystem();
            this._extendInterpreterSystem();
        }

        static _extendInputSystem() {
            // 性能优化：使用查找表而不是条件判断链
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
                    // 性能优化：直接赋值而不是使用Object.assign
                    const keyCodes = Object.keys(mapping);
                    for (let i = 0, len = keyCodes.length; i < len; i++) {
                        const keyCode = keyCodes[i];
                        this.keyMapper[keyCode] = mapping[keyCode];
                    }
                }
            };

            // 性能优化：预计算启用映射
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
                    // 性能优化：一次性设置所有映射
                    const actions = ['OK', 'CANCEL', 'DASH', 'PAGEUP', 'PAGEDOWN', 'LEFT', 'UP', 'RIGHT', 'DOWN'];
                    for (let i = 0, len = actions.length; i < len; i++) {
                        const mappings = enableMappings[actions[i]];
                        for (let j = 0, jLen = mappings.length; j < jLen; j++) {
                            const mapping = mappings[j];
                            if (MugenButtonEvents._keyConfig[mapping.key] !== 0) {
                                this.keyMapper[mapping.code] = mapping.key;
                            }
                        }
                    }
                } else {
                    const mappings = enableMappings[action];
                    if (mappings) {
                        for (let i = 0, len = mappings.length; i < len; i++) {
                            const mapping = mappings[i];
                            if (MugenButtonEvents._keyConfig[mapping.key] !== 0) {
                                this.keyMapper[mapping.code] = mapping.key;
                            }
                        }
                    }
                }
            };
        }

        static _extendSceneSystem() {
            const originalSceneBaseStart = Scene_Base.prototype.start;
            const originalSceneMapStart = Scene_Map.prototype.start;
            const originalSceneMapUpdate = Scene_Map.prototype.updateScene;

            Scene_Base.prototype.start = function() {
                originalSceneBaseStart.call(this);
                Input.mugenRestoreDefaultKeys('ALL');
            };

            Scene_Map.prototype.start = function() {
                originalSceneMapStart.call(this);
                Input.mugenEnableCustomKeys('ALL');
            };

            Scene_Map.prototype.updateScene = function() {
                originalSceneMapUpdate.call(this);

                if (SceneManager.isSceneChanging() || $gameMap.isEventRunning()) return;

                this._mugenCheckButtonEvents();
            };

            Scene_Map.prototype._mugenCheckButtonEvents = function() {
                // 性能优化：只遍历有效的按键
                const activeKeys = MugenButtonEvents._activeKeys;
                const keyConfig = MugenButtonEvents._keyConfig;

                for (let i = 0, len = activeKeys.length; i < len; i++) {
                    const key = activeKeys[i];
                    // 修复：直接调用Input.isRepeated，不要使用缓存版本
                    if (Input.isRepeated(key)) {
                        $gameTemp.reserveCommonEvent(keyConfig[key]);
                        break;
                    }
                }
            };
        }

        static _extendInterpreterSystem() {
            const originalPluginCommand = Game_Interpreter.prototype.pluginCommand;

            // 性能优化：使用查找表而不是条件判断链
            const commandMap = {
                'MugenRevertButton': '_mugenRevertButton',
                'MugenSwitchButton': '_mugenSwitchButton',
                'MugenTriggerButton': '_mugenTriggerButton'
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

                // 性能优化：使用查找表
                const buttonMap = { 'cancel': 'escape', 'dash': 'shift' };
                button = buttonMap[button] || button;

                Input._latestButton = button;
                Input._pressedTime = 0;
            };
        }
    }

    // 初始化插件
    MugenButtonEvents.init();
}());