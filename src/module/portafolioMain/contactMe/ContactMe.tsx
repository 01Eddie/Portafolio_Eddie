import React, { useContext } from "react";
import { Button, CloseButton, Dialog, Field, Fieldset, Input, Portal, Textarea } from "@chakra-ui/react";
import { MdAdsClick } from "react-icons/md"
import { FormContext } from "@/module/menuHeader/MenuHeader";
import { config } from "@/common/globals";

const ContactMe = () => {
  const {openForm, setOpenForm} = useContext(FormContext);

  const handleOpenChange = (e: { open: boolean }) => {
    setOpenForm(e.open)
  }

  return (
      <Dialog.Root lazyMount open={openForm} onOpenChange={handleOpenChange} placement={'center'} size={'lg'}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header pb={'4'} pt={'4'} pl={'2'}>
                <Dialog.Title>Enviame un Mensaje</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body pb="4" pl={'4'} pr={'4'}>
                <form action={config.apiMailerUrl}
                      method="POST"
                      encType="multipart/form-data">
                  <Fieldset.Root size="lg" maxW="svw">
                  <Fieldset.Content>
                    <Field.Root required>
                      <Field.Label>
                      Nombre
                        <Field.RequiredIndicator />
                      </Field.Label>
                      <Input type="text" name="name" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Email</Field.Label>
                      <Input name="email" type="email" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Mensaje</Field.Label>
                      <Textarea placeholder="Agregar un mensaje" name="description" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Adjuntar Archivo (Opcional)</Field.Label>
                      <Input type="file" name="file" />
                    </Field.Root>
                  </Fieldset.Content>
                  <Button type="submit" alignSelf="center" size="lg" colorPalette={'red'} variant={'surface'} p={'2'}> 
                    <MdAdsClick /> Enviar Mensaje
                  </Button>
                  </Fieldset.Root>
                </form>
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="md" aria-label="close" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
    </Dialog.Root>
  );
}

export default ContactMe;