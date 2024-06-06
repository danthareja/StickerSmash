const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

export default {
  expo: {
    name: getAppName(),
    slug: "StickerSmash",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#25292e",
    },
    plugins: [
      [
        "expo-image-picker",
        {
          photosPermission: "Allow $(PRODUCT_NAME) to access your photos",
          cameraPermission: "Allow $(PRODUCT_NAME) to open the camera",
        },
      ],
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      permissions: ["android.permission.RECORD_AUDIO"],
      package: getUniqueIdentifier(),
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "577ec1da-db99-453a-ab31-d72adc54b863",
      },
    },
    owner: "dan-at-rhi",
    updates: {
      url: "https://u.expo.dev/577ec1da-db99-453a-ab31-d72adc54b863",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};

function getUniqueIdentifier() {
  if (IS_DEV) {
    return "com.yourname.stickersmash.dev";
  }

  if (IS_PREVIEW) {
    return "com.yourname.stickersmash.preview";
  }

  return "com.yourname.stickersmash";
}

function getAppName() {
  if (IS_DEV) {
    return "StickerSmash (Dev)";
  }

  if (IS_PREVIEW) {
    return "StickerSmash (Preview)";
  }

  return "StickerSmash: Emoji Stickers";
}
