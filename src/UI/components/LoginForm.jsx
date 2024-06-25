
export const LoginForm = () => {
    return (
        <>

            <div className="form-group">
                <label for="username">Usuario</label>
                <input type="text" className="form-control" id="username" placeholder="Usuario" required />
            </div>
            <div className="form-group">
                <label for="password" className="mt-1">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
            </div>


        </>
    )
}

export default LoginForm
