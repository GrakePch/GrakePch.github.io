import { Grid, IconButton, Typography, useTheme } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp } from "@material-ui/icons";
import React, { useCallback, useEffect, useReducer, useState } from "react";

export default function Js2048() {
  const theme = useTheme();

  function resetBoard(row, col) {
    let initBoard = [];
    for (let r = 0; r < row; r++) {
      let oneRow = [];
      for (let c = 0; c < col; c++) {
        oneRow.push(0);
      }
      initBoard.push(oneRow);
    }
    return (initBoard);
  }

  function randGen(b) {
    let zeroCount = 0;
    for (let r = 0; r < b.length; r++) {
      for (let c = 0; c < b[r].length; c++) {
        zeroCount += b[r][c] ? 0 : 1;
      }
    }
    let randPos = Math.floor(Math.random() * zeroCount);
    for (let r = 0; r < b.length; r++) {
      for (let c = 0; c < b[r].length; c++) {
        if (b[r][c] == 0) {
          if (!randPos) {
            b[r][c] = Math.floor(Math.random() * 10) == 0 ? 4 : 2;
            return;
          }
          randPos--;
        }
      }
    }
  }

  var initBoard = resetBoard(4, 4);
  var testBoard = [[0, 2, 4, 8], [16, 32, 64, 128], [256, 512, 1024, 2048], [4096, 8192, 16384, 32768]]
  randGen(initBoard);
  randGen(initBoard);
  const [cboard, setBoard] = useState(initBoard);

  const equals = (a, b) =>
    a.length === b.length &&
    a.every((v, i) => v === b[i]);

  function moveLeft(b) {
    let changed = false;
    for (let r = 0; r < b.length; r++) {
      let oldRow = [...b[r]];
      for (let c = 0; c < b[r].length; c++) {
        if (b[r][c] == 0) {
          b[r].splice(c, 1);
          c--;
          continue;
        }
        if (c > 0 && b[r][c] != 0 && b[r][c - 1] == b[r][c]) {
          b[r][c - 1] *= 2;
          b[r].splice(c, 1);
          c--;
          continue;
        }
      }
      while (b[r].length < 4) {
        b[r].push(0);
      }
      if (!equals(oldRow, b[r])) {
        changed = true;
      }
    }
    console.log("Inside:")
    console.log(b);
    return changed;
  }

  function transpose(b) {
    let newB = [];
    for (let c = 0; c < b[0].length; c++) {
      let newRow = [];
      for (let r = 0; r < b.length; r++) {
        newRow.push(b[r][c])
      }
      newB.push(newRow);
    }
    return newB;
  }

  function cmdLeft(b) {
    let board = [...b];
    if (moveLeft(board)) {
      randGen(board);
    }
    setBoard([...board]);
  }

  function cmdRight(b) {
    let board = [...b];
    board.every((row) => row.reverse());
    if (moveLeft(board)) {
      randGen(board);
    }
    board.every((row) => row.reverse());
    setBoard([...board]);
  }

  function cmdUp(b) {
    let board = JSON.parse(JSON.stringify(b));
    console.log("Before:")
    console.log(board);
    board = transpose(board);
    console.log("Before:")
    console.log(b);
    if (moveLeft(board)) {
      console.log("After:")
      console.log(board);
      randGen(board);
    }
    board = transpose(board);
    setBoard(JSON.parse(JSON.stringify(board)));
  }

  function cmdDown(b) {
    let board = [...b];
    board = board[0].map((_, colIndex) => board.map(row => row[colIndex]));
    board.every((row) => row.reverse());
    if (moveLeft(board)) {
      randGen([...board]);
    }
    board.every((row) => row.reverse());
    board = board[0].map((_, colIndex) => board.map(row => row[colIndex]));
    setBoard([...board]);
  }

  function handleKeyPress(e) {
    if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft") {
      cmdLeft(cboard);
      return;
    }
    if (e.key === "d" || e.key === "D" || e.key === "ArrowRight") {
      cmdRight(cboard);
      return;
    }
    if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") {
      cmdUp(cboard);
      return;
    }
    if (e.key === "s" || e.key === "S" || e.key === "ArrowDown") {
      cmdDown(cboard);
      return;
    }
    console.log(e.key);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, []);

  const cellColor = [
    "#ffffff", // 2
    "#BBDEFB", // 4
    "#82B1FF", // 8
    "#448AFF", // 16
    "#00B0FF", // 32
    "#00E5FF", // 64
    "#1DE9B6", // 128
    "#FFFF00", // 256
    "#FFD740", // 512
    "#FFAB40", // 1024
    "#FF5252", // 2048
    "#FF80AB", // 4096
    "#EA80FC", // 8192
    "#E040FB", // 16384
    "#7C4DFF", // 32768
  ]

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#141736" }}>
      <div style={{ display: "flex", flexDirection: "column", }}>
        {
          cboard.map((oneRow) =>
            <div style={{ display: "flex", flexGrow: 1 }}>
              {oneRow.map((cell) =>
                <div style={{ display: "flex", width: "5rem", aspectRatio: "1 / 1", margin: ".25rem", alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff05", color: "#fff" }}>
                  <Typography style={{
                    fontSize: (
                      Math.ceil(Math.log10(cell)) == 1
                        ? 5 * .5
                        : Math.ceil(Math.log10(cell)) == 2
                          ? 5 * .8 / 2
                          : 5 / Math.ceil(Math.log10(cell))) + "rem",
                    lineHeight: 1,
                    color: cellColor[Math.log2(cell) - 1],
                    userSelect: "none"
                  }}>{cell ? cell : null}</Typography>
                </div>
              )}
            </div>
          )
        }
      </div>
      {/* <div style={{ color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <IconButton color="inherit" onClick={cmdUp}><KeyboardArrowUp /></IconButton>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <IconButton color="inherit" onClick={cmdLeft}><KeyboardArrowLeft /></IconButton>
          <IconButton color="inherit" onClick={cmdDown}><KeyboardArrowDown /></IconButton>
          <IconButton color="inherit" onClick={cmdRight}><KeyboardArrowRight /></IconButton>
        </div>
      </div> */}
    </div>
  )
}