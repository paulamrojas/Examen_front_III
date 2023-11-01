import { useState } from "react";
import Card from "./Card";
import styles from "./Form.module.css"

const Formulario = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [courseName, setCourseName] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState({
        one: "",
        two: "",
        three: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.length > 3 && courseName.length > 6) {
            setShow(true);
            setError({
                one: "",
                two: "",
                three: "",
            });
        } else {
            setShow(false);
            setError({
                one: name.length < 3 || name.startsWith(" ") ? "El nombre debe contener mínimo 3 carácteres" : "",
                two: (age < 18 || age > 60) ? "Debes tener entre 18 a 60 años para inscribirte" : "",
                three: courseName.length <= 6 ? "El nombre del curso debe tener al menos 6 carácteres" : "",
            });
        }
    }

    function onChangeSelectName(event) {
        setName(event.target.value);
    }

    function onChangeAge(event) {
        setAge(event.target.value);
    }

    function onChangeCourseName(event) {
        setCourseName(event.target.value);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <label> Nombre </label>
                <input type="text" onChange={onChangeSelectName} />
                {error.one && <div>{error.one}</div>}
                <label> Edad </label>
                <input type="text" onChange={onChangeAge} />
                {error.two && <div>{error.two}</div>}
                <label> curso al que aplica </label>
                <input type="text" onChange={onChangeCourseName} />
                {error.three && <div>{error.three}</div>}
                <br />
                <br />
                <button className={styles.button}>Enviar</button>
            </form>
            {show && <Card name={name} courseName={courseName} />}
            {(error.one || error.two || error.three) && <h5 style={{ color: 'red' }}>Por favor verifica que la información sea correcta</h5>}
        </div>
    )
}

export default Formulario;
