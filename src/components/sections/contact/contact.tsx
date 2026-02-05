'use client'

import Image from 'next/image'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FileText, Plus, Send, MapPin, Phone, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import formsBg from '@/assets/images/forms.png'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

export function ContactSection() {
  const t = useTranslations('contact')

  const formSchema = z.object({
    name: z.string().min(2, t('validation.nameMinLength')),
    phone: z
      .string()
      .min(10, t('validation.phoneMinLength'))
      .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, t('validation.phoneFormat')),
    email: z.email(t('validation.emailInvalid')),
    files: z.any().optional(),
    observation: z.string().optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      observation: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Valores do formulário:', values)
    toast.success(t('toast.title'), {
      description: t('toast.description'),
    })
    form.reset()
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 10) {
      return numbers
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
    }
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15)
  }

  return (
    <section id="orcamento" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            {t('title')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('heading')}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 md:p-12 space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="text-primary h-5 w-5" />
              <h3 className="font-bold text-xl text-foreground">
                {t('orderData')}
              </h3>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FieldGroup>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                          {t('fullName')}
                        </FieldLabel>
                        <Input
                          {...field}
                          placeholder={t('fullName')}
                          className="bg-[#F9FAFB] border-none h-12 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        {fieldState.error && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  {/* Telefone */}
                  <Controller
                    name="phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                          {t('phone')}
                        </FieldLabel>
                        <Input
                          {...field}
                          placeholder="(00) 00000-0000"
                          className="bg-[#F9FAFB] border-none h-12 focus:outline-none focus:ring-2 focus:ring-primary"
                          onChange={(e) => {
                            const formatted = formatPhone(e.target.value)
                            field.onChange(formatted)
                          }}
                          maxLength={15}
                        />
                        {fieldState.error && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>

                {/* Email */}
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        {t('email')}
                      </FieldLabel>
                      <Input
                        {...field}
                        type="email"
                        placeholder={t('email')}
                        className="bg-[#F9FAFB] border-none h-12 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                {/* Upload de Arquivos (Customizado) */}
                <Controller
                  name="files"
                  control={form.control}
                  render={({
                    field: { value, onChange, ...fieldProps },
                    fieldState,
                  }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        {t('attachFiles')}
                      </FieldLabel>

                      <div className="relative group">
                        <Input
                          {...fieldProps}
                          type="file"
                          multiple
                          className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                          onChange={(e) => {
                            onChange(e.target.files)
                          }}
                        />
                        <div className="border-2 border-dashed border-gray-200 bg-[#F9FAFB] rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors group-hover:border-primary/50">
                          <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                            <Plus className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-bold text-gray-700 text-sm">
                            {value && value.length > 0
                              ? t('filesSelected', { count: value.length })
                              : t('addPrescriptions')}
                          </span>
                          <span className="text-xs text-gray-400 mt-1">
                            {t('fileFormats')}
                          </span>
                        </div>
                      </div>

                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                {/* Observações */}
                <Controller
                  name="observation"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        {t('observations')}
                      </FieldLabel>
                      <Textarea
                        {...field}
                        placeholder={t('observationsPlaceholder')}
                        className="bg-[#F9FAFB] border-none min-h-25 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>

              <Button
                type="submit"
                className="w-full h-12 text-base font-bold uppercase tracking-wide"
                size="lg"
              >
                {t('send')}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="lg:col-span-5 relative bg-[#7C5A2B] text-white p-8 md:p-12 flex flex-col justify-center min-h-125">
            <div className="absolute inset-0 z-0">
              <Image
                src={formsBg}
                alt={t('backgroundAlt')}
                fill
                className="object-cover mix-blend-overlay opacity-40"
              />
              <div className="absolute inset-0 bg-linear-to-b from-[#7C5A2B]/50 to-[#5a3f1b]/70 mix-blend-multiply" />
            </div>

            <div className="relative z-10 space-y-10">
              <h3 className="font-bold text-2xl text-white">
                {t('contactInfo')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-white uppercase">
                      {t('locationLabel')}
                    </h4>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {t('address')}
                      <br />
                      {t('city')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-white uppercase">
                      {t('phoneLabel')}
                    </h4>
                    <p className="text-sm text-white/80">+55 (11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-white uppercase">
                      {t('emailLabel')}
                    </h4>
                    <p className="text-sm text-white/80">
                      laboratorio@email.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 backdrop-blur-md border border-primary/30 rounded-xl p-6 mt-8">
                <p className="italic text-[#A7F3D0] text-sm leading-relaxed">
                  {`"${t('quote')}"`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
