"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const mockAxios=jest.genMockFromModule("axios");mockAxios.create=jest.fn(()=>mockAxios);var _default=mockAxios;exports.default=_default;
