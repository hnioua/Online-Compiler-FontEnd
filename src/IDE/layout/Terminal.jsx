import React, { useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { fileInfo } from "../../App";

const socket = io("http://localhost:5000");

const Terminal = () => {
  const { file } = useContext(fileInfo);
  const [output, setOutput] = useState("");
  const [currentLine, setCurrentLine] = useState(""); // ligne que l'utilisateur tape
  const terminalRef = useRef(null);

  // ⚡ écouter les messages du backend
  useEffect(() => {
    socket.on("output", (data) => {
      setOutput((prev) => prev + data);
    });
    return () => socket.off("output");
  }, []);

  // ⚡ scroll automatique
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output, currentLine]);

  // ▶️ lancer l'exécution du code
  const handleRun = () => {
    setOutput("");
    setCurrentLine("");
    socket.emit("run-code", { code: file.content });
  };

  // ⌨️ envoyer une ligne au backend
  const sendLine = () => {
    if (currentLine.trim() !== "") {
      socket.emit("user-input", currentLine);
      setCurrentLine("");
    }
  };

  // Capturer les touches dans le terminal
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // éviter le saut de ligne
      sendLine();
    } else if (e.key === "Backspace") {
      setCurrentLine((prev) => prev.slice(0, -1));
    } else if (e.key.length === 1) {
      setCurrentLine((prev) => prev + e.key);
    }
  };

  return (
    <div className="h-full min-w-[400px] bg-[#202327] outline outline-1 outline-[#363e55] flex flex-col ml-3 mr-2 rounded-lg overflow-hidden font-mono text-sm text-white">
      {/* HEADER */}
      <header className="w-full min-h-[35px] border-b border-[#363e55] flex items-center justify-between px-3">
        <span className="font-semibold text-lg">Console</span>
        <button
          onClick={handleRun}
          className="text-sm bg-green-600 px-3 py-1 rounded hover:bg-green-700"
        >
          ▶️ Run
        </button>
      </header>

      {/* TERMINAL */}
      <div
        ref={terminalRef}
        tabIndex={0}
        className="flex-1 p-3 overflow-y-auto focus:outline-none"
        onKeyDown={handleKeyDown}
      >
        {/* Affichage de la sortie */}
        <pre>{output}</pre>

        {/* Ligne courante de saisie */}
        <pre>
          {"> "} {currentLine}
          <span className="blinking-cursor">|</span>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
