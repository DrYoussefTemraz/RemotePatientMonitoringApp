"use client"
import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomeFormField from "../CustomeFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}



const PatientForm = () => {
  const [isLoading, setIsloading] = useState(false)
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  function onSubmit(values: z.infer<typeof UserFormValidation>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi There 👋</h1>
          <p className="text-dark-700">Schedule Your First Appointment</p>
        </section>
        <CustomeFormField
          fieldType={ FormFieldType.INPUT}
          name = 'name'
          label = 'Full name'
          placeholder = 'name'
          iconSrc = '/assets/icons/user.svg'
          iconAlt = 'user'
          control={form.control}
        />
        <CustomeFormField
          fieldType={ FormFieldType.INPUT}
          name = 'email'
          label = 'Email'
          placeholder = 'Email'
          iconSrc = '/assets/icons/email.svg'
          iconAlt = 'youssef@youssef.com'
          control={form.control}
        />
        <CustomeFormField
          fieldType={ FormFieldType.PHONE_INPUT}
          name = 'phone'
          label = 'Phone Number'
          placeholder = '(002) 123 4567'
          control={form.control}
        />
        <SubmitButton
        isLoading = {isLoading}
        >
          Get started
        </SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm