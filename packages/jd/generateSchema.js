"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
const service = new service_1.default({
    platform: 'jd',
    waitUntil: 'networkidle0',
    evaluate: (page, opts) => __awaiter(void 0, void 0, void 0, function* () {
        return yield page.evaluate(({ tableIndex = 0, fields }) => {
            var _a;
            function handleType(str, char, name) {
                if (name.indexOf('bind') > -1 && !str) {
                    return 'eventHandle';
                }
                if (str.indexOf(char) === -1) {
                    return str;
                }
                return str.split(char).map((item) => item.trim());
            }
            const attributes = [];
            const tablesEl = document.querySelectorAll('table')[tableIndex];
            (_a = tablesEl === null || tablesEl === void 0 ? void 0 : tablesEl.querySelectorAll('tbody tr')) === null || _a === void 0 ? void 0 : _a.forEach((el) => {
                var _a, _b, _c, _d, _e;
                const len = el.children.length;
                const options = [];
                if (len === 0) {
                    return;
                }
                const innerText = el.children[0].innerText;
                document.querySelectorAll('table').forEach((table) => {
                    var _a, _b;
                    const text = (_b = (_a = table.previousElementSibling) === null || _a === void 0 ? void 0 : _a.querySelector('strong')) === null || _b === void 0 ? void 0 : _b.innerText;
                    if (text === `${innerText} 有效值：` ||
                        text === `${innerText} 的合法值`) {
                        table.querySelectorAll('tbody tr').forEach((el) => {
                            const innerText = el.children[0].innerText;
                            options.push(innerText);
                        });
                    }
                });
                const name = (_a = el.children[fields.name]) === null || _a === void 0 ? void 0 : _a.innerText;
                const type = handleType((_b = el.children[fields.type]) === null || _b === void 0 ? void 0 : _b.innerText, '/', name);
                const defaultValue = (_c = el.children[fields.defaultValue]) === null || _c === void 0 ? void 0 : _c.innerText;
                const description = (_d = el.children[fields.description]) === null || _d === void 0 ? void 0 : _d.innerText;
                const required = (_e = el.children[fields.required]) === null || _e === void 0 ? void 0 : _e.innerText;
                attributes.push(Object.assign(Object.assign(Object.assign(Object.assign({ name,
                    type }, (options.length > 0 ? { options } : {})), (defaultValue
                    ? { defaultValue: defaultValue.replace(/\"/g, '') }
                    : {})), (description ? { description } : {})), (required !== undefined && required !== null
                    ? { required: required === '是' }
                    : {})));
            });
            return attributes;
        }, opts);
    }),
});
service.exec();
//# sourceMappingURL=generateSchema.js.map