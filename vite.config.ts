import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import viteTsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ command }) => {
  const config = { plugins: [react(), viteTsconfigPaths()], base: "/" }
  if (command !== "serve") {
    config.base = "/hp-mischief/"
  }

  return config
})
