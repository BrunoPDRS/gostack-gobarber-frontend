import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu login</h1>

        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <Link to="register">
        <FiLogIn />
        Criar conta
      </Link>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
