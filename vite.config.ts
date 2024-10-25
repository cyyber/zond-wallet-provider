import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.ts"),
        jsonRpcEngine: path.resolve(__dirname, "src/json-rpc-engine/index.ts"),
        jsonRpcMiddlewareStream: path.resolve(
          __dirname,
          "src/json-rpc-middleware-stream/index.ts"
        ),
        objectMultiplex: path.resolve(
          __dirname,
          "src/object-multiplex/index.ts"
        ),
        postMessageStream: path.resolve(
          __dirname,
          "src/post-message-stream/index.ts"
        ),
        providers: path.resolve(__dirname, "src/providers/index.ts"),
        rpcErrors: path.resolve(__dirname, "src/rpc-errors/index.ts"),
        safeEventEmitter: path.resolve(
          __dirname,
          "src/safe-event-emitter/index.ts"
        ),
        superstruct: path.resolve(__dirname, "src/superstruct/index.ts"),
        utils: path.resolve(__dirname, "src/utils/index.ts"),
      },
      output: [
        {
          format: "es",
          dir: "dist",
          entryFileNames: "[name].js",
        },
        {
          format: "cjs",
          dir: "dist",
          entryFileNames: "[name].umd.cjs",
        },
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
