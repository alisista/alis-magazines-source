const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? require("next/constants")
    : require("next-server/constants")

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      /* production only config */
    }
  }

  const { parsed: localEnv } = require("dotenv").config()
  const webpack = require("webpack")

  return {
    webpack(config) {
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
      return config
    }
  }
}
