import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function ProjectCall() {
  useEffect(() => {
    window.scrollTo(0, 0);
    (async function () {
      const cal = await getCalApi({"namespace":"project-consultation"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="project-consultation"
    calLink="neurons-me/project-consultation"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","theme":"auto"}}
    
    
  />;
};
  