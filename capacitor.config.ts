import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mizoprep.app',
  appName: 'MizoPrep',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      'mizoprep.vercel.app',
      '*.razorpay.com',
      'api.razorpay.com',
      'checkout.razorpay.com'
    ]
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;