import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.grouptag.app',
  appName: 'Grouptag',
  webDir: 'build',
  server: {
    hostname: '192.168.4.100:5173',
    androidScheme: 'https'
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    }
  }
};

export default config;
