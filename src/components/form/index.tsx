import { FormEvent, useState } from "react";
import { Col, Container, Row, Visible } from "react-grid-system";
import { FiSend } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import { toast, ToastContainer } from "react-toastify";
import { Button, Section, Content, Title, Image } from "./styles";
import InputMask from "react-input-mask";

export function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sedMessage(e: FormEvent) {
    e.preventDefault();
    if (name === "" || phone === "" || email === "" || message === "") {
      return toast.warning(
        "Todos os campos são de preenchimento obrigatório!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");

    toast.success("Mensagem enviada com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <>
      <Visible xs sm md lg xl xxl>
        <Fade left>
          <Content>
            <Container>
              <Row id="contatos">
                <Col md={6} sm={12}>
                  <Title>Entre em contato conosco</Title>
                  <Image>
                    <img src="/images/contato.svg" alt="Contato" />
                  </Image>
                </Col>
                <Col md={6} sm={12}>
                  <Section>
                    <form>
                      <Row>
                        <Col>
                          <div className="inputs">
                            <label htmlFor="name">Nome</label>
                            <input
                              value={name}
                              type="text"
                              name="name"
                              id="name"
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                              required
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="inputs">
                            <label htmlFor="phone">Telefone</label>
                            <InputMask
                              mask="(99) 9999-9999"
                              placeholder="(99) 99999-9999"
                              value={phone}
                              name="phone"
                              id="phone"
                              onChange={(e) => {
                                setPhone(e.target.value);
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="inputs">
                            <label htmlFor="email">E-mail</label>
                            <input
                              placeholder="email@email.com"
                              type="email"
                              name="email"
                              id="email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              required
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="inputs">
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                              name="message"
                              id="message"
                              value={message}
                              onChange={(e) => {
                                setMessage(e.target.value);
                              }}
                              required
                            />
                          </div>
                        </Col>
                      </Row>
                      <Button>
                        <button onClick={sedMessage}>
                          <FiSend /> Enviar
                        </button>
                      </Button>
                    </form>
                  </Section>
                </Col>
              </Row>
            </Container>
          </Content>
        </Fade>
      </Visible>
      <ToastContainer />
    </>
  );
}
