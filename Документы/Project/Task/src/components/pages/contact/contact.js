import css from "./contact.module.css"
import { useForm } from "react-hook-form"



function Contact () {

    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    const submit = (data) => {
            if(localStorage.getItem("user") == null){
               localStorage.setItem("user", JSON.stringify([data]))
            }else{
               const newData = JSON.parse(localStorage.getItem("user"))
               newData.push(data)
               localStorage.setItem("user", JSON.stringify(newData))
            }
         reset()
    }    

    return (
        <div className={css.parent_contact}>
           <form className={css.form_section} onSubmit={handleSubmit(submit)}>
            <label>
               Name:
               <input type="text" id="name" {...register("name",{
                  required:"Username is required",
                  minLength:{
                    value: 3,
                    message: "Min length 3"
                  }
               })}/>
            </label>
            <span>{errors?.name?.message}</span>
            <label>
               Email:
               <input type="email" id="email" {...register("email",{
                required: "Email is required",
                pattern:{
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Is not Email" 
                },
                minLength: {
                    value: 10,
                    message: "Min length 10"
                } 
               })}/>
            </label>
            <span>{errors?.email?.message}</span>
            <label>
               Phone:
               <input type="tel" id="phone" {...register("phone",{
                 required: "Phone is required",
                 pattern:{
                    value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                    message: "Is not phone number"
                 }
               })}/>
            </label>
            <span>{errors?.phone?.message}</span>
            <label>
               Message:
               <textarea className={css.message} {...register("message", {
                 required: "Message is required"
                })}></textarea>
            </label>
            <span>{errors?.message?.message}</span>
            <input type="submit" value="SUBMIT" className={css.btn}/>
           </form>
        </div>
    )
}

export default Contact