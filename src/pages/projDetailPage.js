import React from "react";
import { useParams, useHistory } from "react-router-dom";

function importAllJson(r) {
  let k = r.keys()
  let l = r.keys().map(r);
  let d = {}
  for (let i = 0; i < l.length; i++) {
    d[k[i].replace(/^.*[\\/]/, '').replace(/\.json$/, '')] = l[i]
  }
  return d
}

export default function ProjDetailPage(props) {
  //   const classes = useStyles(props);
  const { id } = useParams();
  const history = useHistory();

  let path = 'pengtagon331'
  const projs = importAllJson(require.context('../assets/project-details/', true, /\.json$/))
  console.log(projs)
  return (
    <>
      456
    </>
  )
}
