const ScriptForm = () => {
 
  return (
    <form>
      <div>
        <label>
          Resumo:
          <textarea

          />
        </label>
      </div>
      <div>
        <label>
          Dificuldade:
          <select
          >
            <option value="">Selecione...</option>
            <option value="Fácil">Fácil</option>
            <option value="Médio">Médio</option>
            <option value="Difícil">Difícil</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Idiomas:
          <select
          >
            <option value="">Selecione...</option>
            <option value="portugues">portugues</option>
            <option value="ingles">ingles</option>
            <option value="alemão">alemão</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Gênero:
          <select>
            <option value="">Selecione...</option>
            <option value="genero1">genero1</option>
            <option value="genero2">genero2</option>
            <option value="genero3">genero3</option>
          </select>
        
        </label>
      </div>
      <div>
        <label>
          Notas do Autor:
          <textarea
          />
        </label>
      </div>
      <div>
        <label>
          Referências:
          <textarea
          />
        </label>
      </div>
      <button type="submit">Cadastrar Roteiro</button>
    </form>
  );
}

export default ScriptForm;
