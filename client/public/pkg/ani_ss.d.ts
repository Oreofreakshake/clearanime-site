/* tslint:disable */
/* eslint-disable */
/**
*/
export class AniSS {
  free(): void;
/**
* @param {WebGL2RenderingContext} gl
*/
  constructor(gl: WebGL2RenderingContext);
/**
*/
  resizeTextures(): void;
/**
* @param {number | undefined} scale
*/
  setScale(scale?: number): void;
/**
* @param {HTMLElement} element
*/
  setSource(element: HTMLElement): void;
/**
* @param {string} program
* @returns {boolean}
*/
  addProgram(program: string): boolean;
/**
* @returns {boolean}
*/
  render(): boolean;
}
/**
* Program struct holds all the info of a single hook.
*/
export class Program {
  free(): void;
}
/**
* ProgramWrapper is a container for a native [WebGlProgram] that has been compiled with the
* correct shaders built using the [Program] struct and [ProgramWrapper::new].
*/
export class ProgramWrapper {
  free(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_aniss_free: (a: number) => void;
  readonly aniss_new: (a: number) => number;
  readonly aniss_resizeTextures: (a: number) => void;
  readonly aniss_setScale: (a: number, b: number, c: number) => void;
  readonly aniss_setSource: (a: number, b: number) => void;
  readonly aniss_addProgram: (a: number, b: number, c: number) => number;
  readonly aniss_render: (a: number) => number;
  readonly __wbg_programwrapper_free: (a: number) => void;
  readonly __wbg_program_free: (a: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
