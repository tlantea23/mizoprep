import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mizoprep.app',
  appName: 'MizoPrep',
  webDir: 'out',
  android: {
    allowMixedContent: true
  }
};

export default config;