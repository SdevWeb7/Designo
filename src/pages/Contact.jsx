import { FooterContact } from "../components/FooterContact.jsx";
import { CompanyPart3 } from "../components/company/CompanyPart3.jsx";
import { useForm } from "react-hook-form"

export function Contact () {
   const { register, handleSubmit, formState: { errors },
   } = useForm({
      mode: 'onTouched'
   })

   const onSubmit = (data) => console.log(data)

   return (
      <>
         <div className="contact-form">
         <div className="bg-orange"></div>
         <div className="circle1"></div>

         <div className={'mr-[4rem] max715:mr-0'}>
            <h1>Contact Us</h1>
            <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
         </div>


         <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", {required: true})} placeholder={'Name'} />
            {errors.name && <span>This field is required</span>}

            <input {...register("email", { required: true })} placeholder={'Email Address'} />
            {errors.email && <span>This field is required</span>}

            <input {...register("phone", { required: true })} placeholder={'Phone'} />
            {errors.phone && <span>This field is required</span>}

            <textarea {...register("message", { required: true })} placeholder={'Your Message'} />
            {errors.message && <span>This field is required</span>}

            <input type="submit" className={'button'} value={'SUBMIT'} />
         </form>
         </div>

         <div className="bg-pattern-contact"></div>

         <CompanyPart3 />
         <FooterContact />
      </>
   )
}