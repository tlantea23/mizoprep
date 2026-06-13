import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mizoprep.app',
  appName: 'MizoPrep',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    allowNavigation: [
      'razorpay.com',
      '*.razorpay.com',
      'api.razorpay.com',
      'mizoprep.vercel.app',
      '*.vercel.app'
    ]
  },
  plugins: {
    AdMob: {
      appId: 'ca-app-pub-3940256099942544~3347511713',
      initializeForTesting: true
    }
  }
};

export default config;