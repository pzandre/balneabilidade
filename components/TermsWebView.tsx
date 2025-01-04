import { WebViewStyles } from '@/components/styles/stylesheets';
import { FC } from 'react';
import { WebView } from 'react-native-webview';

const TermsWebView: FC = () => {
  const backendUrl = (process.env.EXPO_PUBLIC_BACKEND_URL?.split('api/')[0] || "http://localhost:8000/") + "terms-of-service/";

  return (
    <WebView style={[WebViewStyles.container, WebViewStyles.horizontal]} source={{ uri: backendUrl }} />
  )
};

export default TermsWebView;
