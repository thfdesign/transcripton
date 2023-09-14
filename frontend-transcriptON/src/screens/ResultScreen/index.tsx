import React, { useContext, useEffect, useState } from "react";
import { Container } from "../HomeScreen/styles";
import { FiCopy } from "react-icons/fi";
import { IoIosReturnLeft } from "react-icons/io";
import { theme } from "../../theme";
import { Actions, Result, TooltipArea } from "./styles";
import { SecondaryButton } from "../../components/SecondaryButton";
import { AppContext } from "../../contexts/AppContext";
import { Tooltip } from "../../components/Tooltip";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";

export const ResultScreen = () => {
  const { transcriptedText, changeNavStep } = useContext(AppContext);

  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }

    changeNavStep(3);
  }, [copied]);

  const copyText = () => {
    setCopied(true);

    //    navigator.clipboard.writeText(okss);
  };

  return (
    <>
      <Sidebar />

      <Container>
        <h1>Aqui está o resultado da sua transcrição:</h1>
        <Result>
          {transcriptedText !== "" && (
            <p>{transcriptedText.split("@").join("-")}</p>
          )}
        </Result>

        <Actions>
          <SecondaryButton
            onClick={() => {
              navigate("/");
            }}
            icon={<IoIosReturnLeft size={25} color={theme.colors.tertiary} />}
          >
            Nova transcrição
          </SecondaryButton>

          <TooltipArea>
            <Tooltip isActive={copied} label="Copiado!" />

            <SecondaryButton
              onClick={copyText}
              icon={<FiCopy size={25} color={theme.colors.tertiary} />}
            >
              Copiar
            </SecondaryButton>
          </TooltipArea>
        </Actions>
      </Container>
    </>
  );
};
