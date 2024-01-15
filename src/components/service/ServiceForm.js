import Input from '../form/Input';
import styles from '../project/ProjectForm.module.css'
import { useState } from 'react';
import SubmitButton from '../form/SubmitButton';

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form action="" className={styles.form} onSubmit={submit} >
            <Input type="text" text="Nome do Serviço" name="name" placeholder="Insira o nome do serviço" handleOnChange={handleChange} />
            <Input type="number " text="Custo do Serviço" name="cost" placeholder="Insira o valor total" handleOnChange={handleChange} />
            <Input type="text" text="Descrição do Serviço" name="description" placeholder="Escreva do serviço" handleOnChange={handleChange} />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ServiceForm;