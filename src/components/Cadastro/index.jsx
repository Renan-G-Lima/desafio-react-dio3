import React, { useState } from 'react';
import { Button } from '../Button';
import { Container, Title, InputContainer, Input, Label } from './styles';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nome, email, senha });
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor="nome">Nome</Label>
          <Input 
            type="text" 
            id="nome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            placeholder="Digite seu nome" 
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Digite seu email" 
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="senha">Senha</Label>
          <Input 
            type="password" 
            id="senha" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            placeholder="Digite sua senha" 
          />
        </InputContainer>
        <Button title="Cadastrar" type="submit" />
      </form>
    </Container>
  );
};

export { Cadastro };