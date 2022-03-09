import React from "react";
import {
  Link,
  Typography,
} from '@material-ui/core/';
import { globalVars } from "./modules/globalVars";

export default function NotFound(props) {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 10vw",
    }}>
      <Typography variant="h4">404 Not Found</Typography>
      <Typography variant="h5">{globalVars.langId == 0 ?
        "This page may not exist or may be currently under construction."
        :
        "当前页面可能不存在或正在被建设中。"}
      </Typography>
      <Link href="/"><Typography variant="subtitle1">{globalVars.langId == 0 ?
        ">> return to grakep.ch"
        :
        ">> 返回 grakep.ch"
      }</Typography></Link>
    </div>
  )
}