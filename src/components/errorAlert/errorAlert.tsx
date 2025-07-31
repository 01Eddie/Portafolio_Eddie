const ErrorAlert = ({ error, reset }: { error: string, reset: () => void }) => {
    return (
        <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
        <h1>Ocurrio un error en esta pagina</h1>
        <p>{error}</p>
        <button onClick={reset}>Intente de nuevo</button>
        </div>
    );
}

export default ErrorAlert;