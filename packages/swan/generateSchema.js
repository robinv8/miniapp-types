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
    platform: 'swan',
    waitUntil: 'networkidle2',
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
                var _a, _b, _c, _d, _e, _f, _g;
                const len = el.children.length;
                const options = [];
                if (len > 0) {
                    const innerText = (_a = el.children[0]) === null || _a === void 0 ? void 0 : _a.innerText;
                    const optEl = document.getElementById(`${innerText} 有效值`);
                    const name = (_b = el.children[fields.name]) === null || _b === void 0 ? void 0 : _b.innerText;
                    if (optEl) {
                        (_c = optEl.nextElementSibling) === null || _c === void 0 ? void 0 : _c.querySelectorAll('tbody tr').forEach((el) => {
                            var _a;
                            const index = name === 'image' && innerText === 'mode' ? 1 : 0;
                            const text = (_a = el.children[index]) === null || _a === void 0 ? void 0 : _a.innerText;
                            options.push(text);
                        });
                    }
                    const type = handleType((_d = el.children[fields.type]) === null || _d === void 0 ? void 0 : _d.innerText, '/');
                    const defaultValue = (_e = el.children[fields.defaultValue]) === null || _e === void 0 ? void 0 : _e.innerText;
                    const description = (_f = el.children[fields.description]) === null || _f === void 0 ? void 0 : _f.innerText;
                    const required = (_g = el.children[fields.required]) === null || _g === void 0 ? void 0 : _g.innerText;
                    attributes.push(Object.assign(Object.assign(Object.assign(Object.assign({ name,
                        type }, (options.length > 0 ? { options } : {})), (defaultValue ? { defaultValue } : {})), (description ? { description } : {})), (required !== undefined && required !== null
                        ? { required: required === '是' }
                        : {})));
                }
            });
            return attributes;
        }, opts);
    }),
});
service.exec();
//# sourceMappingURL=generateSchema.js.map