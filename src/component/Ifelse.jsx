const LoginStatusBtn = (status) => {
    if (status) {
        return <button>Logout</button>
    }
    else {
        return <button>Login</button>
    }
}
const Ifelse = () => {
    return (
        <div>
            {LoginStatusBtn(false)}
        </div>
    );
};

export default Ifelse;