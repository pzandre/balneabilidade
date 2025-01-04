import React from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import { ReportWebViewStyles } from '@/components/styles/stylesheets';

const ReportWebView: React.FC = () => {
  const backendUrl = process.env.EXPO_PUBLIC_BACKEND_URL || "http://localhost:8000/api/";
  const backendApiKey = process.env.EXPO_PUBLIC_BACKEND_API_KEY;
  const [reportData, setReportData] = React.useState<{ posted_at: string, url: string } | null>(null);

  React.useEffect(() => {
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
        }
        )

        setReportData(response);
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    fetchReportData();
  }, []);

  if (!reportData) {
    return (
      <SafeAreaView style={[ReportWebViewStyles.container, ReportWebViewStyles.horizontal]}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[ReportWebViewStyles.container, ReportWebViewStyles.horizontal]}>
      <WebView source={{ uri: reportData.url }} />
    </SafeAreaView>
  )
};

export default ReportWebView;