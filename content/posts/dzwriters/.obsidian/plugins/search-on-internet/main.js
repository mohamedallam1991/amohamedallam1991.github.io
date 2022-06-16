'use strict';

var obsidian = require('obsidian');
var require$$0 = require('util');
var path = require('path');
var childProcess = require('child_process');
var fs = require('fs');
var os = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var childProcess__default = /*#__PURE__*/_interopDefaultLegacy(childProcess);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var DEFAULT_QUERY = {
    tags: [],
    query: '{{query}}',
    name: '',
    encode: true,
};
var DEFAULT_SETTING = {
    searches: [{
            tags: [],
            query: 'https://www.google.com/search?&q={{query}}',
            name: 'Google',
            encode: true,
        }, {
            tags: [],
            query: 'https://en.wikipedia.org/wiki/Special:Search/{{query}}',
            name: 'Wikipedia',
            encode: true,
        }],
    useIframe: true,
    usePopover: false,
};
var parseTags = function (inputs) {
    return inputs.split(',')
        .map(function (s) { return s.trim(); })
        .filter(function (s) { return /^#([A-Za-z])\w+$/.test(s); });
};
var SOISettingTab = /** @class */ (function (_super) {
    __extends(SOISettingTab, _super);
    function SOISettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    SOISettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        var plugin = this.plugin;
        new obsidian.Setting(containerEl)
            .setName('Open in iframe')
            .setDesc('If set to true, this will open your searches in an iframe within Obsidian. ' +
            'Otherwise, it will open in your default browser.')
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.useIframe)
                .onChange(function (new_value) {
                _this.plugin.settings.useIframe = new_value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('[Experimental] Open in popover')
            .setDesc('If set to true, this will open your searches in an iframe and it locals on a popover within Obsidian. ' +
            'You should install Hover Editor first to make this work.')
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.usePopover)
                .onChange(function (value) {
                _this.plugin.settings.usePopover = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        // Code mostly taken from https://github.com/SilentVoid13/Templater/blob/master/src/settings.ts
        plugin.settings.searches.forEach(function (search) {
            var div = containerEl.createEl('div');
            div.addClass('soi_div');
            new obsidian.Setting(div) //
                .addExtraButton(function (extra) {
                extra.setIcon('cross')
                    .setTooltip('Delete')
                    .onClick(function () {
                    var index = plugin.settings.searches.indexOf(search);
                    if (index > -1) {
                        plugin.settings.searches.splice(index, 1);
                        // Force refresh
                        _this.display();
                    }
                });
            })
                .addText(function (text) {
                return text.setPlaceholder('Search name')
                    .setValue(search.name)
                    .onChange(function (newValue) {
                    var index = plugin.settings.searches.indexOf(search);
                    if (index > -1) {
                        search.name = newValue;
                        plugin.saveSettings();
                        // title.textContent = newValue;
                    }
                });
            }).setName('Name')
                .setDesc('Name of the search. Click the cross to delete the search.');
            new obsidian.Setting(div)
                .setName('Encode')
                .setDesc('If set to true, this will encode raw text to be used in URLs. ' +
                'Otherwise, it will not encode your query.')
                .addToggle(function (toggle) {
                toggle.setValue(search.encode)
                    .onChange(function (newValue) {
                    var index = plugin.settings.searches.indexOf(search);
                    if (index > -1) {
                        search.encode = newValue;
                        plugin.saveSettings();
                    }
                });
            });
            new obsidian.Setting(div)
                .addTextArea(function (text) {
                var t = text.setPlaceholder('Search query')
                    .setValue(search.query)
                    .onChange(function (newQuery) {
                    var index = plugin.settings.searches.indexOf(search);
                    if (index > -1) {
                        search.query = newQuery;
                        plugin.saveSettings();
                    }
                });
                t.inputEl.setAttr('rows', 2);
                return t; //
            }).setName('URL')
                .setDesc('URL to open when executing the search. ' +
                'Use {{query}} to refer to the query, which is either the selected text, or the title of a note.');
            new obsidian.Setting(div).addText(function (text) {
                return text.setPlaceholder('')
                    .setValue(search.tags.join(', '))
                    .onChange(function (newValue) {
                    var index = plugin.settings.searches.indexOf(search);
                    if (index > -1) {
                        search.tags = parseTags(newValue);
                        plugin.saveSettings();
                    }
                });
            }).setName('Tags')
                .setDesc('Only add search to notes with these comma-separated tags. Leave empty to use all tags.');
        });
        var div = containerEl.createEl('div');
        div.addClass('soi_div2');
        var setting = new obsidian.Setting(containerEl)
            .addButton(function (button) {
            return button.setButtonText('Add Search').onClick(function () {
                plugin.settings.searches.push({
                    name: '',
                    query: '',
                    tags: [],
                    encode: true,
                });
                // Force refresh
                _this.display();
            });
        });
        setting.infoEl.remove();
        div.appendChild(containerEl.lastChild);
    };
    return SOISettingTab;
}(obsidian.PluginSettingTab));

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

let isDocker;

function hasDockerEnv() {
	try {
		fs__default["default"].statSync('/.dockerenv');
		return true;
	} catch (_) {
		return false;
	}
}

function hasDockerCGroup() {
	try {
		return fs__default["default"].readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
	} catch (_) {
		return false;
	}
}

var isDocker_1 = () => {
	if (isDocker === undefined) {
		isDocker = hasDockerEnv() || hasDockerCGroup();
	}

	return isDocker;
};

var isWsl_1 = createCommonjsModule(function (module) {




const isWsl = () => {
	if (process.platform !== 'linux') {
		return false;
	}

	if (os__default["default"].release().toLowerCase().includes('microsoft')) {
		if (isDocker_1()) {
			return false;
		}

		return true;
	}

	try {
		return fs__default["default"].readFileSync('/proc/version', 'utf8').toLowerCase().includes('microsoft') ?
			!isDocker_1() : false;
	} catch (_) {
		return false;
	}
};

if (process.env.__IS_WSL_TEST__) {
	module.exports = isWsl;
} else {
	module.exports = isWsl();
}
});

const {promisify} = require$$0__default["default"];






const pAccess = promisify(fs__default["default"].access);
const pReadFile = promisify(fs__default["default"].readFile);

// Path to included `xdg-open`.
const localXdgOpenPath = path__default["default"].join(__dirname, 'xdg-open');

/**
Get the mount point for fixed drives in WSL.

@inner
@returns {string} The mount point.
*/
const getWslDrivesMountPoint = (() => {
	// Default value for "root" param
	// according to https://docs.microsoft.com/en-us/windows/wsl/wsl-config
	const defaultMountPoint = '/mnt/';

	let mountPoint;

	return async function () {
		if (mountPoint) {
			// Return memoized mount point value
			return mountPoint;
		}

		const configFilePath = '/etc/wsl.conf';

		let isConfigFileExists = false;
		try {
			await pAccess(configFilePath, fs__default["default"].constants.F_OK);
			isConfigFileExists = true;
		} catch (_) {}

		if (!isConfigFileExists) {
			return defaultMountPoint;
		}

		const configContent = await pReadFile(configFilePath, {encoding: 'utf8'});
		const configMountPoint = /root\s*=\s*(.*)/g.exec(configContent);

		if (!configMountPoint) {
			return defaultMountPoint;
		}

		mountPoint = configMountPoint[1].trim();
		mountPoint = mountPoint.endsWith('/') ? mountPoint : mountPoint + '/';

		return mountPoint;
	};
})();

var open = async (target, options) => {
	if (typeof target !== 'string') {
		throw new TypeError('Expected a `target`');
	}

	options = {
		wait: false,
		background: false,
		allowNonzeroExitCode: false,
		...options
	};

	let command;
	let {app} = options;
	let appArguments = [];
	const cliArguments = [];
	const childProcessOptions = {};

	if (Array.isArray(app)) {
		appArguments = app.slice(1);
		app = app[0];
	}

	if (process.platform === 'darwin') {
		command = 'open';

		if (options.wait) {
			cliArguments.push('--wait-apps');
		}

		if (options.background) {
			cliArguments.push('--background');
		}

		if (app) {
			cliArguments.push('-a', app);
		}
	} else if (process.platform === 'win32' || (isWsl_1 && !isDocker_1())) {
		const mountPoint = await getWslDrivesMountPoint();

		command = isWsl_1 ?
			`${mountPoint}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe` :
			`${process.env.SYSTEMROOT}\\System32\\WindowsPowerShell\\v1.0\\powershell`;

		cliArguments.push(
			'-NoProfile',
			'-NonInteractive',
			'–ExecutionPolicy',
			'Bypass',
			'-EncodedCommand'
		);

		if (!isWsl_1) {
			childProcessOptions.windowsVerbatimArguments = true;
		}

		const encodedArguments = ['Start'];

		if (options.wait) {
			encodedArguments.push('-Wait');
		}

		if (app) {
			// Double quote with double quotes to ensure the inner quotes are passed through.
			// Inner quotes are delimited for PowerShell interpretation with backticks.
			encodedArguments.push(`"\`"${app}\`""`, '-ArgumentList');
			appArguments.unshift(target);
		} else {
			encodedArguments.push(`"${target}"`);
		}

		if (appArguments.length > 0) {
			appArguments = appArguments.map(arg => `"\`"${arg}\`""`);
			encodedArguments.push(appArguments.join(','));
		}

		// Using Base64-encoded command, accepted by PowerShell, to allow special characters.
		target = Buffer.from(encodedArguments.join(' '), 'utf16le').toString('base64');
	} else {
		if (app) {
			command = app;
		} else {
			// When bundled by Webpack, there's no actual package file path and no local `xdg-open`.
			const isBundled = !__dirname || __dirname === '/';

			// Check if local `xdg-open` exists and is executable.
			let exeLocalXdgOpen = false;
			try {
				await pAccess(localXdgOpenPath, fs__default["default"].constants.X_OK);
				exeLocalXdgOpen = true;
			} catch (_) {}

			const useSystemXdgOpen = process.versions.electron ||
				process.platform === 'android' || isBundled || !exeLocalXdgOpen;
			command = useSystemXdgOpen ? 'xdg-open' : localXdgOpenPath;
		}

		if (appArguments.length > 0) {
			cliArguments.push(...appArguments);
		}

		if (!options.wait) {
			// `xdg-open` will block the process unless stdio is ignored
			// and it's detached from the parent even if it's unref'd.
			childProcessOptions.stdio = 'ignore';
			childProcessOptions.detached = true;
		}
	}

	cliArguments.push(target);

	if (process.platform === 'darwin' && appArguments.length > 0) {
		cliArguments.push('--args', ...appArguments);
	}

	const subprocess = childProcess__default["default"].spawn(command, cliArguments, childProcessOptions);

	if (options.wait) {
		return new Promise((resolve, reject) => {
			subprocess.once('error', reject);

			subprocess.once('close', exitCode => {
				if (options.allowNonzeroExitCode && exitCode > 0) {
					reject(new Error(`Exited with code ${exitCode}`));
					return;
				}

				resolve(subprocess);
			});
		});
	}

	subprocess.unref();

	return subprocess;
};

var SearchModal = /** @class */ (function (_super) {
    __extends(SearchModal, _super);
    function SearchModal(app, plugin, query) {
        var _this = _super.call(this, app) || this;
        _this.plugin = plugin;
        _this.setPlaceholder('');
        _this.query = query;
        _this.setInstructions([{ command: '↑↓', purpose: 'to navigate' },
            { command: '↵', purpose: "to search ".concat(_this.query) },
            { command: 'esc', purpose: 'to dismiss' }]);
        return _this;
    }
    SearchModal.prototype.onOpen = function () {
        _super.prototype.onOpen.call(this);
        // const {contentEl} = this;
        this.inputEl.focus();
    };
    SearchModal.prototype.onClose = function () {
        _super.prototype.onClose.call(this);
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    SearchModal.prototype.getItemText = function (item) {
        return item.name;
    };
    SearchModal.prototype.renderSuggestion = function (item, el) {
        _super.prototype.renderSuggestion.call(this, item, el);
        el.innerHTML = "Search on: " + el.innerHTML;
    };
    SearchModal.prototype.getItems = function () {
        return this.plugin.settings.searches;
    };
    SearchModal.prototype.onChooseItem = function (item, evt) {
        this.plugin.openSearch(item, this.query);
    };
    return SearchModal;
}(obsidian.FuzzySuggestModal));

var SearchView = /** @class */ (function (_super) {
    __extends(SearchView, _super);
    function SearchView(plugin, leaf, query, site, url) {
        var _this = _super.call(this, leaf) || this;
        _this.query = query;
        _this.site = site;
        _this.url = url;
        _this.plugin = plugin;
        return _this;
    }
    SearchView.prototype.onOpen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.frame = document.createElement('iframe');
                this.frame.addClass("soi-site");
                this.frame.setAttr('style', 'height: 100%; width:100%');
                this.frame.setAttr('src', this.url);
                this.frame.setAttr('tabindex', '0');
                this.containerEl.children[1].appendChild(this.frame);
                return [2 /*return*/];
            });
        });
    };
    SearchView.prototype.getDisplayText = function () {
        return "".concat(this.site, ": ").concat(this.query);
    };
    SearchView.prototype.getViewType = function () {
        return 'Search on Internet';
    };
    return SearchView;
}(obsidian.ItemView));

// declare module 'obsidian' {
//   interface App {
//     plugins: {
//       enabledPlugins: Set<string>;
//       plugins: {
//         [id: string]: any;
//       };
//     };
//   }
// }
var SearchOnInternetPlugin = /** @class */ (function (_super) {
    __extends(SearchOnInternetPlugin, _super);
    function SearchOnInternetPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchOnInternetPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var plugin;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading search-on-internet');
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.settings.searches.forEach(function (search) {
                            _this.addCommand({
                                id: 'search-on-internet-' + search.name,
                                name: 'Perform search ' + search.name,
                                callback: function () { return __awaiter(_this, void 0, void 0, function () {
                                    var query;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                query = this.getSelectedText();
                                                if (!(query === null || query === '')) return [3 /*break*/, 2];
                                                return [4 /*yield*/, navigator.clipboard.readText()];
                                            case 1:
                                                query = _a.sent();
                                                _a.label = 2;
                                            case 2:
                                                plugin.openSearch(search, query);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); },
                            });
                        });
                        this.addSettingTab(new SOISettingTab(this.app, this));
                        plugin = this;
                        this.registerEvent(this.app.workspace.on('file-menu', function (menu, file, source) {
                            var _a, _b;
                            if (file === null) {
                                return;
                            }
                            var fileTags = (_b = (_a = _this.app.metadataCache.getFileCache(file)) === null || _a === void 0 ? void 0 : _a.tags) === null || _b === void 0 ? void 0 : _b.map(function (t) { return t.tag; });
                            _this.settings.searches.forEach(function (search) {
                                if (search.tags.length === 0 ||
                                    (fileTags === null || fileTags === void 0 ? void 0 : fileTags.some(function (t) { return search.tags.contains(t); }))) {
                                    menu.addItem(function (item) {
                                        item.setTitle("Search ".concat(search.name)).setIcon('search')
                                            .onClick(function (evt) {
                                            plugin.openSearch(search, file.basename);
                                        });
                                    });
                                }
                            });
                        }));
                        this.addCommand({
                            id: 'search-on-internet',
                            name: 'Perform search',
                            callback: function () {
                                var query = _this.getSelectedText();
                                if (query === null || query === '') {
                                    var activeView = _this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                                    if (activeView == null) {
                                        return;
                                    }
                                    query = activeView.getDisplayText();
                                }
                                var modal = new SearchModal(plugin.app, plugin, query);
                                modal.open();
                            },
                        });
                        this.addCommand({
                            id: "paste-text",
                            name: "",
                            editorCallback: function (editor) { return __awaiter(_this, void 0, void 0, function () {
                                var clipboardText;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, navigator.clipboard.readText()];
                                        case 1:
                                            clipboardText = _a.sent();
                                            console.log(clipboardText);
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                        });
                        // Preview mode
                        this.onDom = function (event) {
                            var fileMenu = new obsidian.Menu(plugin.app);
                            // @ts-ignore
                            fileMenu.dom.classList.add('soi-file-menu');
                            // Functionality: Open external link in Iframe.
                            var emptyMenu = true;
                            if (event.target) {
                                // @ts-ignore
                                var classes = event.target.classList;
                                // @ts-ignore
                                if (classes.contains('cm-url') || classes.contains('external-link')) {
                                    // @ts-ignore
                                    var url_1 = classes.contains('cm-url') ? event.target.textContent : event.target.href;
                                    fileMenu.addItem(function (item) {
                                        item.setIcon('search').setTitle('Open in IFrame').onClick(function () {
                                            plugin.openSearch({
                                                tags: [],
                                                query: '{{query}}',
                                                name: '',
                                                encode: false,
                                            }, url_1, null);
                                        });
                                    });
                                    emptyMenu = false;
                                }
                            }
                            emptyMenu = emptyMenu && !plugin.handleContext(fileMenu);
                            if (!emptyMenu) {
                                fileMenu.showAtPosition({
                                    x: event.x,
                                    y: event.y,
                                });
                                event.preventDefault();
                            }
                        };
                        this.onDomSettings = {};
                        document.on('contextmenu', '.markdown-preview-view', this.onDom, this.onDomSettings);
                        // Remove this ignore when the obsidian package is updated on npm
                        // Editor mode
                        // @ts-ignore
                        this.registerEvent(this.app.workspace.on('editor-menu', function (menu, editor, view) {
                            _this.handleContext(menu);
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchOnInternetPlugin.prototype.getSelectedText = function () {
        var wSelection = window.getSelection();
        var docSelection = document === null || document === void 0 ? void 0 : document.getSelection();
        if (wSelection) {
            return wSelection.toString();
        }
        else if (document && docSelection.type != 'Control') {
            return docSelection.toString();
        }
        return null;
    };
    SearchOnInternetPlugin.prototype.handleContext = function (menu) {
        var _this = this;
        var query = this.getSelectedText();
        var hasSelection = !(query === null || query.trim() === '');
        if (!hasSelection) {
            return false;
        }
        var _loop_1 = function (searchsetting) {
            menu.addItem(function (item) {
                item.setTitle('Search on ' + searchsetting.name)
                    .setIcon('search')
                    .onClick(function (evt) { return _this.openSearch(searchsetting, query, null); });
            });
        };
        for (var _i = 0, _a = this.settings.searches; _i < _a.length; _i++) {
            var searchsetting = _a[_i];
            _loop_1(searchsetting);
        }
        return true;
    };
    SearchOnInternetPlugin.prototype.openSearch = function (search, query, activeView) {
        if (activeView === void 0) { activeView = null; }
        return __awaiter(this, void 0, void 0, function () {
            var encodedQuery, url, leaf, _a, view;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        encodedQuery = query;
                        if (search.encode) {
                            encodedQuery = encodeURIComponent(query);
                        }
                        url = search.query.replace('{{title}}', encodedQuery)
                            .replace('{{query}}', encodedQuery);
                        console.log("SOI: Opening URL ".concat(url));
                        if (!this.settings.useIframe) return [3 /*break*/, 7];
                        if (!activeView) return [3 /*break*/, 1];
                        activeView.frame.setAttr('src', url);
                        activeView.url = url;
                        return [3 /*break*/, 6];
                    case 1:
                        if (!this.settings.usePopover) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.app.plugins.plugins['obsidian-hover-editor'].spawnPopover()];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = this.app.workspace.getLeaf(!(this.app.workspace.activeLeaf.view.getViewType() === 'empty'));
                        _b.label = 4;
                    case 4:
                        leaf = _a;
                        console.log("leaf = ", leaf);
                        view = new SearchView(this, leaf, query, search.name, url);
                        return [4 /*yield*/, (leaf === null || leaf === void 0 ? void 0 : leaf.open(view))];
                    case 5:
                        _b.sent();
                        leaf ? this.app.workspace.setActiveLeaf(leaf) : undefined;
                        _b.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, open(url)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    SearchOnInternetPlugin.prototype.onunload = function () {
        console.log('unloading search-on-internet');
        document.off('contextmenu', '.markdown-preview-view', this.onDom, this.onDomSettings);
    };
    SearchOnInternetPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadedSettings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        loadedSettings = _a.sent();
                        if (loadedSettings && loadedSettings.hasOwnProperty('searches')) {
                            loadedSettings.searches = Array.from(loadedSettings.searches.map(function (s) { return Object.assign({}, DEFAULT_QUERY, s); }));
                            this.settings = loadedSettings;
                        }
                        else {
                            this.settings = DEFAULT_SETTING;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchOnInternetPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SearchOnInternetPlugin;
}(obsidian.Plugin));

module.exports = SearchOnInternetPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNldHRpbmdzLnRzIiwibm9kZV9tb2R1bGVzL2lzLWRvY2tlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pcy13c2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvb3Blbi9pbmRleC5qcyIsIm1vZGFsLnRzIiwidmlldy50cyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQge0FwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZ30gZnJvbSAnb2JzaWRpYW4nO1xyXG5pbXBvcnQgU2VhcmNoT25JbnRlcm5ldFBsdWdpbiBmcm9tICcuL21haW4nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hTZXR0aW5nIHtcclxuICAgIHRhZ3M6IHN0cmluZ1tdO1xyXG4gICAgcXVlcnk6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVuY29kZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTT0lTZXR0aW5ncyB7XHJcbiAgICBzZWFyY2hlczogU2VhcmNoU2V0dGluZ1tdO1xyXG4gICAgdXNlSWZyYW1lOiBib29sZWFuO1xyXG4gICAgdXNlUG9wb3ZlcjogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUVVFUlk6IFNlYXJjaFNldHRpbmcgPSB7XHJcbiAgdGFnczogW10sXHJcbiAgcXVlcnk6ICd7e3F1ZXJ5fX0nLFxyXG4gIG5hbWU6ICcnLFxyXG4gIGVuY29kZTogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkc6IFNPSVNldHRpbmdzID0ge1xyXG4gIHNlYXJjaGVzOiBbe1xyXG4gICAgdGFnczogW10gYXMgc3RyaW5nW10sXHJcbiAgICBxdWVyeTogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoPyZxPXt7cXVlcnl9fScsXHJcbiAgICBuYW1lOiAnR29vZ2xlJyxcclxuICAgIGVuY29kZTogdHJ1ZSxcclxuICB9IGFzIFNlYXJjaFNldHRpbmcsIHtcclxuICAgIHRhZ3M6IFtdIGFzIHN0cmluZ1tdLFxyXG4gICAgcXVlcnk6ICdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlNlYXJjaC97e3F1ZXJ5fX0nLFxyXG4gICAgbmFtZTogJ1dpa2lwZWRpYScsXHJcbiAgICBlbmNvZGU6IHRydWUsXHJcbiAgfSBhcyBTZWFyY2hTZXR0aW5nXSxcclxuICB1c2VJZnJhbWU6IHRydWUsXHJcbiAgdXNlUG9wb3ZlcjogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBwYXJzZVRhZ3MgPSBmdW5jdGlvbihpbnB1dHM6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICByZXR1cm4gaW5wdXRzLnNwbGl0KCcsJylcclxuICAgICAgLm1hcCgocykgPT4gcy50cmltKCkpXHJcbiAgICAgIC5maWx0ZXIoKHMpID0+IC9eIyhbQS1aYS16XSlcXHcrJC8udGVzdChzKSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNPSVNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcclxuICAgIHBsdWdpbjogU2VhcmNoT25JbnRlcm5ldFBsdWdpbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBTZWFyY2hPbkludGVybmV0UGx1Z2luKSB7XHJcbiAgICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheSgpOiB2b2lkIHtcclxuICAgICAgY29uc3Qge2NvbnRhaW5lckVsfSA9IHRoaXM7XHJcblxyXG4gICAgICBjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW47XHJcblxyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgIC5zZXROYW1lKCdPcGVuIGluIGlmcmFtZScpXHJcbiAgICAgICAgICAuc2V0RGVzYygnSWYgc2V0IHRvIHRydWUsIHRoaXMgd2lsbCBvcGVuIHlvdXIgc2VhcmNoZXMgaW4gYW4gaWZyYW1lIHdpdGhpbiBPYnNpZGlhbi4gJyArXHJcbiAgICAgICAgICAgICAgICAnT3RoZXJ3aXNlLCBpdCB3aWxsIG9wZW4gaW4geW91ciBkZWZhdWx0IGJyb3dzZXIuJylcclxuICAgICAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xyXG4gICAgICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlSWZyYW1lKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKChuZXdfdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlSWZyYW1lID0gbmV3X3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgLnNldE5hbWUoJ1tFeHBlcmltZW50YWxdIE9wZW4gaW4gcG9wb3ZlcicpXHJcbiAgICAgICAgLnNldERlc2MoJ0lmIHNldCB0byB0cnVlLCB0aGlzIHdpbGwgb3BlbiB5b3VyIHNlYXJjaGVzIGluIGFuIGlmcmFtZSBhbmQgaXQgbG9jYWxzIG9uIGEgcG9wb3ZlciB3aXRoaW4gT2JzaWRpYW4uICcgK1xyXG4gICAgICAgICAgJ1lvdSBzaG91bGQgaW5zdGFsbCBIb3ZlciBFZGl0b3IgZmlyc3QgdG8gbWFrZSB0aGlzIHdvcmsuJylcclxuICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcclxuICAgICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VQb3BvdmVyKVxyXG4gICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlUG9wb3ZlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDb2RlIG1vc3RseSB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9TaWxlbnRWb2lkMTMvVGVtcGxhdGVyL2Jsb2IvbWFzdGVyL3NyYy9zZXR0aW5ncy50c1xyXG4gICAgICBwbHVnaW4uc2V0dGluZ3Muc2VhcmNoZXMuZm9yRWFjaCgoc2VhcmNoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gY29udGFpbmVyRWwuY3JlYXRlRWwoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5hZGRDbGFzcygnc29pX2RpdicpO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhkaXYpLy9cclxuICAgICAgICAgICAgLmFkZEV4dHJhQnV0dG9uKChleHRyYSkgPT4ge1xyXG4gICAgICAgICAgICAgIGV4dHJhLnNldEljb24oJ2Nyb3NzJylcclxuICAgICAgICAgICAgICAgICAgLnNldFRvb2x0aXAoJ0RlbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsdWdpbi5zZXR0aW5ncy5zZWFyY2hlcy5pbmRleE9mKHNlYXJjaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2VhcmNoZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcmNlIHJlZnJlc2hcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRleHQuc2V0UGxhY2Vob2xkZXIoJ1NlYXJjaCBuYW1lJylcclxuICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHNlYXJjaC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwbHVnaW4uc2V0dGluZ3Muc2VhcmNoZXMuaW5kZXhPZihzZWFyY2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2gubmFtZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGUudGV4dENvbnRlbnQgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5zZXROYW1lKCdOYW1lJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ05hbWUgb2YgdGhlIHNlYXJjaC4gQ2xpY2sgdGhlIGNyb3NzIHRvIGRlbGV0ZSB0aGUgc2VhcmNoLicpO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhkaXYpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdFbmNvZGUnKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnSWYgc2V0IHRvIHRydWUsIHRoaXMgd2lsbCBlbmNvZGUgcmF3IHRleHQgdG8gYmUgdXNlZCBpbiBVUkxzLiAnICtcclxuICAgICAgICAgICAgICAgICAgJ090aGVyd2lzZSwgaXQgd2lsbCBub3QgZW5jb2RlIHlvdXIgcXVlcnkuJylcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHNlYXJjaC5lbmNvZGUpXHJcbiAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgobmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsdWdpbi5zZXR0aW5ncy5zZWFyY2hlcy5pbmRleE9mKHNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaC5lbmNvZGUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhkaXYpXHJcbiAgICAgICAgICAgIC5hZGRUZXh0QXJlYSgodGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHQgPSB0ZXh0LnNldFBsYWNlaG9sZGVyKCdTZWFyY2ggcXVlcnknKVxyXG4gICAgICAgICAgICAgICAgICAuc2V0VmFsdWUoc2VhcmNoLnF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKG5ld1F1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwbHVnaW4uc2V0dGluZ3Muc2VhcmNoZXMuaW5kZXhPZihzZWFyY2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2gucXVlcnkgPSBuZXdRdWVyeTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHQuaW5wdXRFbC5zZXRBdHRyKCdyb3dzJywgMik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHQ7Ly9cclxuICAgICAgICAgICAgfSkuc2V0TmFtZSgnVVJMJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ1VSTCB0byBvcGVuIHdoZW4gZXhlY3V0aW5nIHRoZSBzZWFyY2guICcgK1xyXG4gICAgICAgICAgICAgICAgJ1VzZSB7e3F1ZXJ5fX0gdG8gcmVmZXIgdG8gdGhlIHF1ZXJ5LCB3aGljaCBpcyBlaXRoZXIgdGhlIHNlbGVjdGVkIHRleHQsIG9yIHRoZSB0aXRsZSBvZiBhIG5vdGUuJyk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoZGl2KS5hZGRUZXh0KCh0ZXh0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGV4dC5zZXRQbGFjZWhvbGRlcignJylcclxuICAgICAgICAgICAgICAuc2V0VmFsdWUoc2VhcmNoLnRhZ3Muam9pbignLCAnKSlcclxuICAgICAgICAgICAgICAub25DaGFuZ2UoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsdWdpbi5zZXR0aW5ncy5zZWFyY2hlcy5pbmRleE9mKHNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICBzZWFyY2gudGFncyA9IHBhcnNlVGFncyhuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5zZXROYW1lKCdUYWdzJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ09ubHkgYWRkIHNlYXJjaCB0byBub3RlcyB3aXRoIHRoZXNlIGNvbW1hLXNlcGFyYXRlZCB0YWdzLiBMZWF2ZSBlbXB0eSB0byB1c2UgYWxsIHRhZ3MuJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGl2ID0gY29udGFpbmVyRWwuY3JlYXRlRWwoJ2RpdicpO1xyXG4gICAgICBkaXYuYWRkQ2xhc3MoJ3NvaV9kaXYyJyk7XHJcblxyXG4gICAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAuYWRkQnV0dG9uKChidXR0b24pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbi5zZXRCdXR0b25UZXh0KCdBZGQgU2VhcmNoJykub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnNlYXJjaGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogJycsXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBbXSxcclxuICAgICAgICAgICAgICAgIGVuY29kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICB9IGFzIFNlYXJjaFNldHRpbmcpO1xyXG4gICAgICAgICAgICAgIC8vIEZvcmNlIHJlZnJlc2hcclxuICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgc2V0dGluZy5pbmZvRWwucmVtb3ZlKCk7XHJcblxyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyRWwubGFzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmxldCBpc0RvY2tlcjtcblxuZnVuY3Rpb24gaGFzRG9ja2VyRW52KCkge1xuXHR0cnkge1xuXHRcdGZzLnN0YXRTeW5jKCcvLmRvY2tlcmVudicpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChfKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhc0RvY2tlckNHcm91cCgpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZnMucmVhZEZpbGVTeW5jKCcvcHJvYy9zZWxmL2Nncm91cCcsICd1dGY4JykuaW5jbHVkZXMoJ2RvY2tlcicpO1xuXHR9IGNhdGNoIChfKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuXHRpZiAoaXNEb2NrZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdGlzRG9ja2VyID0gaGFzRG9ja2VyRW52KCkgfHwgaGFzRG9ja2VyQ0dyb3VwKCk7XG5cdH1cblxuXHRyZXR1cm4gaXNEb2NrZXI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgaXNEb2NrZXIgPSByZXF1aXJlKCdpcy1kb2NrZXInKTtcblxuY29uc3QgaXNXc2wgPSAoKSA9PiB7XG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnbGludXgnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKG9zLnJlbGVhc2UoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdtaWNyb3NvZnQnKSkge1xuXHRcdGlmIChpc0RvY2tlcigpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR0cnkge1xuXHRcdHJldHVybiBmcy5yZWFkRmlsZVN5bmMoJy9wcm9jL3ZlcnNpb24nLCAndXRmOCcpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21pY3Jvc29mdCcpID9cblx0XHRcdCFpc0RvY2tlcigpIDogZmFsc2U7XG5cdH0gY2F0Y2ggKF8pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbmlmIChwcm9jZXNzLmVudi5fX0lTX1dTTF9URVNUX18pIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBpc1dzbDtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzID0gaXNXc2woKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtwcm9taXNpZnl9ID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IGlzV3NsID0gcmVxdWlyZSgnaXMtd3NsJyk7XG5jb25zdCBpc0RvY2tlciA9IHJlcXVpcmUoJ2lzLWRvY2tlcicpO1xuXG5jb25zdCBwQWNjZXNzID0gcHJvbWlzaWZ5KGZzLmFjY2Vzcyk7XG5jb25zdCBwUmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xuXG4vLyBQYXRoIHRvIGluY2x1ZGVkIGB4ZGctb3BlbmAuXG5jb25zdCBsb2NhbFhkZ09wZW5QYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ3hkZy1vcGVuJyk7XG5cbi8qKlxuR2V0IHRoZSBtb3VudCBwb2ludCBmb3IgZml4ZWQgZHJpdmVzIGluIFdTTC5cblxuQGlubmVyXG5AcmV0dXJucyB7c3RyaW5nfSBUaGUgbW91bnQgcG9pbnQuXG4qL1xuY29uc3QgZ2V0V3NsRHJpdmVzTW91bnRQb2ludCA9ICgoKSA9PiB7XG5cdC8vIERlZmF1bHQgdmFsdWUgZm9yIFwicm9vdFwiIHBhcmFtXG5cdC8vIGFjY29yZGluZyB0byBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy93aW5kb3dzL3dzbC93c2wtY29uZmlnXG5cdGNvbnN0IGRlZmF1bHRNb3VudFBvaW50ID0gJy9tbnQvJztcblxuXHRsZXQgbW91bnRQb2ludDtcblxuXHRyZXR1cm4gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGlmIChtb3VudFBvaW50KSB7XG5cdFx0XHQvLyBSZXR1cm4gbWVtb2l6ZWQgbW91bnQgcG9pbnQgdmFsdWVcblx0XHRcdHJldHVybiBtb3VudFBvaW50O1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbmZpZ0ZpbGVQYXRoID0gJy9ldGMvd3NsLmNvbmYnO1xuXG5cdFx0bGV0IGlzQ29uZmlnRmlsZUV4aXN0cyA9IGZhbHNlO1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBwQWNjZXNzKGNvbmZpZ0ZpbGVQYXRoLCBmcy5jb25zdGFudHMuRl9PSyk7XG5cdFx0XHRpc0NvbmZpZ0ZpbGVFeGlzdHMgPSB0cnVlO1xuXHRcdH0gY2F0Y2ggKF8pIHt9XG5cblx0XHRpZiAoIWlzQ29uZmlnRmlsZUV4aXN0cykge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRNb3VudFBvaW50O1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbmZpZ0NvbnRlbnQgPSBhd2FpdCBwUmVhZEZpbGUoY29uZmlnRmlsZVBhdGgsIHtlbmNvZGluZzogJ3V0ZjgnfSk7XG5cdFx0Y29uc3QgY29uZmlnTW91bnRQb2ludCA9IC9yb290XFxzKj1cXHMqKC4qKS9nLmV4ZWMoY29uZmlnQ29udGVudCk7XG5cblx0XHRpZiAoIWNvbmZpZ01vdW50UG9pbnQpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0TW91bnRQb2ludDtcblx0XHR9XG5cblx0XHRtb3VudFBvaW50ID0gY29uZmlnTW91bnRQb2ludFsxXS50cmltKCk7XG5cdFx0bW91bnRQb2ludCA9IG1vdW50UG9pbnQuZW5kc1dpdGgoJy8nKSA/IG1vdW50UG9pbnQgOiBtb3VudFBvaW50ICsgJy8nO1xuXG5cdFx0cmV0dXJuIG1vdW50UG9pbnQ7XG5cdH07XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jICh0YXJnZXQsIG9wdGlvbnMpID0+IHtcblx0aWYgKHR5cGVvZiB0YXJnZXQgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBgdGFyZ2V0YCcpO1xuXHR9XG5cblx0b3B0aW9ucyA9IHtcblx0XHR3YWl0OiBmYWxzZSxcblx0XHRiYWNrZ3JvdW5kOiBmYWxzZSxcblx0XHRhbGxvd05vbnplcm9FeGl0Q29kZTogZmFsc2UsXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXG5cdGxldCBjb21tYW5kO1xuXHRsZXQge2FwcH0gPSBvcHRpb25zO1xuXHRsZXQgYXBwQXJndW1lbnRzID0gW107XG5cdGNvbnN0IGNsaUFyZ3VtZW50cyA9IFtdO1xuXHRjb25zdCBjaGlsZFByb2Nlc3NPcHRpb25zID0ge307XG5cblx0aWYgKEFycmF5LmlzQXJyYXkoYXBwKSkge1xuXHRcdGFwcEFyZ3VtZW50cyA9IGFwcC5zbGljZSgxKTtcblx0XHRhcHAgPSBhcHBbMF07XG5cdH1cblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbicpIHtcblx0XHRjb21tYW5kID0gJ29wZW4nO1xuXG5cdFx0aWYgKG9wdGlvbnMud2FpdCkge1xuXHRcdFx0Y2xpQXJndW1lbnRzLnB1c2goJy0td2FpdC1hcHBzJyk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMuYmFja2dyb3VuZCkge1xuXHRcdFx0Y2xpQXJndW1lbnRzLnB1c2goJy0tYmFja2dyb3VuZCcpO1xuXHRcdH1cblxuXHRcdGlmIChhcHApIHtcblx0XHRcdGNsaUFyZ3VtZW50cy5wdXNoKCctYScsIGFwcCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgfHwgKGlzV3NsICYmICFpc0RvY2tlcigpKSkge1xuXHRcdGNvbnN0IG1vdW50UG9pbnQgPSBhd2FpdCBnZXRXc2xEcml2ZXNNb3VudFBvaW50KCk7XG5cblx0XHRjb21tYW5kID0gaXNXc2wgP1xuXHRcdFx0YCR7bW91bnRQb2ludH1jL1dpbmRvd3MvU3lzdGVtMzIvV2luZG93c1Bvd2VyU2hlbGwvdjEuMC9wb3dlcnNoZWxsLmV4ZWAgOlxuXHRcdFx0YCR7cHJvY2Vzcy5lbnYuU1lTVEVNUk9PVH1cXFxcU3lzdGVtMzJcXFxcV2luZG93c1Bvd2VyU2hlbGxcXFxcdjEuMFxcXFxwb3dlcnNoZWxsYDtcblxuXHRcdGNsaUFyZ3VtZW50cy5wdXNoKFxuXHRcdFx0Jy1Ob1Byb2ZpbGUnLFxuXHRcdFx0Jy1Ob25JbnRlcmFjdGl2ZScsXG5cdFx0XHQn4oCTRXhlY3V0aW9uUG9saWN5Jyxcblx0XHRcdCdCeXBhc3MnLFxuXHRcdFx0Jy1FbmNvZGVkQ29tbWFuZCdcblx0XHQpO1xuXG5cdFx0aWYgKCFpc1dzbCkge1xuXHRcdFx0Y2hpbGRQcm9jZXNzT3B0aW9ucy53aW5kb3dzVmVyYmF0aW1Bcmd1bWVudHMgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVuY29kZWRBcmd1bWVudHMgPSBbJ1N0YXJ0J107XG5cblx0XHRpZiAob3B0aW9ucy53YWl0KSB7XG5cdFx0XHRlbmNvZGVkQXJndW1lbnRzLnB1c2goJy1XYWl0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKGFwcCkge1xuXHRcdFx0Ly8gRG91YmxlIHF1b3RlIHdpdGggZG91YmxlIHF1b3RlcyB0byBlbnN1cmUgdGhlIGlubmVyIHF1b3RlcyBhcmUgcGFzc2VkIHRocm91Z2guXG5cdFx0XHQvLyBJbm5lciBxdW90ZXMgYXJlIGRlbGltaXRlZCBmb3IgUG93ZXJTaGVsbCBpbnRlcnByZXRhdGlvbiB3aXRoIGJhY2t0aWNrcy5cblx0XHRcdGVuY29kZWRBcmd1bWVudHMucHVzaChgXCJcXGBcIiR7YXBwfVxcYFwiXCJgLCAnLUFyZ3VtZW50TGlzdCcpO1xuXHRcdFx0YXBwQXJndW1lbnRzLnVuc2hpZnQodGFyZ2V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW5jb2RlZEFyZ3VtZW50cy5wdXNoKGBcIiR7dGFyZ2V0fVwiYCk7XG5cdFx0fVxuXG5cdFx0aWYgKGFwcEFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRhcHBBcmd1bWVudHMgPSBhcHBBcmd1bWVudHMubWFwKGFyZyA9PiBgXCJcXGBcIiR7YXJnfVxcYFwiXCJgKTtcblx0XHRcdGVuY29kZWRBcmd1bWVudHMucHVzaChhcHBBcmd1bWVudHMuam9pbignLCcpKTtcblx0XHR9XG5cblx0XHQvLyBVc2luZyBCYXNlNjQtZW5jb2RlZCBjb21tYW5kLCBhY2NlcHRlZCBieSBQb3dlclNoZWxsLCB0byBhbGxvdyBzcGVjaWFsIGNoYXJhY3RlcnMuXG5cdFx0dGFyZ2V0ID0gQnVmZmVyLmZyb20oZW5jb2RlZEFyZ3VtZW50cy5qb2luKCcgJyksICd1dGYxNmxlJykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuXHR9IGVsc2Uge1xuXHRcdGlmIChhcHApIHtcblx0XHRcdGNvbW1hbmQgPSBhcHA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFdoZW4gYnVuZGxlZCBieSBXZWJwYWNrLCB0aGVyZSdzIG5vIGFjdHVhbCBwYWNrYWdlIGZpbGUgcGF0aCBhbmQgbm8gbG9jYWwgYHhkZy1vcGVuYC5cblx0XHRcdGNvbnN0IGlzQnVuZGxlZCA9ICFfX2Rpcm5hbWUgfHwgX19kaXJuYW1lID09PSAnLyc7XG5cblx0XHRcdC8vIENoZWNrIGlmIGxvY2FsIGB4ZGctb3BlbmAgZXhpc3RzIGFuZCBpcyBleGVjdXRhYmxlLlxuXHRcdFx0bGV0IGV4ZUxvY2FsWGRnT3BlbiA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcEFjY2Vzcyhsb2NhbFhkZ09wZW5QYXRoLCBmcy5jb25zdGFudHMuWF9PSyk7XG5cdFx0XHRcdGV4ZUxvY2FsWGRnT3BlbiA9IHRydWU7XG5cdFx0XHR9IGNhdGNoIChfKSB7fVxuXG5cdFx0XHRjb25zdCB1c2VTeXN0ZW1YZGdPcGVuID0gcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbiB8fFxuXHRcdFx0XHRwcm9jZXNzLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgfHwgaXNCdW5kbGVkIHx8ICFleGVMb2NhbFhkZ09wZW47XG5cdFx0XHRjb21tYW5kID0gdXNlU3lzdGVtWGRnT3BlbiA/ICd4ZGctb3BlbicgOiBsb2NhbFhkZ09wZW5QYXRoO1xuXHRcdH1cblxuXHRcdGlmIChhcHBBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y2xpQXJndW1lbnRzLnB1c2goLi4uYXBwQXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRpZiAoIW9wdGlvbnMud2FpdCkge1xuXHRcdFx0Ly8gYHhkZy1vcGVuYCB3aWxsIGJsb2NrIHRoZSBwcm9jZXNzIHVubGVzcyBzdGRpbyBpcyBpZ25vcmVkXG5cdFx0XHQvLyBhbmQgaXQncyBkZXRhY2hlZCBmcm9tIHRoZSBwYXJlbnQgZXZlbiBpZiBpdCdzIHVucmVmJ2QuXG5cdFx0XHRjaGlsZFByb2Nlc3NPcHRpb25zLnN0ZGlvID0gJ2lnbm9yZSc7XG5cdFx0XHRjaGlsZFByb2Nlc3NPcHRpb25zLmRldGFjaGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRjbGlBcmd1bWVudHMucHVzaCh0YXJnZXQpO1xuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJyAmJiBhcHBBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdGNsaUFyZ3VtZW50cy5wdXNoKCctLWFyZ3MnLCAuLi5hcHBBcmd1bWVudHMpO1xuXHR9XG5cblx0Y29uc3Qgc3VicHJvY2VzcyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kLCBjbGlBcmd1bWVudHMsIGNoaWxkUHJvY2Vzc09wdGlvbnMpO1xuXG5cdGlmIChvcHRpb25zLndhaXQpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0c3VicHJvY2Vzcy5vbmNlKCdlcnJvcicsIHJlamVjdCk7XG5cblx0XHRcdHN1YnByb2Nlc3Mub25jZSgnY2xvc2UnLCBleGl0Q29kZSA9PiB7XG5cdFx0XHRcdGlmIChvcHRpb25zLmFsbG93Tm9uemVyb0V4aXRDb2RlICYmIGV4aXRDb2RlID4gMCkge1xuXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoYEV4aXRlZCB3aXRoIGNvZGUgJHtleGl0Q29kZX1gKSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzb2x2ZShzdWJwcm9jZXNzKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0c3VicHJvY2Vzcy51bnJlZigpO1xuXG5cdHJldHVybiBzdWJwcm9jZXNzO1xufTtcbiIsImltcG9ydCB7QXBwLCBGdXp6eU1hdGNoLCBGdXp6eVN1Z2dlc3RNb2RhbCwgTW9kYWx9IGZyb20gJ29ic2lkaWFuJztcclxuaW1wb3J0IHtTZWFyY2hTZXR0aW5nfSBmcm9tICcuL3NldHRpbmdzJztcclxuaW1wb3J0IFNlYXJjaE9uSW50ZXJuZXRQbHVnaW4gZnJvbSAnLi9tYWluJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kYWwgZXh0ZW5kcyBGdXp6eVN1Z2dlc3RNb2RhbDxTZWFyY2hTZXR0aW5nPiB7XHJcbiAgcGx1Z2luOiBTZWFyY2hPbkludGVybmV0UGx1Z2luO1xyXG4gIHF1ZXJ5OiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogU2VhcmNoT25JbnRlcm5ldFBsdWdpbiwgcXVlcnk6IHN0cmluZykge1xyXG4gICAgc3VwZXIoYXBwKTtcclxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgdGhpcy5zZXRQbGFjZWhvbGRlcignJyk7XHJcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgICAnJHt0aGlzLnF1ZXJ5fSc7XHJcbiAgICB0aGlzLnNldEluc3RydWN0aW9ucyhbe2NvbW1hbmQ6ICfihpHihpMnLCBwdXJwb3NlOiAndG8gbmF2aWdhdGUnfSxcclxuICAgICAge2NvbW1hbmQ6ICfihrUnLCBwdXJwb3NlOiBgdG8gc2VhcmNoICR7dGhpcy5xdWVyeX1gfSxcclxuICAgICAge2NvbW1hbmQ6ICdlc2MnLCBwdXJwb3NlOiAndG8gZGlzbWlzcyd9XSk7XHJcbiAgfVxyXG5cclxuICBvbk9wZW4oKSB7XHJcbiAgICBzdXBlci5vbk9wZW4oKTtcclxuICAgIC8vIGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcclxuICAgIHRoaXMuaW5wdXRFbC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgb25DbG9zZSgpIHtcclxuICAgIHN1cGVyLm9uQ2xvc2UoKTtcclxuICAgIGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcclxuICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldEl0ZW1UZXh0KGl0ZW06IFNlYXJjaFNldHRpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGl0ZW0ubmFtZTtcclxuICB9XHJcblxyXG4gIHJlbmRlclN1Z2dlc3Rpb24oaXRlbTogRnV6enlNYXRjaDxTZWFyY2hTZXR0aW5nPiwgZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBzdXBlci5yZW5kZXJTdWdnZXN0aW9uKGl0ZW0sIGVsKTtcclxuICAgIGVsLmlubmVySFRNTCA9IGBTZWFyY2ggb246IGAgKyBlbC5pbm5lckhUTUw7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtcygpOiBTZWFyY2hTZXR0aW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMucGx1Z2luLnNldHRpbmdzLnNlYXJjaGVzO1xyXG4gIH1cclxuXHJcbiAgb25DaG9vc2VJdGVtKGl0ZW06IFNlYXJjaFNldHRpbmcsIGV2dDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMucGx1Z2luLm9wZW5TZWFyY2goaXRlbSwgdGhpcy5xdWVyeSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7SXRlbVZpZXcsIFdvcmtzcGFjZUxlYWZ9IGZyb20gJ29ic2lkaWFuJztcclxuaW1wb3J0IFNlYXJjaE9uSW50ZXJuZXRQbHVnaW4gZnJvbSAnLi9tYWluJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xyXG4gICAgcXVlcnk6IHN0cmluZztcclxuICAgIHNpdGU6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgcGx1Z2luOiBTZWFyY2hPbkludGVybmV0UGx1Z2luO1xyXG5cclxuICAgIGZyYW1lOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbHVnaW46IFNlYXJjaE9uSW50ZXJuZXRQbHVnaW4sIGxlYWY6IFdvcmtzcGFjZUxlYWYsIHF1ZXJ5OiBzdHJpbmcsIHNpdGU6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcclxuICAgICAgc3VwZXIobGVhZik7XHJcbiAgICAgIHRoaXMucXVlcnk9IHF1ZXJ5O1xyXG4gICAgICB0aGlzLnNpdGUgPSBzaXRlO1xyXG4gICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25PcGVuKCkge1xyXG4gICAgICB0aGlzLmZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICAgIHRoaXMuZnJhbWUuYWRkQ2xhc3MoYHNvaS1zaXRlYCk7XHJcbiAgICAgIHRoaXMuZnJhbWUuc2V0QXR0cignc3R5bGUnLCAnaGVpZ2h0OiAxMDAlOyB3aWR0aDoxMDAlJyk7XHJcbiAgICAgIHRoaXMuZnJhbWUuc2V0QXR0cignc3JjJywgdGhpcy51cmwpO1xyXG4gICAgICB0aGlzLmZyYW1lLnNldEF0dHIoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgICAgdGhpcy5jb250YWluZXJFbC5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZCh0aGlzLmZyYW1lKTtcclxuXHJcblxyXG4gICAgICAvLyBUdXJucyBvdXQgSUZyYW1lcyBhcmUgdmVyeSBoYXJkIHRvIGNvbnRyb2wgdGhlIGNvbnRleHRtZW51IG9mLiBTbyBsZWF2aW5nIHRoaXMgZm9yIG5vdyFcclxuICAgICAgLy8gdGhpcy5mcmFtZS5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChlKSA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2FzZGYnKTtcclxuICAgICAgLy8gICB0aGlzLnBsdWdpbi5oYW5kbGVDb250ZXh0KGUsIHRoaXMpO1xyXG4gICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXNwbGF5VGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gYCR7dGhpcy5zaXRlfTogJHt0aGlzLnF1ZXJ5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdTZWFyY2ggb24gSW50ZXJuZXQnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuaW1wb3J0IHtcclxuICBFZGl0b3IsXHJcbiAgRXZlbnRSZWYsXHJcbiAgTWFya2Rvd25QcmV2aWV3VmlldyxcclxuICBNYXJrZG93blZpZXcsXHJcbiAgTWVudSxcclxuICBNZW51SXRlbSxcclxuICBOb3RpY2UsXHJcbiAgUGx1Z2luLFxyXG4gIFRGaWxlLFxyXG4gIFZpZXcsXHJcbiAgV29ya3NwYWNlTGVhZixcclxufSBmcm9tICdvYnNpZGlhbic7XHJcbmltcG9ydCB7XHJcbiAgU09JU2V0dGluZ1RhYixcclxuICBTT0lTZXR0aW5ncyxcclxuICBERUZBVUxUX1NFVFRJTkcsXHJcbiAgU2VhcmNoU2V0dGluZyxcclxuICBERUZBVUxUX1FVRVJZLFxyXG59IGZyb20gJy4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgb3BlbiBmcm9tICdvcGVuJztcclxuaW1wb3J0IHtTZWFyY2hNb2RhbH0gZnJvbSAnLi9tb2RhbCc7XHJcbmltcG9ydCB7U2VhcmNoVmlld30gZnJvbSAnLi92aWV3JztcclxuXHJcbi8vIGRlY2xhcmUgbW9kdWxlICdvYnNpZGlhbicge1xyXG4vLyAgIGludGVyZmFjZSBBcHAge1xyXG4vLyAgICAgcGx1Z2luczoge1xyXG4vLyAgICAgICBlbmFibGVkUGx1Z2luczogU2V0PHN0cmluZz47XHJcbi8vICAgICAgIHBsdWdpbnM6IHtcclxuLy8gICAgICAgICBbaWQ6IHN0cmluZ106IGFueTtcclxuLy8gICAgICAgfTtcclxuLy8gICAgIH07XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hPbkludGVybmV0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuICBzZXR0aW5nczogU09JU2V0dGluZ3M7XHJcbiAgb25Eb206IGFueTtcclxuICBvbkRvbVNldHRpbmdzOiBhbnk7XHJcblxyXG4gIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIHNlYXJjaC1vbi1pbnRlcm5ldCcpO1xyXG5cclxuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XHJcblxyXG4gICAgdGhpcy5zZXR0aW5ncy5zZWFyY2hlcy5mb3JFYWNoKChzZWFyY2gpID0+IHtcclxuICAgICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgICAgIGlkOiAnc2VhcmNoLW9uLWludGVybmV0LScrIHNlYXJjaC5uYW1lLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGVyZm9ybSBzZWFyY2ggJysgc2VhcmNoLm5hbWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRTZWxlY3RlZFRleHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5ID09PSBudWxsIHx8IHF1ZXJ5ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcXVlcnk9IGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcGx1Z2luLm9wZW5TZWFyY2goc2VhcmNoLCBxdWVyeSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IFNPSVNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuICAgIGNvbnN0IHBsdWdpbiA9IHRoaXM7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKCdmaWxlLW1lbnUnLCAobWVudSwgZmlsZTogVEZpbGUsIHNvdXJjZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZmlsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBmaWxlVGFncyA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpID8udGFncz8ubWFwKCh0KSA9PiB0LnRhZyk7XHJcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLnNlYXJjaGVzLmZvckVhY2goKHNlYXJjaCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoLnRhZ3MubGVuZ3RoID09PSAwIHx8XHJcbiAgICAgICAgICAgIGZpbGVUYWdzPy5zb21lKCh0KSA9PiBzZWFyY2gudGFncy5jb250YWlucyh0KSkpIHtcclxuICAgICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0VGl0bGUoYFNlYXJjaCAke3NlYXJjaC5uYW1lfWApLnNldEljb24oJ3NlYXJjaCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLm9wZW5TZWFyY2goc2VhcmNoLCBmaWxlLmJhc2VuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiAnc2VhcmNoLW9uLWludGVybmV0JyxcclxuICAgICAgbmFtZTogJ1BlcmZvcm0gc2VhcmNoJyxcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICBsZXQgcXVlcnkgPSB0aGlzLmdldFNlbGVjdGVkVGV4dCgpO1xyXG5cclxuICAgICAgICBpZiAocXVlcnkgPT09IG51bGwgfHwgcXVlcnkgPT09ICcnKSB7XHJcbiAgICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuICAgICAgICAgIGlmIChhY3RpdmVWaWV3ID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcXVlcnkgPSBhY3RpdmVWaWV3LmdldERpc3BsYXlUZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IFNlYXJjaE1vZGFsKHBsdWdpbi5hcHAsIHBsdWdpbiwgcXVlcnkpO1xyXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcInBhc3RlLXRleHRcIixcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IGFzeW5jIChlZGl0b3I6IEVkaXRvcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsaXBib2FyZFRleHQgPSBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2xpcGJvYXJkVGV4dClcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFByZXZpZXcgbW9kZVxyXG4gICAgdGhpcy5vbkRvbSA9IGZ1bmN0aW9uKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGZpbGVNZW51ID0gbmV3IE1lbnUocGx1Z2luLmFwcCk7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgZmlsZU1lbnUuZG9tLmNsYXNzTGlzdC5hZGQoJ3NvaS1maWxlLW1lbnUnKTtcclxuICAgICAgLy8gRnVuY3Rpb25hbGl0eTogT3BlbiBleHRlcm5hbCBsaW5rIGluIElmcmFtZS5cclxuICAgICAgbGV0IGVtcHR5TWVudSA9IHRydWU7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgY29uc3QgY2xhc3NlczogRE9NVG9rZW5MaXN0ID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdDtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2NtLXVybCcpIHx8IGNsYXNzZXMuY29udGFpbnMoJ2V4dGVybmFsLWxpbmsnKSkge1xyXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgY29uc3QgdXJsID0gY2xhc3Nlcy5jb250YWlucygnY20tdXJsJykgPyBldmVudC50YXJnZXQudGV4dENvbnRlbnQgOiBldmVudC50YXJnZXQuaHJlZjtcclxuXHJcbiAgICAgICAgICBmaWxlTWVudS5hZGRJdGVtKChpdGVtOiBNZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnNldEljb24oJ3NlYXJjaCcpLnNldFRpdGxlKCdPcGVuIGluIElGcmFtZScpLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHBsdWdpbi5vcGVuU2VhcmNoKHtcclxuICAgICAgICAgICAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6ICd7e3F1ZXJ5fX0nLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBlbmNvZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sIHVybCwgbnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlbXB0eU1lbnUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZW1wdHlNZW51ID0gZW1wdHlNZW51ICYmICFwbHVnaW4uaGFuZGxlQ29udGV4dChmaWxlTWVudSk7XHJcbiAgICAgIGlmICghZW1wdHlNZW51KSB7XHJcbiAgICAgICAgZmlsZU1lbnUuc2hvd0F0UG9zaXRpb24oe1xyXG4gICAgICAgICAgeDogZXZlbnQueCxcclxuICAgICAgICAgIHk6IGV2ZW50LnksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMub25Eb21TZXR0aW5ncyA9IHt9O1xyXG4gICAgZG9jdW1lbnQub24oJ2NvbnRleHRtZW51JywgJy5tYXJrZG93bi1wcmV2aWV3LXZpZXcnLCB0aGlzLm9uRG9tLCB0aGlzLm9uRG9tU2V0dGluZ3MpO1xyXG5cclxuXHJcbiAgICAvLyBSZW1vdmUgdGhpcyBpZ25vcmUgd2hlbiB0aGUgb2JzaWRpYW4gcGFja2FnZSBpcyB1cGRhdGVkIG9uIG5wbVxyXG4gICAgLy8gRWRpdG9yIG1vZGVcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2VkaXRvci1tZW51JyxcclxuICAgICAgICAobWVudTogTWVudSwgZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVDb250ZXh0KG1lbnUpO1xyXG4gICAgICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgd1NlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IGRvY1NlbGVjdGlvbiA9IGRvY3VtZW50ID8uZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAod1NlbGVjdGlvbikge1xyXG4gICAgICByZXR1cm4gd1NlbGVjdGlvbi50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudCAmJiBkb2NTZWxlY3Rpb24udHlwZSAhPSAnQ29udHJvbCcpIHtcclxuICAgICAgcmV0dXJuIGRvY1NlbGVjdGlvbi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDb250ZXh0KG1lbnU6IE1lbnUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5nZXRTZWxlY3RlZFRleHQoKTtcclxuICAgIGNvbnN0IGhhc1NlbGVjdGlvbiA9ICEocXVlcnkgPT09IG51bGwgfHwgcXVlcnkudHJpbSgpID09PSAnJyk7XHJcbiAgICBpZiAoIWhhc1NlbGVjdGlvbikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHNlYXJjaHNldHRpbmcgb2YgdGhpcy5zZXR0aW5ncy5zZWFyY2hlcykge1xyXG4gICAgICBtZW51LmFkZEl0ZW0oKGl0ZW06IE1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5zZXRUaXRsZSgnU2VhcmNoIG9uICcgKyBzZWFyY2hzZXR0aW5nLm5hbWUpXHJcbiAgICAgICAgICAgIC5zZXRJY29uKCdzZWFyY2gnKVxyXG4gICAgICAgICAgICAub25DbGljaygoZXZ0OiBNb3VzZUV2ZW50KSA9PiB0aGlzLm9wZW5TZWFyY2goc2VhcmNoc2V0dGluZywgcXVlcnksIG51bGwpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBhc3luYyBvcGVuU2VhcmNoKHNlYXJjaDogU2VhcmNoU2V0dGluZywgcXVlcnk6IHN0cmluZywgYWN0aXZlVmlldzogU2VhcmNoVmlldyA9IG51bGwpIHtcclxuICAgIGxldCBlbmNvZGVkUXVlcnkgPSBxdWVyeTtcclxuICAgIGlmIChzZWFyY2guZW5jb2RlKSB7XHJcbiAgICAgIGVuY29kZWRRdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChxdWVyeSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmwgPSBzZWFyY2gucXVlcnkucmVwbGFjZSgne3t0aXRsZX19JywgZW5jb2RlZFF1ZXJ5KVxyXG4gICAgICAgIC5yZXBsYWNlKCd7e3F1ZXJ5fX0nLCBlbmNvZGVkUXVlcnkpO1xyXG4gICAgY29uc29sZS5sb2coYFNPSTogT3BlbmluZyBVUkwgJHt1cmx9YCk7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy51c2VJZnJhbWUpIHtcclxuICAgICAgaWYgKGFjdGl2ZVZpZXcpIHtcclxuICAgICAgICBhY3RpdmVWaWV3LmZyYW1lLnNldEF0dHIoJ3NyYycsIHVybCk7XHJcbiAgICAgICAgYWN0aXZlVmlldy51cmwgPSB1cmw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGNvbnN0IGxlYWYgPSB0aGlzLnNldHRpbmdzLnVzZVBvcG92ZXIgPyBhd2FpdCB0aGlzLmFwcC5wbHVnaW5zLnBsdWdpbnNbJ29ic2lkaWFuLWhvdmVyLWVkaXRvciddLnNwYXduUG9wb3ZlcigpIDogdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYoISh0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZi52aWV3LmdldFZpZXdUeXBlKCkgPT09ICdlbXB0eScpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxlYWYgPSBcIiAsIGxlYWYpXHJcbiAgICAgICAgLy8gY29uc3QgbGVhZiA9IHRoaXMuYXBwLndvcmtzcGFjZS5zcGxpdEFjdGl2ZUxlYWYodGhpcy5zZXR0aW5ncy5zcGxpdERpcmVjdGlvbik7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBTZWFyY2hWaWV3KHRoaXMsIGxlYWYsIHF1ZXJ5LCBzZWFyY2gubmFtZSwgdXJsKTtcclxuICAgICAgICBhd2FpdCBsZWFmPy5vcGVuKHZpZXcpO1xyXG4gICAgICAgIGxlYWY/IHRoaXMuYXBwLndvcmtzcGFjZS5zZXRBY3RpdmVMZWFmKGxlYWYpOnVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgb3Blbih1cmwpO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb251bmxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygndW5sb2FkaW5nIHNlYXJjaC1vbi1pbnRlcm5ldCcpO1xyXG4gICAgZG9jdW1lbnQub2ZmKCdjb250ZXh0bWVudScsICcubWFya2Rvd24tcHJldmlldy12aWV3JywgdGhpcy5vbkRvbSwgdGhpcy5vbkRvbVNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuICAgIGNvbnN0IGxvYWRlZFNldHRpbmdzID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpIGFzIGFueTtcclxuICAgIGlmIChsb2FkZWRTZXR0aW5ncyAmJiBsb2FkZWRTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eSgnc2VhcmNoZXMnKSkge1xyXG4gICAgICBsb2FkZWRTZXR0aW5ncy5zZWFyY2hlcyA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgICBsb2FkZWRTZXR0aW5ncy5zZWFyY2hlcy5tYXAoXHJcbiAgICAgICAgICAgICAgKHM6IFNlYXJjaFNldHRpbmcpID0+IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfUVVFUlksIHMpKSk7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBsb2FkZWRTZXR0aW5ncztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBERUZBVUxUX1NFVFRJTkc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiLCJmcyIsIm9zIiwiaXNEb2NrZXIiLCJyZXF1aXJlJCQwIiwicGF0aCIsImlzV3NsIiwiY2hpbGRQcm9jZXNzIiwiRnV6enlTdWdnZXN0TW9kYWwiLCJJdGVtVmlldyIsIk1hcmtkb3duVmlldyIsIk1lbnUiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtB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LEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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
