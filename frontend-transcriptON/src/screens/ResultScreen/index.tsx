import { useContext, useEffect, useState } from "react";
import { Container, InfoContainer } from "../HomeScreen/styles";
import { IoIosReturnLeft } from "react-icons/io";
import { theme } from "../../theme";
import { Actions, AudioContainer} from "./styles";
import { SecondaryButton } from "../../components/SecondaryButton";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import JoditEditor from "jodit-react";
import ReactAudioPlayer from "react-audio-player";

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

  const [content, setContent] = useState(transcriptedText);

  const config = {
    readonly: false,
  };

  const handleUpdate = ({ target }: any) => {
    const editorContet = target.value;
    setContent(editorContet);
  };

  return (
    <>
      <Sidebar />

      <div style={{ maxWidth: "1120px", margin: "auto" }}>
        <Container>
        <InfoContainer style={{marginBottom: 0}}>
            <h1>Aqui está o resultado da sua transcrição!</h1>
            <p>
            Após editar sua transcrição, copie e cole todo o texto em um arquivo do Word.
            </p>
          </InfoContainer>

          <AudioContainer>
            <ReactAudioPlayer
              src={
                "https://nambbu.com.br/wp-content/uploads/2022/09/Espera-Telefonica-Atendimento-Eletronico-de-Voz..mp3"
              }
              controls
            />
          </AudioContainer>

          <div style={{ marginBottom: "4rem"}}>
            <JoditEditor
              value={content}
              config={config}
              onBlur={handleUpdate}
              onChange={(newContent) => {}}
            />
          </div>

          <Actions>
            <SecondaryButton
              onClick={() => {
                navigate("/");
              }}
              icon={<IoIosReturnLeft size={25} color={theme.colors.tertiary} />}
            >
              Nova transcrição
            </SecondaryButton>
          </Actions>
        </Container>
      </div>
    </>
  );
};
