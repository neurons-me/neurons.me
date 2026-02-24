import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function AIIntegrationCall() {
  useEffect(() => {
    window.scrollTo(0, 0);
    (async function () {
      const cal = await getCalApi({"namespace":"plug-in-your-data-ai-consulting"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="plug-in-your-data-ai-consulting"
    calLink="neurons-me/plug-in-your-data-ai-consulting"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","theme":"auto"}}
  />;
};
  