import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const SignUpForm = props => {


    const initialFormState = {
        id: '',
        name: '',
        email: '',
    }

    const [formState, setFormState] = useState(initialFormState)

    /*INPUT CHANGE */

    const inputChange = e => {
        e.persist()
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.value
        }
        setFormState(newFormData)
    }

    /*FORM SUBMIT */

    const formSubmit = (e) => {
        e.preventDefault()

        Axios
            .post("http://localhost:8000/users", formState)
            .then(response => {
                console.log(response.data)

                setFormState(initialFormState)
            })

    }

    return (
        <Wrapper>
            <Headline>Sign Up</Headline>
            <Form id='signUpForm' onSubmit={formSubmit}>
                <Label htmlFor='name'>Name</Label>
                <Input 
                    id='name'
                    name='name'
                    placeholder='Enter your name'
                    value={formState.name}
                    onChange={inputChange}
                    type='text'
                    required
                />

                <Label htmlFor='email'>Email</Label>
                <Input 
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    value={formState.email}
                    onChange={inputChange}
                    type='email'
                    required 
                />

                <Button id='submit' type='submit'>Sign Up</Button>
            </Form>
        </Wrapper>

    )
}

const Headline = styled.h1`
    font-size: 3.5rem;
    padding: 5rem 0 1rem;
    max-width: 45rem;
    text-align: center;
    line-height: 3rem;
    color: #fff;
    text-shadow: 2px 3px 3px rgba(0,0,0,0.3);
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`

const Form = styled.form`
    background: #fff;
    padding: 3rem 2rem;
    margin: 2rem;
    border-radius: .5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
    font-size: 1.4rem;
    min-width: 450px;
`

const Input = styled.input`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: .5rem 0;
    width: 100%;
`

const Select = styled.select`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: .5rem 0;
    width: 100%;
`

const TextAreaInput = styled.textarea`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: .5rem 0;
    width: 100%;
`

const Label = styled.label`
    margin-top: 1rem;
    text-transform: uppercase;
`

const Button = styled.button`
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 6px;
    color: #fff;
    font-weight: 700;
    background: #882AE1;
    margin-top: 1rem;
    &:hover{
        background-color: #6712E0;
    }
`

const AddInputBtn = styled.button`
    width: 15rem;
    padding: .5rem;
    border-radius: 6px;
    margin: 1rem 0;
    border: 1px solid #ccc;
    &:hover{
        background-color: #ddd;
    } 
`

export default SignUpForm