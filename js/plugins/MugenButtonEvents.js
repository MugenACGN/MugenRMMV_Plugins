/*:
 * @plugindesc v1.1.0 自定义按键绑定公共事件
 * @author Mugen技术部 衬雨 Mieriki
 *
 * @param Common Event Config
 * @type text
 * @text 公共事件配置(JSON)
 * @desc 按键公共事件配置，JSON格式: {"q": 1, "space": 2}
 * @default {}
 *
 * @help
 * ============================================================================
 * Mugen自定义按键绑定公共事件 v1.1.0
 * ============================================================================
 *
 * 优化插件命令处理，采用映射表方式提高性能。
 *
 * 插件命令：
 *   MugenSetKeyConfig [json]    - 使用JSON设置按键配置
 *   MugenResetConfig           - 恢复为插件参数中的默认配置
 *   MugenSaveConfig            - 将当前配置保存到存档
 *   MugenLoadConfig            - 从存档加载配置
 *   MugenSetKey [按键名] [公共事件ID] - 修改单个按键配置
 *   MugenRevertButton [动作]   - 恢复按键默认功能
 *   MugenSwitchButton [动作]   - 启用自定义按键绑定
 *   MugenTriggerButton [动作]  - 模拟按键按下
 *
 * 示例：
 *   MugenSetKeyConfig {"q": 10, "space": 20, "enter": 30}
 *   MugenResetConfig
 *   MugenSetKey q 10
 *
 * 本插件由Mugen技术部制作，遵循AGPL-3.0许可证。
 * 技术支持：Mugenacgn@163.com
 *
 * 1.1.0 :
 *   - 重构按键配置方式, 使用json格式一次性配置所有按键
 *   - 新增动态按键绑定持久化
 *   - 通过优化实现比之前更快的配置读取, 更小的内存占用, 更快的按键检查
 * ============================================================================
 * 1.0.4 - 新增插件指令绑定按键功能(重启游戏时会失效)
 * 1.0.3 - 使用查表优化插件指令读取
 * 1.0.2 - 使用预缓存优化按键检查
 */
(function () {
    'use strict';

    var Imported = Imported || {};
    Imported.MugenButtonEvents = true;

    class MugenButtonEvents {
        static init() {
            this._imported = true;
            this._version = '2.2';

            this._setupKeyMappings();
            this._loadDefaultConfig();
            this._applyConfig();
            this._extendCoreSystems();
            this._setupOptimizations();
        }

        static _setupKeyMappings() {
            // 键码到键名的映射
            this._keyCodeToName = {
                // 字母键
                81: 'q', 87: 'w', 69: 'e', 82: 'r', 84: 't', 89: 'y', 85: 'u',
                73: 'i', 79: 'o', 80: 'p', 65: 'a', 83: 's', 68: 'd', 70: 'f',
                71: 'g', 72: 'h', 74: 'j', 75: 'k', 76: 'l', 90: 'z', 88: 'x',
                67: 'c', 86: 'v', 66: 'b', 78: 'n', 77: 'm',

                // 数字键
                49: '1', 50: '2', 51: '3', 52: '4', 53: '5',
                54: '6', 55: '7', 56: '8', 57: '9', 48: '0',

                // 符号键
                189: 'minus', 187: 'equal', 219: 'bracketopen', 221: 'bracketclose',
                220: 'backslash', 186: 'semicolon', 222: 'quote', 188: 'comma',
                190: 'period', 191: 'slash',

                // 功能键
                16: 'shift', 32: 'space', 13: 'enter', 9: 'tab', 27: 'escape',
                37: 'left', 39: 'right', 38: 'up', 40: 'down',
                45: 'insert', 46: 'delete', 36: 'home', 35: 'end',
                33: 'pageup', 34: 'pagedown',

                // 小键盘
                96: 'num0', 97: 'num1', 98: 'num2', 99: 'num3', 100: 'num4',
                101: 'num5', 102: 'num6', 103: 'num7', 104: 'num8', 105: 'num9',
                107: 'numplus', 109: 'numminus', 106: 'nummultiply', 111: 'numdivide',
                110: 'numperiod'
            };

            // 键名到键码的反向映射
            this._nameToKeyCode = {};
            for (const [code, name] of Object.entries(this._keyCodeToName)) {
                this._nameToKeyCode[name] = parseInt(code);
            }

            // 默认按键映射（RMMV标准）
            this._defaultKeyMappings = {
                13: 'ok',      // Enter
                32: 'ok',      // Space
                90: 'ok',      // Z
                88: 'escape',  // X
                45: 'escape',  // Insert
                96: 'escape',  // Num0
                16: 'shift',   // Shift
                33: 'pageup',  // PageUp
                81: 'pageup',  // Q
                34: 'pagedown',// PageDown
                87: 'pagedown',// W
                37: 'left',    // Left
                100: 'left',   // Num4
                38: 'up',      // Up
                104: 'up',     // Num8
                39: 'right',   // Right
                102: 'right',  // Num6
                40: 'down',    // Down
                98: 'down'     // Num2
            };
        }

        static _loadDefaultConfig() {
            const parameters = PluginManager.parameters('MugenButtonEvents');

            try {
                const configJson = parameters['Common Event Config'] || '{}';
                this._defaultConfig = JSON.parse(configJson);
                this._currentConfig = JSON.parse(JSON.stringify(this._defaultConfig));
            } catch (e) {
                console.error('MugenButtonEvents: 默认配置解析错误，使用空配置', e);
                this._defaultConfig = {};
                this._currentConfig = {};
            }
        }

        static _applyConfig() {
            // 恢复默认按键映射
            Input.keyMapper = {};
            Object.keys(this._defaultKeyMappings).forEach(code => {
                Input.keyMapper[code] = this._defaultKeyMappings[code];
            });

            // 应用公共事件配置
            Object.keys(this._currentConfig).forEach(key => {
                const eventId = this._currentConfig[key];
                if (eventId > 0) {
                    const keyCode = this._nameToKeyCode[key];
                    if (keyCode) {
                        Input.keyMapper[keyCode] = key;
                    }
                }
            });
        }

        static _setupOptimizations() {
            // 预计算活动公共事件按键
            this._activeKeys = Object.keys(this._currentConfig).filter(key =>
                this._currentConfig[key] > 0
            );

            this._lastTriggerTime = 0;
            this._triggerCooldown = 100;
        }

        static _extendCoreSystems() {
            this._extendSceneSystem();
            this._extendInterpreterSystem();
            this._extendSaveSystem();
        }

        static _extendSceneSystem() {
            const originalSceneMapUpdate = Scene_Map.prototype.update;

            Scene_Map.prototype.update = function() {
                originalSceneMapUpdate.call(this);
                this._mugenCheckButtonEvents();
            };

            Scene_Map.prototype._mugenCheckButtonEvents = function() {
                if (SceneManager.isSceneChanging() || $gameMap.isEventRunning()) return;

                const now = Date.now();
                if (now - MugenButtonEvents._lastTriggerTime < MugenButtonEvents._triggerCooldown) return;

                // 检查公共事件按键
                const activeKeys = MugenButtonEvents._activeKeys;
                const keyConfig = MugenButtonEvents._currentConfig;

                for (let i = 0, len = activeKeys.length; i < len; i++) {
                    const key = activeKeys[i];
                    if (Input.isRepeated(key)) {
                        $gameTemp.reserveCommonEvent(keyConfig[key]);
                        MugenButtonEvents._lastTriggerTime = now;
                        break;
                    }
                }
            };
        }

        static _extendInterpreterSystem() {
            const originalPluginCommand = Game_Interpreter.prototype.pluginCommand;

            // 插件命令映射表
            const commandMap = {
                'MugenSetKeyConfig': '_mugenSetKeyConfig',
                'MugenResetConfig': '_mugenResetConfig',
                'MugenSaveConfig': '_mugenSaveConfig',
                'MugenLoadConfig': '_mugenLoadConfig',
                'MugenSetKey': '_mugenSetKey',
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
                } else {
                    console.warn(`MugenButtonEvents: 未知的插件命令: ${command}`);
                }
            };

            Game_Interpreter.prototype._mugenSetKeyConfig = function(args) {
                if (!args.length) {
                    console.warn('MugenButtonEvents: MugenSetKeyConfig需要JSON参数');
                    return;
                }

                try {
                    // 合并所有参数为单个JSON字符串
                    const jsonString = args.join(' ');
                    const newConfig = JSON.parse(jsonString);

                    MugenButtonEvents._currentConfig = newConfig;
                    MugenButtonEvents._applyConfig();
                    MugenButtonEvents._setupOptimizations();

                    console.log('MugenButtonEvents: 已通过JSON设置按键配置', newConfig);
                } catch (e) {
                    console.error('MugenButtonEvents: JSON配置解析错误', e);
                }
            };

            Game_Interpreter.prototype._mugenResetConfig = function() {
                MugenButtonEvents._currentConfig = JSON.parse(JSON.stringify(MugenButtonEvents._defaultConfig));
                MugenButtonEvents._applyConfig();
                MugenButtonEvents._setupOptimizations();
                console.log('MugenButtonEvents: 已重置为默认配置');
            };

            Game_Interpreter.prototype._mugenSaveConfig = function() {
                if (!$gameSystem.mugenKeyConfig) {
                    $gameSystem.mugenKeyConfig = {};
                }
                $gameSystem.mugenKeyConfig = JSON.parse(JSON.stringify(MugenButtonEvents._currentConfig));
                console.log('MugenButtonEvents: 按键配置已保存到存档');
            };

            Game_Interpreter.prototype._mugenLoadConfig = function() {
                if ($gameSystem.mugenKeyConfig) {
                    MugenButtonEvents._currentConfig = JSON.parse(JSON.stringify($gameSystem.mugenKeyConfig));
                    MugenButtonEvents._applyConfig();
                    MugenButtonEvents._setupOptimizations();
                    console.log('MugenButtonEvents: 已从存档加载按键配置');
                } else {
                    console.warn('MugenButtonEvents: 没有找到保存的按键配置');
                }
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

                // 更新配置
                MugenButtonEvents._currentConfig[keyName] = eventId;

                // 更新按键映射
                const keyCode = MugenButtonEvents._nameToKeyCode[keyName];
                if (keyCode) {
                    if (eventId === 0) {
                        // 恢复默认映射（如果存在）
                        const defaultMapping = MugenButtonEvents._defaultKeyMappings[keyCode];
                        if (defaultMapping) {
                            Input.keyMapper[keyCode] = defaultMapping;
                        } else {
                            delete Input.keyMapper[keyCode];
                        }
                    } else {
                        Input.keyMapper[keyCode] = keyName;
                    }
                }

                // 重新构建活动按键列表
                MugenButtonEvents._setupOptimizations();

                console.log(`MugenButtonEvents: 已设置按键 ${keyName} -> 公共事件 ${eventId}`);
            };

            Game_Interpreter.prototype._mugenRevertButton = function(args) {
                if (!args.length) return;

                const action = args[0].toUpperCase();
                const actionMappings = {
                    'OK': [13, 32, 90],
                    'CANCEL': [88, 45, 96],
                    'SHIFT': [16],
                    'PAGEUP': [33, 81],
                    'PAGEDOWN': [34, 87],
                    'LEFT': [37, 100],
                    'UP': [38, 104],
                    'RIGHT': [39, 102],
                    'DOWN': [40, 98],
                    'ALL': Object.keys(MugenButtonEvents._defaultKeyMappings).map(Number)
                };

                const keyCodes = actionMappings[action];
                if (keyCodes) {
                    keyCodes.forEach(keyCode => {
                        const defaultMapping = MugenButtonEvents._defaultKeyMappings[keyCode];
                        if (defaultMapping) {
                            Input.keyMapper[keyCode] = defaultMapping;
                        }
                    });
                    console.log(`MugenButtonEvents: 已恢复 ${action} 按键的默认功能`);
                } else {
                    console.warn(`MugenButtonEvents: 未知的动作类型: ${action}`);
                }
            };

            Game_Interpreter.prototype._mugenSwitchButton = function(args) {
                if (!args.length) return;

                const action = args[0].toUpperCase();
                const actionMappings = {
                    'OK': [13, 32, 90],
                    'CANCEL': [88, 45, 96],
                    'SHIFT': [16],
                    'PAGEUP': [33, 81],
                    'PAGEDOWN': [34, 87],
                    'LEFT': [37, 100],
                    'UP': [38, 104],
                    'RIGHT': [39, 102],
                    'DOWN': [40, 98]
                };

                const keyCodes = actionMappings[action];
                if (keyCodes) {
                    keyCodes.forEach(keyCode => {
                        const keyName = MugenButtonEvents._keyCodeToName[keyCode];
                        if (keyName && MugenButtonEvents._currentConfig[keyName] > 0) {
                            Input.keyMapper[keyCode] = keyName;
                        }
                    });
                    console.log(`MugenButtonEvents: 已启用 ${action} 按键的自定义绑定`);
                } else {
                    console.warn(`MugenButtonEvents: 未知的动作类型: ${action}`);
                }
            };

            Game_Interpreter.prototype._mugenTriggerButton = function(args) {
                if (!args.length) return;

                const button = args[0].toLowerCase();
                const buttonMap = {
                    'ok': 'ok',
                    'cancel': 'escape',
                    'shift': 'shift',
                    'pageup': 'pageup',
                    'pagedown': 'pagedown',
                    'left': 'left',
                    'up': 'up',
                    'right': 'right',
                    'down': 'down'
                };

                const buttonName = buttonMap[button] || button;
                Input._latestButton = buttonName;
                Input._pressedTime = 0;

                console.log(`MugenButtonEvents: 已模拟按下 ${button} 键`);
            };
        }

        static _extendSaveSystem() {
            // 确保配置随存档保存和加载
            const originalGameSystemClear = Game_System.prototype.clear;
            Game_System.prototype.clear = function() {
                originalGameSystemClear.call(this);
                this.mugenKeyConfig = null;
            };

            const originalGameSystemOnBeforeSave = Game_System.prototype.onBeforeSave;
            Game_System.prototype.onBeforeSave = function() {
                originalGameSystemOnBeforeSave && originalGameSystemOnBeforeSave.call(this);
                // 保存前确保配置是最新的
                if (this.mugenKeyConfig) {
                    this.mugenKeyConfig = JSON.parse(JSON.stringify(MugenButtonEvents._currentConfig));
                }
            };

            const originalGameSystemOnAfterLoad = Game_System.prototype.onAfterLoad;
            Game_System.prototype.onAfterLoad = function() {
                originalGameSystemOnAfterLoad && originalGameSystemOnAfterLoad.call(this);
                // 加载后应用配置
                if (this.mugenKeyConfig) {
                    MugenButtonEvents._currentConfig = JSON.parse(JSON.stringify(this.mugenKeyConfig));
                    MugenButtonEvents._applyConfig();
                    MugenButtonEvents._setupOptimizations();
                }
            };
        }

        // 公共API
        static getKeyConfig(key) {
            return this._currentConfig[key] || 0;
        }

        static getAllActiveKeys() {
            return this._activeKeys.slice();
        }

        static getKeyName(keyCode) {
            return this._keyCodeToName[keyCode];
        }

        static getKeyCode(keyName) {
            return this._nameToKeyCode[keyName];
        }
    }

    // 初始化插件
    MugenButtonEvents.init();
}());