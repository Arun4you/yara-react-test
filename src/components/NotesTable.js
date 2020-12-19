import React from "react";

export const NotesTable = ({ notes }) => {
  
  const tableHeads = ["title", "status"].map((th) => {
    return (
        <>
            <th style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: 8
            }}>{th}</th>
        </>
    )
})

const getRowsData = notes.map((val, i) => {
  return (
    <>
      <tr>
        {
          Object.keys(val).map(((value, id)=>{
            return <td data-testid="noteList">{val[value]}</td>
          }))
        }
      </tr>
    </>
)
})

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <table style={{
            borderCollapse: "collapse",
            width: "100%"
        }}>
          <tr>
            {tableHeads}
          </tr>
            {getRowsData}
        </table>
      </div>
    </div>
  );
};
