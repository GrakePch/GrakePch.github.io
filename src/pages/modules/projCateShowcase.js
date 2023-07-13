import React, { useState } from "react";
import "./projCateShowcase.css";

/*Data*/
import { projects } from "../../assets/projects";
import noneIcon from "../../assets/project-icons/none.svg";
import { globalVars } from "./globalVars";
import { useHistory } from "react-router";


export default function ProjCateShowcase(props) {
  const history = useHistory();
  const thisProjCate = projects[props.projCateId];
  const keysInThisProjCate = Object.keys(thisProjCate.children);
  const [previewProjIndex, setPreviewProjIndex] = useState(0);

  const padding = globalVars.vw >= 600
    ? 64
    : 1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
  const foldedCardSideLen = 100;
  const unfoldedCardWidth = Math.min(globalVars.vw, 1920) - padding * 2 - foldedCardSideLen * 4
    - 7 * parseFloat(getComputedStyle(document.documentElement).fontSize);
  const cardHeight = unfoldedCardWidth / 16 * 9;

  const narrowLayoutMaxWidth = 1500;
  const narrow_cardWidth = globalVars.vw - padding * 2;
  const narrow_unfoldedCardHeight = narrow_cardWidth / 16 * 9;

  return (
    <div className="projShowcase">
      <h1 className="projShowcase-cateTitle"
        style={{ fontSize: globalVars.vw >= 600 ? "3rem" : "2rem" }}>
        {thisProjCate.title[globalVars.langList[globalVars.langId]]}
      </h1>
      <div className="projShowcase-itemContainer" style={{
        width: globalVars.vw - padding * 2,
        flexDirection: globalVars.vw > narrowLayoutMaxWidth ? "row" : "column",
      }}>

        {keysInThisProjCate.sort((a, b) =>
          ((thisProjCate.children[b].date ? thisProjCate.children[b].date[0] : 0)
            - (thisProjCate.children[a].date ? thisProjCate.children[a].date[0] : 0)) * 100
          + ((thisProjCate.children[b].date ? thisProjCate.children[b].date[1] : 0)
            - (thisProjCate.children[a].date ? thisProjCate.children[a].date[1] : 0)))
          .slice(0, 5).map((key, index) =>
            <div
              key={key}
              onClick={() => index == previewProjIndex
                ? history.push(`/p/${key}`)
                : setPreviewProjIndex(index)
              }
              className={
                "projShowcase-item " + (
                  keysInThisProjCate[previewProjIndex] == key
                    ? "unfolded"
                    : "folded"
                ) + " " + (globalVars.vw >= 600
                  ? ""
                  : "superNarrow"
                )}
              style={globalVars.vw > narrowLayoutMaxWidth ? {
                width: keysInThisProjCate[previewProjIndex] == key
                  ? unfoldedCardWidth
                  : foldedCardSideLen,
                height: cardHeight,
              } : {
                width: narrow_cardWidth,
                height: keysInThisProjCate[previewProjIndex] == key
                  ? narrow_unfoldedCardHeight
                  : foldedCardSideLen
              }}>
              <div
                className="projShowcase-itemCover"
                style={{
                  backgroundImage: `url(${thisProjCate.children[key].cover})`,
                  backgroundSize: thisProjCate.children[key].coverSize
                    ? globalVars.vw > narrowLayoutMaxWidth
                      ? "auto " + thisProjCate.children[key].coverSize
                      : thisProjCate.children[key].coverSize
                    : "cover",
                  filter: keysInThisProjCate[previewProjIndex] == key
                    || "saturate(0) contrast(.2) brightness(1.3) sepia(.5)",
                }}></div>

              <div className={"projShowcase-foldedInfo " +
                (keysInThisProjCate[previewProjIndex] == key
                  ? "unfolded"
                  : ""
                )}
                style={{ flexDirection: globalVars.vw > narrowLayoutMaxWidth ? "column" : "row" }}
              >
                <h1 style={{ writingMode: globalVars.vw > narrowLayoutMaxWidth ? "vertical-rl" : null }}>
                  {thisProjCate.children[key].title[globalVars.langList[globalVars.langId]]}
                </h1>
                <div style={{ backgroundImage: `url(${thisProjCate.children[key].icon ?? noneIcon})` }}></div>
              </div>

              <div className={"projShowcase-fullInfo " +
                (keysInThisProjCate[previewProjIndex] == key
                  ? "unfolded"
                  : ""
                )}>
                <span>
                  <h1>
                    {thisProjCate.children[key].title[globalVars.langList[globalVars.langId]]}
                  </h1>
                  <h3>
                    {
                      (thisProjCate.children[key].date
                        ? thisProjCate.children[key].date[0]
                        : "2XXX") + " / " +
                      (thisProjCate.children[key].date
                        ? thisProjCate.children[key].date[1]
                        : "X")
                    }
                  </h3>
                </span>
                {thisProjCate.children[key].intro
                  ? <p>
                    {thisProjCate.children[key].intro[globalVars.langList[globalVars.langId]]}
                  </p>
                  : null
                }
              </div>

            </div>
          )}

        {keysInThisProjCate.length > 5
          ? <div
            className="projShowcase-showAll"
            onClick={() => history.push(`/c/${props.projCateId}`)}
            style={globalVars.vw > narrowLayoutMaxWidth ? {
              flexDirection: "column",
              width: "1.5rem",
            } : {
              flexDirection: "row",
              height: "1.5rem",
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          : null
        }
      </div>
    </div>
  );
};