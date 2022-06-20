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
    platform: 'tt',
    waitUntil: 'networkidle0',
    evaluate: (page, opts) => __awaiter(void 0, void 0, void 0, function* () {
        return yield page.evaluate(({ tableIndex = 0, fields }) => {
            var _a;
            function handleType(str, char) {
                if (str.indexOf(char) === -1) {
                    return str;
                }
                return str.split(char).map((item) => item.trim());
            }
            const attributes = [];
            const tablesEl = document.querySelectorAll('table')[tableIndex];
            (_a = tablesEl === null || tablesEl === void 0 ? void 0 : tablesEl.querySelectorAll('tbody tr')) === null || _a === void 0 ? void 0 : _a.forEach((el) => {
                var _a, _b, _c, _d, _e, _f;
                const len = el.children.length;
                if (len === 0) {
                    return;
                }
                const options = [];
                const innerText = (_a = el.children[0]) === null || _a === void 0 ? void 0 : _a.innerText;
                document.querySelectorAll('table').forEach((table) => {
                    var _a;
                    const text = (_a = table.previousElementSibling) === null || _a === void 0 ? void 0 : _a.getAttribute('id');
                    if (text === `${innerText}-的合法值`) {
                        table.querySelectorAll('tbody tr').forEach((el) => {
                            var _a;
                            const innerText = (_a = el.children[0]) === null || _a === void 0 ? void 0 : _a.innerText;
                            options.push(innerText);
                        });
                    }
                });
                const name = (_b = el.children[fields.name]) === null || _b === void 0 ? void 0 : _b.innerText;
                const type = handleType((_c = el.children[fields.type]) === null || _c === void 0 ? void 0 : _c.innerText, '/');
                const defaultValue = (_d = el.children[fields.defaultValue]) === null || _d === void 0 ? void 0 : _d.innerText;
                const description = (_e = el.children[fields.description]) === null || _e === void 0 ? void 0 : _e.innerText;
                const required = (_f = el.children[fields.required]) === null || _f === void 0 ? void 0 : _f.innerText;
                attributes.push(Object.assign(Object.assign(Object.assign(Object.assign({ name,
                    type }, (options.length > 0 ? { options } : {})), (defaultValue ? { defaultValue } : {})), (description ? { description } : {})), (required !== undefined && required !== null
                    ? { required: required === '是' }
                    : {})));
            });
            return attributes;
        }, opts);
    }),
});
service.exec();
//# sourceMappingURL=generateSchema.js.map