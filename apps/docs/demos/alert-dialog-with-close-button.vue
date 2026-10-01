<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <Button variant="secondary">Open Alert</Button>
    </AlertDialogTrigger>

    <AlertDialogBackdrop>
      <AlertDialogContainer>
        <AlertDialogDialog class="demo-alert-dialog">
          <AlertDialogCloseTrigger />
          <AlertDialogHeader>
            <AlertDialogIcon status="accent" />
            <AlertDialogHeading>Less critical information</AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>
            This dialog includes a close button for lower-risk confirmation flows where users should
            be able to dismiss the message quickly.
          </AlertDialogBody>
          <AlertDialogFooter v-slot="{ close }">
            <Button variant="secondary" @click="close">Close</Button>
            <Button variant="primary" @click="close">Continue</Button>
          </AlertDialogFooter>
        </AlertDialogDialog>
      </AlertDialogContainer>
    </AlertDialogBackdrop>
  </AlertDialog>
</template>

<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseTrigger,
  AlertDialogContainer,
  AlertDialogDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogIcon,
  AlertDialogTrigger,
  Button,
} from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-alert-dialog {
  max-width: 25rem;
}
</style>
