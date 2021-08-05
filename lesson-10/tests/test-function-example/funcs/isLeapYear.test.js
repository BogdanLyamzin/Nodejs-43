/*
Высокосный год - 366 и 29 в феврале.
Высокосный:
- без остатка делится на 4
- если год без остатка делится на 100 - он невысокосный
- но если делится без остатка на 400 - высокосный
- не меньше 42 г. н.е.

Функция:
1. Получается год в виде целого числа.
2. Возвращает true, если год высокосный, и false - если нет.
3. Если аргументы неподходящие, пробрасывает ошибку с нужным текстом.

2008 - true
2003 - false
2000 - true
1900 - false

41 - проброс ошибки с текстом "Год не может быть меньше 42"
2008.4 - проброс ошибки с текстом "Год должен быть целым числом"
() - проброс ошибки с текстом "Нужно указать год"
"2008" - проброс ошибки "Аргумент должен быть number"
true - проброс ошибки "Аргумент должен быть number"
false - проброс ошибки "Аргумент должен быть number"
null - проброс ошибки "Аргумент должен быть number"
undefined - проброс ошибки "Аргумент должен быть number"
{} - проброс ошибки "Аргумент должен быть number"
[] - проброс ошибки "Аргумент должен быть number"
()=> {} - проброс ошибки "Аргумент должен быть number"
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", ()=>{
    test("2008 - leap year", ()=>{
        expect(isLeapYear(2008)).toBe(true);
    });

    test("2003 - not leap year", ()=>{
        expect(isLeapYear(2003)).toBe(false);
    });

    test("1900 - not leap year", ()=>{
        expect(isLeapYear(1900)).toBe(false);
    });

    test("2000 - leap year", ()=>{
        expect(isLeapYear(2000)).toBe(true);
    });

    test(`41 - error "Год не может быть меньше 42"`, ()=> {
        expect(()=>isLeapYear(41)).toThrow("Год не может быть меньше 42");
    });

    test(`2008.4 - error "Год должен быть целым числом"`, ()=> {
        expect(()=>isLeapYear(2008.4)).toThrow("Год должен быть целым числом");
    });

    test(`() - error "Нужно указать год"`, ()=> {
        expect(()=>isLeapYear()).toThrow("Нужно указать год");
    });

    test(`"2008" - error "Аргумент должен быть number"`, ()=> {
        expect(()=>isLeapYear("2008")).toThrow("Аргумент должен быть number");
    });

    test(`true - error "Аргумент должен быть number"`, ()=> {
        expect(()=>isLeapYear(true)).toThrow("Аргумент должен быть number");
    });

    test(`false - error "Аргумент должен быть number"`, ()=> {
        expect(()=>isLeapYear(false)).toThrow("Аргумент должен быть number");
    });

    test(`null - error "Аргумент должен быть number"`, ()=> {
        expect(()=>isLeapYear(null)).toThrow("Аргумент должен быть number");
    });

    test(`()=>{} - error "Аргумент должен быть number"`, ()=> {
        expect(()=>isLeapYear(()=>{})).toThrow("Аргумент должен быть number");
    });

    test(`{} - error "Аргумент должен быть number"`, ()=> {
        expect(()=>isLeapYear({})).toThrow("Аргумент должен быть number");
    });

    test(`[] - error "Аргумент должен быть number"`, ()=> {
        expect(()=>isLeapYear([])).toThrow("Аргумент должен быть number");
    });
})