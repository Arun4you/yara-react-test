import React, { useState, useEffect, useCallback } from "react";
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import { NotesTable } from "./NotesTable";

export const NotesCard = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");

  const addNoteHandle = useCallback(() => {
    setAllNotes((prevState) => [
      ...prevState,
      {
        title,
        status,
      },
    ]);
    setTitle("");
    setStatus("");
  }, [title, status]);

  useEffect(() => {
    if (selectedTab !== "all") {
      const notesFilter = allNotes.filter(
        (val) => val.status.toLowerCase() === selectedTab
      );
      setNotes([...notesFilter]);
    } else {
      setNotes([...allNotes]);
    }
  }, [allNotes, selectedTab]);

  const onClickAll = useCallback(() => {
    setSelectedTab("all");
    setNotes([...allNotes]);
  }, [allNotes]);

  const onClickActive = useCallback(() => {
    setSelectedTab("active");
    const notesFilter = allNotes.filter(
      (val) => val.status.toLowerCase() === "active"
    );
    setNotes([...notesFilter]);
  }, [allNotes]);

  const onClickCompleted = useCallback(() => {
    setSelectedTab("completed");
    const notesFilter = allNotes.filter(
      (val) => val.status.toLowerCase() === "completed"
    );
    setNotes([...notesFilter]);
  }, [allNotes]);

  return (
    <div
      style={{
        display: "flex",
        background: "#FFFFFF",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: 200,
        margin: 24,
        padding: 24,
        borderRadius: 8,
        boxShadow: "2px 1px 1px rgba(0,0,0, 0.1)",
      }}
    >
      <div data-testid='total-operations'>Notes Application</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          testId={"input-note-name"}
          placeholder={"Notes Title"}
          handleChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <TextInput
          testId={"input-note-status"}
          placeholder={"Notes Status"}
          handleChange={(e) => {
            setStatus(e.target.value);
          }}
          value={status}
        />
        <Button
          text={"Add Note"}
          onClick={addNoteHandle}
          testId={"submit-Button"}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button text={"All"} onClick={onClickAll} testId={"allButton"} />
          <Button
            text={"Active"}
            onClick={onClickActive}
            testId={"activeButton"}
          />
          <Button
            text={"Completed"}
            onClick={onClickCompleted}
            testId={"completedButton"}
          />
        </div>
      </div>
      <div
        style={{
          border: "1px solid green",
          display: "flex",
          width: "50%",
          flexDirection: "column",
        }}
      >
        <NotesTable notes={notes} />
      </div>
    </div>
  );
};
