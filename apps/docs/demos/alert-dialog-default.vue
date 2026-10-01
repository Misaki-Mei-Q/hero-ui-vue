<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <Button variant="danger">Delete Project</Button>
    </AlertDialogTrigger>

    <AlertDialogBackdrop>
      <AlertDialogContainer>
        <AlertDialogDialog class="demo-alert-dialog">
          <AlertDialogCloseTrigger />
          <AlertDialogHeader>
            <AlertDialogIcon status="danger" />
            <AlertDialogHeading>Delete project permanently?</AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>
            This action cannot be undone. This will permanently delete the project and remove all
            associated data from our servers.
          </AlertDialogBody>
          <AlertDialogFooter v-slot="{ close }">
            <Button variant="secondary" @click="close">Cancel</Button>
            <Button variant="danger" @click="close">Delete</Button>
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
} from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-alert-dialog {
  max-width: 25rem;
}
</style>
