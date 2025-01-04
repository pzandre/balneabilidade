import { WebViewStyles } from '@/components/styles/stylesheets';
import { FC, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const ReportWebView: FC = () => {
  const backendUrl = process.env.EXPO_PUBLIC_BACKEND_URL || "http://localhost:8000/api/";
  const backendApiKey = process.env.EXPO_PUBLIC_BACKEND_API_KEY;
  const [reportData, setReportData] = useState<{ posted_at: string, url: string } | null>(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await fetch(
          backendUrl + 'report/',
          {
            headers: {
              Authorization: `Api-Key ${backendApiKey}`,
            }
          }
        ).then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          } else {
            return response.json();
          }
        })

        setReportData(response);
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    fetchReportData();
  }, [backendApiKey, backendUrl]);

  if (!reportData) {
    return (
      <SafeAreaView style={[WebViewStyles.container, WebViewStyles.horizontal]}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <WebView style={[WebViewStyles.container, WebViewStyles.horizontal]} source={{ uri: reportData.url }} />
  )
};

export default ReportWebView;