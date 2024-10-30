import { TextEncoder, TextDecoder } from "util";
import "jest-chrome";

Object.assign(global, { TextDecoder, TextEncoder });
global.chrome = global.chrome || {};
