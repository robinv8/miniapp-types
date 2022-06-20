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
    platform: 'weapp',
    waitUntil: 'domcontentloaded',
    evaluate: (page, opts) => __awaiter(void 0, void 0, void 0, function* () {
        return yield page.evaluate(({ tableIndex = 0, fields }) => {
            var _a, _b;
            function handleType(str, char) {
                if (str.indexOf(char) === -1) {
                    return str;
                }
                return str.split(char).map((item) => item.trim());
            }
            const attributes = [];
            const tablesEl = document.querySelectorAll('table')[tableIndex];
            const children = (_a = tablesEl === null || tablesEl === void 0 ? void 0 : tablesEl.querySelector('tbody')) === null || _a === void 0 ? void 0 : _a.children;
            if (!children) {
                return attributes;
            }
            (_b = Array.from(children)) === null || _b === void 0 ? void 0 : _b.forEach((el) => {
                var _a, _b, _c, _d, _e, _f;
                if (!(el instanceof HTMLElement)) {
                    return;
                }
                if ((el === null || el === void 0 ? void 0 : el.className.indexOf('children-table')) > -1) {
                    return;
                }
                const options = [];
                const nextTrEl = el.nextElementSibling;
                if (nextTrEl && (nextTrEl === null || nextTrEl === void 0 ? void 0 : nextTrEl.className.indexOf('children-table')) > -1) {
                    (_a = nextTrEl === null || nextTrEl === void 0 ? void 0 : nextTrEl.querySelector('tbody')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('tr').forEach((el) => {
                        var _a;
                        const innerText = (_a = el.children[0]) === null || _a === void 0 ? void 0 : _a.innerText;
                        options.push(innerText);
                    });
                }
                const hasChild = tablesEl.querySelector('.children-table');
                const index = hasChild ? 1 : 0;
                const name = (_b = el.children[fields.name + index]) === null || _b === void 0 ? void 0 : _b.innerText;
                const type = handleType((_c = el.children[fields.type + index]) === null || _c === void 0 ? void 0 : _c.innerText, '/');
                const defaultValue = (_d = el.children[fields.defaultValue + index]) === null || _d === void 0 ? void 0 : _d.innerText;
                const description = (_e = el.children[fields.description + index]) === null || _e === void 0 ? void 0 : _e.innerText;
                const required = (_f = el.children[fields.required + index]) === null || _f === void 0 ? void 0 : _f.innerText;
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