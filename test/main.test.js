import { addTwoNumbers } from "../src/main";
import {it,describe,expect, vi} from "vitest";

describe("Debería sumar los números que se pasen como parametros y mostrarlos en consola", () => {
  const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  it("Debería imprimir 5 en la suma de 2 + 3", () => {
    addTwoNumbers(2,3);
    expect(logSpy).toHaveBeenCalledWith(5);
  })
  it("Debería imprimir -5 en la suma de -2 + -3", () => {
    addTwoNumbers(-2,-3);
    expect(logSpy).toHaveBeenCalledWith(-5);
  })
  it("Debería imprimir 39 en la suma de 13 + 26", () => {
    addTwoNumbers(13,26);
    expect(logSpy).toHaveBeenCalledWith(39);
  })
  it("Debería imprimir 20 en la suma de -10 + 30", () => {
    addTwoNumbers(-10,30);
    expect(logSpy).toHaveBeenCalledWith(20);
  })
})