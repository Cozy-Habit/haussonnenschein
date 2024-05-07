"use client"; //enables to use hooks clientSide
import Input from '@/components/Form/Input/Input';
import Submit from '@/components/Form/Submit';
import { useForm, FormProvider } from 'react-hook-form';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import validation from './validation'
import Title from "@/Title"
import Headline from '@/components/Headline';


//react-hook-form needs to be installed first


export default function Kontakt() {

    const form = useRef();
    //useForm is a function from the react-hook-form library which provides all the library methods
    //useForm returns an Object with functions
    const methods = useForm();

    //this state hook is used to set the Success state variable
    const [success, setSuccess] = useState(false);

    //this is an alternate submit function
    //methods uses the handleSubmit function from the react-hook-form library
    //handleSubmit takes ...

    const onSubmit = data => {
        // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service
        emailjs.sendForm('service_lisecdf', 'template_upr3gqo', form.current,
            '6ejAO_oWgLdchGR_-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        //this reset function deletes all the field inputs and error/message fields
        methods.reset()
        setSuccess(true)
        window.scrollTo(0, 0);
    }



    return (
        <>
            <Title title="Kontakt" />
            <span className="nothing"></span>
            <div className='main-input-container'>
                {/* Überschrift */}
                <Headline src="/assets/kontakt.svg" alt="Kontakt Überschrift" />

                <br></br>
                <br></br>
                <div>
                    {success && (
                        <p className="success">
                            Anfrage erfolgreich abgesendet.
                        </p>
                    )}

                </div>

                <FormProvider {...methods}>
                    <form
                        ref={form}
                        onSubmit={methods.handleSubmit(onSubmit)}
                        //noValidate
                        autoComplete="off"
                    >

                        <p>* Erforderlich</p>
                        {/* Daten Elternteil */}
                        <div className="input-title-container">
                            <h4>Daten Elternteil</h4>
                            <div className="input-container">
                                <Input {...validation.parent.name} />
                                <Input {...validation.parent.surname} />
                                <Input {...validation.mobile} />
                                <Input {...validation.email} />
                            </div>
                        </div>
                        {/* Daten Kind */}
                        <div className="input-title-container">
                            <h4>Daten Kind</h4>
                            <div className="input-container">
                                <Input {...validation.child.name} />
                                <Input {...validation.child.surname} />
                                <Input {...validation.birthday} />
                            </div>
                        </div>
                        {/* Betreuungsdaten */}
                        <div className="input-title-container">
                            <h4>Betreuungsdaten</h4>
                            <div className="input-container">
                                <Input {...validation.start} />
                                <Input {...validation.end} />
                            </div>
                        </div>
                        {/* Anschrift */}
                        <div className="input-title-container">
                            <h4>Anschrift</h4>
                            <div className="input-container">
                                <Input {...validation.street} />
                                <Input {...validation.number} />
                                <Input {...validation.city} />
                                <Input {...validation.plz} />
                            </div>
                        </div>
                        {/* Sonstiges */}
                        <div className="input-title-container">
                            <h4>Sonstiges</h4>
                            <div className="input-container">
                                <Input {...validation.textarea} />
                            </div>

                        </div>


                        <br></br>
                        {/* Anfrage abschicken - Button */}
                        <Submit icon="" link="" text="Anfrage absenden" />
                    </form>
                </FormProvider>
            </div>
        </>
    );
}