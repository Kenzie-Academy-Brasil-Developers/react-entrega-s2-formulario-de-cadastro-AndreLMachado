import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import { useHistory } from "react-router-dom";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatorio")
    .matches(`^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ ]+$`, "nome invalido"),
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup
    .string()
    .required("Senha Obrigatoria")
    .matches(
      "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$",
      "minimo 8 caracteres sendo pelo menos 1 Letra maiuscula, 1  numero e 1 simbolo(#$*@#)"
    ),
  confirmPassword: yup
    .string()
    .required("Senha Obrigatoria")
    .oneOf([yup.ref("password"), null], "As senhas  nao correspondem"),
});

const Form = ({ usuario, setUsuario }) => {
  const history = useHistory();

  const onSubmitFunction = ({ data }) => {
    history.push(`/home/${usuario.name}`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <div className="form">
      <h3>Formulario</h3>
      <form className="formulario" onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          placeholder="Nome"
          {...register("name")}
          onChange={(e) => setUsuario({ ...usuario, name: e.target.value })}
        />
        <p>{errors.name?.message}</p>
        <input placeholder="E-mail" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input placeholder="Senha" {...register("password")} />
        <p>{errors.password?.message}</p>
        <input
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Form;
