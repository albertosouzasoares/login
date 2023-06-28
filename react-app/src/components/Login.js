import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { BoxLogin, Box } from './LoginRegister';

const Login = () => {

	// Validação
		const email_input = useRef();
		const email_label = useRef();

		const pass_input = useRef();
		const pass_label = useRef();

		const view_input = useRef();
		const view_label = useRef();

	// Função Submit
		function Submit() {

			email_label.current.innerText = '';

			// Validação do email
				const caracteresEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

				if (email_input.current.value === '') return email_label.current.innerText = 'Preencha o campo de email.';
				if (!caracteresEmail.test(email_input.current.value)) return email_label.current.innerText = 'Email inválido.';

			// Validação password
				if (pass_input.current.value === '') return pass_label.current.innerText = 'Preencha o campo de senha.';
				if (pass_input.current.value.length < 8 || pass_input.current.value.length > 40) return pass_label.current.innerText = 'A senha deve ter entre 8 a 40 caracteres.';
			// Fim

			pass_label.current.innerText = '';
			alert("Sucesso!");
		}

	// Função ViewPassword
		function ViewPassword() {
			if (view_input.current.checked === true) {
				pass_input.current.type = 'text';
				view_label.current.innerText = 'Ocultar senha';
			} else {
				pass_input.current.type = 'password';
				view_label.current.innerText = 'Mostrar senha';
			}
		}

	return (
		<BoxLogin>
			<Box>
				<h3>Login</h3>

				<div>
					<input type="email" id="email" name="email" ref={email_input} autoComplete="off" placeholder="Seu @email" />
					<label for="email" ref={email_label}></label>
				</div>

				<div>
					<input type="password" id="password" name="password" ref={pass_input} autoComplete="new-password" maxLength="40" placeholder="Sua senha" />
					<label for="password" ref={pass_label}></label>
				</div>

				<div className="view">
					<input type="checkbox" id="view" name="view" ref={view_input} onClick={ViewPassword} />
					<label for="view" ref={view_label} onClick={ViewPassword}>Mostra senha</label>
				</div>

				<button type="button" onClick={Submit}>Login</button>

				<hr />

				<div className="options">
					<Link to="/register">Criar conta</Link>
				</div>
			</Box>
		</BoxLogin>
	);
}

export default Login;